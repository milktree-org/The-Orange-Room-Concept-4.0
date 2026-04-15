# Session Log

A running log of work sessions on the Orange Rooms website. Most recent at the top.

Each session entry documents: goal, changes made, verification evidence, outstanding items. This is the durable memory that survives chat sessions — read this before picking up ongoing work.

---

## 2026-04-15 — Analytics hardening + SEO/GEO foundation

**Goal:** Audit the existing Google Analytics install, fix any leaks, then build the full SEO + GEO foundation (Search Console ready, AI-search ready).

### Part 1 — Google Analytics hardening

**Issues found in the pre-existing GA setup (in `app/layout.tsx`):**
1. Malformed measurement ID `G-Z9N56D6PE` (only 9 chars — GA4 IDs are 10). Corrected to `G-Z9N5G6Q6PE`.
2. No SPA page_view tracking — client-side `router.push` navigation between 19 routes fired zero page_views.
3. No GDPR/PECR consent handling — GA loaded and set cookies before any user consent. Legal liability for a UK business.
4. No dev/prod gating — localhost `npm run dev` traffic polluted the production GA property.
5. Measurement ID was hardcoded instead of being an env var.

**Fix implemented:**
- New `components/GoogleAnalytics.tsx` — production-only gate, Google Consent Mode v2 defaults (all denied), uses `@next/third-parties/google` for automatic SPA page_view tracking via Next.js router events.
- New `components/CookieConsent.tsx` — accessible GDPR banner with Accept/Reject, localStorage persistence, calls `gtag('consent', 'update', ...)` on choice. Re-applies consent on return visits.
- `app/layout.tsx` — replaced raw `<Script>` tags with `<GoogleAnalytics />` and `<CookieConsent />` components.
- `.env.example` — documents `NEXT_PUBLIC_GA_ID` (must be set in Vercel env for production + preview).
- `.claude/launch.json` — added a `prod` config for `npm run start` (port 3000) so production build can be tested locally.
- `package.json` — added `@next/third-parties@^16.2.3`.

**Verified end-to-end in a real browser against the production build:**
- ✅ Correct measurement ID `G-Z9N5G6Q6PE` loads
- ✅ Consent Mode v2 defaults fire BEFORE gtag.js (`consent default { all denied }` is `dataLayer[0]`)
- ✅ Cookie banner renders on first visit
- ✅ Reject flow stores `rejected`, fires `consent update { analytics_storage: 'denied' }`
- ✅ Accept flow stores `accepted`, fires `consent update { analytics_storage: 'granted' }`
- ✅ SPA navigation (`/` → `/book`) fires `gtm.historyChange-v2` — SPA page_view tracking works
- ✅ TypeScript clean, all 17 routes prerender static
- ✅ GA is gated out in dev (`NODE_ENV !== 'production'` returns null)

### Part 2 — SEO & GEO foundation

**Baseline:** Only `app/layout.tsx` had metadata. No sitemap, no robots, no per-page metadata, no structured data, no canonical URLs, no GEO files. The site was essentially invisible to Search Console beyond what Google could scrape raw.

**Architecture:** Single source of truth in `lib/seo.ts`. Every SEO artifact (sitemap, robots, llms.txt, JSON-LD, per-page metadata) reads from this one file. Update the business facts there and everything else updates automatically.

**New files:**
- `lib/seo.ts` — `SITE` constants (brand, domain, address, phone, email, opening hours, socials, awards, default OG image) + `ROUTES` (all 17 public routes with SEO priorities and change frequencies) + `absoluteUrl()` helper.
- `lib/schema.ts` — JSON-LD generators: `localBusinessSchema()` (BarOrPub with address, hours, awards, menus), `organizationSchema()` (brand entity with sameAs socials + contactPoints), `webSiteSchema()` (stable `@id` referenced by WebPage), `webPageSchema()` (per-page), `breadcrumbSchema()`.
- `app/sitemap.ts` — generates `/sitemap.xml` from `ROUTES` with lastModified, changeFrequency, priority.
- `app/robots.ts` — generates `/robots.txt`. Allows all crawlers, disallows `/_next/` and `/api/`, explicitly allows 18 AI crawlers (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, Bytespider, CCBot, cohere-ai, Meta-ExternalAgent, Meta-ExternalFetcher, Amazonbot, DuckAssistBot). Declares sitemap + host.
- `app/llms.txt/route.ts` — GEO standard index file (llmstxt.org), dynamically built from `SITE` so facts never drift.
- `app/llms-full.txt/route.ts` — expanded GEO file with venue space descriptions, offerings, citation-ready business info.
- `page-components/HomePage.tsx` — client component extracted from `app/page.tsx` so the route can be a server component with a `metadata` export.

**Modified files:**
- `app/layout.tsx` — added `metadataBase`, default OG image + dimensions, Twitter `summary_large_image` card, keywords, robots directives, title template (non-duplicating). Injects site-wide JSON-LD `@graph` containing LocalBusiness + Organization + WebSite on every page.
- `app/page.tsx` — now a server component; exports `metadata` and renders `<HomePage />`.
- All 16 other `app/*/page.tsx` files — added unique `metadata` export (title, description, canonical, OG) tailored to each route's keyword angle. No brand duplication.

**Verified end-to-end:**
- ✅ `npm run build`: 23 routes prerender static (17 pages + sitemap.xml + robots.txt + llms.txt + llms-full.txt + not-found + favicon)
- ✅ `/sitemap.xml`: valid XML, 17 URLs, correct priorities
- ✅ `/robots.txt`: AI crawlers explicitly allowed, sitemap + host declared
- ✅ `/llms.txt`: built from SITE constants, correct facts
- ✅ `/llms-full.txt`: deep venue narrative content
- ✅ Site-wide JSON-LD: `BarOrPub` + `Organization` + `WebSite` graph, valid `PostalAddress` (SO15 2EJ), opening hours in Schema.org format, awards, sameAs socials
- ✅ 11 sample routes checked: all have unique title, description, canonical, OG title, JSON-LD present
- ✅ No title duplication (template fixed to `%s` to avoid double-brand)
- ✅ TypeScript clean

### Outstanding / next session candidates

**Search Console actions the user needs to do after deploy:**
1. GSC → Sitemaps → submit `https://orangerooms.co.uk/sitemap.xml`
2. URL Inspection → Request Indexing for `/`, `/book`, `/tables`, `/cocktail-bar`, `/brunches`, `/private-hire`
3. [Rich Results Test](https://search.google.com/test/rich-results) — verify `BarOrPub` + `Organization` detected
4. Bing Webmaster Tools — import from Search Console (needed for Microsoft Copilot / Bing AI)
5. Google Business Profile — claim / verify; match `lib/seo.ts` facts exactly

**Vercel env var required:**
- `NEXT_PUBLIC_GA_ID=G-Z9N5G6Q6PE` on Production + Preview environments

**Not yet implemented (Phase 5+):**
- FAQ schema on key pages (surfaces in SGE/ChatGPT answers)
- Event schema on `/events` page (needs event data source)
- Menu schema on `/food-menu` and `/drinks-menu`
- Image alt text audit across gallery sections
- Visible breadcrumbs UI + schema (generator exists, unused)
- TikTok/YouTube/X URLs to add to Organization `sameAs`
- Custom 1200×630 OG image (current default 1398×932 works but isn't optimal aspect)
- Explicit `geo` coordinates in LocalBusiness (currently relies on Google geocoding the address)

---
