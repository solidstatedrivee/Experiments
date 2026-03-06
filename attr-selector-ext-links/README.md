# `attr-selector-ext-links` Demo

Uses CSS attribute selectors to visually distinguish links that open in a new tab from those that stay in the same context — with no JavaScript.

## What It Does

A content page with a mix of links. Links with `target="_blank"` automatically get an external link icon appended via CSS. Links with `target="_parent"` or no target get no icon.

## How It Works

### 1. Target new-tab links with an attribute selector

```css
a[target="_blank"]:after {
  --fa: "\f08e";
  content: var(--fa);
  font-family: "Font Awesome 6 Free";
  font-weight: 600;
}
```

`[target="_blank"]` matches only links that open in a new tab. The `::after` pseudo-element injects the Font Awesome external-link icon using its Unicode code point.

### 2. Inline-flex for icon alignment

```css
a[target="_blank"] {
  display: inline-flex;
  gap: .25rem;
}
```

Switching to `inline-flex` keeps the text and icon on the same baseline with consistent spacing.

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | Page markup with mixed link targets |
| `index.css` | Attribute selector styles and Font Awesome icon injection |

## Why This Matters

Attribute selectors let CSS respond directly to HTML semantics. No class names need to be added manually — the existing `target` attribute is enough to drive the visual treatment.
