# Session Log

A running log of work sessions on the Orange Rooms website. Most recent at the top.

Each session entry documents: goal, changes made, verification evidence, outstanding items. This is the durable memory that survives chat sessions — read this before picking up ongoing work.

---

## 2026-04-30 — Footer credit: Milktree Agency → Rifly.ai with GA tracking

**Goal:** Swap the "Website by Milktree Agency" credit in the footer to point to Rifly.ai, keep the new-tab behavior, and instrument the click so it can be tracked in Google Analytics.

### Changes (`components/Footer.tsx`)
- Updated the bottom credit link from `MILKTREE AGENCY` → `RIFLY.AI`.
- Changed `href` from `https://milktreeagency.com/` → `https://rifly.ai`.
- Kept `target="_blank"` + `rel="noopener noreferrer"` so the link opens in a new tab safely.
- Added an `onClick` handler that fires a GA4 custom event:
  - Event name: `rifly_footer_click`
  - Parameters: `outbound_url`, `link_text`, `source: 'footer'`
- Inline comment explains where to find the events in GA4 (Reports → Engagement → Events).

### How to find the clicks in GA4
1. GA4 → Reports → Engagement → Events
2. Look for event name `rifly_footer_click`
3. Click into it to see the parameters per event (outbound_url, link_text, source)
4. To create a custom report or audience, mark the event as a Conversion in Admin → Events.

(Note: respects existing Consent Mode — no event fires if user rejected analytics on the cookie banner, since `gtag` is gated by Consent Mode v2 defaults.)

### Verification
- ✅ `npm run build` clean, all 23 routes prerender static.
- ✅ Production deploy via `vercel deploy --prod`.

---

## 2026-04-30 — Spelling sweep: Figarati → Figurati

**Goal:** Client (re-)flagged that "Figarati" appears on the site instead of the correct partner name "Figurati". A previous pass on 2026-02-25 fixed it across most surfaces, but three stragglers had crept back / been missed.

### Fixed
- `page-components/BrunchesPage.tsx:108` — user-visible copy: "pizza from our **Figurati** kitchen" (was Figarati).
- `page-components/FoodMenuPage.tsx:67` — JSX comment header `{/* FIGURATI PIZZA COLLABORATION SECTION */}`.
- `page-components/FoodMenuPage.tsx:229` — JSX comment header `{/* FIGURATI PIZZA MENU GRID */}`.

### Verification
- ✅ Repo-wide `grep -i figarati` returns zero matches across `.tsx/.ts/.md/.html/.json/.css` (excluding `node_modules`/`.next`).
- ✅ No asset filenames contain `figarati`.
- ✅ `npm run build` clean, all 23 routes prerender.
- ✅ Production deploy via `vercel deploy --prod`.

---

## 2026-04-30 — Footer spinner: permanent fix for "SOUTHAMPTON → SOUT" truncation

**Goal:** Client (Unnati) flagged a spelling issue in the footer brand badge: text reads `SOUT` instead of `SOUTHAMPTON`. User noted this had been "fixed before" — confirmed in the 2026-03-19 entry ("Fix footer spinner: remove duplicate text, add Southampton"). Time to make it not regress again.

### Root cause
`components/Footer.tsx` renders the rotating brand badge using SVG `<text>` + `<textPath>` wrapped around a circle of radius 37. The path's circumference is `2π × 37 ≈ 232.48` units. The string `• HIGH ON LIFE • EST. 2001 • ORANGE ROOMS • SOUTHAMPTON •` at `text-[7.5px]` with `tracking-[0.1em]` was rendering at right around 235–240 units depending on font weight and letter-spacing — over the path length, so SVG silently truncated the overflow. "SOUTHAMPTON" lost its trailing `-HAMPTON`.

This is fragile: any tweak to font weight, tracking, font loading, or even browser-specific font metrics can push it over the line. That's why it kept regressing.

### Fix
Added `textLength="230"` and `lengthAdjust="spacingAndGlyphs"` to the `<textPath>` element. SVG now scales the text to fit exactly into 230 units regardless of glyph metrics — the truncation can no longer happen.

Also dropped the leading whitespace inside the textPath (was three spaces `   • HIGH ON LIFE…`) which was eating path space without contributing visible content. Trailing `•` removed since it had been there only as visual padding to push the truncation past `SOUTHAMPTON`.

Inline comment added in the source warning future devs not to remove the `textLength` attributes, citing this regression history.

### Verification
- ✅ `npm run build` clean, 23 routes prerender
- ✅ Production deploy via `vercel deploy --prod`
- Visual confirmation needed on https://orangerooms.co.uk after deploy lands — should show full `• HIGH ON LIFE • EST. 2001 • ORANGE ROOMS • SOUTHAMPTON` with even spacing around the circle.

### Outstanding
- Ongoing: Vercel Git auto-deploy still broken — commits go to GitHub but don't trigger Vercel builds; needs disconnect+reconnect in project settings → Git.

---

## 2026-04-29 — Meta Pixel install for ad tracking

**Goal:** Install Meta Pixel `332478784478463` so the client can run Facebook/Instagram ad campaigns. Client (Peter Toland) flagged this as a blocker — campaigns can't launch without the pixel firing.

