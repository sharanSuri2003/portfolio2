# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server at http://localhost:3000
- `npm run build` — production build (static export; output goes to `out/`)
- `npm run lint` — defined in package.json, but ESLint is **not installed** as a dependency, so this command currently errors

There is no working linter and no test framework in this project.

`next build` and `next dev` share `.next/`, so a build while the dev server is running will break the running server. Stop the server, build, then start it again. To eyeball the real production artifact, build and serve `out/` statically — the export writes `work.html`, not `work/index.html`, so a plain file server needs the `.html` suffix (GitHub Pages does not).

## Deployment

Pushes to `main` trigger `.github/workflows/nextjs.yml`, which builds the static export and deploys `out/` to GitHub Pages (production site: https://sharansuri.in). There is no preview environment — treat pushes to `main` as production releases. SEO/OpenGraph metadata lives in `src/app/layout.tsx`.

## Architecture

Personal portfolio built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS v4, configured as a **static export** (`output: "export"`, images unoptimized), so no server-side features are available.

`src/lib/content.ts` is the single source of truth for every fact the site states — roles, projects, stats, contact details, nav items. Pages are layout only. Change copy there, not in a page.

Routes live in `src/app/`: `/` (home), `/work`, `/projects`, `/blog`. The marquee and `Nav` are fixed in `layout.tsx`; `SiteFooter` closes every page. `template.tsx` does not animate route changes.

## Design system

The site implements **DESIGN.md** — the sticker-sheet scheme (Slush’s structure) painted in the four existing colors. Read that file before changing anything visual; below are the parts that are easy to break by accident.

- **Four colors, no more.** Void Black `#000000` (ink, borders, filled CTAs), Bone Cream `#ebe4d8` (paper, card fills, text on black), Ash Taupe `#c3bdb3` (secondary band and sticker fill), Alarm Red `#ff4034` (ribbon and sticker fill only).
- **Red is a surface, never an action.** It fills the ribbon and stickers. Never a CTA, a link, or a background behind body text.
- **No fifth color, no gradients, no shadows.** A dimmed cream (`/60`) is a gray by another name. Elevation is a color band plus a 1px black outline.
- **Radius is a pill or a soft card.** 1600px on nav, buttons, and tags. 20px on cards, 40px on cards that hold a screenshot. Nothing under 16px.
- **Frame is 1440px, left-aligned, full-bleed bands.** Cream → taupe → black. Display type is a short word; sentences stay in Inter.
- **Display face stays at the display step.** Bowlby One stands in for Lateral. Do not set it at badge or body size, and do not faux-bold it (`font-weight: 800` synthesizes). Line-height stays at 0.75–0.80.

### Tokens and classes

Tokens live in `src/app/globals.css`. Three things there are load-bearing and non-obvious:

1. **The font stacks are declared in a plain `:root` block, not in `@theme`.** Tailwind only emits a theme variable some *utility* references, and the hand-written component classes reach these through raw `var()` — declared inside `@theme` they get tree-shaken and every face silently falls back.
2. **The `next/font` variable classes go on `<html>`, not `<body>`.** A custom property whose value references an undefined variable computes to guaranteed-invalid, and descendants inherit the invalid value rather than re-resolving it — so `--stack-display` at `:root` needs `--font-bowlby` at `:root` too.
3. **`cn()` extends tailwind-merge with the custom font sizes** (`src/lib/utils.ts`). Without that registration tailwind-merge reads `text-heading` as a text *colour*, so `cn("text-heading", "text-bone-cream")` silently drops the size and the element falls back to the body size. Add any new `--text-*` token to that list.

Display sizes ramp with `clamp()` and ceiling at 200px / 280px; the spec values are the desktop end. Spacing tokens are literal — `--spacing-24` is 24px, so `gap-24` is 24px.

Hand-written classes: `.display-type`, `.eyebrow`, `.page-frame`, `.link-underline`, `.link-strike`, `.pill` / `.pill-outline`, `.tag`, `.logo-mark`, `.sticker-card` / `.sticker-card-elevated` / `.sticker-card-ink`, `.marquee-track`.

Fonts are the substitutes DESIGN.md names: **Bowlby One** for Lateral (display only, uppercase, never body or badges), **Inter** for Aeonik Pro (all UI and prose, weights 500 and 700).

### Motion

The collage does not move, except the marquee and a 150ms color flip on button hover (`--dur-ui`, `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`). Never the built-in curves.

- Hover is gated behind `(hover: hover) and (pointer: fine)`.
- `prefers-reduced-motion` stops the marquee and keeps the color change.
- Prose does not scroll-reveal. The email dialog fades opacity only.

### Components

- `hero.tsx` — cream poster. Ribbon behind the display word, stickers in the margins, tagline and actions as children.
- `ribbon.tsx` — flat Alarm Red tube. Grain is an SVG noise filter on that one fill. Sized in the headline's `em` and hung off the headline, so it stays inside the word's band (never under the eyebrow or tagline) and climbs out top-right.
- `sticker.tsx` — rocket, coin, wallet, check. 20px radius, 1px outline, slight rotation.
- `marquee.tsx` — the only loop.
- `section-band.tsx` — full-bleed cream / taupe / black ground. Neighbours must differ, and the footer is taupe, so no page ends on a taupe band.
- `stat-ledger.tsx` — four sticker cards. Numbers are static.

### Assets

`public/` holds the resume PDF and project screenshots. Screenshots appear only inside a 40px sticker card — that outline is what makes a photo a sticker.
