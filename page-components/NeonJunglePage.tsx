'use client';

import React from 'react';
import BookingSection from '@/components/BookingSection';
import { Zap, Sparkles, Sun, Flame } from 'lucide-react';

const NeonJunglePage: React.FC = () => {
  return (
    <div className="bg-[#1a1919] min-h-screen">

      {/* 1. HERO HEADER */}
      <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden border-b-2 border-white/50">
        <img
          src="/photos/neon jungle/neon jungle page header.jpg"
          alt="Neon Jungle"
          className="w-full h-full object-cover brightness-[0.5] contrast-[1.2] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.8em] font-black text-[#F29100] mb-6">A TROPICAL ODYSSEY</span>
          <h1 className="text-[54px] md:text-[90px] lg:text-[130px] font-black leading-none tracking-tighter text-white uppercase drop-shadow-2xl">
            Neon <span className="text-[#F29100]">Jungle</span>
          </h1>
          <p className="text-white/90 text-[18px] md:text-[24px] mt-6">Immersive greenery. Frozen vibes. Neon lights.</p>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION — two-column: text left, full-bleed image right */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-white text-[#1a1919] border-b-2 border-[#1a1919]">
        <div className="p-10 md:p-20 lg:p-24 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-[#1a1919]">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100] mb-10">WELCOME TO THE WILD</span>
          <h2 className="text-[40px] md:text-[60px] font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Enter the <br /><span className="text-[#F29100]">Oasis</span>.
          </h2>
          <p className="text-[17px] leading-relaxed font-light mb-12 text-[#1a1919]/80">
            Step into our fully immersive Neon Jungle — a fusion of urban grit and tropical paradise. Dense exotic greenery is illuminated by glowing neon signs, creating a sensory escape like no other in Southampton. With a semi-outdoor feel and an exclusive Neon Jungle drinks menu, it's the ultimate spot to lose yourself in the music.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
            <div className="space-y-3">
              <Sun className="w-8 h-8 text-[#F29100]" />
              <h4 className="text-[13px] font-black uppercase tracking-widest">Al Fresco Feel</h4>
              <p className="text-[12px] text-[#1a1919]/60 font-medium">A semi-outdoor tropical escape right in the city.</p>
            </div>
            <div className="space-y-3">
              <Zap className="w-8 h-8 text-[#F29100]" />
              <h4 className="text-[13px] font-black uppercase tracking-widest">Neon Artwork</h4>
              <p className="text-[12px] text-[#1a1919]/60 font-medium">Custom glowing installations lighting every corner.</p>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
          <img src="/photos/neon jungle/neon jungle right side section 2.jpg" className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]" />
          <div className="absolute inset-0 bg-[#F29100]/20 mix-blend-multiply"></div>
        </div>
      </section>

      {/* 3. EXCLUSIVE MENU HIGHLIGHT */}
      <section className="bg-[#1a1919] py-24 px-6 border-b-2 border-white/50 overflow-hidden relative">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 z-10">
               <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100] mb-8 block">ONLY IN THE JUNGLE</span>
               <h3 className="text-[42px] md:text-[64px] font-black text-white uppercase tracking-tighter leading-none mb-10">The Exclusive <br /> <span className="text-[#F29100]">Jungle Menu</span></h3>
               <p className="text-white/60 text-[18px] font-light leading-relaxed mb-12">
                 The Neon Jungle comes with its own exclusive drinks menu — a curated selection of tropical serves, signature cocktails, and house specials crafted specifically for this space. Ask our team for the full menu on your visit.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 border-2 border-white/50 flex items-center gap-4">
                     <Sparkles className="w-8 h-8 text-[#F29100]" />
                     <span className="text-[11px] font-black text-white uppercase tracking-widest">SIGNATURE SERVES</span>
                  </div>
                  <div className="p-6 border-2 border-white/50 flex items-center gap-4">
                     <Flame className="w-8 h-8 text-[#F29100]" />
                     <span className="text-[11px] font-black text-white uppercase tracking-widest">TROPICAL SPECIALS</span>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 relative aspect-video lg:aspect-square">
               <img src="/photos/neon jungle/neon jungle right side section 3.png" className="w-full h-full object-cover brightness-[0.7] grayscale-[0.4]" />
               <div className="absolute inset-0 bg-[#F29100]/20 mix-blend-color"></div>
            </div>
         </div>
      </section>

      {/* 4. BOOKING */}
      <BookingSection />
    </div>
  );
};

export default NeonJunglePage;
