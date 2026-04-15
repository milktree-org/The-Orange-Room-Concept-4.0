import type { Metadata } from 'next';
import VipBookingsPage from '@/page-components/VipBookingsPage';
import { absoluteUrl } from '@/lib/seo';

const title = 'VIP Bookings & Booth Service | Orange Rooms Southampton';
const description =
  'Book an exclusive VIP booth at Orange Rooms Southampton. Premium bottle service, dedicated host and legendary nights — party like a legend.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl('/vip-bookings') },
  openGraph: { title, description, url: absoluteUrl('/vip-bookings'), type: 'website' },
};

export default function Page() {
  return <VipBookingsPage />;
}
