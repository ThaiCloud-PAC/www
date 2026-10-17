# thaicloud.com

Marketing site for **ThaiCloud PAC Co., Ltd.** and the Packiko fulfilment
ecosystem. Next.js 16 (App Router) + Tailwind v4 + Framer Motion +
react-three-fiber, exported as a fully static site.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint
npm run build        # static export → out/
npm run maps         # regenerate src/data/maps.json (only after changing the script)
```

`node worker.test.mjs` tests the Worker (canonical-host redirect and the
contact form). To run the Worker over a fresh build, with the contact form
live, put the secrets below in `.dev.vars` (git-ignored) and run
`npm run build && npx wrangler dev`.

## Deploy

The site runs on **Cloudflare Workers** (`thaicloud-prod-www`): `worker.js` in
front of the static export in `out/` (see `wrangler.jsonc`). Cloudflare Workers
Builds deploys every push to **`release`**. `main` is the integration branch and
does not deploy; promote it with a `main` → `release` PR.

## Contact form

`src/components/sections/Contact.tsx` posts JSON to `/api/contact`, which
`worker.js` handles and mails through SendGrid. Set these on the Worker
(Cloudflare dashboard → Workers → `thaicloud-prod-www` → Settings → Variables
and Secrets, as **secrets**, or `npx wrangler secret put <NAME> --name
thaicloud-prod-www`), never in the
repo:

- `SENDGRID_API_KEY`
- `CONTACT_FROM`: a verified SendGrid sender, `web@thaicloud.com` or
  `Website <web@thaicloud.com>`
- `CONTACT_TO` (optional): defaults to hello@thaicloud.com; comma-separate
  several

Without the first two the form answers 500 and visitors see the "email us at
hello@thaicloud.com" fallback.

## The story (homepage)

The homepage tells three stories: **hero → 01 Speed → 02 Intelligence → 03
Network**, then the platform, products, FAQ and the closing call to action.

- `src/components/story/` — the scroll story. `Story.tsx` pins a full-screen 3D
  stage and scrolls twelve text "beats" over it. Scroll position becomes one
  continuous number, the **beat**, and everything that moves with the story is
  a function of it (`timeline.ts` lists the beats and their windows). The
  scene follows one order, PK-10482, through the real flow: wave W-0193 with
  stock allocated (pick slots before reserve, FEFO) → a pick in walking order →
  P-05, scan-verified on VDO Proof → the Dispatch Gate's OMS check (PK-10477,
  cancelled, is blocked to the exception queue) → the carrier → Chiang Mai, and
  then a shop nearby. Change timing in `timeline.ts`, not in the components.
- `SceneLabels.tsx` + `labels.ts` — the labels pinned to things in the scene
  (slot codes, the VDO Proof card, gate results, tasks …) are ordinary DOM, so
  they are translated like the rest of the page. The scene writes each label's
  world anchor; `three/Projector.tsx` moves the labels every frame.
- `src/components/three/` — the 3D scene, all procedural (no model files).
  `world.ts` holds the layout, slot codes and routes (plain data, no three.js,
  so the text panels can share it); `CameraRig.tsx` holds one camera pose per
  beat. three.js loads lazily and only in the browser; without WebGL the text
  still tells the story over a static backdrop, and with reduced motion the
  camera cuts between beats instead of gliding.
- `src/components/ui/` — components from the [21st.dev](https://21st.dev)
  catalogue (Magic UI and Aceternity UI, MIT), taken from their upstream
  registries and adapted: imports point at `framer-motion`, colours use the
  Packiko palette. Each file names its source.
- `src/data/maps.json` — the dotted grid of Thailand, precomputed by
  `scripts/gen-map-points.mjs` (`dotted-map` is a dev dependency only).

## Content, theme and language

- All visible copy lives in `src/i18n/th.ts` and `src/i18n/en.ts`. They share one
  type, so a missing key fails the build. The static HTML is Thai; on a first
  visit, browsers set to Thai stay in Thai and everyone else gets English. The
  header pill switches language and
  the choice is kept in `localStorage`.
- **The site is dark-only** since the story remake: the 3D scene is lit for a
  night warehouse, so there is no light theme or toggle. Colours are tokens in
  `src/app/globals.css` (`night`, `panel`, `ink`, `muted`, and the logo-derived
  `blue` / `cyan` / `teal`, with `orange` as the Speed accent).
- Language-neutral facts (address, phone, registration number) live in
  `src/lib/company.ts`.
- `src/app/opengraph-image.png` is a static asset (a 1200×630 capture of the
  hero); regenerate it if the brand line changes.
