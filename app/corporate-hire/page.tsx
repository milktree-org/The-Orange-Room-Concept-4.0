import type { Metadata } from 'next';
import CorporateHirePage from '@/page-components/CorporateHirePage';
import { absoluteUrl } from '@/lib/seo';

const title = 'Corporate Event Venue Southampton | Orange Rooms';
const description =
  'Host unforgettable corporate events at Orange Rooms Southampton. Four unique rooms, full AV, dedicated event team — perfect for product launches, networking and team-building.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl('/corporate-hire') },
  openGraph: { title, description, url: absoluteUrl('/corporate-hire'), type: 'website' },
};

export default function Page() {
  return <CorporateHirePage />;
}
