import type { Metadata } from 'next';
import CocktailBarPage from '@/page-components/CocktailBarPage';
import { absoluteUrl } from '@/lib/seo';

const title = 'Award-Winning Cocktail Bar Southampton | Orange Rooms';
const description =
  "Southampton's finest cocktail bar, voted Big 7 Top 50 and World's Best New Bar. Master mixologists, retro-inspired menu, unforgettable drinks at Orange Rooms since 2001.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl('/cocktail-bar') },
  openGraph: { title, description, url: absoluteUrl('/cocktail-bar'), type: 'website' },
};

export default function Page() {
  return <CocktailBarPage />;
}
