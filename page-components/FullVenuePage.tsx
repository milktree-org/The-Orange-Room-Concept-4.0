'use client';

import React from 'react';
import BookingSection from '@/components/BookingSection';
import { Users, Layout, Zap, Award, ChevronRight, MapPin } from 'lucide-react';

const FullVenuePage: React.FC = () => {
  return (
    <div className="bg-[#1a1919] min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden border-b-2 border-white/50">
        <img 
          src="/photos/full venue/full_venue header.jpg" 
          alt="Full Venue Takeover" 
          className="w-full h-full object-cover brightness-[0.5] contrast-[1.1] scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-[#1a1919]/20 to-black/60" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.8em] font-black text-[#F29100] mb-6">
            THE ULTIMATE TAKEOVER
          </span>
          <h1 className="text-[54px] md:text-[94px] lg:text-[140px] font-black leading-none tracking-tighter text-white uppercase drop-shadow-2xl">
            Full <span className="text-[#F29100]">Venue</span>
          </h1>
          <div className="flex items-center gap-4 mt-8 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full">
            <Users className="w-5 h-5 text-[#F29100]" />
            <span className="text-[14px] font-black tracking-widest uppercase">UP TO 500 GUESTS</span>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-white text-[#1a1919] border-b-2 border-[#1a1919]">
        <div className="p-10 md:p-20 lg:p-24 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-[#1a1919]">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100] mb-10">LEGENDARY EVENTS</span>
          <h2 className="text-[40px] md:text-[60px] font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Grand Scale <br /> <span className="text-[#F29100]">Experience</span>.
          </h2>
          <p className="text-[17px] leading-relaxed font-light mb-12 text-[#1a1919]/80">
            Orange Rooms is one of Southampton's most versatile and unique event spaces. A full venue hire gives you exclusive access to all our themed areas: Tiki Lounge, Off Piste, Mile High, and the Main Floor. With four bars, state-of-the-art sound systems, and a professional event team, your corporate gala, brand launch, or landmark celebration is in safe hands.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
            <div className="space-y-3">
                <Layout className="w-8 h-8 text-[#F29100]" />
                <h4 className="text-[13px] font-black uppercase tracking-widest">4 Rooms / 4 Bars</h4>
                <p className="text-[12px] text-[#1a1919]/60 font-medium">Distinct thematic zones for different vibes.</p>
            </div>
            <div className="space-y-3">
                <Zap className="w-8 h-8 text-[#F29100]" />
                <h4 className="text-[13px] font-black uppercase tracking-widest">Full AV Support</h4>
                <p className="text-[12px] text-[#1a1919]/60 font-medium">Stage, screens, and club-standard sound.</p>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <img src="/photos/full venue/full venue right side.jpg" className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]" />
            <div className="absolute inset-0 bg-[#F29100]/20 mix-blend-multiply"></div>
        </div>
      </section>

      {/* 3. HIGHLIGHTS GRID */}
      <section className="bg-[#1a1919] p-10 md:p-20 lg:p-32 border-b-2 border-white/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#F29100] flex items-center justify-center shadow-[0_0_30px_rgba(242,145,0,0.4)]">
                <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-[24px] font-black uppercase tracking-tighter">Award Winning</h3>
            <p className="text-white/40 text-[14px] font-light leading-relaxed">Recognized as Southampton's most creative venue for over two decades.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-[24px] font-black uppercase tracking-tighter">Bespoke Catering</h3>
            <p className="text-white/40 text-[14px] font-light leading-relaxed">From casual buffet spreads to high-end cocktail canapés.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center">
                <MapPin className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-[24px] font-black uppercase tracking-tighter">Central SO15</h3>
            <p className="text-white/40 text-[14px] font-light leading-relaxed">Prime city center location with easy transport links and hotels nearby.</p>
          </div>
        </div>
        <div className="mt-24 text-center">
            <a href="#dmn-booking-container" className="inline-block px-12 py-6 bg-[#F29100] text-white text-[12px] font-black tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all shadow-2xl">
                Enquire for Full Takeover
            </a>
        </div>
      </section>

      <BookingSection />
    </div>
  );
};

export default FullVenuePage;
