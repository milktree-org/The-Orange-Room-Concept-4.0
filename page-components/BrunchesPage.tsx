'use client';

import React from 'react';
import BookingSection from '@/components/BookingSection';
import { Sparkles, Utensils, GlassWater, Clock, ChevronRight, Music, CheckCircle2 } from 'lucide-react';

const BrunchesPage: React.FC = () => {
  const brunchFeatures = [
    {
      title: "Bottomless Cocktails",
      desc: "2 hours of unlimited cocktails. Option to upgrade for a fiver to include prosecco or bottled beer.",
      icon: <GlassWater className="w-10 h-10 text-[#F29100]" />
    },
    {
      title: "The Menu",
      desc: "From Sourdough stacks to Breakfast Burritos and tropical bowls.",
      icon: <Utensils className="w-10 h-10 text-[#F29100]" />
    },
    {
      title: "Live Soundtrack",
      desc: "Our resident DJs spinning Disco, House, and Retro anthems.",
      icon: <Music className="w-10 h-10 text-[#F29100]" />
    }
  ];

  const row1Images = [
    '/photos/bottomless brunches/gallery/IMG_20250625_203444.jpg',
    '/photos/bottomless brunches/gallery/Bottomless-Cocktails.jpg',
    '/photos/bottomless brunches/gallery/Orange Rooms 07.02.2026 12.jpg',
    '/photos/bottomless brunches/gallery/Pizza 1.jpg',
    '/photos/bottomless brunches/gallery/FB_IMG_1751373868123.jpg',
    '/photos/bottomless brunches/gallery/IMG-20250630-WA0005.jpg',
    '/photos/bottomless brunches/gallery/Orange Rooms 07.02.2026 27.jpg',
    '/photos/bottomless brunches/gallery/IMG_20250708_151039.jpg',
  ];

  const row2Images = [
    '/photos/bottomless brunches/gallery/IMG_20250630_150427.jpg',
    '/photos/bottomless brunches/gallery/Pizza 2.jpg',
    '/photos/bottomless brunches/gallery/Orange Rooms 07.02.2026 40.jpg',
    '/photos/bottomless brunches/gallery/FB_IMG_1751373877521.jpg',
    '/photos/bottomless brunches/gallery/IMG_20250708_175051.jpg',
    '/photos/bottomless brunches/gallery/Pizza 4.jpg',
    '/photos/bottomless brunches/gallery/Orange Rooms 07.02.2026 41.jpg',
    '/photos/bottomless brunches/gallery/IMG_20250625_214028.jpg',
  ];

  return (
    <div className="bg-[#1a1919] min-h-screen">

      {/* 1. HERO HEADER */}
      <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden border-b-2 border-white/50">
        <img
          src="/photos/bottomless brunches/bottomless brunch page header.jpg"
          alt="Bottomless Brunches"
          className="w-full h-full object-cover brightness-[0.5] contrast-[1.1] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] uppercase tracking-[0.8em] font-black text-[#F29100] mb-6 block">SATURDAY & SUNDAY</span>
          <h1 className="text-[54px] md:text-[90px] lg:text-[130px] font-black leading-none tracking-tighter text-white uppercase drop-shadow-2xl">
            Bottomless <br /> <span className="text-[#F29100]">Brunches</span>
          </h1>
          <div className="mt-10 flex items-center gap-4 bg-white/10 backdrop-blur-md px-10 py-5 border border-white/50">
            <Clock className="w-5 h-5 text-[#F29100]" />
            <span className="text-[14px] font-black tracking-[0.3em] uppercase">12:00 PM — 6:00 PM</span>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION — two-column: text left, full-bleed image right */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-white text-[#1a1919] border-b-2 border-[#1a1919]">
        <div className="p-10 md:p-20 lg:p-24 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-[#1a1919]">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100] mb-10">THE DAYTIME TAKEOVER</span>
          <h2 className="text-[40px] md:text-[60px] font-black tracking-tighter uppercase leading-[0.9] mb-8">
            The Best <br /> <span className="text-[#F29100]">Party</span> in Town.
          </h2>
          <p className="text-[17px] leading-relaxed font-light mb-12 text-[#1a1919]/80">
            Southampton's most legendary daytime party. Our Bottomless Brunch sessions are the perfect way to celebrate anything from birthdays to 'just because'. Enjoy 2 hours of unlimited drinks, a delicious main course, and high-octane vibes in the coolest venue in town.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
            {brunchFeatures.slice(0, 2).map((f, i) => (
              <div key={i} className="space-y-3">
                <div className="w-16 h-16 border-2 border-[#1a1919] flex items-center justify-center">{f.icon}</div>
                <h4 className="text-[13px] font-black uppercase tracking-widest">{f.title}</h4>
                <p className="text-[12px] text-[#1a1919]/60 font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
          <img src="/photos/bottomless brunches/bottomless brunch right side.jpg" className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]" />
          <div className="absolute inset-0 bg-[#F29100]/20 mix-blend-multiply"></div>
        </div>
      </section>

      {/* 3. THE RULES SECTION */}
      <section className="bg-[#1a1919] py-24 px-6 border-b-2 border-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-[32px] md:text-[50px] font-black text-white uppercase tracking-tighter mb-4">The <span className="text-[#F29100]">Bottomless</span> Rules</h3>
            <p className="text-white/40 text-[12px] uppercase tracking-[0.4em]">Fair play for the best party vibes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Unlimited drinks for exactly 120 minutes.",
              "One drink at a time per person.",
              "Upgrade to include pizza from our Figarati kitchen.",
              "Last drink orders are taken 15 mins before time ends.",
              "If you arrive late to your session, we cannot guarantee an extension of your booking time.",
              "Management reserve the right to refuse service.",
              "Bookings are essential to guarantee your spot."
            ].map((rule, idx) => (
              <div key={idx} className="p-8 border-2 border-white/50 flex items-start gap-4 hover:border-[#F29100] transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#F29100] shrink-0 mt-1" />
                <span className="text-white text-[14px] font-light leading-relaxed">{rule}</span>
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

        {/* Row 2: Scrolls Right — no border-t, shared line comes from row 1's border-b */}
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

export default BrunchesPage;
