# EvEra — Next.js website

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

This is the new build of the EvEra corporate site. The previous static HTML
site lives in `../website/` and is untouched.

## Pages built

| Route | Status |
|---|---|
| `/` — Home | ✅ Full build |
| `/about` — About EvEra | ✅ Full build |
| `/about/legacy` — Our Legacy | ✅ Full build (timeline, no company names) |
| `/ecosystem` | ✅ Hub overview |
| `/ecosystem/easy-super-charge` | ✅ 9-station table + photo grid |
| `/ecosystem/easyvolt-fleet` | ✅ Full build |
| `/ecosystem/phuket-ev-drive` | ✅ Full build |
| `/ecosystem/flagship-hub` | ✅ Full build (roadmap) |
| `/ecosystem/ev-bus` | ✅ Full build |
| `/corporate-fleet` | ✅ Full build (inquiry form) |
| `/esg` | ✅ Full build |
| `/contact` | ✅ Cards + map + inquiry form |

> No pricing is displayed anywhere — per brief.

## Run locally

```bash
cd website-next
npm install
npm run dev
# → http://localhost:3000
```

Requires Node ≥ 18.18.

## Build for production

```bash
npm run build
npm start
```

## Project layout

```
website-next/
├── app/
│   ├── layout.tsx              ← root layout, fonts, header/footer
│   ├── page.tsx                ← Home
│   ├── corporate-fleet/page.tsx
│   ├── about/page.tsx          (placeholder)
│   ├── ecosystem/
│   │   ├── page.tsx
│   │   └── <six sub-pages>     (placeholders)
│   ├── esg/page.tsx            (placeholder)
│   └── contact/page.tsx
├── components/
│   ├── Header.tsx              ← sticky nav + mobile menu
│   ├── Footer.tsx              ← navy footer with contact details
│   ├── FleetInquiryForm.tsx    ← Corporate Fleet form (stub submit)
│   ├── PagePlaceholder.tsx     ← shared "coming soon" layout
│   └── Icon.tsx                ← inline SVG icon set
├── lib/site.ts                 ← brand constants (nav, stats, fleet, stations)
├── public/
│   ├── favicon.svg
│   └── assets → ../../assets   ← symlink to project assets/ folder
├── tailwind.config.ts          ← brand colors + theme tokens
├── postcss.config.mjs
├── next.config.mjs
└── tsconfig.json
```

## Brand tokens (in `tailwind.config.ts`)

- `navy` `#1A2E4A` (default), `navy-alt` `#243B55`
- `brand.green` `#2DB84B`, `brand.green-dark` `#1A7A2E`, `brand.green-bg` `#E8F8EC`
- `ink` `#1A1A2E`, `ink-mid` `#4A6080`, `ink-light` `#8FA3BC`
- `line` `#E2E8F0`, `canvas` `#F5F7FA`

Fonts: `Inter` (EN body + display) + `Sarabun` (Thai), loaded via `next/font/google`.

## Forms & API

- `POST /api/inquiry` — accepts JSON `{ name, company, email, phone, segment?, size?, message?, source }`,
  validates, and currently logs to the server console. Wire to a production
  transport (Resend, SMTP, Slack, CRM) inside `app/api/inquiry/route.ts`.
- Used by both `FleetInquiryForm` (Corporate Fleet) and `ContactInquiryForm` (Contact).

## SEO

- `app/sitemap.ts` → `/sitemap.xml`
- `app/robots.ts` → `/robots.txt`
- Per-page `<title>` and `<meta description>` via App Router `metadata` exports.
- **JSON-LD schemas:**
  - Organization (root `app/layout.tsx`)
  - LocalBusiness (Home `app/page.tsx`)
  - FAQPage (Corporate Fleet, Easy Super Charge, ESG)
  - BreadcrumbList (Corporate Fleet, Easy Super Charge, ESG hero)
- Open Graph + Twitter Card images per page.
- Bilingual keywords (EN + TH) in metadata.
- Descriptive `alt` text on every image.

## i18n (EN / TH)

- Cookie-based locale toggle (`evera_locale`).
- Visible chrome translated: nav, footer, primary CTAs, Home hero.
- Body content remains in English with a small notice on the Thai variant.
- Files:
  - `lib/i18n/dictionary.ts` — strings dictionary (extend as needed)
  - `lib/i18n/I18nProvider.tsx` — client Context + `useI18n()` hook
  - `components/LanguageSwitcher.tsx` — EN / TH pill toggle (in Header)
- To translate more strings: add keys to `dictionary.ts` (EN + TH), then
  consume via `const { t } = useI18n()` inside any client component.

## Analytics

Set `NEXT_PUBLIC_GA_ID` (e.g. `G-XXXXXXXXXX`) and the `<Analytics />`
component in the root layout will inject GA4. Leave it empty to disable.

## Environment variables

See `.env.example`:

- `NEXT_PUBLIC_SITE_URL` — production URL used in `sitemap.xml` and `robots.txt`
- `NEXT_PUBLIC_GA_ID` — optional GA4 measurement ID

## Next steps

1. Wire `/api/inquiry` to a real delivery channel (Resend / SMTP / Slack / CRM).
2. Add Thai language toggle (proposed: `next-intl` with `[locale]` segment).
3. Replace the Google Maps embed with real Katu Hub coordinates.
4. Run a Lighthouse pass and tighten `<Image>` sizes / blur placeholders.
