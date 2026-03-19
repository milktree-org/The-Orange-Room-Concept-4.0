'use client';

import React from 'react';
import BookingSection from '@/components/BookingSection';
import { Zap, Presentation, Mail } from 'lucide-react';

const CorporateHirePage: React.FC = () => {
  return (
    <div className="bg-[#1a1919] min-h-screen">

      {/* 1. HERO HEADER */}
      <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden border-b-2 border-white/50">
        <img
          src="/photos/corporate hire/corporate hire page header.jpg"
          alt="Corporate Events"
          className="w-full h-full object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[1em] font-black text-[#F29100] mb-6">PROFESSIONAL IMPACT</span>
          <h1 className="text-[54px] md:text-[90px] lg:text-[130px] font-black leading-none tracking-tighter text-white uppercase">
            Corporate <span className="text-[#F29100]">Hire</span>
          </h1>
          <div className="w-24 md:w-40 h-1.5 md:h-2 bg-[#F29100] mt-10"></div>
        </div>
      </section>

      {/* 2. MAIN CONTENT — two-column: text left, full-bleed image right */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-white text-[#1a1919] border-b-2 border-[#1a1919]">
        <div className="p-10 md:p-20 lg:p-24 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-[#1a1919]">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100] mb-10">BEYOND THE BOARDROOM</span>
          <h2 className="text-[40px] md:text-[60px] font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Inspire <br /><span className="text-[#F29100]">Innovation</span>.
          </h2>
          <p className="text-[17px] leading-relaxed font-light mb-12 text-[#1a1919]/80">
            Ditch the sterile hotel conference room. Orange Rooms provides a stimulating, high-energy environment for product launches, networking mixers, and team-building retreats. With 4 unique rooms, full AV capabilities, and high-speed Wi-Fi, we blend professional requirements with legendary vibes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
            <div className="space-y-3">
              <Presentation className="w-8 h-8 text-[#F29100]" />
              <h4 className="text-[13px] font-black uppercase tracking-widest">AV & Staging</h4>
              <p className="text-[12px] text-[#1a1919]/60 font-medium">Full projection, stage setup, and club-standard sound.</p>
            </div>
            <div className="space-y-3">
              <Zap className="w-8 h-8 text-[#F29100]" />
              <h4 className="text-[13px] font-black uppercase tracking-widest">Team Building</h4>
              <p className="text-[12px] text-[#1a1919]/60 font-medium">Mixology masterclasses and interactive activities.</p>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
          <img src="/photos/corporate hire/coporate hire right side.jpg" className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]" />
          <div className="absolute inset-0 bg-[#F29100]/20 mix-blend-multiply"></div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="bg-[#1a1919] py-32 px-6 border-b-2 border-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.6em] font-black text-[#F29100] mb-8 block">PLAN YOUR EVENT</span>
          <h3 className="text-[32px] md:text-[54px] font-black uppercase text-white mb-10 tracking-tighter leading-none">Elevate your <br /> <span className="text-[#F29100]">Corporate Identity</span>.</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#dmn-booking-container" className="px-12 py-6 bg-[#F29100] text-white text-[12px] font-black tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all">
              Request Brochure
            </a>
            <a href="mailto:events@orangerooms.co.uk" className="px-12 py-6 border-2 border-white/50 text-white text-[12px] font-black tracking-[0.4em] uppercase hover:border-[#F29100] hover:text-[#F29100] transition-all flex items-center justify-center gap-3">
              <Mail className="w-4 h-4" /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* 4. BOOKING */}
      <BookingSection />
    </div>
  );
};

export default CorporateHirePage;
