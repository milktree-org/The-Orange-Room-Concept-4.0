'use client';

import React from 'react';

const MarqueeSection: React.FC = () => {
  const text = "UNFORGETTABLE EXPERIENCES ♦ SHAKE UP YOUR MIXOLOGY ♦ LEGENDARY PARTY BRUNCHES ♦ GROOVE TO THE BEATS ♦ RETRO-INSPIRED WONDERLAND ♦ ";
  
  return (
    <section className="bg-white h-24 flex items-center overflow-hidden border-y-2 border-white/50 relative z-20">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-[28px] lg:text-[34px] font-bold text-[#F29100] tracking-tight px-4 uppercase">
          {text}
        </span>
        <span className="text-[28px] lg:text-[34px] font-bold text-[#F29100] tracking-tight px-4 uppercase">
          {text}
        </span>
        <span className="text-[28px] lg:text-[34px] font-bold text-[#F29100] tracking-tight px-4 uppercase">
          {text}
        </span>
      </div>
    </section>
  );
};

export default MarqueeSection;
