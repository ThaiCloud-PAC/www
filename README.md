# ThaiCloud — Marketing Landing

Next.js 15 + Tailwind CSS v4 + next-intl v4 landing page for **ThaiCloud (Packiko)**.

> Operational intelligence layer for warehouses and eCommerce fulfillment across Thailand and Southeast Asia.

## Stack

- **Next.js 15** (App Router, React 19, TypeScript)
- **Tailwind CSS v4** (no config file — design tokens via `@theme` in `globals.css`)
- **next-intl v4** with `localePrefix: "as-needed"`
  - Thai (`/`) = default, no prefix
  - English (`/en`)
- Fonts: **Bricolage Grotesque** (display Latin) + **IBM Plex Sans Thai Looped** (Thai) + **JetBrains Mono** (numerals)
- No external image deps — product mockups are inline SVG

## Run locally

```bash
npm install
npm run dev
# → http://localhost:3000        (Thai)
# → http://localhost:3000/en     (English)
```

## Production build

```bash
npm run build
npm run start
```

## Deploy

**Vercel** (recommended): connect this repo to Vercel; defaults work out of the box.

**Other hosts**: any Node.js host supporting Next.js 15 standalone output works. Set Node ≥ 20.

## Project layout

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx       — locale-aware <html lang> + provider
│   │   └── page.tsx         — composes all sections
│   ├── globals.css          — Tailwind v4 + design tokens
│   └── layout.tsx           — root passthrough
├── components/
│   ├── Nav.tsx              — sticky nav over hero
│   ├── Hero.tsx             — dark hero with grid + cyan glow
│   ├── ProductPreview.tsx   — stylized warehouse dashboard (inline SVG)
│   ├── LogoCloud.tsx        — customer marquee
│   ├── Features.tsx         — 4-column with mini SVG visuals
│   ├── Stats.tsx            — 3 big numbers on dark panel
│   ├── OnePlatform.tsx      — 8-module bento grid
│   ├── Testimonials.tsx     — 3 quote cards
│   ├── Stories.tsx          — case study cards w/ metric overlay
│   ├── Security.tsx         — PDPA / ISO / SOC2 badges
│   ├── Pricing.tsx          — 3 tiers, Growth featured
│   ├── FooterCTA.tsx        — closing banner
│   ├── Footer.tsx           — multi-column footer
│   ├── Logo.tsx
│   └── LocaleToggle.tsx     — TH / EN toggle (client component)
├── i18n/
│   ├── routing.ts
│   ├── request.ts
│   └── navigation.ts
├── messages/
│   ├── th.json
│   └── en.json
└── middleware.ts
```

## Editing copy

All text lives in `src/messages/th.json` and `src/messages/en.json`. Keep both files in lockstep — same keys, same shape.

## Design tokens

Brand palette + typography are defined in `src/app/globals.css` under `@theme`. Override there to rebrand.

- `--color-ink-*` — deep navy spectrum (Packiko primary)
- `--color-cyan-*` — electric cyan accent
- `--color-coral-*` — warm secondary accent
- `--color-bone`, `--color-paper` — light neutrals
- `--font-display`, `--font-thai`, `--font-mono`

## Notes

- Customer logos in `LogoCloud` are placeholders — swap with real partners.
- Testimonial names are placeholders — replace with consenting customers + photos.
- Hero `live` counter (231) is hard-coded — wire to a real metric if desired.
- `Features` and `Stats` numbers are illustrative — replace with audited figures before going public.
