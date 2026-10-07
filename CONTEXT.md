# Apex Network — Landing Page Project Context

Hand this file to a new chat session to pick up work without re-deriving anything.

---

## 1. What this is

Marketing landing page for **Apex Network**, a fintech platform for holding and trading
both crypto and fiat (USD/Naira). Gift cards, virtual cards, bill payments, payment requests.

- **Repo root:** `/Users/temitopeaiyegbusi/Desktop/Apex Network`
- **App lives in:** `web/` (not the repo root — `npm` commands must run from `web/`)
- **Deploy target:** Vercel
- **Git:** initialised, commits in progress on the default branch

### Stack
| | |
|---|---|
| Framework | Next.js **16.3.6** (App Router, Turbopack) |
| React | 19.2.8 |
| Styling | **Tailwind CSS v4** (not v3 — see Gotchas) |
| Animation | framer-motion 13.4.3 |
| Font | Inter via `next/font/google`, with the `opsz` axis |

### Run it
```bash
cd "/Users/temitopeaiyegbusi/Desktop/Apex Network/web"
npm run dev      # http://localhost:3000
npm run build    # full typecheck + static generation
```
`.claude/launch.json` is configured with `autoPort: true` and `cwd: "web"`.

---

## 2. Design sources

**Figma file:** `https://www.figma.com/design/soFO5UdS86KyD02YtxY7B8/Apex-Networks`
- Full landing page node: `node-id=70-701287`
- Footer wordmark node: `node-id=92-850251`

> **The Figma MCP server fails on large payloads** — `get_design_context` and
> `get_metadata` return truncated SSE and error out on anything substantial.
> Screenshots of individual nodes work. In practice the user exports PNG/JPG/SVG
> to `~/Desktop/Apex Images/` and shares those; measuring those exports with PIL
> has been the reliable path.

**Asset source folder:** `/Users/temitopeaiyegbusi/Desktop/Apex Images/`
Notable: `Hero section 1111.jpg` (2880×2048) is the full-res hero export — the
high-quality phone mockups were extracted from it.

---

## 3. Design system

All tokens live in `web/app/globals.css` under `@theme`. **Do not hardcode values** —
the user has supplied formal token exports and expects them used.

### Typography — from `textStyles.json`
Inter Display Medium (500) for titles; Inter Regular (400) for body.
Figma percent tracking maps to em (−1% → −0.01em).

| Class | Size | Weight | Tracking |
|---|---|---|---|
| `text-h1` | 56px | 500 | −0.01em |
| `text-h2` | 48px | 500 | −0.01em |
| `text-h3` | 40px | 500 | −0.01em |
| `text-h4` | 32px | 500 | −0.005em |
| `text-h5` | 24px | 500 | 0 |
| `text-h6` | 20px | 500 | 0 |
| `text-p-lg` | 18px | 400 | −0.015em |
| `text-p-md` | 16px | 400 | −0.011em |
| `text-p-sm` | 14px | 400 | −0.006em |

Also `text-label-*` (Medium) and `text-sub-*` (Medium, uppercase, +6% tracking).

> **Never use `font-bold`/700 on headings.** The user pushed back hard on this —
> the design is Medium (500) throughout. Line-heights were chosen by me, not
> specified in the export.

### Colour — from `export.json`
| Token | Value |
|---|---|
| `--color-primary` | **#fb8e0b** (brand orange) |
| orange ramp 50→950 | overrides Tailwind's default orange |
| gray ramp 0→950 | overrides Tailwind's default gray (so `text-gray-500` = `#7b7b7b`) |
| semantic aliases | `bg-weak`, `text-sub`, `text-soft`, `stroke-soft` … |

