import type { Metadata } from 'next';
import OffPistePage from '@/page-components/OffPistePage';
import { absoluteUrl } from '@/lib/seo';

const title = 'Off Piste Alpine Lounge | Orange Rooms Southampton';
const description =
  "Cozy up in Off Piste, Orange Rooms' ski lodge-inspired lounge in central Southampton. Perfect for intimate gatherings and winter vibes year-round.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl('/off-piste') },
  openGraph: { title, description, url: absoluteUrl('/off-piste'), type: 'website' },
};

export default function Page() {
  return <OffPistePage />;
}
