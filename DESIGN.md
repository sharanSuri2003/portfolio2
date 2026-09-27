# Sticker Sheet — Style Reference

> Inflatable sticker universe on bone-cream paper. The Slush scheme — crushed display type, pill controls, black hand-cut outlines, full-bleed color bands — painted only in the four colors this site already had.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position.

The page runs on sticker-book logic: a bone-cream paper canvas, a huge inflated ribbon in Alarm Red, and sticker accents cut from the same four colors, scattered like confetti. Display type is enormous and crushed (Bowlby One standing in for Lateral, line-height 0.75–0.80) so the words become sculptural objects, not sentences. Every existing color appears as a filled sticker, a card surface, or a section band — never as a restrained accent and never as a new hex. Components are soft (20–40px on cards, pill-shaped on nav and buttons) and outlined in Void Black for a hand-cut feel. The result reads as a physical collage pinned to a pale wall.

## Tokens — Colors

These are the only colors. No pastel rainbow is imported. Slush’s eleven-color set is collapsed onto the four hexes already in the system, and the roles below are the new jobs those hexes do.

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void Black | `#000000` | `--color-void-black` | Primary text, 1px card and control borders, filled CTA background, logo mark — the hand-cut sticker outline against paper |
| Bone Cream | `#ebe4d8` | `--color-bone-cream` | Page canvas, card surfaces, outlined button fills, text and outlines on black bands. This is the paper. It is not screen white |
| Ash Taupe | `#c3bdb3` | `--color-ash-taupe` | Secondary section band, neutral interlude, sticker and tag fills. A surface now — there is no button shadow for it to tint |
| Alarm Red | `#ff4034` | `--color-alarm-red` | The ribbon and a sticker fill. Decorative brand surface only. Never a CTA fill, never a link color, never a background behind body text |

### How the Slush roles map

| Slush role | This system |
|------------|-------------|
| Carbon | Void Black |
| Paper White | Bone Cream |
| Sky Wash (hero ground) | Bone Cream — there is no blue wash to add |
| Concrete Gray / Soft Mist | Ash Taupe |
| Electric Blue (ribbon) | Alarm Red |
| Sticker palette (six hues) | Void Black, Bone Cream, Ash Taupe, and Alarm Red, used together as fills |

## Tokens — Typography

### Lateral — Display headlines only · `--font-lateral`

The wordmark and short section banners sit at display size with crushed 0.75–0.80 line-height so the letters stack into sculptural blocks. The face behaves like a physical object that a ribbon can pass behind.

- **Substitute:** Bowlby One (the inflated cut). Antonio if a line must be narrower. Druk is the licensed original and is not loaded
- **Weights:** 800 in the source. Bowlby One ships a single heavy cut; set it at 400 and do not synthesize a bolder weight
- **Sizes:** 70px, 110px, 160px, 200px, 281px, 640px — see Amendments for the clamp
- **Line height:** 0.75–0.80. Never above 0.85
- **Letter spacing:** normal
- **Role:** Display headlines only. Never UI, never body, never the logo badge

### Aeonik Pro — All UI, body, nav, buttons, subheads · `--font-aeonik-pro`

Weight 500 for body and metadata (12–16px). Weight 700 for subheads, nav, and buttons. A 64px / 700 step for large supporting headlines that are still sentences, not sculptures.

- **Substitute:** Inter. Satoshi or General Sans are acceptable alternates; Inter is what the site loads
- **Weights:** 500, 700
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 24px, 30px, 64px
- **Line height:** 1.00–1.56
- **Letter spacing:** -0.01em on body, 0.032em on nav, buttons, and uppercase labels
- **OpenType:** `"ss01" on, "tnum"` on the UI face
- **Role:** Everything that is not a display headline

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | Aeonik | 500 | 12px | 1.56 | -0.01em | `--text-caption` |
| body | Aeonik | 500 | 15px | 1.39 | -0.01em | `--text-body` |
| subheading | Aeonik | 500 | 24px | 1.2 | -0.01em | `--text-subheading` |
| heading-sm | Aeonik | 700 | 30px | 1.1 | -0.01em | `--text-heading-sm` |
| heading | Aeonik | 700 | 64px | 1 | -0.01em | `--text-heading` |
| display | Lateral | 800 | 200px | 0.8 | 0 | `--text-display` |
| display-lg | Lateral | 800 | 280px | 0.76 | 0 | `--text-display-lg` |

