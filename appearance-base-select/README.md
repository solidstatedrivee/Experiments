# `appearance-base-select` Demo

A fully customizable `<select>` element built with `appearance: base-select`. Styled to look nothing like the browser default, with animated transitions, custom checkmarks, and rich option content.

## What It Does

A taco menu demo where a checkbox toggles `appearance: base-select` on and off, letting you compare the default browser select against the fully styled version side-by-side.

## How It Works

### 1. Opt in to base-select

```css
select,
select::picker(select) {
  appearance: base-select;
}
```

Both the trigger element and the picker popover must opt in to unlock full CSS styling.

### 2. Style the picker and options

```css
select::picker(select) {
  background: var(--primary--lighter);
  transition: all 250ms allow-discrete;
}

option::checkmark {
  content: "💯";
}
```

`::picker(select)` targets the dropdown popover. `::checkmark` replaces the default checkmark on the selected option.

### 3. Animate the picker open/close

```css
select::picker(select) {
  opacity: 0;
  transition: all 250ms allow-discrete;
}

select::picker(select):popover-open {
  opacity: 1;
}

@starting-style {
  select::picker(select):popover-open {
    opacity: 0;
  }
}
```

`@starting-style` provides the entry keyframe so the picker fades in when it opens.

### 4. Rotate the picker icon when open

```css
select::picker-icon {
  rotate: 0deg;
  transition: rotate 250ms ease;
}

select:open::picker-icon {
  rotate: 90deg;
}
```

### 5. Control what shows in the closed trigger

```css
selectedcontent .desc,
selectedcontent .price {
  display: none;
}
```

`<selectedcontent>` mirrors the selected option into the trigger button. Hiding child elements keeps the trigger compact while the full option is shown in the picker.

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | All HTML, CSS, and JS in one file |

## Browser Support

`appearance: base-select` is a newer CSS feature available in Chrome/Edge 130+. Check caniuse.com for current support.
