# Claude Instructions — _experiments

## Project Overview

This repo is a collection of focused HTML/CSS/JS demos, each in its own folder, showcasing a specific modern or cutting-edge web platform feature.

---

## README Structure for Demo Folders

Every demo folder must have a `README.md`. Follow this structure exactly — include only the sections that are relevant (omit optional ones if they don't apply).

### 1. Title (required)

Use backticks around the feature name or folder name, followed by "Demo":

```
# `feature-name` Demo
```

### 2. One-line description (required)

Immediately after the title (no blank heading between), write one sentence that names the web platform feature and states its core purpose. Bold the feature name or a key phrase. No preamble.

```
A pure CSS sliding highlight effect on a 2x2 grid. No JavaScript — the highlight translates to whichever cell is hovered using `:has()` and CSS `translate`.
```

### 3. `## What It Does` (required)

Describe the demo page concretely: what the user sees, what they interact with, and what happens. Focus on the experience, not the implementation.

### 4. `## How It Works` (required)

Break the technique into numbered steps using `### 1.`, `### 2.`, etc. Each step must include:
- A short heading naming the concept
- A fenced code block (with language tag: `css`, `js`, `html`) showing the key snippet from the actual demo source
- One or two sentences explaining what the code does and why

If it is helpful to contrast the new approach against the old one (e.g. what you'd have to do without this feature), include a short "Without X" sub-section after the relevant step.

### 5. `## Key Files` (required)

A markdown table listing every file in the folder and its purpose:

```markdown
| File | Purpose |
|------|---------|
| `index.html` | All HTML and CSS in one file |
| `index.css`  | Selector and layout styles |
| `index.js`   | Filter logic — adds/removes `.hidden` class |
```

### 6. `## Browser Support` (include when the feature is experimental or has limited support)

One or two sentences stating which browsers/versions support the feature. Always direct the reader to caniuse.com for current status. Do not link to caniuse.com.

```
`container-type: scroll-state` is a newer CSS feature. Check caniuse.com for current support. As of early 2026, it is available in Chrome/Edge 130+ and under a flag in Firefox.
```

### 7. `## Why This Matters` (optional — include only when there is a meaningful "before vs. after" story)

A short paragraph explaining what problem this feature solves and why it is significant compared to the traditional approach. Keep it to 2–4 sentences.

---

## Style Rules

- **Tone:** Direct and technical. No filler phrases ("In this demo...", "As you can see...").
- **Voice:** Active. "The wrapper uses `:has()` to detect hover" not "`:has()` is used to detect hover".
- **Code references in prose:** Always wrap CSS properties, selectors, attribute names, file names, and HTML elements in backticks.
- **Bold:** Use sparingly — only for the feature name in the one-liner description or a genuinely critical concept.
- **No emojis** unless they appear in the actual demo source code being documented.
- **No trailing blank lines** at the end of the file.

---

## Root `README.md` — Experiment Index

`README.md` at the repo root lists all demos. When adding a new demo folder, add an entry in alphabetical order under `## Experiments` using this format:

```markdown
### `folder-name`
One-sentence description of what the feature does and what the demo shows.
```

The description should match (or closely paraphrase) the one-liner at the top of the folder's own `README.md`.