The 640px source step is the measurement for a one-word mark on a wide canvas. It is not a token the layout uses. See Amendments.

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 44 | 44px | `--spacing-44` |
| 48 | 48px | `--spacing-48` |
| 60 | 60px | `--spacing-60` |
| 80 | 80px | `--spacing-80` |
| 128 | 128px | `--spacing-128` |
| 180 | 180px | `--spacing-180` |
| 224 | 224px | `--spacing-224` |

The token number is the pixel value. `--spacing-24` is 24px, so `gap-24` is 24px.

### Border Radius

| Element | Value | Token |
|---------|-------|-------|
| wallet-icon / sticker | 16–20px | `--radius-sticker` |
| cards | 20px | `--radius-cards` |
| body | 30px | `--radius-body` |
| cards-elevated | 40px | `--radius-cards-elevated` |
| nav, pills, buttons, tags | 1600px | `--radius-pills` |

### Layout

- **Page max-width:** 1440px
- **Section gap:** bands stack flush; padding inside a band is 48–80px
- **Card padding:** 24px
- **Element gap:** 4–12px

## Components

### Marquee Banner
**Role:** Scrolling announcement strip

Full-bleed band at the top of the viewport, Void Black ground, Bone Cream Aeonik 700 uppercase at 12px with 0.032em letter-spacing. The phrase repeats. No padding inside the band. Persists above the nav.

### Pill Nav Button
**Role:** Top navigation links

1600px radius, 1px solid Void Black border, Bone Cream fill, Aeonik 700 at 14px with 0.032em letter-spacing, about 12px horizontal padding. The current page uses the filled treatment. 4px gaps between pills.

### Filled CTA Button
**Role:** Primary action — resume

1600px radius, Void Black background, Bone Cream text, Aeonik 700 at 14px with 0.032em letter-spacing, 1px solid Void Black border. One highest-priority action. Alarm Red is never this fill.

### Outlined Ghost Button
**Role:** Secondary action — contact, external links

1600px radius, 1px solid Void Black border, Bone Cream background, Void Black text, same type as the filled CTA. Pairs beside the filled button.

### Logo Mark
**Role:** Brand identifier in the nav

Circular badge, 1600px radius, 1px Void Black border, Bone Cream fill, a single “S” in Aeonik 700. Lateral is not used here — the display face does not appear at badge size. Fixed at the top left, beside the pills.

### Plus Menu Button
**Role:** Overflow trigger below the `md` breakpoint

Same circular badge as the logo. Holds a “+” in Aeonik 700. Opens the nav pills. Hidden once the row fits.

### Resume Card
**Role:** The download prompt (stands in for the source QR card)

20px radius, Void Black ground, 1px Void Black border, split in half. The left half is a Bone Cream panel with a 1px black hairline; the right half reads “RESUME” in Aeonik 700, 14px, 0.032em, Bone Cream, centered. Sits off-center in a secondary band. There is no fake QR code.

### Sticker
**Role:** Playful accent around display type

Rounded square, 20px radius, 1px Void Black outline, filled with one of the four colors. Glyphs are rocket, coin, wallet, and check — a few bold shapes, not illustration grids. Rotated a few degrees and placed off any grid, overlapping the margins around a headline. On a black band the outline flips to Bone Cream.

### Display Headline
**Role:** Hero and section sculpture

Lateral at the display step, line-height 0.75–0.80, Void Black on paper and Bone Cream on a black band. Always paired with a ribbon or a sticker cluster. A tagline in Aeonik sits under it.

