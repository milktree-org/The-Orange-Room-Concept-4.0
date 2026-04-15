import type { Metadata } from 'next';
import HomePage from '@/page-components/HomePage';
import { SITE, absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: `${SITE.name} | Southampton's Legendary Cocktail Bar & Venue`,
  description:
    'Award-winning cocktail bar, bottomless brunches, private hire and legendary events in the heart of Southampton since 2001. Reserve a table at Orange Rooms.',
  alternates: { canonical: absoluteUrl('/') },
  openGraph: {
    title: `${SITE.name} | Southampton's Legendary Cocktail Bar & Venue`,
    description:
      'Award-winning cocktail bar, bottomless brunches, private hire and legendary events in the heart of Southampton since 2001.',
    url: absoluteUrl('/'),
    type: 'website',
  },
};

export default function Page() {
  return <HomePage />;
}
