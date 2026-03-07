Here are **5 visually interesting UI patterns you can build with `shape()`**. These are the kinds of patterns designers typically implement with **SVGs**, but `shape()` allows them to live directly in CSS and remain responsive.

I’ll keep the code **practical and tweakable** so you can experiment.

---

# 1. Curved Section Divider (Wave)

This is one of the **most common modern landing page patterns**.

```css
.section {
  background: #4f46e5;
  color: white;
  padding: 8rem 2rem;
  position: relative;
}

.section::after {
  content: "";
  position: absolute;
  inset: auto 0 -1px 0;
  height: 120px;
  background: white;

  clip-path: shape(
    from 0% 40%,
    curve to 100% 40% with 25% 100% / 75% -20%,
    line to 100% 100%,
    line to 0% 100%,
    close
  );
}
```

Result:

```
████████████████
████████████████
~~~wave divider~~~
```

Why `shape()` helps:

* Easily tweak wave depth
* Responsive
* No SVG asset needed

---

# 2. Blob Image Mask

Great for **marketing pages or portfolios**.

```css
.blob-img {
  width: 320px;
  aspect-ratio: 1;
  background: url(hero.jpg) center/cover;

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

Result:

Organic **“blob” shape image**.

Common use:

* hero profile photos
* testimonial images
* decorative visuals

---

# 3. Angled Card Design

Often used in **modern SaaS pricing sections**.

```css
.card {
  background: white;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0,0,0,.1);

  clip-path: shape(
    from 0% 0%,
    line to 100% 0%,
    line to 100% 80%,
    line to 70% 100%,
    line to 0% 100%,
    close
  );
}
```

Visual effect:

```
┌────────────
│
│
│        ╲
│         ╲
└──────────╲
```

Nice for:

* pricing cards
* blog post previews
* product cards

---

# 4. Ribbon Banner

Great for **badges or announcements**.

```css
.ribbon {
  background: crimson;
  color: white;
  padding: 1rem 2rem;
  display: inline-block;

  clip-path: shape(
    from 0% 0%,
    line to 85% 0%,
    line to 100% 50%,
    line to 85% 100%,
    line to 0% 100%,
    line to 10% 50%,
    close
  );
}
```

Result:

```
◀ SALE TODAY ▶
```

Common uses:

* sale badges
* feature labels
* category markers

---

# 5. Curved Hero Background

A softer **curved hero layout**.

```css
.hero {
  height: 500px;
  background: linear-gradient(135deg,#6366f1,#9333ea);
  color: white;
  padding: 6rem 2rem;

  clip-path: shape(
    from 0% 0%,
    line to 100% 0%,
    line to 100% 70%,
    curve to 0% 90% with 70% 100% / 30% 60%,
    close
  );
}
```

Visual feel:

```
████████████████
████████████████
████████████████
╰────────curved──╯
```

Nice for:

* landing page heroes
* product pages
* dashboards

---

# 6. Bonus: Animated Floating Path

You can combine `shape()` with **motion paths**.

```css
.dot {
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;

  offset-path: shape(
    from 0% 50%,
    curve to 100% 50% with 25% 0% / 75% 100%
  );

  animation: move 6s linear infinite;
}

@keyframes move {
  to {
    offset-distance: 100%;
  }
}
```

Great for:

* subtle hero animations
* decorative particles
* scroll effects

---

# A Quick Progressive Enhancement Pattern

Because Firefox doesn’t support `shape()` yet:

```css
.divider {
  clip-path: polygon(...); /* fallback */
}

@supports (clip-path: shape(from 0 0, line to 1px 1px)) {
  .divider {
    clip-path: shape(...);
  }
}
```

---

# A Big Design Trend This Enables

Designers are moving toward **“fluid geometry” UI**:

Examples:

* wave dividers
* organic blobs
* curved cards
* layered hero sections

Historically these required:

* SVG files
* Illustrator exports
* complicated masks

`shape()` makes them **CSS-native**.

---

✅ If you want, I can also show **3 extremely advanced patterns designers are experimenting with using `shape()`**, like:

* **Liquid morphing blobs**
* **Layered wave backgrounds**
* **Responsive curved grids**

Some of those look **almost like SVG illustrations but are pure CSS**.
