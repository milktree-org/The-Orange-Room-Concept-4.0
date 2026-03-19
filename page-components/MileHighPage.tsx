'use client';

import React from 'react';
import BookingSection from '@/components/BookingSection';
import { Wind, Shield, Users, Sparkles, ChevronRight } from 'lucide-react';

const MileHighPage: React.FC = () => {
  return (
    <div className="bg-[#1a1919] min-h-screen">
      <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden border-b-2 border-white/50">
        <img 
          src="/photos/mile high/mile high header background.jpg" 
          alt="Mile High First Class Lounge" 
          className="w-full h-full object-cover brightness-[0.5] contrast-[1.1] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-[#1a1919]/20 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[1em] font-black text-[#F29100] mb-6">PREPARE FOR TAKE-OFF</span>
          <h1 className="text-[54px] md:text-[90px] lg:text-[130px] font-black leading-none tracking-tighter text-white uppercase drop-shadow-2xl">
            Mile <span className="text-[#F29100]">High</span>
          </h1>
          <div className="flex items-center gap-3 mt-10">
             <div className="h-px w-10 bg-white/40"></div>
             <span className="text-[12px] font-black tracking-widest uppercase text-white/80">FIRST CLASS ONLY</span>
             <div className="h-px w-10 bg-white/40"></div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 bg-white text-[#1a1919] border-b-2 border-[#1a1919]">
        <div className="p-10 md:p-20 lg:p-24 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-[#1a1919]">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100] mb-10">ELITE INDULGENCE</span>
          <h2 className="text-[40px] md:text-[60px] font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Your <span className="text-[#F29100]">Luxury</span> Destination.
          </h2>
          <p className="text-[17px] leading-relaxed font-light mb-12 text-[#1a1919]/80">
            Elevate your evening in our aviation-themed sanctuary. With sleek curves, private booth service, and a dedicated 'First Class' bar, Mile High is Southampton's premium destination for those who appreciate the finer details. This is an exclusive area designed for intimate gatherings and VIP celebrations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
            <div className="space-y-3">
                <Shield className="w-8 h-8 text-[#F29100]" />
                <h4 className="text-[13px] font-black uppercase tracking-widest">Private Entrance</h4>
                <p className="text-[12px] text-[#1a1919]/60 font-medium">Exclusive access for Mile High guests.</p>
            </div>
            <div className="space-y-3">
                <Sparkles className="w-8 h-8 text-[#F29100]" />
                <h4 className="text-[13px] font-black uppercase tracking-widest">VIP Service</h4>
                <p className="text-[12px] text-[#1a1919]/60 font-medium">Dedicated host and premium bottle menu.</p>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <img src="/photos/mile high/mile high right side image.jpg" className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]" />
            <div className="absolute inset-0 bg-[#F29100]/20 mix-blend-multiply"></div>
        </div>
      </section>

      <section className="bg-[#1a1919] py-20 border-y-2 border-white/50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-[28px] md:text-[42px] font-black uppercase text-white mb-8 tracking-tighter">Ready for <span className="text-[#F29100]">Boarding?</span></h3>
          <p className="text-white/40 text-[14px] font-light leading-relaxed mb-12">Reservations in Mile High are highly sought after. Secure your boarding pass today to guarantee your spot in our first-class cabin.</p>
          <a href="#dmn-booking-container" className="inline-block px-12 py-6 bg-white text-black text-[12px] font-black tracking-[0.4em] uppercase hover:bg-[#F29100] hover:text-white transition-all">Book First Class</a>
        </div>
      </section>

      <BookingSection />
    </div>
  );
};

export default MileHighPage;
