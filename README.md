# thaicloud.com

Marketing site for **ThaiCloud PAC Co., Ltd.** and the Packiko fulfilment
ecosystem. Next.js 16 (App Router) + Tailwind v4 + Framer Motion, exported as a
fully static site.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint
npm run build        # static export → out/
```

`npm run dev:swa` runs the Azure Static Web Apps emulator over `npm run dev` so
the contact form's `/api/contact` function is reachable locally (needs the env
vars below).

## Deploy

Pushing to **`release`** triggers `.github/workflows/azure-static-web-apps-*.yml`,
which builds the app (`output_location: out`) and the managed function in `api/`
(`api_location: api`). `main` is the integration branch — it does not deploy.

## Contact form

`src/components/Contact.tsx` posts JSON to `/api/contact`, an Azure Static Web
Apps managed function (`api/src/functions/contact.js`) that sends the message
with SendGrid. Configure these in the Static Web App's application settings —
never in the repo:

- `SENDGRID_API_KEY`
- `CONTACT_TO` (currently hello@thaicloud.com)
- `CONTACT_FROM` (a verified SendGrid sender)

## Content, theme and language

- All visible copy lives in `src/i18n/th.ts` and `src/i18n/en.ts`. They share one
  type, so a missing key fails the build. Thai is the default; the header pill
  switches to English and the choice is kept in `localStorage`.
- Colours are semantic tokens in `src/app/globals.css` (`--surface`, `--ink`,
  `--brand`, …) redefined under `.dark`. **The site is dark by default**, whatever
  the device is set to; the header toggle switches to light and back, and the
  choice is kept in `localStorage`. There is deliberately no "follow the system"
  mode. `<html>` ships with `class="dark"` and a small blocking script in
  `<head>` applies a stored light choice before the first paint.
- Language-neutral facts (address, phone, registration number) live in
  `src/lib/company.ts`.
- `src/app/opengraph-image.png` is a static asset; regenerate it if the brand
  line changes.
