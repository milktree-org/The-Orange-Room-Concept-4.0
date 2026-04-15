import type { Metadata } from 'next';
import BrunchesPage from '@/page-components/BrunchesPage';
import { absoluteUrl } from '@/lib/seo';

const title = 'Bottomless Brunches Southampton | Orange Rooms';
const description =
  "Southampton's favourite bottomless brunch. Two hours of unlimited cocktails, incredible food and high-energy vibes every Friday and Saturday at Orange Rooms.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl('/brunches') },
  openGraph: { title, description, url: absoluteUrl('/brunches'), type: 'website' },
};

export default function Page() {
  return <BrunchesPage />;
}
