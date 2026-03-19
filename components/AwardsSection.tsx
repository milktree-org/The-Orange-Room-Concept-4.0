'use client';

import React from 'react';
import { Star, Award, ShieldCheck, Zap } from 'lucide-react';

const AwardsSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px] border-b-2 border-white/50 bg-[#1a1919]">
      
      {/* LEFT: Large Atmospheric Action Shot */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-full overflow-hidden border-b-2 lg:border-b-0 lg:border-r-2 border-white/50">
        <img 
          src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1600" 
          alt="Master Mixologist pouring a cocktail" 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* RIGHT: Typography and Awards */}
      <div className="p-8 sm:p-12 lg:p-20 flex flex-col justify-center relative">
        
        {/* Floating Vertical Label - Responsive positioning */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-32 sm:h-40 flex items-center justify-center border-l-2 border-white/50 bg-[#1a1919] hidden sm:flex">
          <span className="vertical-text text-[8px] sm:text-[9px] uppercase tracking-[0.6em] text-white/40 font-black px-3 sm:px-4">HONORS</span>
        </div>

        {/* Heading Section */}
        <div className="flex items-start justify-between mb-8 sm:mb-10">
          <h2 className="text-[42px] sm:text-[60px] lg:text-[100px] font-bold leading-[0.9] tracking-tighter text-white uppercase max-w-[400px]">
            BEATS & <br />
            <span className="text-[#F29100]">BOTTLES</span>
          </h2>
          <div className="text-[#F29100] mt-2 sm:mt-4 mr-0 sm:mr-12 lg:mr-20">
            {/* Fix: SVG does not support sm:width/height props. Using Tailwind classes instead. */}
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-10 h-10 sm:w-[60px] sm:h-[60px]">
              <path d="M50 0C52.7614 0 55 2.23858 55 5C55 18.2548 65.7452 29 79 29C81.7614 29 84 31.2386 84 34C84 36.7614 81.7614 39 79 39C65.7452 39 55 49.7452 55 63C55 65.7614 52.7614 68 50 68C47.2386 68 45 65.7614 45 63C45 49.7452 34.2548 39 21 39C18.2386 39 16 36.7614 16 34C16 31.2386 18.2386 29 21 29C34.2548 29 45 18.2548 45 5C45 2.23858 47.2386 0 50 0Z" />
              <circle cx="50" cy="85" r="8" />
            </svg>
          </div>
        </div>

        {/* Supporting Copy */}
        <div className="max-w-[550px] space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <p className="text-[14px] sm:text-[15px] lg:text-[17px] text-white/70 leading-relaxed font-light">
            We started with nothing but an enormous chunk of passion, heart and soul. A dedication to Southampton's culture, a crystal clear vision and a decision to strive for nothing but the best in mixology.
          </p>
          <p className="text-[14px] sm:text-[15px] lg:text-[17px] text-white/70 leading-relaxed font-light">
            Come join in on the ride – We’ll have a blast together.
          </p>
        </div>

        {/* Awards Icons Grid */}
        <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-end gap-6 sm:gap-12 opacity-80 hover:opacity-100 transition-opacity">
          {/* Award 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-2 h-12 sm:h-16 flex items-center">
              <span className="text-[#F29100] font-bold text-2xl sm:text-4xl">50</span>
            </div>
            <span className="text-[7px] sm:text-[8px] uppercase tracking-widest font-black text-white/60">WORLD'S BEST</span>
          </div>

          {/* Award 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-2 h-12 sm:h-16 flex items-center">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white/40" />
            </div>
            <span className="text-[7px] sm:text-[8px] uppercase tracking-widest font-black text-white/60">BEST NEW BAR</span>
          </div>

          {/* Award 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-2 h-12 sm:h-16 flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#F29100] flex items-center justify-center">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#F29100] fill-[#F29100]" />
              </div>
            </div>
            <span className="text-[7px] sm:text-[8px] uppercase tracking-widest font-black text-white/60">BIG 7 TOP</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AwardsSection;