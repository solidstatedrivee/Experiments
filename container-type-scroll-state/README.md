# `container-type: scroll-state` Demo

A demo of the CSS **scroll-state container query** — a browser feature that lets you conditionally apply styles based on a container's scroll position, with zero JavaScript.

## What It Does

The page shows a **Back to Top** button that slides in from the right once the user has scrolled down, and slides back out when they're at the top. The entire behaviour is driven by a single CSS container query.

## How It Works

### 1. Declare a scroll-state container

```css
[data-btt-container] {
  container-type: scroll-state;
}
```

Applied to the `<html>` element via the `data-btt-container` attribute. This opts the element into scroll-state containment, making its scroll position queryable from CSS.

### 2. Query the scroll state

```css
@container scroll-state(scrollable: top) {
  #back-to-top {
    translate: 0 0;
  }
}
```

`scrollable: top` resolves to true when the container **has scrollable content above the current scroll position** — i.e. the user has scrolled down at least a little. When true, the button translates into view.

### 3. The button hides by default

```css
#back-to-top {
  translate: 10rem 0; /* off-screen to the right */
  transition: translate 300ms ease;
}
```

The button starts translated off-screen. The container query overrides this to `translate: 0 0` when scrolled, and the `transition` animates between the two states.

## Key Files

| File | Purpose |
|------|---------|
| `news-article.html` | Full demo page — all HTML and CSS in one file |

## Browser Support

`container-type: scroll-state` is a newer CSS feature. Check [caniuse.com](https://caniuse.com) for current support. As of early 2026, it is available in Chrome/Edge 130+ and under a flag in Firefox.

## Why This Matters

Traditionally, show/hide-on-scroll UI (sticky headers, back-to-top buttons, progress bars) required a scroll event listener in JavaScript. Scroll-state container queries move this logic entirely into CSS, keeping behaviour declarative and eliminating the JS overhead.
