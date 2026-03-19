'use client';

import React from 'react';
import { View } from '@/lib/types';

interface OfferingsSectionProps {
  onNavigate?: (view: View) => void;
}

const OfferingsSection: React.FC<OfferingsSectionProps> = ({ onNavigate }) => {
  const offerings = [
    {
      title: "Cocktail Bar",
      label: "INNOVATIVE MIXOLOGY",
      content: "The heart of Southampton's nightlife. Discover our award-winning cocktail menu, crafted by master mixologists.",
      cta: "Explore Menu",
      view: 'cocktail-bar' as View,
      bgImage: "/photos/homepage/main_cocktail_bar.jpg"
    },
    {
      title: "Bottomless Brunches",
      label: "THE ULTIMATE DAYTIME PARTY",
      content: "Southampton's favorite weekend ritual. Enjoy two hours of unlimited drinks, incredible food, and high-energy vibes.",
      cta: "Join The Party",
      view: 'brunches' as View,
      bgImage: "https://www.orangerooms.co.uk/wp-content/uploads/2025/07/smores3-1-1.png"
    },
    {
      title: "Private Hire",
      label: "YOUR EXCLUSIVE EVENT",
      content: "From intimate birthday gatherings to grand wedding receptions, our versatile spaces offer the perfect backdrop.",
      cta: "Book Your Space",
      view: 'private-hire' as View,
      bgImage: "https://www.orangerooms.co.uk/wp-content/uploads/2024/01/themed-brunches.jpg"
    },
    {
      title: "Corporate Hire",
      label: "BUSINESS WITH A TWIST",
      content: "Ditch the boring boardroom. Host your next networking event, product launch, or team-building social.",
      cta: "Let's Talk Business",
      view: 'corporate-hire' as View,
      bgImage: "https://www.orangerooms.co.uk/wp-content/uploads/2024/01/Order-Drinks-to-table-pic.jpg"
    },
    {
      title: "VIP Bookings",
      label: "THE LEGENDARY EXPERIENCE",
      content: "Secure an exclusive VIP booth with premium bottle service and a dedicated host. Party like a legend.",
      cta: "Go VIP",
      view: 'vip-bookings' as View,
      bgImage: "https://www.orangerooms.co.uk/wp-content/uploads/2025/07/Large-Cassette-Booth-Hero-image-1.png"
    },
    {
      title: "Neon Jungle",
      label: "SUMMER IS COMING",
      content: "Step into our immersive tropical oasis. Think neon lights, exotic greenery, and frozen cocktails.",
      cta: "Step Inside",
      view: 'neon-jungle' as View,
      bgImage: "https://www.orangerooms.co.uk/wp-content/uploads/2023/12/Garden-Tables-1.png"
    }
  ];

  return (
    <section className="bg-[#1a1919] flex flex-col">
      {/* Section Header Bar */}
      <div className="h-20 lg:h-24 nav-border grid grid-cols-2 lg:grid-cols-6 box-border bg-[#1a1919]">
        <div className="flex items-center justify-center lg:block-border h-full px-4 border-r-2 border-white/50">
          <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.3em] font-black text-[#F29100]">THE LINEUP</span>
        </div>
        <div className="hidden lg:block lg:col-span-5 h-full opacity-0" />
      </div>

      {/* Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {offerings.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onNavigate?.(item.view)}
            className={`
              relative overflow-hidden group transition-all duration-500 cursor-pointer border-b-2 border-white/50 min-h-[350px] lg:min-h-[450px]
              ${(idx + 1) % 3 !== 0 ? 'lg:border-r-2 lg:border-white/50' : ''}
              ${idx % 2 === 0 ? 'md:border-r-2 md:border-white/50 lg:border-r-auto' : ''}
            `}
          >
            {/* Image Layer: Now partially visible by default for better visual feedback */}
            <div 
              className="absolute inset-0 z-0 opacity-40 md:opacity-30 lg:opacity-40 group-hover:opacity-80 transition-all duration-700 bg-cover bg-center grayscale-[0.3] group-hover:grayscale-0 scale-105 group-hover:scale-100"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#1a1919] via-[#1a1919]/40 to-black/80 lg:opacity-100 group-hover:opacity-40 transition-opacity duration-700" />
            
            <div className="relative z-10 flex flex-col h-full space-y-4 md:space-y-6 p-8 lg:p-14">
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-[24px] md:text-[32px] font-bold tracking-tight text-white leading-tight group-hover:text-[#F29100] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100]">
                  {item.label}
                </p>
              </div>
              <p className="text-[14px] md:text-[15.5px] text-white/80 group-hover:text-white leading-relaxed font-light transition-colors max-w-[320px]">
                {item.content}
              </p>
              <div className="pt-2 md:pt-4 mt-auto">
                <span className="inline-block text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-white group-hover:text-[#F29100] transition-all border-b-2 border-[#F29100] pb-2">
                  {item.cta}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferingsSection;
