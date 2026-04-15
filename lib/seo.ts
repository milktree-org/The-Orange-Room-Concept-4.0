/**
 * Single source of truth for all SEO / GEO / structured-data constants.
 *
 * If a fact about the business changes (address, hours, phone, socials),
 * update it HERE and every page, sitemap, JSON-LD, OG tag, and llms.txt
 * will pick it up automatically.
 */

export const SITE = {
  name: 'Orange Rooms',
  legalName: 'Orange Rooms',
  tagline: "Southampton's Legendary Venue",
  description:
    "Southampton's legendary sanctuary for good vibes. Award-winning cocktail bar, bottomless brunches, private hire, and unforgettable events since 2001.",
  url: 'https://orangerooms.co.uk',
  domain: 'orangerooms.co.uk',
  locale: 'en_GB',
  language: 'en-GB',
  established: '2001',
  ageRequirement: 18,
  /** £ | ££ | £££ | ££££ — Google's LocalBusiness priceRange uses this format */
  priceRange: '££',
  /** Canonical Schema.org LocalBusiness subtype for a venue like this */
  businessType: 'BarOrPub' as const,

  phone: '+442380232333',
  phoneDisplay: '023 8023 2333',

  emails: {
    general: 'info@orangerooms.co.uk',
    events: 'events@orangerooms.co.uk',
    feedback: 'feedback@orangerooms.co.uk',
    jobs: 'jobs@orangerooms.co.uk',
    contact: 'contact@orangerooms.co.uk',
  },

  address: {
    street: '1-2 Vernon Walk',
    locality: 'Southampton',
    region: 'Hampshire',
    postalCode: 'SO15 2EJ',
    country: 'GB',
    /** Single-line display form */
    formatted: '1-2 Vernon Walk, Southampton, SO15 2EJ',
  },

  social: {
    instagram: 'https://www.instagram.com/orangerooms/',
    facebook: 'https://www.facebook.com/orangerooms/',
  },

  giftVouchersUrl: 'https://orangerooms.giftpro.co.uk/',

  /**
   * Opening hours for the general public.
   * Mon/Tue/Sun are private hires only and intentionally omitted —
   * Google will mark those days as closed, which is accurate for walk-ins.
   * Closing times after midnight are represented as single entries
   * (e.g. 16:00–03:00) per Google's LocalBusiness recommendation.
   */
  openingHours: [
    {
      days: ['Wednesday', 'Thursday', 'Friday'] as const,
      opens: '16:00',
      closes: '03:00',
    },
    {
      days: ['Saturday'] as const,
      opens: '14:00',
      closes: '03:00',
    },
  ],

  /** Awards that appear in JSON-LD `award` property and llms.txt */
  awards: [
    'Big 7 Top 50',
    "World's Best New Bar",
  ],

  /** Default OG share image — relative to site root */
  defaultOgImage: '/photos/homepage/main_cocktail_bar.jpg',
  defaultOgImageWidth: 1398,
  defaultOgImageHeight: 932,
  defaultOgImageAlt: "Orange Rooms — Southampton's award-winning cocktail bar",
} as const;

/**
 * Full site map of public routes with SEO priorities + change frequencies.
 * Drives app/sitemap.ts. Keep in sync with the route directories under app/.
 */
export const ROUTES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/book', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/tables', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/cocktail-bar', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/brunches', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/events', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/food-menu', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/drinks-menu', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/private-hire', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/corporate-hire', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/vip-bookings', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/tiki', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/off-piste', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/mile-high', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/neon-jungle', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/full-venue', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/half-venue', priority: 0.7, changeFrequency: 'monthly' as const },
] as const;

export type RoutePath = typeof ROUTES[number]['path'];

/** Resolve any path to an absolute URL using the canonical domain. */
export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${normalized === '/' ? '' : normalized}`;
}
