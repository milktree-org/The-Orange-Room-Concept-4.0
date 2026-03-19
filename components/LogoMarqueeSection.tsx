'use client';

import React from 'react';
import { Mountain, Palmtree, Wind, Tent, Zap } from 'lucide-react';

const LogoMarqueeSection: React.FC = () => {
  const logos = [
    { name: "ORANGE ROOMS", sub: "ESTD SOUTHAMPTON 2001", icon: <Zap className="w-5 h-5" /> },
    { name: "TIKI LOUNGE", sub: "EXOTIC ESCAPE", icon: <Palmtree className="w-6 h-6" /> },
    { name: "OFF PISTE", sub: "THE ALPINE LODGE", icon: <Mountain className="w-6 h-6" /> },
    { name: "MILE HIGH", sub: "FIRST CLASS LOUNGE", icon: <Wind className="w-6 h-6" /> },
    { name: "OUTSIDE ORANGE", sub: "AL FRESCO VIBES", icon: <Tent className="w-6 h-6" /> },
  ];

  // Repeat logos to ensure seamless scroll
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-white h-24 flex items-center overflow-hidden border-y-2 border-white/50 relative z-20 shadow-inner">
      <div className="flex whitespace-nowrap animate-marquee items-center">
        {repeatedLogos.map((logo, index) => (
          <div key={index} className="flex items-center space-x-12 px-12 group cursor-default">
            {/* Logo Item */}
            <div className="flex items-center space-x-4">
              <div className="text-[#F29100] group-hover:scale-110 transition-transform duration-500">
                {logo.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[#1a1919] font-black text-[16px] tracking-[0.2em] leading-none uppercase">
                  {logo.name}
                </span>
                <span className="text-[#F29100] group-hover:text-[#1a1919] transition-colors duration-500 text-[8px] font-bold tracking-[0.3em] mt-1 uppercase">
                  {logo.sub}
                </span>
              </div>
            </div>
            {/* Separator */}
            <div className="w-1.5 h-1.5 rounded-full bg-[#F29100]/30 group-hover:bg-[#F29100] transition-colors"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoMarqueeSection;