Hero accent (`your Digital Finances.`) uses `text-orange-950` (#71330a) — **unverified
guess**, the reference image was lost. Worth confirming.

### Spacing
`page-container` utility — single source of truth for gutters:
- 24px mobile / 48px tablet / **100px desktop**, `max-width: 1440px`

### Buttons
`btn-dark` utility — sampled from the Figma export. It's a **vertical gradient**
(`#2e2e2e` → `#1a1a1a`) plus an inset top hairline. Flat `bg-black` was rejected
as looking "very flat".

---

## 4. Page structure

Order in `web/app/page.tsx`:

```
Navigation → HeroSection → ServicesSection → BenefitsSection →
TestimonialsSection → FAQSection → BlogSection → BannerSection → Footer
```

### Section notes

**Navigation** — fixed/sticky, transparent at top, white + shadow on scroll.
Links: Features · Rates · Business. CTAs: ENG selector, Login, Open an Account.
The **open mobile menu also triggers the white background** — the panel has no
surface of its own, so over the transparent bar the links sat straight on the hero.
Opening it locks page scroll (see Gotchas) and it auto-closes at `lg`.

**HeroSection** — everything sits in a **20px-gutter, 40px-radius shell**
(`overflow-hidden`) that contains the background video, copy, CTAs and phones.
The 20px gutter holds at **all** breakpoints (explicitly requested).
- Background: looping muted `/video/hero-bg.mp4`, respects `prefers-reduced-motion`
- Phones: `/hero/phones.png`, **1638×796**, transparent, `unoptimized`. Originally
  1891×796 with 253px of empty space on its left and none on its right, which threw
  the artwork 126px right of centre; cropped so it is actually centred.

**ServicesSection** — "One app for the money moves you make every day".
4 cards: Bills · Virtual Cards · Requests · Gift cards.
Cards are **320px tall, 10px gap**, no hover shadow.
Cards **glide in from the right, staggered** on scroll (90px travel, 0.85s,
120ms stagger, easeOutQuint). Replays each scroll-in; respects reduced motion.

**BenefitsSection** — "Built for people who can't afford to wait".
6 cards, 3-col grid desktop → **carousel on mobile** with centered arrows.
Icons are the user's SVGs in `/icons/benefits/` — **these have the circular
background built in**, so don't wrap them in a CSS circle.

**TestimonialsSection** — "Trusted by over 35,000 users".
Desktop: **hover-expanding panels**, flex-grow `2.07 : 1 : 1` (measured from design),
500ms transition, quote height-animates via `grid-rows-[0fr→1fr]`.
Mobile: carousel (no hover on touch).
Panels **glide in from the right, staggered**, sharing Services' timing values.
Portraits live in `/testimonials/` (all WebP — alpha survives, see Gotchas) and each
carries its own `objectPosition`, because the three are framed differently: faces sit
at 25% / 18% / 30% of their own frames, so one shared `object-top` put them at wildly
different heights once expanded. Values solve for a common ~32%.

**FAQSection** — two-column, category tabs (All / Account & Security /
Deposit & Wallets / Technical Support), working accordion.
Tab row scrolls horizontally on mobile.

**BlogSection** — "Learn, trade smarter, stay safe", carousel with arrows beside heading.
Thumbnails are a real asset now (`/blog/thumbnail.png`), but **all four posts share
the one image** — the field is per-post, so individual art is a one-line change each.

**BannerSection** — "Your payout is minutes away".
Background is `/banner/banner-bg.jpg` (flat `#fb8e0b` + fine dot texture), not a
gradient. Phones use their own tighter crop, `/banner/phones-banner.png`, cut out of
a white-background JPEG export. They flow below `lg` and are bottom-pinned from `lg`.
**Scroll-driven morph**: starts full-bleed, contracts into a rounded inset card as
it scrolls in, via animated `clip-path: inset(...)`. Horizontal inset is a
**percentage (7%)** so it scales — a fixed px value broke mobile badly.

**Footer** — Products / Company / Legal columns + oversized **"Apex" wordmark**.
Wordmark is SVG text (580px) with a **dashed outline** (`stroke-dasharray`), letters
slide up staggered on scroll, replaying each time. Glyph positions are measured on a
canvas after `document.fonts.ready`.

---

## 5. Gotchas — read before debugging

These each cost real time. They will bite again.

### Tailwind v4, not v3
- Entry is `@import "tailwindcss"`, **not** `@tailwind base/components/utilities`
- Tokens go in `@theme`; custom utilities use `@utility`

### Unlayered CSS silently kills every spacing utility
A bare `* { margin: 0; padding: 0 }` reset broke **every** `p-*`/`m-*`/`py-*` on the
site — they all computed to `0`. Tailwind v4 puts utilities in `@layer utilities`, and
per CSS cascade rules **unlayered styles beat layered ones**. Preflight already does
that reset. Symptom: everything looks cramped and adjusting classes does nothing.

### Next's image optimizer flattens alpha
Transparent PNGs served through `next/image` come back **opaque white** — this caused
white blocks behind the service icons and risked one around the hero phones. Fix:
`unoptimized` on decorative transparent PNGs. It also fixes stale-cache issues, since
optimized responses are cached hard under the same `/_next/image?url=` key.

### next/image blocks SVG
Needs `dangerouslyAllowSVG`. For small local decorative SVGs just use a plain `<img>`.

### Flood-fill background removal
When cutting assets out of exports:
- **Don't seed from an edge the subject touches.** Phones are cropped at the bottom,
  so seeding there let the fill walk up into the white phone screens and erase them.
- For a **gradient** background, compare each pixel to its *neighbour*, not a fixed
  reference colour — follows the gradient, stops at hard edges.

### A `fixed` + `w-full` element can inflate the document on mobile
`position: fixed` sizes against the initial containing block, not the document. The
nav measured **436px wide inside a 375px viewport**, pushing `scrollWidth` to 436 and
letting the whole page drag sideways. `html`/`body` were correctly 375 and `100vw`
was 375 — only `scrollWidth` disagreed, so check that specifically. `inset-x-0` does
**not** help (same containing block). The fix is the `overflow-x: clip` guard on
`html, body` in `globals.css`.

Use **`clip`, not `hidden`** — `hidden` makes them scroll containers and forces the
other axis to `auto`, which breaks `position: sticky` further down the tree. And keep
it off a `*` selector (see the unlayered-CSS gotcha above).

### Locking page scroll goes on `<html>`, not `<body>`
`<html>` is the scrolling element here. Setting `body.style.overflow` does nothing to
page scroll **and** silently collapses the `overflow-x: clip` guard to `hidden`. Set
`documentElement.style.overflowY` instead, y-axis only, so the guard is untouched.

Also: `overflow: hidden` still allows **programmatic** scrolling, so `window.scrollTo`
is useless for testing a scroll lock — it will "succeed" against a working lock.
Synthetic `WheelEvent`s don't scroll either. Verify with real trusted input.

### Two buttons side by side need the same box model
A bordered button is **2px taller** than an unbordered one at identical padding, and
`py-4` vs `py-3.5` adds 4 more. This is invisible above `sm`, where `flex-row` stretch
equalises them, and only shows on mobile where they stack. Give the borderless one
`border border-transparent`. Hero, Services and Banner were all affected.

### WebP keeps alpha; it is the right format for these exports
The portraits and cutouts have transparent rounded corners. WebP preserved alpha
**byte-exact** at every quality tested, while cutting `bolatito` from 434KB to 31KB
(q=92, `method=6`). When checking quality, measure error on **opaque pixels only** —
RGB in fully transparent pixels is undefined and will report a huge max diff that
means nothing.

### Check `object-position`, not just `object-cover`, for cropped portraits
With `cover`, a source point at fraction `f` lands at `(f·Rh − D·P/100)/H` down the
box, where `Rh` is the rendered height, `D = Rh − H` the overflow and `P` the
`object-position` percentage. Invert it to place a face deliberately. If the source is
wider than the box, `D = 0` and the vertical component does nothing at all.

### Grid/flex items don't shrink by default
`min-width: auto` means a scrolling child forces its column wider, blowing out the
page. Needs `min-w-0` on the grid item. This caused full-page horizontal overflow
via the FAQ tab row.

### scroll-snap cancels scroll-container padding
`-mx-6 px-6` gives a first-card gutter that **snap immediately eats** (`scrollLeft`
jumps to the padding value, card flushes to x=0). Needs matching `scroll-pl-*`.

### flex-shrink undoes percentage widths
`w-[150%]` on a flex item gets shrunk back to fit. Needs `shrink-0`.

### JSX strips whitespace between elements on separate lines
Hiding a `<br>` responsively produced `yourDigital`. Needs explicit `{" "}`.

### The preview pane reports `document.visibilityState: "hidden"`
So **video autoplay pauses** and **IntersectionObserver callbacks don't fire** —
scroll animations appear broken when they aren't. Verify with measurements, and
treat "it doesn't animate in the pane" as inconclusive.

---

## 6. Working agreements with the user

- **Don't make unrequested changes.** I removed a background and added hover shadows
  without being asked; both were called out. State assumptions, or ask.
- **Measure, don't eyeball.** The user supplies exports — scan them with PIL for
  widths, gaps, radii, colours. Several "it looks wrong" reports were resolved by
  measuring and finding the real number.
- **Verify before claiming done.** Read back computed styles / geometry rather than
  asserting from the diff.
- **Never invent copy attributed to a person.** Testimonial quotes for Bolatito and
  Christopher are deliberately absent for this reason.
- The user iterates visually and will push back bluntly. Fix the cause, don't patch
  the symptom.

---

## 7. Outstanding / needs user input

| # | Item |
|---|---|
| 1 | **Every CTA is dead.** "Get Started", "Download App", "Login", "Open an Account" and the nav links are `<button>`s with no handler or destination; footer links are `href="#"`. Biggest functional gap — needs real URLs. |
| 2 | **Testimonial quotes** for Bolatito and Christopher. Only John has one, so their expanded hover panels show just name + location. |
| 3 | **FAQ answers** — only "Are there hidden fees?" came from the design. The other five I wrote; they're plausible but unverified. |
| 4 | **Blog copy** — titles/excerpts/dates are from the design screenshot, unverified. All four cards also share one thumbnail. |
| 5 | **Hero accent colour** — `text-orange-950` is a guess (see §3). |
| 6 | **Benefits icon mapping** — assigned in Figma export order. "Multiple Choice" (`-3`, two figures) is the least certain. |
| 7 | **Inter Display** — using Inter's `opsz` axis as the equivalent. If a licensed standalone Inter Display file exists, self-host it instead. |
| 8 | Line-heights, and several animation timings, were chosen by me — not from a spec. |
| 9 | **`hero-bg.mp4` is 1MB**, ~45% of `public/` and the largest asset left. Needs re-encoding; ffmpeg was not installed on this machine. |

**Resolved since this file was written:** testimonial portraits (now in
`/testimonials/`, WebP, with per-person `objectPosition`); blog thumbnails (one
shared asset); Christopher's and Bolatito's source framing.

---

## 8. Known minor issues

- Portrait framing is normalised by `objectPosition`, but Christopher's source is a
  tighter shot than the other two, so he still reads as more zoomed-in. Only a wider
  re-export fixes that.
- `/blog/thumbnail.png` (350×200) and `/banner/phones-banner.png` (668×354) both
  render larger than their native size on retina, so they look slightly soft.
- `next.config.ts` is clean (the earlier `ignoreBuildErrors` workaround was removed;
  builds now run full TypeScript validation).
