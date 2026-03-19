'use client';

import Hero from '@/components/Hero';
import OfferingsSection from '@/components/OfferingsSection';
import MarqueeSection from '@/components/MarqueeSection';
import AwardsSection from '@/components/AwardsSection';
import BookingSection from '@/components/BookingSection';
import LogoMarqueeSection from '@/components/LogoMarqueeSection';
import ReviewsSection from '@/components/ReviewsSection';
import VenuesTabsSection from '@/components/VenuesTabsSection';
import { useRouter } from 'next/navigation';
import { View } from '@/lib/types';

export default function HomePage() {
  const router = useRouter();
  const navigateTo = (view: View) => {
    const path = view === 'home' ? '/' : `/${view}`;
    router.push(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Hero onNavigate={navigateTo} />
      <OfferingsSection onNavigate={navigateTo} />
      <MarqueeSection />
      <AwardsSection />
      <BookingSection />
      <LogoMarqueeSection />
      <ReviewsSection />
      <VenuesTabsSection onNavigate={navigateTo} />
    </>
  );
}
