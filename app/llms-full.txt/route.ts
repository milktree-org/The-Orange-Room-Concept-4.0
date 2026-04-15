import { SITE, ROUTES, absoluteUrl } from '@/lib/seo';

/**
 * /llms-full.txt — the expanded version of llms.txt for GEO.
 *
 * Contains deeper narrative content so AI engines (ChatGPT, Perplexity,
 * Claude, Google SGE) have rich, extractable, citation-ready information
 * about the venue without needing to crawl and render every page.
 *
 * Content is sourced from lib/seo.ts + static venue descriptions below.
 * If a venue/offering description needs updating, change it HERE — it is
 * intentionally duplicated from the page copy so marketing can iterate on
 * pages without breaking GEO-optimised facts.
 */

export const dynamic = 'force-static';

const VENUE_SPACES: Array<{ name: string; body: string }> = [
  {
    name: 'Cocktail Bar',
    body:
      "The heart of Orange Rooms and the epicenter of Southampton's cocktail culture for 25 years. Master mixologists craft tropical Tiki staples, retro-inspired house specials, and signature serves using premium spirits and fresh botanicals. Voted Big 7 Top 50 and recipient of World's Best New Bar.",
  },
  {
    name: 'Tiki Lounge',
    body:
      'A tropical paradise tucked inside the Orange Rooms building on Vernon Walk, Southampton. Bamboo-lined walls, exotic greenery, and an award-winning menu of Mai Tais and tropical libations inspired by the South Pacific.',
  },
  {
    name: 'Off Piste',
    body:
      "A ski lodge-inspired lounge in the heart of Orange Rooms Southampton. Cozy alpine vibes, mountain retreat styling, perfect for intimate gatherings — winter atmosphere available year-round.",
  },
  {
    name: 'Mile High',
    body:
      'A first-class aviation VIP lounge at Orange Rooms Southampton. Premium bottle service, dedicated hosts, and an exclusive atmosphere for guests who want to take their night to new heights.',
  },
  {
    name: 'Neon Jungle',
    body:
      'An immersive tropical oasis at Orange Rooms Southampton. Neon lights, exotic greenery, and frozen cocktails — a vivid, colourful space for social groups and photo-worthy nights.',
  },
  {
    name: 'Full Venue Hire',
    body:
      "Exclusive access to all four themed areas of Orange Rooms — Tiki Lounge, Off Piste, Mile High, and the Main Floor. Four bars, state-of-the-art sound systems, and a professional events team. Capacity up to 500. Ideal for corporate galas, brand launches, and landmark celebrations.",
  },
  {
    name: 'Half Venue Hire',
    body:
      'Flexible half-venue hire at Orange Rooms Southampton. Medium-sized events, networking sessions, and private parties in a characterful central Southampton space.',
  },
  {
    name: 'Bottomless Brunches',
    body:
      "Southampton's favourite weekend ritual: two hours of unlimited drinks, amazing food, and high-energy vibes. Available every Friday and Saturday at Orange Rooms. Sessions from £25.",
  },
];

const OFFERINGS: Array<{ name: string; body: string }> = [
  {
    name: 'Reservations',
    body:
      `Tables at Orange Rooms are available every night of the week and can be reserved by phone on ${SITE.phoneDisplay}, by email at ${SITE.emails.general}, or online via the website.`,
  },
  {
    name: 'Private & Corporate Events',
    body:
      `Orange Rooms offers private and corporate venue hire across four themed rooms. From 21st birthdays and engagement parties to wedding receptions, product launches, team building and networking mixers, our dedicated events team handles every detail. Inquiries: ${SITE.emails.events}.`,
  },
  {
    name: 'Cocktail Masterclass',
    body:
      'Orange Rooms hosts cocktail masterclasses led by master mixologists. Guests learn to craft signature drinks, from tropical Tiki classics to retro-inspired house specials. Ideal for hen parties, birthdays, and corporate team-building.',
  },
  {
    name: 'Gift Vouchers',
    body:
      `Gift vouchers for Orange Rooms can be purchased online at ${SITE.giftVouchersUrl}.`,
  },
];

