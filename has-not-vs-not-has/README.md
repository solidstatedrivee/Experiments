# `has-not-vs-not-has` Demo

A side-by-side visual comparison of `:has(:not(img))` and `:not(:has(img))` to illustrate how selector nesting order changes which elements get matched.

## What It Does

Three cards are displayed. Each card gets a colored outline depending on which selector matches it:

- Red outline — `:has(:not(img))` — card contains at least one element that is not an `<img>`
- Yellow outline — `:not(:has(img))` — card contains no `<img>` at all

## How It Works

```css
.card:has(:not(img)) {
  outline: 2px solid var(--accent-primary); /* red */
}

.card:not(:has(img)) {
  outline: 2px solid var(--accent-secondary); /* yellow */
}
```

### The difference

| Selector | Matches when... |
|----------|----------------|
| `:has(:not(img))` | The element has at least one child that is not an `<img>` |
| `:not(:has(img))` | The element has no `<img>` descendant at all |

A card with both an `<img>` and text matches `:has(:not(img))` (it has non-img children) but does NOT match `:not(:has(img))` (it does have an img). A card with only an `<img>` matches neither. A card with only text matches both.

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | All HTML and CSS in one file |