### Tagline
**Role:** Supporting line under display text

Aeonik 500 at the subheading step (24px), matching the band’s text color, left-aligned, measure capped so it does not compete with the display line.

### Ribbon
**Role:** Signature motif — inflatable tube

A solid Alarm Red tube with a grainy surface, full-bleed, passing behind display type. Flat fill plus a noise texture. No gradient, no second red, no shadow. Static.

### Sticker Card
**Role:** Role, stat, note, and project container

20px radius, or 40px when the card holds a screenshot. 1px Void Black border, 24px padding, Bone Cream fill, Void Black text. No shadow. The border is the edge. On a black band the card stays cream so it still reads as a sticker stuck to the sheet; an ink variant (black fill, cream text) is allowed when the card itself is the dark sticker.

### Section Band
**Role:** Full-bleed ground

One of three fills, in rotation: Bone Cream, Ash Taupe, Void Black. No border between bands and no shadow. Type on the black band is Bone Cream. Body copy never sits on Alarm Red.

### Email Dialog
**Role:** Contact, in place of a bare mailto

A Bone Cream panel, 40px radius, 1px Void Black border, on a flat Void Black scrim. The address is set in Aeonik, with a filled Copy button and an outlined mail-app fallback. Focus is trapped and returned to the trigger. Escape closes. The page behind stops scrolling.

### Evidence Frame
**Role:** Project screenshot, pinned

The screenshot sits inside a 40px-radius sticker card with a 1px black border. Photography is otherwise out of the system; this is the one place it is allowed, and the outline is what makes it a sticker rather than a gallery.

## Do's and Don'ts

### Do
- Use the display face at the display step with line-height 0.75–0.80 for short headlines. The crushed leading is what makes the type sculptural.
- Use all four colors as fills on a screen — black, cream, taupe, and red — rather than treating red as a thin accent.
- Put a 1px solid Void Black border on nav, buttons, cards, and stickers. On a Void Black band, flip that outline to Bone Cream.
- Round nav, buttons, and tags to 1600px and cards to 20–40px.
- Pair every display headline with the red ribbon or a sticker cluster.
- Set nav, buttons, and uppercase labels in Aeonik 700 at 0.032em.
- Alternate section bands across Bone Cream, Ash Taupe, and Void Black so the scroll has a rhythm without dividers.
- Keep filled actions on Void Black and secondary actions outlined. Red stays on the ribbon and the stickers.

### Don't
- Don't add a fifth color. The sticker palette is the four hexes above.
- Don't use a radius under 16px, or a radius under 1600px on buttons, nav, and tags.
- Don't set the display face below the clamped display step, and don't set its line-height above 0.85.
- Don't use Alarm Red as a CTA fill, a link, or a background for body text.
- Don't add box-shadows. Elevation is a color band and a black outline.
- Don't use Ash Taupe as a disabled or “success” gray. It is a paper band and a sticker fill.
- Don't constrain the page under 1280px. The frame is 1440px.
- Don't use gradients. The ribbon’s grain is noise on a flat fill.
- Don't animate the ribbon, the stickers, or the type. Motion is the marquee and a color flip on button hover.

## Motion

The page is a printed collage. Motion is the marquee and hover on buttons.

**Tokens.** `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`. `--dur-ui: 150ms` for hover color. No press travel — there is no shadow to collapse into.

**Rules.**
- The marquee translates horizontally, linear, and loops. It is the only infinite animation.
- Button hover flips fill and text (cream ↔ black). It is gated behind `(hover: hover) and (pointer: fine)`.
- The email dialog fades opacity over 150ms. It does not scale.
- `prefers-reduced-motion` stops the marquee and keeps the color change.
- Nothing scroll-reveals. Copy is on the paper when the reader arrives.

## Structure

**The index leads with the name.** Home puts the name in the display slot. Section pages put their own short title there (`Work`, `Lab`, `Notes`) and carry the name in the nav logo.

