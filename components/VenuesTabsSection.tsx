'use client';

import React, { useState } from 'react';
import { View } from '@/lib/types';

interface Venue {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  image: string;
}

interface VenuesTabsSectionProps {
  onNavigate?: (view: View) => void;
}

const venues: Venue[] = [
  { id: 'tables', name: 'Tables', title: 'Start your weekend in style!', subtitle: 'Bottomless sessions from £25 - 2 hours unlimited cocktails!', image: '/photos/homepage/tables.jpg' },
  { id: 'tiki', name: 'Tiki', title: 'Exotic Escape', subtitle: 'Step into our tropical paradise with world-class Mai Tais.', image: '/photos/homepage/tiki.jpg' },
  { id: 'off-piste', name: 'Off Piste', title: 'Alpine Lodge', subtitle: 'Cozy up in our mountain-inspired retreat. Perfect for gatherings.', image: '/photos/homepage/off_piste.jpg' },
  { id: 'full-venue', name: 'Full Venue', title: 'The Ultimate Space', subtitle: 'Host up to 500 guests for the grandest celebrations.', image: '/photos/homepage/full_venue.jpg' },
  { id: 'half-venue', name: 'Half Venue', title: 'Versatile Hosting', subtitle: 'Perfect for medium-sized events, networking, and parties.', image: '/photos/homepage/half_venue.jpg' },
  { id: 'mile-high', name: 'Mile High', title: 'First Class', subtitle: 'Take your night to new heights in our aviation VIP lounge.', image: '/photos/homepage/mile_high.jpg' }
];

const VenuesTabsSection: React.FC<VenuesTabsSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState(venues[0]);

  return (
    <section className="bg-[#1a1919] flex flex-col relative pb-16 md:pb-32">
      <div className="flex flex-col items-center pt-16 md:pt-24 pb-12 md:pb-16 px-6 bg-[#1a1919] border-b-2 border-white/50">
        <div className="text-center max-w-4xl">
           <div className="inline-block bg-[#F29100] border-2 border-white px-6 md:px-12 py-4 md:py-6 shadow-2xl mb-6 md:mb-8">
              <h3 className="text-[20px] md:text-[32px] lg:text-[44px] font-bold tracking-tight text-white leading-tight">
                {activeTab.title}
              </h3>
           </div>
           <p className="text-[14px] md:text-[16px] lg:text-[18px] text-white/60 leading-relaxed font-light">
             {activeTab.subtitle}
           </p>
        </div>
      </div>

      {/* Responsive Tabs: Scrollable on mobile, grid on desktop */}
      <div className="flex lg:grid lg:grid-cols-6 h-16 md:h-20 lg:h-24 nav-border box-border overflow-x-auto scrollbar-hide">
        {venues.map((venue, idx) => (
          <button
            key={venue.id}
            onMouseEnter={() => setActiveTab(venue)}
            onClick={() => setActiveTab(venue)}
            className={`
              flex-shrink-0 px-8 lg:px-0 lg:flex items-center justify-center transition-all duration-300 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-[10px] font-black h-full
              ${activeTab.id === venue.id ? 'bg-[#F29100] text-white' : 'text-white/60 hover:bg-white/10'}
              ${idx < venues.length - 1 ? 'lg:block-border border-r-2 border-white/50 lg:border-r-auto' : ''}
            `}
          >
            {venue.name}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center py-12 md:py-20 px-6">
        <div className="w-full max-w-[1100px] relative">
          <div className="p-px bg-white/40 rounded-none overflow-hidden shadow-2xl">
            <div className="aspect-video relative overflow-hidden bg-black/50">
              <img 
                src={activeTab.image} 
                alt={activeTab.name}
                className="w-full h-full object-cover transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>

          <div className="mt-8 md:mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.(activeTab.id as View); }} className="w-full sm:w-64 md:w-72 py-4 md:py-6 bg-[#F29100] text-white text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-center hover:bg-white hover:text-[#1a1919] transition-all duration-300 shadow-xl cursor-pointer">
              View Details
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('book'); }} className="w-full sm:w-64 md:w-72 py-4 md:py-6 border-2 border-white/50 text-white text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-center hover:border-[#F29100] hover:text-[#F29100] transition-all duration-300 shadow-xl cursor-pointer">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenuesTabsSection;
