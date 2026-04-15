import type { Metadata } from 'next';
import HalfVenuePage from '@/page-components/HalfVenuePage';
import { absoluteUrl } from '@/lib/seo';

const title = 'Half Venue Hire Southampton | Orange Rooms';
const description =
  'Half venue hire at Orange Rooms Southampton. Flexible, characterful spaces for medium-sized events, networking sessions and private parties in the heart of the city.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl('/half-venue') },
  openGraph: { title, description, url: absoluteUrl('/half-venue'), type: 'website' },
};

export default function Page() {
  return <HalfVenuePage />;
}
