# EvEra Website — Production Setup Guide

This guide takes you from a working local site to a live, indexed, production
deployment at **https://evera.asia**.

**Stack:** Porkbun (registrar) → Cloudflare (DNS + CDN) → Vercel (hosting) →
Resend (email) → Google Search Console (SEO) → Google Analytics (analytics).

You handle: account creation, payment, paste-in keys.
The code is already prepared. You only paste tokens into Vercel env vars.

Total time end-to-end: **~60–90 minutes**.

---

## Step 1 — Connect Cloudflare to your Porkbun-registered domain (≈15 min)

You already have `evera.asia` registered at Porkbun. Now point its
nameservers at Cloudflare so Cloudflare manages DNS + CDN + security.

### 1a. Add the site to Cloudflare

1. Log in to [dash.cloudflare.com](https://dash.cloudflare.com).
2. **+ Add a site** → enter `evera.asia` → choose the **Free** plan.
3. Cloudflare will scan for existing DNS records (likely empty since the
   domain is fresh from Porkbun) and show **2 nameservers** to use, e.g.:
   ```
   xxx.ns.cloudflare.com
   yyy.ns.cloudflare.com
   ```
   Keep this tab open — you need these in step 1b.

### 1b. Update nameservers at Porkbun

1. Log in to [porkbun.com](https://porkbun.com) → **Domain Management**.
2. Click `evera.asia` → **Authoritative Nameservers**.
3. Replace Porkbun's defaults with the **2 Cloudflare nameservers** from 1a.
4. Save. Porkbun confirms the change.
5. Back in Cloudflare → **Done, check nameservers**. Cloudflare emails you when
   the zone goes **Active** (usually 5–15 minutes, max 24 hours).

> Important: leave **DNSSEC turned off at Porkbun** during this transition. You
> can re-enable it later from Cloudflare's DNS panel.

---

## Step 2 — Deploy to Vercel (≈15 min, free)

1. Push `website-next/` to a GitHub repo (private OK).
2. Sign up at [vercel.com](https://vercel.com) using your GitHub account.
3. **New Project** → import the repo. Vercel auto-detects Next.js. **Deploy**.
4. You get a temp URL like `evera-xxx.vercel.app`. Open it — site is live.

Add these environment variables (Project → **Settings → Environment Variables**):

| Key | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://evera.asia` |
| `INQUIRY_TO_EMAIL` | `ev@easynetwork.co.th` |
| `INQUIRY_FROM_EMAIL` | `EvEra Website <onboarding@resend.dev>` *(temp until step 4)* |

Click **Redeploy** after adding env vars.

### Connect the Vercel project to evera.asia

1. Vercel → Project → **Settings → Domains** → **Add** → `evera.asia`.
2. Vercel asks you to verify ownership by adding a CNAME. **Don't** add it
   directly — instead jump to step 3 below first (we add CNAMEs in Cloudflare).

---

## Step 3 — Point evera.asia at Vercel (DNS records in Cloudflare) (≈10 min)

In Cloudflare → **DNS → Records**, add:

| Type | Name | Target | Proxy |
|---|---|---|---|
| `CNAME` | `@` *(or `evera.asia`)* | `cname.vercel-dns.com` | **DNS only** (gray cloud) |
| `CNAME` | `www` | `cname.vercel-dns.com` | **DNS only** |

> Set the proxy to **DNS only** (gray cloud), not proxied (orange cloud) —
> Vercel handles HTTPS/CDN itself, so Cloudflare proxying causes loops.

Back in Vercel → Domains → click **Refresh**. Within a minute it shows
**Valid Configuration ✓** and provisions an HTTPS certificate.

Open `https://evera.asia` — site is live on the real domain.

---

## Step 4 — Wire the inquiry form via Resend (≈10 min)

The form (`/api/inquiry`) is already coded to use Resend if an API key is set.
Without it, inquiries log to the Vercel server console only.

1. Sign up at [resend.com](https://resend.com) (free 3,000 emails/month).
2. **API Keys** → create a new key → copy it (`re_xxx...`).
3. In Vercel env vars, add:
   - `RESEND_API_KEY` = `re_xxx...`
4. **Verify the sending domain** (recommended):
   - Resend → **Domains** → **+ Add Domain** → enter `evera.asia`.
   - Resend gives you 3 DNS records (TXT for SPF, TXT for DKIM, MX for bounces).
   - Add each in Cloudflare DNS exactly as Resend specifies.
   - Click **Verify** — usually green within 1–5 minutes.
5. Once verified, change `INQUIRY_FROM_EMAIL` in Vercel to:
   - `EvEra Website <noreply@evera.asia>`
6. Redeploy.

**Test:** open `https://evera.asia/corporate-fleet`, scroll to the form, submit
a test inquiry. Email lands in `ev@easynetwork.co.th` within seconds.

---

## Step 5 — Google Search Console (≈10 min)

1. Open [search.google.com/search-console](https://search.google.com/search-console).
2. **+ Add property** → **URL prefix** → enter `https://evera.asia`.
3. Verification → choose **HTML tag** → copy the `content="..."` value.
4. In Vercel env vars, add:
   - `NEXT_PUBLIC_GOOGLE_VERIFICATION` = `<the content value>`
5. Redeploy.
6. Back in Search Console → click **Verify**. ✓
7. **Sitemaps** → submit `https://evera.asia/sitemap.xml`.

> The site is configured so the verification meta tag only renders when the
> env var is set. Leave it empty until you have the real value.

---

## Step 6 — Link your existing Google Business Profile (≈5 min)

You already have a GBP for the charging station. Link it:

1. In your GBP listing, set **Website** = `https://evera.asia`.
2. Add categories: "Electric vehicle charging station", "Car rental agency",
   "Taxi service" (multi-category supported).
3. Confirm: hours, address, phone (`092-279-6111`) all match the website.
4. Add 6+ photos: stations, fleet, team, storefront.

GBP is the single strongest local-search signal in Thailand.

---

## Step 7 — Google Analytics 4 (optional, ≈5 min)

1. [analytics.google.com](https://analytics.google.com) → create GA4 property
   → web stream `https://evera.asia` → copy **Measurement ID** (`G-XXXXXXXXXX`).
2. Vercel env vars → `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX`.
3. Redeploy.

---

## Quick deployment checklist

- [ ] Cloudflare zone `evera.asia` shows **Active**
- [ ] Vercel project deployed, env vars set
- [ ] Cloudflare DNS: CNAME `@` and `www` → `cname.vercel-dns.com` (DNS only)
- [ ] Vercel Domains: `evera.asia` shows **Valid Configuration ✓**
- [ ] HTTPS green at `https://evera.asia`
- [ ] Resend API key set, sending domain verified, test inquiry received
- [ ] `noreply@evera.asia` configured as `INQUIRY_FROM_EMAIL`
- [ ] Search Console verified, sitemap submitted
- [ ] GBP linked to website
- [ ] GA4 measurement ID set (if desired)

## Operating notes

- **Nameserver propagation** at Porkbun → Cloudflare typically takes 5–15 min
  but ICANN allows up to 24h. Cloudflare emails you when zone goes Active.
- **DNS records** added at Cloudflare propagate in seconds globally.
- **Search Console first index** typically takes 3–7 days. Speed up specific
  pages with **URL Inspection → Request Indexing**.
- **Form failure mode:** if `RESEND_API_KEY` is removed/wrong, the form
  returns 502 to the user. Always keep the key set in production.
- **Renewal:** domain renewal happens at Porkbun (yearly). Cloudflare and
  Vercel are free at the levels we use.
