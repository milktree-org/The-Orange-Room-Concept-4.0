import type { Metadata } from 'next';
import EventsPage from '@/page-components/EventsPage';
import { absoluteUrl } from '@/lib/seo';

const title = 'Events & Lineup | Orange Rooms Southampton';
const description =
  'Live DJs, themed parties and legendary club nights at Orange Rooms Southampton. Check upcoming events and grab tickets before they sell out.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl('/events') },
  openGraph: { title, description, url: absoluteUrl('/events'), type: 'website' },
};

export default function Page() {
  return <EventsPage />;
}