**Bands, not a single column.** Each route is a stack of full-bleed bands. Content sits in a 1440px frame, left-aligned. Display type is a short word; the tagline and the cards carry the sentences.

**The chrome persists.** Marquee, then a bar: logo left, pills center, filled resume action right. Below `md` the pills move behind the plus button.

## Amendments

Reasoned departures from the Slush source, kept here so they are decisions rather than drift.

- **The palette is the existing four colors.** Slush’s sky, concrete, and six sticker hues are not added. Bone Cream is the paper and the hero ground, Ash Taupe is the concrete band, Alarm Red is the ribbon. Stickers are filled from those four and no others.
- **Ash Taupe is a surface.** It used to exist only as a 4px button shadow. The scheme has no shadows, so the hex is the secondary band and a sticker fill.
- **Alarm Red is a surface, and only a decorative one.** It used to be a signal reserved for annotations. It now fills the ribbon and stickers. It still does not fill a button, a link, or a paragraph.
- **Display sizes ramp.** The 200px / 280px values are the desktop end of a `clamp()`. A 640px word is wider than the viewport. The floor stays large enough to read as display, and long titles use the Aeonik heading steps instead of shrinking the display face into a sentence.
- **Buttons are pills.** One Slush note gives the filled CTA a 40px radius; the do/don’t rules require 1600px on every button. The pill rule wins.
- **Outlines flip on black bands.** A black hairline on Void Black disappears. Borders, focus rings, and sticker strokes use Bone Cream there.
- **Photography is allowed inside an evidence card.** A portfolio with no record of the work is worse than a collage that pins two screenshots. They live in the 40px sticker card and nowhere else.
- **The resume card replaces the QR card.** There is no app to download.
- **Touch targets grow on coarse pointers.** The documented 10–15px padding returns under `(pointer: fine)`. A finger still gets at least 44px.
- **Bowlby One is not an 800-weight file.** Using `font-weight: 800` on it synthesizes a fake bold. The loaded cut is already the heavy one.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Bone paper | `#ebe4d8` | Hero and default band — the wall the collage is pinned to |
| 2 | Ash band | `#c3bdb3` | Secondary interlude |
| 3 | Black sheet | `#000000` | Inverted band — cream type, cream outlines |
| 4 | Sticker card | `#ebe4d8` | Card fill on any band, outlined in black |

## Imagery

One ribbon: a grainy Alarm Red tube behind display type. Four sticker glyphs (rocket, coin, wallet, check) with a 1px outline, each filled from the four-color set, rotated and unaligned. No illustration grids, no gradients, no hazard icons, no flames, no radar. Screenshots appear only inside evidence cards.

## Layout

Full-bleed scroll. No sidebar. The marquee and the nav persist at the top. Each section is a color band (cream → taupe → black, then repeat) with a short display word, a tagline, and cards. Composition is loose: stickers sit in the margins, the ribbon crosses behind the type, the resume card sits off-center. The frame is 1440px. Prose does not center into a narrow poster column.

## Agent Prompt Guide

**Quick Color Reference**
- Text on paper: `#000000`
- Text on black: `#ebe4d8`
- Background bands: `#ebe4d8` / `#c3bdb3` / `#000000`
- Border: `#000000` (1px), or `#ebe4d8` on a black band
- Ribbon and sticker red: `#ff4034` — decorative only
- Filled action: `#000000` background, `#ebe4d8` text
- Outlined action: `#ebe4d8` background, `#000000` text, `#000000` border

