# `css-shape-function` Demo

Uses the CSS **`shape()`** function to define curved, organic, and angled clip-path and motion-path shapes directly in CSS — no SVG required.

## What It Does

The demo page presents six labeled sections, each showcasing a distinct `shape()` pattern:

1. **Wave Divider** — a smooth wave transition between two sections
2. **Blob Mask** — three organic blobs applied to gradient backgrounds
3. **Angled Cards** — pricing-style cards with a diagonal corner cut
4. **Ribbon Banners** — double-pointed arrow labels in four colors
5. **Curved Hero** — a gradient hero section with a curved bottom edge
6. **Animated Motion Path** — a dot traveling along an S-curve using `offset-path: shape()`

Each pattern includes a `@supports` check so it degrades gracefully — unsupported browsers fall back to `border-radius`, `polygon()`, or static positioning.

## How It Works

### 1. The `shape()` path syntax

`shape()` uses a mini path language similar to SVG `<path>` data. The core commands are:

```css
clip-path: shape(
  from <x> <y>,        /* move to start point */
  line to <x> <y>,     /* straight line */
  curve to <x> <y> with <cp1-x> <cp1-y> / <cp2-x> <cp2-y>,  /* cubic bezier */
  close                /* close the path back to start */
);
```

Coordinates are percentages of the element's reference box (width × height), so the shape scales with the element automatically.

### 2. Wave divider via `::after`

```css
.wave-section-top::after {
  content: "";
  position: absolute;
  inset: auto 0 0 0;
  height: 110px;
  background: #13131f;
  clip-path: shape(
    from 0% 40%,
    curve to 100% 40% with 25% 100% / 75% -20%,
    line to 100% 100%,
    line to 0% 100%,
    close
  );
}
```

The pseudo-element carries the bottom section's background color and is clipped to a wave outline. The control points push the curve above and below the midline to create the S-wave. Lines down to the corners fill the rest of the element below the wave.

### 3. Organic blob from four bezier curves

```css
.blob {
  clip-path: shape(
    from 40% 0%,
    curve to 100% 40% with 70% -10% / 110% 20%,
    curve to 60% 100% with 110% 80% / 80% 110%,
    curve to 0% 60% with 30% 110% / -10% 80%,
    curve to 40% 0% with -10% 20% / 30% -10%,
    close
  );
}
```

Four `curve to` commands trace a closed loop. Control points placed outside the element's bounding box (e.g., `110% 80%`) pull the bezier handles outward, creating the bulging organic feel.

### 4. Motion path animation with `offset-path`

```css
.dot {
  offset-path: shape(
    from 5% 50%,
    curve to 95% 50% with 30% 0% / 70% 100%
  );
  offset-distance: 0%;
  animation: travel 3s ease-in-out infinite alternate;
}

@keyframes travel {
  to { offset-distance: 100%; }
}
```

`offset-path: shape()` defines a curved track. Animating `offset-distance` from `0%` to `100%` moves the element from the path's start point to its end point. The path coordinates are relative to the element's containing block.

### 5. Progressive enhancement with `@supports`

```css
.blob {
  border-radius: 50%; /* fallback */
}

@supports (clip-path: shape(from 0 0, line to 1px 1px)) {
  .blob {
    border-radius: 0;
    clip-path: shape( /* ... */ );
  }
}
```

Browsers that don't support `shape()` receive the fallback style outside `@supports`. Supported browsers override it inside the block.

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | All HTML and CSS in one file |

## Browser Support

`shape()` for `clip-path` and `offset-path` is a newer CSS feature. Check caniuse.com for current support. As of early 2026, it is available in Chrome/Edge 121+ with no flag required; Firefox support is in progress.

## Why This Matters

Wave dividers, blobs, and curved heroes have been staples of modern web design for years, but they required SVG files, Illustrator exports, or fragile CSS border tricks. `shape()` makes these shapes CSS-native: they scale with the element, can be animated, and live entirely in a stylesheet.
