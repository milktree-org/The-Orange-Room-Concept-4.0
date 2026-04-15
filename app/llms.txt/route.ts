import { SITE, ROUTES, absoluteUrl } from '@/lib/seo';

/**
 * /llms.txt — the emerging GEO standard for telling AI crawlers which
 * pages matter and what the site is about. Format spec: llmstxt.org
 *
 * This is the short/index version. llms-full.txt is the expanded version
 * with deeper content extracts. Both are built from lib/seo.ts constants
 * so the facts can never drift.
 */

export const dynamic = 'force-static';

// Human-readable labels for each route. Keep in sync with ROUTES in lib/seo.ts.
const ROUTE_LABELS: Record<string, { label: string; description: string }> = {
  '/': { label: 'Home', description: 'Overview of Orange Rooms Southampton' },
  '/book': { label: 'Reserve a Table', description: 'Book a table at Orange Rooms' },
  '/tables': { label: 'Our Tables', description: 'All table options across the venue' },
  '/cocktail-bar': { label: 'Cocktail Bar', description: 'Award-winning cocktail bar since 2001' },
  '/brunches': { label: 'Bottomless Brunches', description: 'Bottomless brunch every Friday and Saturday' },
  '/events': { label: 'Events & Lineup', description: 'Club nights, live DJs and themed parties' },
  '/food-menu': { label: 'Food Menu', description: 'Bar bites, brunch plates and shareable dishes' },
  '/drinks-menu': { label: 'Drinks Menu', description: 'Cocktail and drinks menu' },
  '/private-hire': { label: 'Private Hire', description: 'Bespoke private events and parties' },
  '/corporate-hire': { label: 'Corporate Hire', description: 'Corporate events, networking and team-building' },
  '/vip-bookings': { label: 'VIP Bookings', description: 'Exclusive VIP booth and bottle service' },
  '/tiki': { label: 'Tiki Lounge', description: 'Tropical paradise with bamboo walls and Tiki classics' },
  '/off-piste': { label: 'Off Piste', description: 'Alpine ski lodge inspired lounge' },
  '/mile-high': { label: 'Mile High', description: 'First-class aviation VIP lounge' },
  '/neon-jungle': { label: 'Neon Jungle', description: 'Immersive tropical oasis with neon lighting' },
  '/full-venue': { label: 'Full Venue Hire', description: 'Exclusive full venue hire up to 500 guests' },
  '/half-venue': { label: 'Half Venue Hire', description: 'Half venue hire for medium-sized events' },
};

function buildLlmsTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${SITE.name}`);
  lines.push('');
  lines.push(`> ${SITE.description} Located at ${SITE.address.formatted}, United Kingdom.`);
  lines.push('');

  lines.push('## Key facts');
  lines.push(`- Business name: ${SITE.name}`);
  lines.push(`- Established: ${SITE.established}`);
  lines.push(`- Location: ${SITE.address.formatted}`);
  lines.push(`- Phone: ${SITE.phoneDisplay}`);
  lines.push(`- Email: ${SITE.emails.general}`);
  lines.push(`- Website: ${SITE.url}`);
  lines.push(`- Price range: ${SITE.priceRange}`);
  lines.push(`- Age requirement: ${SITE.ageRequirement}+`);
  lines.push(`- Awards: ${SITE.awards.join(', ')}`);
  lines.push('');

  lines.push('## Opening hours');
  for (const slot of SITE.openingHours) {
    const dayLabel =
      slot.days.length === 1
        ? slot.days[0]
        : `${slot.days[0]}–${slot.days[slot.days.length - 1]}`;
    lines.push(`- ${dayLabel}: ${slot.opens}–${slot.closes}`);
  }
  lines.push('- Monday, Tuesday, Sunday: Private hires only (not open to general public)');
  lines.push('');

  lines.push('## Pages');
  for (const route of ROUTES) {
    const entry = ROUTE_LABELS[route.path];
    if (!entry) continue;
    lines.push(`- [${entry.label}](${absoluteUrl(route.path)}): ${entry.description}`);
  }
  lines.push('');

  lines.push('## Contact');
  lines.push(`- Reservations: ${SITE.emails.general}, ${SITE.phoneDisplay}`);
  lines.push(`- Events inquiries: ${SITE.emails.events}`);
  lines.push(`- Instagram: ${SITE.social.instagram}`);
  lines.push(`- Facebook: ${SITE.social.facebook}`);
  lines.push(`- Gift vouchers: ${SITE.giftVouchersUrl}`);
  lines.push('');

  lines.push('## Full content');
  lines.push(`- [llms-full.txt](${SITE.url}/llms-full.txt): Expanded version with more detail`);

  return lines.join('\n');
}

export function GET(): Response {
  return new Response(buildLlmsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
