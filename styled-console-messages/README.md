# `styled-console-messages` Demo

Demonstrates the `%c` format specifier in `console.log` to apply custom CSS styles to browser console output, including grouped and collapsed message blocks.

## What It Does

Open the browser DevTools console on this page to see:

- A styled red error badge
- A styled green success message with a secondary unstyled note
- A collapsible group with a purple header containing debug info, status flags, and a nested collapsed sub-group

## How It Works

### 1. `%c` applies a CSS string to the following text

```js
console.log(
  "%c❌ Error: Could not resolve API fetch request.",
  "color: white; background: #a90b0b; font-weight: bold; padding: 2px 6px; border-radius: 2px;"
);
```

Each `%c` in the format string corresponds to a CSS argument that follows. The styles apply from that `%c` onwards until the next `%c` resets them.

### 2. Multiple `%c` segments in one call

```js
console.log(
  "%c✅ Success%c Secondary note",
  "color: white; background: green; padding: 4px 8px;",
  "color: #555; font-size: .75rem;"
);
```

The second `%c` switches to a different style mid-message.

### 3. Grouped and collapsed output

```js
console.group("%c🚀 Developer messages", "color: white; background: purple; padding: 3px 6px;");
console.log("%cDebug Mode: %cOn", "color: #555", "color: lightgreen;");
console.groupCollapsed("%cDetails", "color: cyan;");
console.log("%cVersion: %c1.3.2", "color: #888;", "color: white;");
console.groupEnd();
console.groupEnd();
```

`console.group()` creates an expandable block. `console.groupCollapsed()` creates one that starts collapsed. Both accept `%c` styling on their label.

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | Inline script with all console examples |
