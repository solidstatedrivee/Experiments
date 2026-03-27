# `anchor-positioning` Demo

Position any element relative to any other element — without DOM wrappers or JavaScript — using CSS **Anchor Positioning** and the `anchor-name`, `position-anchor`, `position-area`, and `position-try-fallbacks` properties.

## What It Does

The page demonstrates three interactive patterns on one screen. In the first, hovering any toolbar button reveals a tooltip that floats above it — and automatically flips below when near the viewport edge. In the second, clicking a "View" button opens an anchored dropdown menu with a fade-and-scale animation; pressing Esc or clicking an item closes it. In the third, submitting a form with invalid fields causes error messages to appear below their inputs — even though those error divs live in a completely separate part of the HTML, outside the `<form>` element entirely.

## How It Works

### 1. Declare an anchor

Give any element a name using `anchor-name`. The value uses the same `--identifier` syntax as CSS custom properties.

```css
.btn-undo {
    anchor-name: --btn-undo;
}
```

### 2. Associate a positioned element

Use `position-anchor` on a `position: fixed` or `position: absolute` element to link it to the anchor. The two elements can be anywhere in the DOM — they do not need to share a parent.

```css
.tooltip-undo {
    position: fixed;
    position-anchor: --btn-undo;
}
```

### 3. Set position using `position-area`

`position-area` places the element in a 3×3 grid around the anchor. `top` centers it above; `bottom span-right` aligns its left edge to the anchor's left edge and opens downward.

```css
.tooltip-undo {
    position: fixed;
    position-anchor: --btn-undo;
    position-area: top;
    margin-block-end: 8px;
}
```

### 4. Auto-flip with `position-try-fallbacks`

`position-try-fallbacks: flip-block` tells the browser to try the block-axis mirror (e.g. `bottom` instead of `top`) if the element would overflow the viewport. No `@position-try` rule required for this built-in keyword.

```css
.tooltip {
    position: fixed;
    position-area: top;
    position-try-fallbacks: flip-block;
}
```

### 5. Cross-DOM anchoring (form validation)

The error messages are placed in a `<div class="error-layer">` that is a sibling of the page sections — entirely outside the `<form>`. They still visually attach to their inputs because `position-anchor` resolves against the named anchor regardless of DOM hierarchy.

```css
/* Input declares the anchor */
.email-input {
    anchor-name: --email-input;
}

/* Error lives outside the form — but anchors to the input */
.error-email {
    position: fixed;
    position-anchor: --email-input;
    position-area: bottom span-right;
    margin-block-start: 4px;
}
```

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | All HTML, CSS, and JS in one file |

## Browser Support

CSS Anchor Positioning is baseline in all major browsers as of 2025. Check caniuse.com for current support. Chrome/Edge 125+, Firefox 147+, Safari 26+.

## Why This Matters

Before anchor positioning, placing a tooltip or dropdown required measuring element positions with `getBoundingClientRect()`, listening to scroll and resize events, and manually updating styles — or wrapping trigger and panel in a shared `position: relative` parent, which constrained DOM structure. Anchor positioning replaces all of that with declarative CSS: elements describe what they are attached to visually, independent of where they sit in the document tree.
