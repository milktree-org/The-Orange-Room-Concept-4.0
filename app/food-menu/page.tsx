import type { Metadata } from 'next';
import FoodMenuPage from '@/page-components/FoodMenuPage';
import { absoluteUrl } from '@/lib/seo';

const title = 'Food Menu | Orange Rooms Southampton';
const description =
  'Enjoy the full Orange Rooms food menu — bar bites, brunch plates and shareable dishes served alongside our legendary cocktails in central Southampton.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl('/food-menu') },
  openGraph: { title, description, url: absoluteUrl('/food-menu'), type: 'website' },
};

export default function Page() {
  return <FoodMenuPage />;
}
