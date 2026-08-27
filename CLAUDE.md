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

Routes live in `src/app/`: `/` (home), `/work`, `/projects`, `/blog`. `Nav` and `SiteFooter` mount once in `layout.tsx`; `template.tsx` handles the route transition.

## Design system

The site implements **DESIGN.md** — the Cards Against Humanity "Climate Catastrophe" emergency-broadcast system. Read that file before changing anything visual; below are the parts that are easy to break by accident.

- **Four colors, no more.** Void Black `#000000`, Bone Cream `#ebe4d8` (the ink — *not* white), Ash Taupe `#c3bdb3` (button shadow only), Alarm Red `#ff4034`.
- **Red is a signal, never a surface.** It is reserved for hazard marks, radar rings, flames, and strikethrough annotation links. Never a background fill behind body content, and never a second accent alongside it.
- **No neutral grays.** Go black → Bone Cream directly. A dimmed cream (`/60`) is a gray by another name.
- **Print, not app.** No gradients, no photography, no soft shadows, no hover lifts. The one shadow in the system is the hard `0 4px 0 #c3bdb3` under a pill button.
- **Radius is extreme or nothing** — 120px buttons, 80px compact, 10px inputs, 2520px blob card. There are no 4–8px radii.
- **Centered single column, `--page-max-width: 680px`.** Prose is centered; longer measures destroy the poster rhythm. Decorative layers go full-bleed behind it.
- **Display face never below 32px.** Bebas Neue is unreadable at body sizes. If it doesn't fit, change the layout, not the size.

### Tokens and classes

Tokens live in `src/app/globals.css`. Three things there are load-bearing and non-obvious:

1. **The font stacks are declared in a plain `:root` block, not in `@theme`.** Tailwind only emits a theme variable some *utility* references, and the hand-written component classes reach these through raw `var()` — declared inside `@theme` they get tree-shaken and every face silently falls back.
2. **The `next/font` variable classes go on `<html>`, not `<body>`.** A custom property whose value references an undefined variable computes to guaranteed-invalid, and descendants inherit the invalid value rather than re-resolving it — so `--stack-display` at `:root` needs `--font-bebas` at `:root` too.
3. **`cn()` extends tailwind-merge with the custom font sizes** (`src/lib/utils.ts`). Without that registration tailwind-merge reads `text-heading` as a text *colour*, so `cn("text-heading", "text-bone-cream")` silently drops the size and the element falls back to 16px. Add any new `--text-*` token to that list.

Display sizes ramp with `clamp()` and ceiling at the documented 202px / 100px / 40px; the spec values are the desktop end. Spacing tokens are literal — `--spacing-30` is 30px, so `gap-30` is 30px.

Hand-written classes: `.display-type`, `.prose-column`, `.link-underline`, `.link-strike`, `.pill` / `.pill-compact` / `.pill-outline`, `.press`.

Fonts are the substitutes DESIGN.md names: **Bebas Neue** for Spektra (display only, uppercase, never body), **Inter** for Helvetica Neue LT (all UI and prose).

### Motion

Interaction transitions cap at ~150ms (`--dur-ui`), press feedback at 100ms (`--dur-fast`), always on `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`. Never the built-in curves.

- **The hero intro plays once per session.** `template.tsx` keys on the pathname, so every route change remounts the tree and would restart every CSS animation under it — paying the full ~1.2s cascade on each navigation. `intro-gate.tsx` handles both arrival paths: an inline head script sets `data-intro="done"` from `sessionStorage` before first paint (hard reloads), and an effect flips the same attribute once the cascade finishes (client navigation). `[data-intro="done"]` then sets `animation: none` on `.reveal-line > *`, `.rise-in` and `.ring-in`.
- **Route transitions and the hero load are CSS, not Framer Motion**, because both fire while the browser is painting a new route, where a rAF-driven tween drops frames.
- **Prose sections deliberately do not scroll-reveal.** Fading copy in as the reader arrives is the clearest SaaS tell available and fights the print premise.
- The pill press drives the face down 4px while the shadow collapses by 4px, so it lands exactly where its shadow was.
- Reduced motion keeps colour/opacity/box-shadow transitions and drops movement — gentler, not zero.

### Components

- `hero.tsx` — the poster. Orchestrates the load: radar sweep → wordmark → headline cascade (a **stagger** of masked **reveals**) → prose → CTA, each overlapping the last so it reads as one settling motion.
- `reveal.tsx` — one masked line reveal; give siblings increasing `delay` to stagger them.
- `radar-field.tsx` — concentric ring motif. The two innermost rings are hidden below `md` and the whole field drops to 40% opacity there, or dashed red lines cut straight through 16px prose.
- `hazard-mark.tsx` — red square, white symbol. Glyphs are drawn as the fewest bold shapes that read at 16–24px; the trefoil's blades stop short of the hub or they fuse into one blob, and the skull punches its sockets with `fillRule="evenodd"` so red shows through.
- `flame-band.tsx` — section terminator. Tongues are generated, with a per-tongue `lean`: without the asymmetry the band reads as a row of smooth hills rather than fire.
- `stat-ledger.tsx` — poster-scale numbers, digits rolling on first view. Suffixes render outside `NumberFlow`, which draws its own noticeably smaller than the digits.

### Skiper UI

Only **skiper37** (`NumberFlow`) is still vendored, in `src/components/ui/skiper-ui/`, installed from the registry in `components.json`:

```
npx shadcn add @skiper-ui/skiper37
```

Only some numbers are free; the rest return 401 without a licence key. The previously vendored 31/40/52/58 were removed when the design changed — they are hover-driven, rounded and gradient-laden, which this system rules out.

### Assets

`public/` holds the resume PDF and legacy project imagery. The imagery is currently unused: DESIGN.md rules out photography, so projects are presented as prose with source links.
