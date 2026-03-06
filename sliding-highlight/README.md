# `sliding-highlight` Demo

A pure CSS sliding highlight effect on a 2x2 grid. No JavaScript — the highlight translates to whichever cell is hovered using `:has()` and CSS `translate`.

## What It Does

Four grid cells are displayed in a 2-column layout. A background highlight element sits behind all the cells. When you hover a cell, the highlight smoothly slides to that cell's position. The highlight fades in when any cell is hovered and fades out when the cursor leaves the grid entirely.

## How It Works

### 1. A positioned highlight element

```css
.sliding-highlight {
  position: absolute;
  inline-size: 50%;
  block-size: 50%;
  opacity: 0;
  transition: opacity 600ms ease, translate 300ms ease;
}
```

The highlight is `50%` wide and tall (one cell in a 2-column grid) and positioned absolutely within the wrapper.

### 2. `:has()` detects which cell is hovered

```css
.sliding-highlight-wrapper:has(.sliding-highlight-item:nth-child(2):hover) .sliding-highlight {
  translate: 0 0;      /* top-left */
}
.sliding-highlight-wrapper:has(.sliding-highlight-item:nth-child(3):hover) .sliding-highlight {
  translate: 100% 0;   /* top-right */
}
.sliding-highlight-wrapper:has(.sliding-highlight-item:nth-child(4):hover) .sliding-highlight {
  translate: 0 100%;   /* bottom-left */
}
.sliding-highlight-wrapper:has(.sliding-highlight-item:nth-child(5):hover) .sliding-highlight {
  translate: 100% 100%; /* bottom-right */
}
```

The wrapper uses `:has()` to detect hover on any child cell, then updates `translate` on the highlight element. CSS `transition` animates between positions.

### 3. Fade in on any hover, fade out on none

```css
.sliding-highlight-wrapper:hover .sliding-highlight {
  opacity: 1;
}
```

The highlight is invisible by default and fades in the moment the cursor enters the grid.

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | All HTML and CSS in one file |