### Implementation

Followed the same pattern as the existing Google Analytics setup: production-only, env-var-driven, consent-gated.

**New file:**
- `components/MetaPixel.tsx` — Meta Pixel base script wrapped for Next.js App Router.
  - Returns `null` outside production (`NODE_ENV !== 'production'`) so dev traffic never reaches the Pixel.
  - Reads pixel ID from `NEXT_PUBLIC_META_PIXEL_ID` env var.
  - Calls `fbq('consent', 'revoke')` BEFORE `fbq('init', ...)` so the pixel queues hits but doesn't transmit until consent is granted (UK PECR/GDPR compliant).
  - Renders a `<noscript>` 1×1 tracking image fallback.
  - SPA `PageView` tracking via a `MetaPixelRouteTracker` client component that listens to `usePathname` + `useSearchParams` (wrapped in `<Suspense>` because `useSearchParams` suspends during prerender).

**Modified files:**
- `components/CookieConsent.tsx` — Accept now also fires `fbq('consent', 'grant')` + `fbq('track', 'PageView')` (since the initial PageView was queued under revoked consent). Reject fires `fbq('consent', 'revoke')`. Visit-on-return logic re-applies grant for both gtag and fbq when localStorage shows previous accept.
- `app/layout.tsx` — added `<MetaPixel />` next to `<GoogleAnalytics />` in `<body>`.
- `.env.example` — documented `NEXT_PUBLIC_META_PIXEL_ID` with same compliance notes.

### Vercel env config
- ✅ `NEXT_PUBLIC_META_PIXEL_ID=332478784478463` set on Production
- ⚠️ Preview environment NOT set — Vercel CLI v50/v52 has a `--yes` regression that prevents non-interactive add for Preview. To set Preview manually: project settings → Environment Variables → add `NEXT_PUBLIC_META_PIXEL_ID` for Preview. Not blocking for ads (Production is what runs on `orangerooms.co.uk`).

### Verification
- ✅ `npm run build` — type check clean, all 23 routes prerender static
- ✅ Window type declaration conflict between `MetaPixel.tsx` and `CookieConsent.tsx` resolved (single declaration in CookieConsent; TS merges globals)
- ✅ Production deploy via `vercel deploy --prod` (Git auto-deploy still broken — see 2026-04-24 entry)

