import type { Metadata } from 'next';
import DrinksMenuPage from '@/page-components/DrinksMenuPage';
import { absoluteUrl } from '@/lib/seo';

const title = 'Cocktail & Drinks Menu | Orange Rooms Southampton';
const description =
  'Explore the award-winning Orange Rooms cocktail and drinks menu. Handcrafted signatures, tropical Tiki classics and premium spirits at Southampton’s legendary bar.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl('/drinks-menu') },
  openGraph: { title, description, url: absoluteUrl('/drinks-menu'), type: 'website' },
};

export default function Page() {
  return <DrinksMenuPage />;
}
