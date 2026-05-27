# `contrast-color()` Demo

**`contrast-color()`** is a native CSS function that returns `black` or `white` — whichever provides higher contrast against the given color — with no JavaScript, no Sass mixin, and no build-time computation.

## What It Does

The page walks through six interactive sections. The hero shows four live swatches where the label text auto-selects its color. A color picker lets the user choose any background and see the contrast ratio, WCAG AA/AAA result, and the exact CSS being applied — all updating in real time. A 12-swatch design system grid lets users toggle between `contrast-color()` and hardcoded black text to see where dark and mid-tone swatches break. Three use-case panels demonstrate the function on a badge component (click a palette dot to recolor all tags), a dark-mode card (body text and button adapt without separate rule sets), and a data-driven avatar (color hashed from a typed name at runtime). A mid-tone slider exposes the known limitation: in the L 40–60% range, neither black nor white clears WCAG AA. The final section detects `contrast-color()` support in the current browser and displays the recommended `@supports` fallback pattern.

## How It Works

### 1. The function

```css
.element {
  background: var(--bg);
  color: contrast-color(var(--bg));
}
```

`contrast-color(<color>)` resolves to either `black` or `white` by computing the WCAG relative luminance of the argument and returning whichever foreground color yields the higher contrast ratio. Because the browser evaluates this at computed-value time, it works with CSS custom properties that change at runtime — including those set via JavaScript's `element.style.setProperty`.

### 2. CSS custom property pattern

```css
.swatch {
  background: var(--bg);
  color: white; /* fallback */
}

@supports (color: contrast-color(red)) {
  .swatch {
    color: contrast-color(var(--bg));
  }
}
```

Setting `--bg` as an inline CSS custom property and reading it in both `background` and `color: contrast-color(var(--bg))` means a single `element.style.setProperty('--bg', value)` call from JavaScript updates both properties simultaneously — no further DOM manipulation required.

### 3. WCAG contrast ratio in JavaScript

```js
function relativeLuminance(rgb) {
  return rgb.map(c => {
    c /= 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  }).reduce((sum, c, i) => sum + c * [0.2126, 0.7152, 0.0722][i], 0);
}

function contrastRatio(l1, l2) {
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}
```

JavaScript computes contrast ratios only to display diagnostic information (ratio value, WCAG badges) — not to determine the text color. The browser's native `contrast-color()` implementation handles that independently.

### 4. Data-driven color at runtime

```js
function hashName(name) {
  return name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360;
}

const hsl = `hsl(${hashName(name)}, 65%, 50%)`;
avatar.style.setProperty('--avatar-bg', hsl);
```

The avatar color is derived from user input at runtime. A Sass mixin or build-time tool cannot know this value, which is the core reason `contrast-color()` matters: it moves the contrast decision from compile time to render time.

### 5. The mid-tone limitation

```js
const rBlack = contrastRatio(lum, 0);
const rWhite = contrastRatio(lum, 1);
const inDangerZone = rBlack < 4.5 && rWhite < 4.5;
```

`contrast-color()` always selects the better option, but around L 40–60% on a 50% saturation blue-gray, both choices fall below the WCAG AA threshold of 4.5:1 for normal text. The slider section visualises this by displaying both ratios simultaneously and surfacing a warning when neither passes.

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | All HTML, CSS, and JavaScript in one self-contained file |

## Browser Support

`contrast-color()` is Baseline 2025, available in Chrome 127+, Firefox 130+, and Safari 18.2+. Check caniuse.com for current status.

## Why This Matters

Before `contrast-color()`, teams either hardcoded text colors per palette entry (a maintenance burden that scales with the number of theme colors) or used a Sass function or JavaScript utility — both of which break the moment a color is computed at runtime from user data, API responses, or CSS custom properties. The function shifts contrast enforcement into the browser's rendering pipeline, where it can react to any color regardless of when or how it was determined.
