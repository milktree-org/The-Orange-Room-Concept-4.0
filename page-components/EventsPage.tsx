'use client';

import React, { useEffect, useRef } from 'react';

const EventsPage: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widgetRef.current;
    if (!container) return;

    // Inject the FIXR shop widget script
    const script = document.createElement('script');
    script.src = 'https://web-cdn.fixr.co/scripts/fixr-shop-widget.v1.min.js';
    script.setAttribute('data-fixr-shop-id', 'f3717626-1c33-4870-a80d-8fa5a61fa568');
    container.appendChild(script);

    return () => {
      container.querySelectorAll('script').forEach(s => s.remove());
    };
  }, []);

  return (
    <div className="bg-[#1a1919] min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden border-b-2 border-white/50">
        <img
          src="/photos/events/events page header.jpg"
          alt="Events at Orange Rooms"
          className="w-full h-full object-cover brightness-[0.5] contrast-[1.2] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-transparent to-black/60" />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[1em] font-black text-[#F29100] mb-6">
            WHAT'S ON
          </span>
          <h1 className="text-[54px] md:text-[100px] lg:text-[140px] font-black leading-none tracking-tighter text-white uppercase drop-shadow-2xl">
            <span className="text-[#F29100]">Events</span>
          </h1>
          <div className="w-24 md:w-40 h-1.5 md:h-2.5 bg-[#F29100] mt-10 shadow-2xl"></div>
        </div>
      </section>

      {/* 2. INTRO SECTION — two columns: text left, image right */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-white text-[#1a1919] border-b-2 border-[#1a1919]">
        <div className="p-10 md:p-20 lg:p-24 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-[#1a1919]">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100] mb-10">SOUTHAMPTON'S LEGENDARY NIGHTS</span>
          <h2 className="text-[40px] md:text-[60px] font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Every Night <br /> <span className="text-[#F29100]">Is Different</span>.
          </h2>
          <p className="text-[17px] leading-relaxed font-light mb-8 text-[#1a1919]/80">
            From legendary club nights and live DJ sets to themed parties and exclusive one-off events, Orange Rooms is where Southampton comes to celebrate. Check out our upcoming events below and grab your tickets before they sell out.
          </p>
          <p className="text-[17px] leading-relaxed font-light text-[#1a1919]/80">
            Whether it's a Friday night blowout, a Saturday special, or a midweek surprise — there's always something happening at Orange Rooms.
          </p>
        </div>
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
          <img src="/photos/events/right side image.jpg" className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]" />
          <div className="absolute inset-0 bg-[#F29100]/20 mix-blend-multiply"></div>
        </div>
      </section>

      {/* 3. FIXR TICKET WIDGET */}
      <section className="bg-[#1a1919] py-24 px-6 md:px-12 border-b-2 border-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] font-black text-[#F29100] mb-6 block">GET YOUR TICKETS</span>
            <h2 className="text-[42px] md:text-[64px] lg:text-[88px] font-black leading-none tracking-tighter text-white uppercase">
              Upcoming <span className="text-[#F29100] font-semibold">Events</span>
            </h2>
          </div>

          <div ref={widgetRef} className="min-h-[400px]" />
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
