'use client';

import React from 'react';
import BookingSection from '@/components/BookingSection';
import { Mountain, Wind, GlassWater, ChevronRight, Zap } from 'lucide-react';

const OffPistePage: React.FC = () => {
  return (
    <div className="bg-[#1a1919] min-h-screen">
      <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden border-b-2 border-white/50">
        <img 
          src="/photos/off piste/off piste page header.jpg" 
          alt="Off Piste Alpine Lounge" 
          className="w-full h-full object-cover brightness-[0.6] contrast-[1.2] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-[#1a1919]/30 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.8em] font-black text-[#F29100] mb-6">THE MOUNTAIN IS CALLING</span>
          <h1 className="text-[60px] md:text-[100px] lg:text-[140px] font-black leading-none tracking-tighter text-white uppercase drop-shadow-2xl">
            Off <span className="text-[#F29100]">Piste</span>
          </h1>
          <p className="text-white/80 text-[18px] md:text-[24px] mt-4">Alpine beats & cozy retreats.</p>
          <div className="w-24 md:w-40 h-1.5 md:h-2 bg-[#F29100] mt-10"></div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 border-b-2 border-white/50">
        <div className="p-10 md:p-20 lg:p-24 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-white/50">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100] mb-8">SKI LODGE VIBES</span>
          <h2 className="text-[36px] md:text-[54px] font-black text-white uppercase leading-[0.95] mb-8">Southampton's <br /><span className="text-[#F29100]">Après-Ski</span> Secret.</h2>
          <p className="text-[16px] md:text-[18px] text-white/70 leading-relaxed font-light mb-10">
            Cozy up in our mountain-inspired retreat. Featuring faux fur throws, wood-paneled walls, and our iconic ski-lift booths, Off Piste is the ultimate sanctuary for a night of indulgence. Whether you're sharing a shot-ski with friends or enjoying a rich, fireside-style cocktail, the vibe here is always warm.
          </p>
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-4">
              <Mountain className="w-8 h-8 text-[#F29100]" />
              <span className="text-[12px] font-black tracking-widest uppercase">ALPINE DECOR</span>
            </div>
            <div className="flex items-center gap-4">
              <GlassWater className="w-8 h-8 text-[#F29100]" />
              <span className="text-[12px] font-black tracking-widest uppercase">SHOT-SKIS</span>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] lg:h-auto bg-black flex items-center justify-center p-12 overflow-hidden">
          <img src="/photos/off piste/off piste right side.jpg" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[0.3]" />
          <div className="relative z-10 text-center border-4 border-[#F29100] p-10 backdrop-blur-sm">
             <h4 className="text-white text-[24px] md:text-[32px] font-black uppercase tracking-tighter mb-4">The VIP Lift</h4>
             <p className="text-[12px] text-white/70 font-black tracking-[0.3em] uppercase mb-6">CAPACITY: 8-10 GUESTS</p>
             <a href="#dmn-booking-container" className="px-8 py-3 bg-[#F29100] text-white text-[10px] font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all">Book The Booth</a>
          </div>
        </div>
      </section>

      <BookingSection />
    </div>
  );
};

export default OffPistePage;
