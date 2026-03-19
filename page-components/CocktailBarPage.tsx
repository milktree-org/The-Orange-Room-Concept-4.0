'use client';

import React from 'react';
import BookingSection from '@/components/BookingSection';
import { GlassWater, Sparkles, Zap, Award, Users, ChevronRight, Martini, Flame } from 'lucide-react';

const CocktailBarPage: React.FC = () => {
  const masterclasses = [
    {
      title: "Private Masterclass",
      details: "Perfect for birthdays, hen parties or just a group of friends wanting a laugh.",
      includes: ["Glass of Bubbles on Arrival", "2 Cocktails Each", "Layered Shot to Finish"],
      price: "£27pp"
    },
    {
      title: "Corporate Team Build",
      details: "Foster teamwork and creativity with a competitive mixology challenge.",
      includes: ["Welcome Fizz", "Speed Rounds", "Team Cocktail Creation"],
      price: "Enquire for Pricing"
    },
    {
      title: "VIP Public Session",
      details: "Join our expert mixologists for an intimate look at seasonal menu items and spirit deep-dives.",
      includes: ["Menu Insights", "Advanced Techniques", "Gift Bags Included"],
      price: "Enquire for Pricing"
    }
  ];

  return (
    <div className="bg-[#1a1919] min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden border-b-2 border-white/50">
        <img 
          src="/photos/cocktail/cocktail page header.jpg" 
          alt="Award Winning Cocktail Bar" 
          className="w-full h-full object-cover brightness-[0.5] contrast-[1.2] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-transparent to-black/60" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[1em] font-black text-[#F29100] mb-6">
            LIQUID IMAGINATION
          </span>
          <h1 className="text-[54px] md:text-[100px] lg:text-[140px] font-black leading-none tracking-tighter text-white uppercase drop-shadow-2xl">
            <span className="text-[#F29100]">Cocktail</span> Bar
          </h1>
          <div className="w-24 md:w-40 h-1.5 md:h-2.5 bg-[#F29100] mt-10 shadow-2xl"></div>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-white text-[#1a1919] border-b-2 border-[#1a1919]">
        <div className="p-10 md:p-20 lg:p-24 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-[#1a1919]">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100] mb-10">THE MIXOLOGY MANIFESTO</span>
          <h2 className="text-[40px] md:text-[60px] font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Shaken, Stirred, <br /> <span className="text-[#F29100]">Perfected</span>.
          </h2>
          <p className="text-[17px] leading-relaxed font-light mb-12 text-[#1a1919]/80">
            For 25 years, Orange Rooms has been the epicenter of Southampton's cocktail culture. Our mixologists don't just follow recipes; they push boundaries. From tropical Tiki staples to retro-inspired house specials, every drink is a testament to our passion for liquid art. We source only the finest spirits and freshest botanicals to ensure every sip is legendary.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
            <div className="space-y-3">
                <span className="text-[28px] font-black text-[#F29100]">50+</span>
                <h4 className="text-[13px] font-black uppercase tracking-widest">Unique Recipes</h4>
                <p className="text-[12px] text-[#1a1919]/60 font-medium">Crafted in-house by our master mixologists.</p>
            </div>
            <div className="space-y-3">
                <span className="text-[28px] font-black text-[#F29100]">25</span>
                <h4 className="text-[13px] font-black uppercase tracking-widest">Years of Innovation</h4>
                <p className="text-[12px] text-[#1a1919]/60 font-medium">Southampton's original cocktail pioneers since 2001.</p>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <img src="/photos/cocktail/cocktail page right side.jpg" className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]" />
            <div className="absolute inset-0 bg-[#F29100]/20 mix-blend-multiply"></div>
        </div>
      </section>

      {/* 3. COCKTAIL MASTERCLASSES SECTION */}
      <section className="bg-[#1a1919] py-24 px-6 md:px-12 border-b-2 border-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
             <div className="max-w-2xl">
                <span className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] font-black text-[#F29100] mb-6 block">LEARN THE CRAFT</span>
                <h2 className="text-[42px] md:text-[64px] lg:text-[88px] font-black leading-none tracking-tighter text-white uppercase">
                  Cocktail <br /> <span className="text-[#F29100] font-semibold">Masterclasses</span>
                </h2>
             </div>
             <p className="text-white/40 text-[14px] md:text-[16px] leading-relaxed font-light max-w-sm">
               Ever wanted to know what goes on behind the bar? Our expert mixologists are ready to spill the secrets. From the classic Mojito to our signature house infusions.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-white/50">
            {masterclasses.map((cls, idx) => (
              <div key={idx} className={`p-10 md:p-14 flex flex-col h-full bg-[#1a1919] hover:bg-[#F29100]/5 transition-colors duration-500 ${idx < 2 ? 'md:border-r-2 border-white/50' : ''} border-b-2 md:border-b-0 border-white/50`}>
                <div className="mb-8">
                  <h3 className="text-[24px] md:text-[28px] font-bold text-white uppercase tracking-tighter mb-4">{cls.title}</h3>
                  <p className="text-white/60 text-[14px] font-light leading-relaxed">{cls.details}</p>
                </div>
                
                <ul className="space-y-3 mb-12 flex-1">
                  {cls.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F29100]"></div>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-white/50 flex items-center justify-between">
                  <span className="text-[14px] font-black text-white">{cls.price}</span>
                  <a href="#dmn-booking-container" className="p-3 bg-[#F29100] rounded-full hover:bg-white transition-all group">
                    <ChevronRight className="w-5 h-5 text-white group-hover:text-black" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-4 gap-4">
             <div className="lg:col-span-3 bg-[#F29100] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                   <h3 className="text-[28px] md:text-[42px] font-black text-white uppercase tracking-tighter leading-none mb-4">Shake, Stir & Sip</h3>
                   <p className="text-white text-[14px] font-medium opacity-80">Bookings available Monday through Sunday. Minimum group size of 6.</p>
                </div>
                <a href="#dmn-booking-container" className="px-12 py-5 bg-white text-black font-black text-[12px] tracking-[0.4em] uppercase hover:bg-[#1a1919] hover:text-white transition-all shadow-xl">
                    Book Your Class
                </a>
             </div>
             <div className="bg-white/5 border-2 border-white/50 p-10 flex flex-col items-center justify-center text-center">
                <Flame className="w-8 h-8 text-[#F29100] mb-4" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">LIMITED SLOTS</span>
                <span className="text-[14px] font-black text-white mt-1 uppercase">WEEKENDS SELL OUT</span>
             </div>
          </div>
        </div>
      </section>

      {/* 4. DRINKS CAROUSEL GALLERY */}
      <section className="bg-[#1a1919] py-0 border-b-2 border-white/50 overflow-hidden">
        {/* Row 1: Scrolls Left — border-b acts as the single shared divider */}
        <div className="overflow-hidden border-b-2 border-white/50">
          <div className="flex animate-marquee" style={{width: 'max-content'}}>
            {[
              '/photos/cocktail/gallery/IMG_20250625_203444.jpg',
              '/photos/cocktail/gallery/Espresso Martini.jpg',
              '/photos/cocktail/gallery/Orange Rooms 07.02.2026 12.jpg',
              '/photos/cocktail/gallery/Bramble.png',
              '/photos/cocktail/gallery/IMG-20250630-WA0005.jpg',
              '/photos/cocktail/gallery/Rasp Gin Fizz.jpg',
              '/photos/cocktail/gallery/Orange Rooms 07.02.2026 27.jpg',
              '/photos/cocktail/gallery/IMG_20250708_151039.jpg',
              '/photos/cocktail/gallery/IMG_20250625_203444.jpg',
              '/photos/cocktail/gallery/Espresso Martini.jpg',
              '/photos/cocktail/gallery/Orange Rooms 07.02.2026 12.jpg',
              '/photos/cocktail/gallery/Bramble.png',
              '/photos/cocktail/gallery/IMG-20250630-WA0005.jpg',
              '/photos/cocktail/gallery/Rasp Gin Fizz.jpg',
              '/photos/cocktail/gallery/Orange Rooms 07.02.2026 27.jpg',
              '/photos/cocktail/gallery/IMG_20250708_151039.jpg',
            ].map((src, i) => (
              <div key={i} className="w-[350px] h-[425px] flex-shrink-0 border-r-2 border-white/50 overflow-hidden bg-white/5">
                <img src={src} alt="" className="w-full h-full object-cover grayscale-[0.2]" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls Right — no border-t, shared line comes from row 1's border-b */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-reverse" style={{width: 'max-content'}}>
            {[
              '/photos/cocktail/gallery/IMG_20250630_150427.jpg',
              '/photos/cocktail/gallery/Caiprihna.png',
              '/photos/cocktail/gallery/Orange Rooms 07.02.2026 40.jpg',
              '/photos/cocktail/gallery/LIZ Old Fashioned.png',
              '/photos/cocktail/gallery/IMG_20250708_175051.jpg',
              '/photos/cocktail/gallery/Bottomless-Cocktails.jpg',
              '/photos/cocktail/gallery/Orange Rooms 07.02.2026 41.jpg',
              '/photos/cocktail/gallery/IMG_20250625_214028.jpg',
              '/photos/cocktail/gallery/IMG_20250630_150427.jpg',
              '/photos/cocktail/gallery/Caiprihna.png',
              '/photos/cocktail/gallery/Orange Rooms 07.02.2026 40.jpg',
              '/photos/cocktail/gallery/LIZ Old Fashioned.png',
              '/photos/cocktail/gallery/IMG_20250708_175051.jpg',
              '/photos/cocktail/gallery/Bottomless-Cocktails.jpg',
              '/photos/cocktail/gallery/Orange Rooms 07.02.2026 41.jpg',
              '/photos/cocktail/gallery/IMG_20250625_214028.jpg',
            ].map((src, i) => (
              <div key={i} className="w-[350px] h-[425px] flex-shrink-0 border-r-2 border-white/50 overflow-hidden bg-white/5">
                <img src={src} alt="" className="w-full h-full object-cover grayscale-[0.2]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOOKING SECTION */}
      <BookingSection />
    </div>
  );
};

export default CocktailBarPage;
