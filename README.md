# HTML/CSS/JS Experiments

A collection of demos showcasing modern and cutting-edge web platform features.

---

## Experiments

### `appearance-base-select`
Fully customizable `<select>` elements using `appearance: base-select`. Demonstrates styling the picker, options, checkmark pseudo-element (`::checkmark`), picker icon (`::picker-icon`), and `<selectedcontent>` — along with `@starting-style` for entry animations.

### `attr-selector-ext-links`
Using CSS attribute selectors to differentiate internal vs. external links — styling `[target="_blank"]` links with an icon to indicate they open in a new tab.

### `container-type-scroll-state`
A CSS-only Back to Top button driven by a scroll-state container query. Uses `container-type: scroll-state` on the `<html>` element and `@container scroll-state(scrollable: top)` to slide the button in and out as the user scrolls — no JavaScript required.

### `has-not-vs-not-has`
A side-by-side comparison of `:has(:not(img))` and `:not(:has(img))` to illustrate how selector order changes meaning and which elements get matched.

### `nth-child-of-s`
Demo of the `nth-child(An+B of S)` selector syntax, which allows counting only elements that match a specific selector. Paired with a JS-driven category filter to show how CSS handles re-indexing filtered items.

### `reading-flow-example`
Explores the `reading-flow` CSS property, which controls the logical tab/focus order of items in a grid or flex layout — useful when visual order differs from source order.

### `sibing-index`
Uses the CSS `sibling-index()` and `sibling-count()` functions to create staggered transition delays without manual `nth-child` rules.

### `sliding-highlight`
A pure CSS sliding highlight effect built with `:has()`, CSS nesting, and `translate`. No JavaScript — the highlight moves to whichever grid cell is hovered.

### `styled-console-messages`
Demonstrates the `%c` format specifier in `console.log` to apply custom CSS styles to browser console output, including grouped and collapsed message blocks.

### `styled-missing-image`
Uses `img[alt]:after` with `@supports (x: attr(x type(*)))` to display a styled fallback when an image fails to load, showing the `alt` text via the CSS `attr()` function.

### `updated-attr`
Shows the updated CSS `attr()` function with type hinting — e.g., `attr(data-columns type(<number>), 2)` — allowing HTML attributes to drive CSS layout values like `grid-template-columns` directly.
