'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import MobileHeader from './MobileHeader';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import { View } from '@/lib/types';

const LayoutShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateTo = (view: View) => {
    const path = view === 'home' ? '/' : `/${view}`;
    router.push(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Handle old hash-based URLs from bookmarks
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const validViews: View[] = [
      'tables', 'tiki', 'full-venue', 'half-venue', 'off-piste',
      'mile-high', 'cocktail-bar', 'brunches', 'private-hire',
      'corporate-hire', 'vip-bookings', 'neon-jungle', 'drinks-menu', 'food-menu', 'book', 'events'
    ];
    if (hash && validViews.includes(hash as View)) {
      router.replace(`/${hash}`);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1919] text-white selection:bg-orange-500 selection:text-white relative overflow-x-hidden">
      <Sidebar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <MobileHeader toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} onNavigate={navigateTo} />
      <Navigation onNavigate={navigateTo} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onNavigate={navigateTo} />

      <main className="ml-0 lg:ml-24 pt-20 lg:pt-24">
        {children}
        <Footer onNavigate={navigateTo} />
      </main>
    </div>
  );
};

export default LayoutShell;
