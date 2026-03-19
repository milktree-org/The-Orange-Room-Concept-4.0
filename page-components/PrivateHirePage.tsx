'use client';

import React from 'react';
import BookingSection from '@/components/BookingSection';
import { PartyPopper, Layout } from 'lucide-react';

const PrivateHirePage: React.FC = () => {
  const rooms = [
    { name: "Tiki Lounge", cap: "40", vibe: "Exotic / Tropical" },
    { name: "Off Piste", cap: "60", vibe: "Alpine / Cozy" },
    { name: "Mile High", cap: "80", vibe: "Luxe / Aviation" },
    { name: "Neon Jungle", cap: "100", vibe: "Urban / Garden" }
  ];

  const row1Images = [
    '/photos/private hire/gallery/Large Cassette Booth.jpg',
    '/photos/private hire/gallery/Neon Jungle 2.jpg',
    '/photos/private hire/gallery/Fish Tank Tables.jpg',
    '/photos/private hire/gallery/LJL03563-HDR.jpg',
    '/photos/private hire/gallery/Neon Booth.jpg',
    '/photos/private hire/gallery/Off Piste Booth.jpg',
    '/photos/private hire/gallery/Small Cassette Booth.jpg',
    '/photos/private hire/gallery/themed-brunches.jpg',
  ];

  const row2Images = [
    '/photos/private hire/gallery/Small Dancefloor Booth.jpg',
    '/photos/private hire/gallery/themed-brunches.jpg',
    '/photos/private hire/gallery/Neon Booth.jpg',
    '/photos/private hire/gallery/Large Cassette Booth.jpg',
    '/photos/private hire/gallery/Off Piste Booth.jpg',
    '/photos/private hire/gallery/Fish Tank Tables.jpg',
    '/photos/private hire/gallery/LJL03563-HDR.jpg',
    '/photos/private hire/gallery/Neon Jungle 2.jpg',
  ];

  return (
    <div className="bg-[#1a1919] min-h-screen">

      {/* 1. HERO HEADER */}
      <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden border-b-2 border-white/50">
        <img
          src="/photos/private hire/private hire page header.jpg"
          alt="Private Hire"
          className="w-full h-full object-cover brightness-[0.5] grayscale-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[1em] font-black text-[#F29100] mb-6">EXCLUSIVE EVENTS</span>
          <h1 className="text-[54px] md:text-[100px] lg:text-[140px] font-black leading-none tracking-tighter text-white uppercase">
            Private <span className="text-[#F29100]">Hire</span>
          </h1>
          <div className="w-24 md:w-40 h-1.5 md:h-2 bg-[#F29100] mt-10"></div>
        </div>
      </section>

      {/* 2. INTRO SECTION — two-column: text left, full-bleed image right */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-white text-[#1a1919] border-b-2 border-[#1a1919]">
        <div className="p-10 md:p-20 lg:p-24 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-[#1a1919]">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100] mb-10">CELEBRATE IN STYLE</span>
          <h2 className="text-[40px] md:text-[60px] font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Your Vision, <br /> <span className="text-[#F29100]">Our Venue.</span>
          </h2>
          <p className="text-[17px] leading-relaxed font-light mb-12 text-[#1a1919]/80">
            From 21st birthdays to engagement parties and wedding receptions with a twist, Orange Rooms offers the ultimate flexible event space. Whether you need an intimate booth or a full-venue takeover for 500, our dedicated events team handles every detail—from custom cocktail menus to live entertainment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
            <div className="space-y-3">
              <PartyPopper className="w-8 h-8 text-[#F29100]" />
              <h4 className="text-[13px] font-black uppercase tracking-widest">Party Planning</h4>
              <p className="text-[12px] text-[#1a1919]/60 font-medium">Full support from our dedicated events team.</p>
            </div>
            <div className="space-y-3">
              <Layout className="w-8 h-8 text-[#F29100]" />
              <h4 className="text-[13px] font-black uppercase tracking-widest">Bespoke Spaces</h4>
              <p className="text-[12px] text-[#1a1919]/60 font-medium">From intimate booths to full 500-guest takeovers.</p>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
          <img src="/photos/private hire/private hire right side.jpg" className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]" />
          <div className="absolute inset-0 bg-[#F29100]/20 mix-blend-multiply"></div>
        </div>
      </section>

      {/* 3. ROOMS TABLE */}
      <section className="bg-[#1a1919] py-24 px-6 border-b-2 border-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h3 className="text-[32px] md:text-[50px] font-black text-white uppercase tracking-tighter">Choose Your <span className="text-[#F29100]">Sanctuary</span></h3>
            <p className="text-white/40 text-[12px] uppercase tracking-[0.4em]">Available for private bookings 7 days a week</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-white/50">
            {rooms.map((room, i) => (
              <div key={i} className={`p-10 flex flex-col gap-6 hover:bg-[#F29100] transition-all group ${i < 3 ? 'border-b-2 lg:border-b-0 lg:border-r-2 border-white/50' : ''}`}>
                <h4 className="text-[24px] font-black text-white uppercase group-hover:text-[#1a1919]">{room.name}</h4>
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-white/40 group-hover:text-black/40 uppercase tracking-widest">CAPACITY</span>
                  <p className="text-white group-hover:text-black font-bold">UP TO {room.cap} GUESTS</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-white/40 group-hover:text-black/40 uppercase tracking-widest">VIBE</span>
                  <p className="text-white group-hover:text-black font-bold">{room.vibe}</p>
                </div>
                <a href="#dmn-booking-container" className="mt-8 text-[11px] font-black uppercase tracking-widest text-[#F29100] group-hover:text-black underline">ENQUIRE</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GALLERY CAROUSEL */}
      <section className="bg-[#1a1919] py-0 border-b-2 border-white/50 overflow-hidden">
        {/* Row 1: Scrolls Left — border-b is the single shared divider */}
        <div className="overflow-hidden border-b-2 border-white/50">
          <div className="flex animate-marquee" style={{width: 'max-content'}}>
            {[...row1Images, ...row1Images].map((src, i) => (
              <div key={i} className="w-[350px] h-[425px] flex-shrink-0 border-r-2 border-white/50 overflow-hidden bg-white/5">
                <img src={src} alt="" className="w-full h-full object-cover grayscale-[0.2]" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls Right — no border-t, shared line from row 1's border-b */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-reverse" style={{width: 'max-content'}}>
            {[...row2Images, ...row2Images].map((src, i) => (
              <div key={i} className="w-[350px] h-[425px] flex-shrink-0 border-r-2 border-white/50 overflow-hidden bg-white/5">
                <img src={src} alt="" className="w-full h-full object-cover grayscale-[0.2]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOOKING */}
      <BookingSection />
    </div>
  );
};

export default PrivateHirePage;
