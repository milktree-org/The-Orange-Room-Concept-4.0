import type { Metadata } from 'next';
import FullVenuePage from '@/page-components/FullVenuePage';
import { absoluteUrl } from '@/lib/seo';

const title = 'Full Venue Hire Southampton | Orange Rooms';
const description =
  'Exclusive full venue hire at Orange Rooms Southampton. All four themed areas, four bars, capacity up to 500 — perfect for product launches and landmark events.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl('/full-venue') },
  openGraph: { title, description, url: absoluteUrl('/full-venue'), type: 'website' },
};

export default function Page() {
  return <FullVenuePage />;
}
