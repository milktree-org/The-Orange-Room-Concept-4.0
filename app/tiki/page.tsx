import type { Metadata } from 'next';
import TikiPage from '@/page-components/TikiPage';
import { absoluteUrl } from '@/lib/seo';

const title = 'Tiki Lounge Southampton | Orange Rooms';
const description =
  "Escape to Orange Rooms' Tiki Lounge Southampton. Bamboo-lined walls, exotic greenery and an award-winning tropical cocktail menu on Vernon Walk.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl('/tiki') },
  openGraph: { title, description, url: absoluteUrl('/tiki'), type: 'website' },
};

export default function Page() {
  return <TikiPage />;
}