**Example Component Prompts**
1. Primary action: Void Black fill, Bone Cream text, 1600px radius, Aeonik 700 at 14px, 0.032em tracking, 1px black border. Never Alarm Red.
2. Hero band: Bone Cream, full bleed. Display headline in Bowlby, line-height 0.80, Void Black, left aligned. An Alarm Red grainy tube behind the type. Tagline in Inter 500 at 24px. Two pills under it: filled “Resume”, outlined “Get in touch”. Rocket, coin, wallet, and check stickers in the margins, 20px radius, 1px black outline, slight rotation.
3. Resume card: 20px radius, Void Black ground, split half cream / half black, “RESUME” in Inter 700, 14px, 0.032em, Bone Cream.
4. Marquee: Void Black band, Inter 700, 12px, 0.032em, Bone Cream, uppercase, scrolling, no inner padding.
5. Secondary band: Ash Taupe, full bleed. A short display word on the left, sticker cluster or ribbon nearby, cards at 20px with 1px black borders and 24px padding.

## Similar Brands

- **Rainbow.me** — sticker-on-paper, many fills, pill buttons
- **Phantom** — oversized display with a decorative form behind the type
- **Backpack** — vivid sticker fills and soft cards on a light canvas
- **Magic Eden** — bold display, tight leading, full-bleed color bands

The resemblance is structural. The color set stays Void Black, Bone Cream, Ash Taupe, and Alarm Red.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors — the existing four, no others */
  --color-void-black: #000000;
  --color-bone-cream: #ebe4d8;
  --color-ash-taupe: #c3bdb3;
  --color-alarm-red: #ff4034;

  /* Typography — Font Families */
  --font-lateral: "Bowlby One", "Antonio", ui-sans-serif, system-ui, sans-serif;
  --font-aeonik-pro: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.56;
  --tracking-caption: -0.01em;
  --text-body: 15px;
  --leading-body: 1.39;
  --tracking-body: -0.01em;
  --text-subheading: 24px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.01em;
  --text-heading-sm: 30px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.01em;
  --text-heading: 64px;
  --leading-heading: 1;
  --tracking-heading: -0.01em;
  --text-display: 200px;
  --leading-display: 0.8;
  --tracking-display: 0px;
  --text-display-lg: 280px;
  --leading-display-lg: 0.76;
  --tracking-display-lg: 0px;

  /* Typography — Weights */
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-128: 128px;
  --spacing-180: 180px;
  --spacing-224: 224px;

  /* Layout */
  --page-max-width: 1440px;
  --section-gap: 48px;
  --card-padding: 24px;
  --element-gap: 12px;

  /* Border Radius */
  --radius-sticker: 20px;
  --radius-cards: 20px;
  --radius-body: 30px;
  --radius-cards-elevated: 40px;
  --radius-pills: 1600px;

  /* Surfaces */
  --surface-bone-paper: #ebe4d8;
  --surface-ash-band: #c3bdb3;
  --surface-black-sheet: #000000;
  --surface-sticker-card: #ebe4d8;
}
```

### Tailwind v4

```css
@theme {
  --color-void-black: #000000;
  --color-bone-cream: #ebe4d8;
  --color-ash-taupe: #c3bdb3;
  --color-alarm-red: #ff4034;

  --font-lateral: "Bowlby One", "Antonio", ui-sans-serif, system-ui, sans-serif;
  --font-aeonik-pro: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;

  --text-caption: 12px;
  --leading-caption: 1.56;
  --tracking-caption: -0.01em;
  --text-body: 15px;
  --leading-body: 1.39;
  --tracking-body: -0.01em;
  --text-subheading: 24px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.01em;
  --text-heading-sm: 30px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.01em;
  --text-heading: 64px;
  --leading-heading: 1;
  --tracking-heading: -0.01em;
  --text-display: 200px;
  --leading-display: 0.8;
  --tracking-display: 0px;
  --text-display-lg: 280px;
  --leading-display-lg: 0.76;
  --tracking-display-lg: 0px;

  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-128: 128px;
  --spacing-180: 180px;
  --spacing-224: 224px;

  --radius-sticker: 20px;
  --radius-cards: 20px;
  --radius-body: 30px;
  --radius-cards-elevated: 40px;
  --radius-pills: 1600px;
}
```
