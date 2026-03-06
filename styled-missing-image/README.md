# `styled-missing-image` Demo

Uses `img[alt]:after` inside an `@supports` block to display a styled fallback when an image fails to load, showing the `alt` text via the CSS `attr()` function.

## What It Does

Three cards are shown. One loads a real image, one has a broken `src` with descriptive alt text, and one has a broken `src` with an empty `alt`. The two broken images display a styled fallback placeholder that includes their alt text (or a generic message for the empty-alt case).

## How It Works

### 1. Feature-detect the updated `attr()` syntax

```css
@supports (x: attr(x type(*))) {
  img[alt]:after {
    content: "Could not find image: " attr(alt);
    /* ... */
  }
}
```

The `@supports` check gates the entire block on the newer `attr()` type syntax. This prevents the rule from applying in browsers that don't support it.

### 2. Inject the fallback via `::after`

```css
img[alt]:after {
  content: "Could not find image 🫠: " attr(alt);
  position: absolute;
  inset: 0;
  background: var(--card-bg-clr);
  display: grid;
  place-content: center;
  border: .15rem dashed white;
}
```

When an image fails to load, the browser renders `img` as an inline element, which allows `::after` to render. The pseudo-element covers the broken image area with a styled fallback and `attr(alt)` pulls in the alt text.

### 3. Handle empty alt separately

```css
img[alt=""]:after {
  content: "Could not find image 🫠: How embarrassing!";
}
```

An empty `alt` attribute would produce `"Could not find image: "` with nothing after it, so an empty-alt override provides a friendlier fallback message.

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | All HTML and CSS in one file |

## Why This Matters

This technique requires no JavaScript and degrades gracefully — browsers that don't support the feature simply show the standard broken image treatment.
