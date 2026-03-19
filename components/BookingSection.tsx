'use client';

import React, { useEffect, useRef } from 'react';

const BookingSection: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widgetRef.current;
    if (!container) return;

    // Remove any previous widget script inside the container
    container.querySelectorAll('script').forEach(s => s.remove());

    // Inject the DMN script directly into the container so the widget renders here
    const script = document.createElement('script');
    script.src = '//widgets.designmynight.com/bookings-partner.min.js';
    script.setAttribute('dmn-booking-form', 'true');
    script.setAttribute('venue', '5f996292f3f8486bfd7679b4');
    script.setAttribute('hide-offers', 'false');
    script.setAttribute('hide-powered-by', 'true');
    script.setAttribute('search-venues', 'false');
    script.setAttribute('monday-first', 'true');
    container.appendChild(script);

    return () => {
      container.querySelectorAll('script').forEach(s => s.remove());
    };
  }, []);

  return (
    <section className="bg-[#1a1919] py-24 lg:py-32 border-b-2 border-white/50 flex flex-col items-center justify-center relative overflow-hidden">
      {/* DMN widget: full-width container styles */}
      <style>{`
        #dmn-booking-container > div,
        #dmn-booking-container iframe {
          width: 100% !important;
          max-width: 100% !important;
        }
      `}</style>
      {/* Background Graphic Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#F29100]/20 blur-xl opacity-20"></div>

      {/* Heading */}
      <div className="text-center mb-16 px-6">
        <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#F29100] mb-6 block">RESERVATIONS</span>
        <h2 className="text-[50px] lg:text-[80px] font-bold tracking-tighter text-white leading-none">
          JOIN THE <span className="text-white/90">CLUB</span>
        </h2>
      </div>

      {/* Widget Container */}
      <div className="w-full max-w-[1000px] px-6">
        <div className="relative z-10 border border-white/10 rounded-sm overflow-hidden">
          <div
            ref={widgetRef}
            id="dmn-booking-container"
            className="bg-[#1a1919] min-h-[450px] transition-all duration-500"
          />
        </div>

        {/* Footer info */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-widest font-bold text-white/30 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <span>INSTANT CONFIRMATION</span>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span>SECURE DEPOSIT</span>
          </div>
          <div className="text-white/20 hover:text-[#F29100] transition-colors cursor-pointer">
            NEED HELP? CONTACT@ORANGEROOMS.CO.UK
          </div>
        </div>
      </div>

      {/* Side Label */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-40 hidden lg:flex items-center justify-center border-r-2 border-white/50">
        <span className="vertical-text text-[9px] uppercase tracking-[0.6em] text-white/20 font-black px-4">BOOKING</span>
      </div>
    </section>
  );
};

export default BookingSection;
