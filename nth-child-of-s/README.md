# `nth-child-of-s` Demo

Demonstrates the `nth-child(An+B of S)` selector syntax, which counts only elements matching a given selector. Paired with a JS category filter to show how CSS automatically re-indexes visible items when others are hidden.

## What It Does

A list of cards with category badges (Science, Ecology). A `<select>` filter hides cards by adding a `.hidden` class. The alternating odd/even color scheme — applied via `nth-child` — stays correct for the visible cards even as the set changes.

## How It Works

### 1. The `of S` syntax

```css
.card:nth-child(odd of :not(.hidden)) {
  --clr: var(--earth-yellow);
  color: var(--night);
}
```

`nth-child(odd of :not(.hidden))` counts only among cards that are not hidden, then styles the odd ones. Without `of S`, hiding a card would break the alternating pattern because the count would still include hidden elements.

### 2. JS toggles `.hidden`, CSS handles re-indexing

```js
card.classList.add('hidden');
```

The JavaScript only adds or removes a class. The CSS `nth-child(odd of :not(.hidden))` selector re-evaluates automatically, keeping the visual alternation intact with no extra JS logic.

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | Card markup and filter `<select>` |
| `index.css` | `nth-child(of S)` selector and card styles |
| `index.js` | Category filter — adds/removes `.hidden` class |

## Browser Support

`nth-child(An+B of S)` is supported in Chrome 111+, Safari 9+, and Firefox 113+.
