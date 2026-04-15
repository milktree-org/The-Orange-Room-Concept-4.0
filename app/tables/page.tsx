import type { Metadata } from 'next';
import OurTablesPage from '@/page-components/OurTablesPage';
import { absoluteUrl } from '@/lib/seo';

const title = 'Our Tables — Reserve at Orange Rooms Southampton';
const description =
  'Book your table at Orange Rooms Southampton. Tiki Lounge, Off Piste, Cassette Booths and more — reserve every night of the week at our award-winning bar.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl('/tables') },
  openGraph: { title, description, url: absoluteUrl('/tables'), type: 'website' },
};

export default function Page() {
  return <OurTablesPage />;
}
