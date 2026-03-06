# `sibling-index()` Demo

Uses the CSS `sibling-index()` and `sibling-count()` functions to create staggered transition delays on a list of nav links — no JavaScript, no manual `nth-child` rules.

## What It Does

A vertical list of links where all but the first are initially hidden (translated off-screen and faded out). Hovering the first link reveals the rest in sequence, each delayed slightly longer than the previous one.

## How It Works

### 1. Stagger with `sibling-index()`

```css
li {
  transition-delay: calc(sibling-index() * 100ms);
}
```

`sibling-index()` returns the element's 1-based position among its siblings. Multiplying by `100ms` gives each item a progressively longer delay — no `nth-child` overrides needed.

### 2. Hide non-first items by default

```css
li:not(:first-child) {
  left: 100%;
  opacity: 0;
}
```

Items start translated off-screen to the right and invisible.

### 3. Reveal on hover via the general sibling combinator

```css
li:hover ~ li {
  left: 0;
  opacity: 1;
}
```

Hovering any list item reveals all subsequent siblings. The staggered `transition-delay` from `sibling-index()` cascades them in one by one.

### Without `sibling-index()`

You would need manual overrides:

```css
li:nth-child(2) { transition-delay: 200ms; }
li:nth-child(3) { transition-delay: 300ms; }
/* ...and so on */
```

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | All HTML and CSS in one file |

## Browser Support

`sibling-index()` and `sibling-count()` are newer CSS functions. Check caniuse.com for current support.
