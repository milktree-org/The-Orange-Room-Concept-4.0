import type { Metadata } from 'next';
import PrivateHirePage from '@/page-components/PrivateHirePage';
import { absoluteUrl } from '@/lib/seo';

const title = 'Private Venue Hire Southampton | Orange Rooms';
const description =
  'Private hire at Orange Rooms Southampton. From 21st birthdays to wedding receptions — bespoke events in our legendary venue with capacity up to 500.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl('/private-hire') },
  openGraph: { title, description, url: absoluteUrl('/private-hire'), type: 'website' },
};

export default function Page() {
  return <PrivateHirePage />;
}
