import type { Metadata } from 'next';
import MileHighPage from '@/page-components/MileHighPage';
import { absoluteUrl } from '@/lib/seo';

const title = 'Mile High Aviation Lounge | Orange Rooms Southampton';
const description =
  "Take your night to new heights in Orange Rooms' first-class Mile High aviation lounge. Premium bottle service and exclusive hosting in central Southampton.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl('/mile-high') },
  openGraph: { title, description, url: absoluteUrl('/mile-high'), type: 'website' },
};

export default function Page() {
  return <MileHighPage />;
}
