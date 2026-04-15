import type { Metadata } from 'next';
import BookPage from '@/page-components/BookPage';
import { absoluteUrl } from '@/lib/seo';

const title = 'Reserve a Table | Orange Rooms Southampton';
const description =
  "Book your table at Southampton's most iconic cocktail bar. Tables available every night of the week — call 023 8023 2333 or reserve online at Orange Rooms.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl('/book') },
  openGraph: { title, description, url: absoluteUrl('/book'), type: 'website' },
};

export default function Page() {
  return <BookPage />;
}
