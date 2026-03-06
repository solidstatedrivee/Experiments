# `updated-attr()` Demo

Shows the updated CSS `attr()` function with type hinting, allowing HTML data attributes to drive CSS layout values directly — no CSS custom property re-declaration or JavaScript needed.

## What It Does

A card grid whose column count is controlled entirely by a `data-columns` attribute on the wrapper element. Changing the attribute value changes the grid layout.

## How It Works

### 1. The updated `attr()` syntax

```css
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(attr(data-columns type(<number>), 2), 1fr);
}
```

`attr(data-columns type(<number>), 2)` reads the `data-columns` attribute and tells the browser to interpret it as a `<number>` type. The second argument (`2`) is the fallback if the attribute is missing or invalid.

### 2. The HTML drives the layout

```html
<div class="card-wrapper" data-columns="4">
```

Setting `data-columns="4"` produces a four-column grid. Change it to `"2"` and the grid collapses to two columns — purely from HTML, with no CSS or JS edits required.

### The old approach

Previously, `attr()` only returned strings and could only be used in `content`. To pass an attribute value into a numeric CSS property you had to use a JavaScript-set CSS custom property:

```js
el.style.setProperty('--columns', el.dataset.columns);
```

```css
grid-template-columns: repeat(var(--columns, 2), 1fr);
```

The updated `attr()` eliminates that indirection.

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | All HTML and CSS in one file |

## Browser Support

The updated `attr()` with type hinting is a newer CSS feature. Check caniuse.com for current support.
