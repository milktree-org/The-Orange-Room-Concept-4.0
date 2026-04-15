import type { Metadata } from 'next';
import NeonJunglePage from '@/page-components/NeonJunglePage';
import { absoluteUrl } from '@/lib/seo';

const title = 'Neon Jungle | Orange Rooms Southampton';
const description =
  'Step into the Neon Jungle at Orange Rooms Southampton — an immersive tropical oasis with neon lights, exotic greenery and frozen cocktails.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl('/neon-jungle') },
  openGraph: { title, description, url: absoluteUrl('/neon-jungle'), type: 'website' },
};

export default function Page() {
  return <NeonJunglePage />;
}
