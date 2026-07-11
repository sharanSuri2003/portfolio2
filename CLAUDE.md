# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server at http://localhost:3000
- `npm run build` — production build (static export; output goes to `out/`)
- `npm run lint` — run ESLint via Next.js

There is no test framework in this project.

## Architecture

Personal portfolio site built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, and shadcn/ui components. It is configured as a **static export** (`output: "export"` in `next.config.ts`, images unoptimized), so no server-side features (API routes, server actions, dynamic rendering) can be used.

### Pages

Routes live in `src/app/`: `/` (home), `/work`, `/projects`, and `/blog`. All pages are client components (`"use client"`) because they rely on framer-motion animations and `next-themes`.

### Animation system

Animation is central to this codebase and spans multiple files:

- `src/app/template.tsx` — wraps every page in an `AnimatePresence` transition keyed on pathname (blur + slide in/out). It also temporarily disables body scrolling during transitions with a timeout matched to the animation durations — if you change transition durations there, update the timeout too.
- `src/app/page.tsx` — the home page runs a staggered intro sequence (name → description words → buttons → navbar → highlight chips) using `useAnimate`. It uses `sessionStorage.isLoaded` to skip the intro (duration 0) on repeat visits within a session. The navbar's initial hidden state is set in `navbar.tsx` via the `isHome` prop, and the home page animation reveals it by targeting the `.navbar` class — these two files are coupled.
- Animations target elements by class names (`.name`, `.description`, `.wv`, `.resumebutton`, `.navbar`, `.chip`), so renaming those classes breaks the sequences.
- The `motion` package is imported as `framer-motion` in source files.

### Design system, theming, and UI

- The site follows a dark-first editorial design system: near-black warm canvas, cream ink (never pure white), Instrument Serif display headlines (`font-display` utility), Inter for UI text, green/violet/peach accents, and pill/soft-cornered components only. Palette tokens (`--bg-canvas`, `--ink-cream`, `--accent-green`, chip colors, etc.) live in `src/app/globals.css` and are mapped onto the shadcn token names (`--background`, `--card`, …), so shadcn components pick up the system automatically.
- `next-themes` with class-based themes, `defaultTheme='dark'`; the `.light` theme is a cream editorial inverse (dotted-grid background instead of glyph noise). `ThemeProvider` and a fixed `ThemeBtn` toggle are mounted in `src/app/layout.tsx`.
- `src/components/atmosphere.tsx` renders the fixed background glyph field + radial glow (dark theme only). Glyph positions are a hardcoded static array — keep them deterministic to avoid hydration mismatches.
- `src/components/dashboard.tsx` is the light-themed mock "dashboard" showcase below the home hero, with a scroll-linked parallax reveal. It intentionally hardcodes light-surface colors so it stays light in both themes.
- shadcn/ui (new-york style) components in `src/components/ui/`; add new ones with the shadcn CLI per `components.json`. Path alias `@/*` maps to `src/*`.
- Tailwind v4 with CSS-variable design tokens defined in `src/app/globals.css` (no tailwind.config file).
- Navbar is a floating detached pill (never full-width) implemented as a Radix `ToggleGroup` whose item values are route paths pushed to the router.

### Assets

- Custom `happy-season` font files are in `src/fonts/` (currently unused); Inter and Instrument Serif are loaded via `next/font/google` in the root layout.
- `public/` holds the resume PDF and images referenced by pages.