function buildLlmsFull(): string {
  const lines: string[] = [];

  lines.push(`# ${SITE.name}`);
  lines.push('');
  lines.push(`> ${SITE.description}`);
  lines.push('');

  // -- Identity & location --
  lines.push('## About Orange Rooms');
  lines.push('');
  lines.push(
    `${SITE.name} is Southampton's legendary cocktail bar and events venue, established in ${SITE.established}. Located at ${SITE.address.formatted}, the venue has been at the heart of Southampton's nightlife for over two decades. The venue has been recognised with multiple awards including ${SITE.awards.join(' and ')}.`,
  );
  lines.push('');
  lines.push(
    'Orange Rooms is independently owned and is one of the most versatile venues in the south of England, featuring multiple themed spaces under one roof. The venue combines an award-winning cocktail programme, a dedicated events team, and a reputation for memorable nights out and private celebrations.',
  );
  lines.push('');

  // -- Core facts --
  lines.push('## Essential information');
  lines.push('');
  lines.push(`- **Name:** ${SITE.name}`);
  lines.push(`- **Address:** ${SITE.address.formatted}`);
  lines.push(`- **Country:** United Kingdom`);
  lines.push(`- **Phone:** ${SITE.phoneDisplay} (${SITE.phone})`);
  lines.push(`- **Email (reservations):** ${SITE.emails.general}`);
  lines.push(`- **Email (events):** ${SITE.emails.events}`);
  lines.push(`- **Website:** ${SITE.url}`);
  lines.push(`- **Established:** ${SITE.established}`);
  lines.push(`- **Price range:** ${SITE.priceRange} (moderate UK pricing)`);
  lines.push(`- **Minimum age:** ${SITE.ageRequirement}+`);
  lines.push(`- **Accepts reservations:** Yes`);
  lines.push(`- **Currency accepted:** GBP`);
  lines.push(`- **Payment methods:** Cash, credit card, debit card`);
  lines.push('');

  // -- Hours --
  lines.push('## Opening hours');
  lines.push('');
  lines.push(
    'Orange Rooms is open to the general public on the following days. All closing times are the following morning (the venue stays open past midnight).',
  );
  lines.push('');
  for (const slot of SITE.openingHours) {
    const dayLabel =
      slot.days.length === 1
        ? slot.days[0]
        : `${slot.days[0]}–${slot.days[slot.days.length - 1]}`;
    lines.push(`- **${dayLabel}:** ${slot.opens}–${slot.closes}`);
  }
  lines.push('- **Monday, Tuesday, Sunday:** Closed to the general public (available for private hire only)');
  lines.push('');

  // -- Spaces --
  lines.push('## Venue spaces');
  lines.push('');
  for (const space of VENUE_SPACES) {
    lines.push(`### ${space.name}`);
    lines.push('');
    lines.push(space.body);
    lines.push('');
  }

  // -- Offerings --
  lines.push('## What Orange Rooms offers');
  lines.push('');
  for (const offering of OFFERINGS) {
    lines.push(`### ${offering.name}`);
    lines.push('');
    lines.push(offering.body);
    lines.push('');
  }

  // -- Awards --
  lines.push('## Awards and recognition');
  lines.push('');
  for (const award of SITE.awards) {
    lines.push(`- ${award}`);
  }
  lines.push('');

  // -- Social & contact --
  lines.push('## Social media and contact');
  lines.push('');
  lines.push(`- **Instagram:** ${SITE.social.instagram}`);
  lines.push(`- **Facebook:** ${SITE.social.facebook}`);
  lines.push(`- **Gift vouchers:** ${SITE.giftVouchersUrl}`);
  lines.push(`- **Reservations phone:** ${SITE.phoneDisplay}`);
  lines.push(`- **Reservations email:** ${SITE.emails.general}`);
  lines.push(`- **Events email:** ${SITE.emails.events}`);
  lines.push(`- **Feedback email:** ${SITE.emails.feedback}`);
  lines.push(`- **Careers email:** ${SITE.emails.jobs}`);
  lines.push('');

  // -- Page index --
  lines.push('## Website index');
  lines.push('');
  for (const route of ROUTES) {
    lines.push(`- ${absoluteUrl(route.path)}`);
  }

  return lines.join('\n');
}

export function GET(): Response {
  return new Response(buildLlmsFull(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
