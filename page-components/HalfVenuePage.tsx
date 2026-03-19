'use client';

import React from 'react';
import BookingSection from '@/components/BookingSection';
import { Users, Split, Sparkles, ChevronRight } from 'lucide-react';

const HalfVenuePage: React.FC = () => {
  return (
    <div className="bg-[#1a1919] min-h-screen">
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden border-b-2 border-white/50">
        <img 
          src="/photos/half venue/half_venue.jpg" 
          alt="Half Venue Booking" 
          className="w-full h-full object-cover brightness-[0.6] grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-transparent to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] font-black text-[#F29100] mb-4">VERSATILE SPACES</span>
          <h1 className="text-[54px] md:text-[88px] lg:text-[110px] font-black leading-none tracking-tighter text-white uppercase">
            Half <span className="text-[#F29100]">Venue</span>
          </h1>
          <div className="mt-6 flex items-center gap-3">
             <Users className="w-4 h-4 text-[#F29100]" />
             <span className="text-[12px] font-black tracking-widest uppercase text-white/70">UP TO 250 GUESTS</span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 bg-white text-[#1a1919] border-b-2 border-[#1a1919]">
        <div className="p-10 md:p-20 lg:p-24 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-[#1a1919]">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100] mb-10">VERSATILE SPACES</span>
          <h2 className="text-[40px] md:text-[60px] font-black tracking-tighter uppercase leading-[0.9] mb-8">
            The Perfect <span className="text-[#F29100]">Mid-Size</span> Solution.
          </h2>
          <p className="text-[17px] leading-relaxed font-light mb-12 text-[#1a1919]/80">
            Need more than a room but not the whole venue? Our Half Venue option gives you exclusive use of Mile High and/or the main dance floor — the perfect configuration for a private party while the rest of the venue remains open.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
            <div className="space-y-3">
              <Split className="w-8 h-8 text-[#F29100]" />
              <h4 className="text-[13px] font-black uppercase tracking-widest">Flexible Zoning</h4>
              <p className="text-[12px] text-[#1a1919]/60 font-medium">Perfect for separating the 'networking zone' from the 'dance zone'.</p>
            </div>
            <div className="space-y-3">
              <Sparkles className="w-8 h-8 text-[#F29100]" />
              <h4 className="text-[13px] font-black uppercase tracking-widest">Dedicated Space</h4>
              <p className="text-[12px] text-[#1a1919]/60 font-medium">Mile High's private entrance and luxe aviation vibe — all yours for the night.</p>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
          <img src="/photos/half venue/half_venue.jpg" className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]" />
          <div className="absolute inset-0 bg-[#F29100]/20 mix-blend-multiply"></div>
        </div>
      </section>

      <BookingSection />
    </div>
  );
};

export default HalfVenuePage;
