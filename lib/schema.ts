/**
 * Schema.org JSON-LD generators.
 *
 * These produce plain objects that can be JSON.stringify'd into
 * <script type="application/ld+json"> tags — that's the format
 * Google, Bing, ChatGPT, Perplexity, and Claude all parse.
 *
 * All generators pull from lib/seo.ts so there's no duplication of
 * business facts. Update SITE in lib/seo.ts — schemas update everywhere.
 */

import { SITE, absoluteUrl } from './seo';

/** Map our weekday names to Schema.org DayOfWeek URIs */
const SCHEMA_DAYS = {
  Monday: 'https://schema.org/Monday',
  Tuesday: 'https://schema.org/Tuesday',
  Wednesday: 'https://schema.org/Wednesday',
  Thursday: 'https://schema.org/Thursday',
  Friday: 'https://schema.org/Friday',
  Saturday: 'https://schema.org/Saturday',
  Sunday: 'https://schema.org/Sunday',
} as const;

type SchemaObject = Record<string, unknown>;

/**
 * LocalBusiness schema — the single highest-impact piece of structured data
 * for a venue. Google uses this for rich business cards, map packs,
 * knowledge panel, and opening-hours display. AI search engines (ChatGPT,
 * Perplexity) use it to answer "where / when / how to book" questions.
 */
export function localBusinessSchema(): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': SITE.businessType,
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.emails.general,
    priceRange: SITE.priceRange,
    foundingDate: SITE.established,
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    image: absoluteUrl(SITE.defaultOgImage),
    logo: absoluteUrl('/favicon.svg'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    openingHoursSpecification: SITE.openingHours.map((slot) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: slot.days.map((d) => SCHEMA_DAYS[d]),
      opens: slot.opens,
      closes: slot.closes,
    })),
    sameAs: Object.values(SITE.social),
    award: SITE.awards,
    acceptsReservations: true,
    smokingAllowed: false,
    isAccessibleForFreeForm: false,
    // Venue-specific facets that help AI engines answer "what kind of bar is this"
    servesCuisine: ['British', 'Bar Bites', 'Brunch'],
    hasMenu: [absoluteUrl('/drinks-menu'), absoluteUrl('/food-menu')],
  };
}

/**
 * Organization schema — represents the brand entity itself (distinct from
 * the physical venue). Used by Google's knowledge graph and by AI engines
 * to link social profiles to the brand.
 */
export function organizationSchema(): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl('/favicon.svg'),
    foundingDate: SITE.established,
    description: SITE.description,
    sameAs: Object.values(SITE.social),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE.phone,
        contactType: 'reservations',
        email: SITE.emails.general,
        areaServed: 'GB',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        email: SITE.emails.events,
        contactType: 'events',
        areaServed: 'GB',
        availableLanguage: 'English',
      },
    ],
  };
}

/**
 * WebSite schema — enables Google's Sitelinks Searchbox if a search URL is
 * defined, and gives the site a stable @id that other schemas can reference.
 */
export function webSiteSchema(): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: SITE.language,
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}

/** Breadcrumb trail for a single page. Items are ordered root → current. */
export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>
): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * WebPage schema — represents the page itself. Attach breadcrumbs and link
 * back to the LocalBusiness so AI engines understand the context.
 */
export function webPageSchema(args: {
  path: string;
  name: string;
  description: string;
  breadcrumbs?: Array<{ name: string; path: string }>;
}): SchemaObject {
  const url = absoluteUrl(args.path);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: args.name,
    description: args.description,
    inLanguage: SITE.language,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#business` },
    ...(args.breadcrumbs?.length
      ? { breadcrumb: breadcrumbSchema(args.breadcrumbs) }
      : {}),
  };
}
