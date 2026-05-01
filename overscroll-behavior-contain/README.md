# `overscroll-behavior: contain` Demo

An interactive demo of the CSS **`overscroll-behavior`** property, which prevents scroll from chaining out of a nested container when it reaches its boundary.

## What It Does

The page walks through four real-world use cases. A scrollable chat panel sits inside a scrolling page — reaching the top or bottom of the messages doesn't move the page. A modal opens with a long scrollable body — scrolling to the end of the content doesn't scroll the page behind it. A horizontal card carousel uses the `overscroll-behavior-x` variant to block the browser's back/forward swipe gesture. A fourth section pairs a duplicate chat panel with a toggle switch so the user can flip between contained and unchained scroll behavior at runtime and feel the difference.

## How It Works

### 1. Contain a vertically scrollable panel

```css
.chat-panel {
  height: 300px;
  overflow-y: auto;
  overscroll-behavior: contain;
}
```

Applied to the chat message list. When the user scrolls to the top or bottom and keeps scrolling, the page does not move. Without this property the scroll chains to the nearest scrollable ancestor.

### 2. Contain a modal body

```css
.modal-body {
  max-height: 60vh;
  overflow-y: auto;
  overscroll-behavior: contain;
}
```

Applied to the modal's scrollable content area. Reaching the end of the modal text and continuing to scroll would otherwise scroll the background page through the fixed overlay.

### 3. Contain horizontal scroll

```css
.carousel {
  display: flex;
  overflow-x: auto;
  overscroll-behavior-x: contain;
}
```

`overscroll-behavior-x` targets only the horizontal axis. Without it, swiping past the last card on macOS or iOS triggers the browser's back/forward navigation gesture.

### 4. Toggle containment at runtime

```css
.chat-panel              { overscroll-behavior: contain; }
.chat-panel.unchained    { overscroll-behavior: auto; }
```

```js
chatPanel.classList.toggle('unchained', toggleInput.checked);
```

Adding the `.unchained` class switches `overscroll-behavior` back to the browser default, restoring chain scroll so the difference is immediately tangible.

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | All HTML, CSS, and JS in one self-contained file — no dependencies |

## Why This Matters

Scroll chaining in modals, sidebars, chat panels, and carousels is a persistent UX annoyance. The traditional fix required JavaScript — intercepting `wheel` and `touchmove` events and calling `preventDefault()`. `overscroll-behavior: contain` solves the same problem declaratively in a single CSS property.