### Outstanding
- Set `NEXT_PUBLIC_META_PIXEL_ID` on Preview env in Vercel dashboard (CLI bug workaround)
- Verify pixel fires on `orangerooms.co.uk` using [Meta Pixel Helper](https://chromewebstore.google.com/detail/meta-pixel-helper) browser extension after deploy lands
- Confirm with Meta Events Manager that PageView events arrive
- **FIXR question from same client email:** Peter asked whether Events page and Bottomless Brunches should be merged into one (since FIXR API serves both). Needs a product decision before any code work — not actioned in this session.
- Reconnect Vercel Git integration to `milktree-org` so `git push` resumes auto-deploys (carried over from 2026-04-24)

---

## 2026-04-24 — Hero restructure per client feedback

**Goal:** Pull latest from GitHub, run locally, address client feedback on the homepage hero.

### Environment sync
- Pulled `5edab20..c7ece47` from `origin/main` (4 commits behind; included the Vite→Next.js migration plus analytics/SEO hardening).
- Removed stale `node_modules` + `package-lock.json` and reinstalled against the new Next.js 16.2.4 / React 19.2.4 / Tailwind 4.2 stack.
- Started `npm run dev` (Turbopack) — `http://localhost:3000` returned 200 OK, clean compile.

### Client feedback (Unnati, screenshot)
1. Remove the large "ORANGE ROOMS" wordmark — the header logo already covers branding, the wordmark was pushing the tagline down and duplicating the brand.
2. Elevate "Southampton's legendary sanctuary…" — this is the positioning line and deserves the hero slot.
3. The floating cocktail illustration was visually crossing over "Good Vibes" text, making the tagline hard to read.

### Changes (`components/Hero.tsx`)
- Deleted the two-tone `Orange / Rooms` `<h1>` block.
- Promoted the tagline to the hero `<h1>`: *"Southampton's Legendary Sanctuary For Good Vibes."* — Title Case, with "Legendary" and "Good Vibes" in brand orange for accent.
- Reduced headline sizing by 20% after first pass felt too heavy (final: `32 / 42 / 51 / 67 px`).
- Cocktail illustration now:
  - Hidden below `lg` breakpoint (it was the main culprit on tablet/mobile per the screenshot).
  - Translated further off-screen (`translate-x-[45%]`).
  - Dropped behind content (`z-0`, content is `z-20`).
  - Opacity reduced to 30% so it reads as ambient decoration, not a foreground element.
  - `alt=""` + `aria-hidden="true"` since it's decorative.

### Verification
- ✅ Turbopack hot-reload compiled cleanly after each edit (no TS or build errors in the dev log).
- ✅ Localhost renders the new headline without overlap at tested breakpoints.

### Outstanding
- Visual QA on mobile at actual device widths (dev verification was localhost only).
- Confirm with client that the new Title Case + color emphasis read as intended on production.

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

## 2026-03-29 — Gift Vouchers link

**Goal:** Surface the Gift Vouchers CTA across primary navigation surfaces.

- Added a Gift Vouchers link to the desktop nav, mobile menu, and footer.
- No routing / page work — link points to the existing vouchers destination.

---

## 2026-03-19 — Vite → Next.js migration + navigation/mobile polish

Multi-commit session; the big architectural turning point for the project.

### Vite SPA → Next.js App Router migration
**Why:** The site was a single-route Vite SPA — every page rendered client-side, no per-page metadata, nothing for search engines to index. Moving to Next.js App Router was a pre-requisite for the SEO work in the 2026-04-15 session.

- Deleted `App.tsx`, `index.html`, `index.tsx`, `vite.config.ts` (the Vite entrypoints).
- Created `app/layout.tsx` as the new root, `app/page.tsx` + one `app/<route>/page.tsx` per public route (17 routes total).
- Renamed `pages/` → `page-components/` to avoid collision with Next.js routing conventions. Imports updated site-wide.
- Added `next.config.ts`, `postcss.config.mjs`, new `tsconfig.json` aligned to Next.js defaults.
- Added `components/LayoutShell.tsx` to host the persistent chrome (header/sidebar/footer) under the App Router.

### 301 redirects for legacy WordPress URLs
- Configured `next.config.ts` `redirects()` to permanently redirect old WP paths to the new routes — preserves any existing inbound SEO equity.

### Menu structure rename
- `Venues` → `Venue`, `Lineup` → `Events`.
- Moved Neon Jungle under the new Events grouping per the client's IA preference.

### Mobile + polish fixes
- Fixed the mobile header logo smushing at very small viewport widths.
- Fixed footer link targets, adjusted the site-wide loading spinner, tightened mobile menu transitions.
- Added a custom 404 page (`app/not-found.tsx`) styled to match the brand instead of the default Next.js 404.
- Added favicon (`public/favicon.svg`).
- Initial Google Analytics tag install (measurement ID had a typo — fixed later on 2026-04-15).

### Image asset work
- Replaced all external `cdn.prod.website-files.com` (Webflow) and `.wp-assets` URLs with local images under `public/photos/`.
- Replaced the homepage hero video with a static image (performance + mobile battery).
- Added missing image assets flagged by broken references.

### Link cleanup
- Replaced every placeholder `href="#"` across components with real URL paths.

---

## 2026-03-11 — Events page

**Goal:** Give the site a real Events surface and hook up ticketing.

- Built the Events page with a FIXR ticket widget embed.
- Added Events links into the primary navigation paths.
- Hooked the page into the Vite-era routing (this was pre-Next.js migration).

---

## 2026-03-10 — DMN booking widget

**Goal:** Bring the DMN table booking widget into the main Book flow.

- Integrated the DMN booking widget into `components/BookingSection.tsx`.
- Applied a dark theme + full-width layout so the widget matched the site aesthetic instead of the default white branded look.

---

## 2026-02-25 — Figurati pizza menu (copy pass)

- Replaced the placeholder food menu content with the real Figurati pizza collab menu supplied by the client.

---

## 2026-02-23 — Content + content widgets batch

- Updated site-wide content copy for the Figurati pizza collab launch.
- Fixed carousel glitches reported after the 2026-02-21 image swap.
- Wired up the initial booking widget scaffolding (precursor to the DMN work on 2026-03-10).
- Migrated additional images to local assets.

---

## 2026-02-21 — Local image assets

- First pass of migrating images from remote URLs to local files under `public/photos/`.
- Applied across the homepage and individual venue pages.

---

## 2026-02-12 — Booking page, food menu, layout/mobile fixes

Largest pre-migration session by commit count.

- Added a dedicated Booking page.
- Implemented the interactive food menu display.
- Resolved layout clipping issues across several sections.
- Fixed footer alignment at edge breakpoints.
- Improved the mobile menu behaviour (open/close, focus trap).
- Added several new page views and navigation entries to the client-side router.

---

## 2026-02-10 — Hero + menu styling refinements

- Typography, spacing, and color pass on the hero section.
- Menu styling polish — prep for the food menu page implementation two days later.

---

## 2026-02-05 — Multi-view routing

- Added client-side routing for individual venue pages (Tiki, Off Piste, Neon Jungle, Mile High, Cocktail Bar).
- Established the multi-view navigation pattern the site would use until the Next.js migration.

---

## 2026-02-04 — Initial build (Vite SPA)

First working session; set up the Vite-based scaffolding.

- Implemented the initial hero section for The Orange Room concept.
- Added the news section (later removed 2026-02-04).
- Implemented mobile navigation and the sidebar toggle behaviour.
- Removed inline external CSS in favour of the build pipeline.
- Iterated on hero and navigation content/copy.
- Implemented the Cocktail Bar page as the first dedicated venue page.
- Pruned the unused `NewsSection` component.

---

## 2026-02-04 — Initial commit

- Repository scaffolded. Vite + React + TypeScript + Tailwind baseline.
