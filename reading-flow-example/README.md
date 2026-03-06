# `reading-flow-example` Demo

Explores the `reading-flow` CSS property, which controls the logical tab/focus order of items in a grid or flex layout when the visual order differs from the source order.

## What It Does

A dense grid of cards where one "featured" card is visually pulled to the top via `order: -1`. Without `reading-flow`, the tab order follows the DOM — so the featured card is focused last even though it appears first visually. Toggling `reading-flow: grid-rows` makes the tab order match the visual reading order.

## How It Works

### The problem

```css
.card-wrapper {
  display: grid;
  grid-auto-flow: dense;
}

.card.featured {
  order: -1; /* visually first, but last in DOM */
}
```

`grid-auto-flow: dense` and `order` rearrange items visually without touching the DOM. Keyboard focus still follows DOM order, creating a mismatch.

### The fix

```css
.card-wrapper {
  reading-flow: grid-rows; /* or grid-columns */
}
```

`reading-flow` instructs the browser to compute focus order based on the grid's visual layout rather than source order.

> **Note:** `reading-flow` is commented out in the demo source (`/* reading-flow: grid-columns; */`) so you can toggle it on to observe the difference.

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | All HTML and CSS in one file |

## Browser Support

`reading-flow` is an experimental CSS property. Check caniuse.com for current support — it was available behind a flag in Chrome as of early 2026.
