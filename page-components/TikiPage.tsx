'use client';

import React from 'react';
import BookingSection from '@/components/BookingSection';
import { Palmtree, GlassWater, Sparkles, ChevronRight, MapPin, Waves } from 'lucide-react';

const TikiPage: React.FC = () => {
  const tikiTables = [
    {
      title: "Tiki Booths",
      capacity: "6 - 8 Guests",
      image: "https://www.orangerooms.co.uk/wp-content/uploads/2024/01/tiki-booths.jpg",
      description: "Bamboo-clad sanctuaries tucked away in our tropical oasis. Best served with our signature Mai Tais.",
      vibe: "EXOTIC / PRIVATE"
    },
    {
      title: "Tiki Shack",
      capacity: "Up to 15 Guests",
      image: "https://www.orangerooms.co.uk/wp-content/uploads/2024/01/tiki-shack.jpg",
      description: "Our legendary semi-private shack area. Perfect for larger tribes wanting their own slice of island life.",
      vibe: "EXCLUSIVE / TRIBAL"
    },
    {
      title: "Tiki Double Booths",
      capacity: "12 - 20 Guests",
      image: "https://www.orangerooms.co.uk/wp-content/uploads/2024/01/tiki-double-booths.jpg",
      description: "The ultimate island gathering spot. Two connected booths for grand tropical celebrations.",
      vibe: "GRAND / TROPICAL"
    }
  ];

  return (
    <div className="bg-[#1a1919] min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden border-b-2 border-white/50">
        <img 
          src="/photos/tiki/tiki page header.jpg"
          alt="Tiki Lounge" 
          className="w-full h-full object-cover brightness-[0.6] grayscale-[0.1] scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-[#1a1919]/30 to-black/50" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.8em] font-black text-[#F29100] mb-6 animate-fade-in-down">
            STEP INTO PARADISE
          </span>
          <h1 className="text-[60px] md:text-[100px] lg:text-[140px] font-black leading-none tracking-tighter text-white uppercase mb-4 animate-fade-in">
            Tiki <span className="text-[#F29100]">Lounge</span>
          </h1>
          <p className="text-white/80 text-[18px] md:text-[24px] max-w-2xl mx-auto animate-fade-in-up">
            Southampton's original tropical escape, where the cocktails are cold and the vibes are exotic.
          </p>
          <div className="w-24 md:w-40 h-1.5 md:h-2.5 bg-[#F29100] mt-10 shadow-2xl"></div>
        </div>
      </section>

      {/* 2. ABOUT THE TIKI VIBE */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-white text-[#1a1919] border-b-2 border-[#1a1919]">
        <div className="p-10 md:p-20 lg:p-24 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-[#1a1919]">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100] mb-10 flex items-center gap-4">
            <span className="w-12 h-px bg-[#F29100]"></span> THE ISLAND WAY
          </span>
          <h2 className="text-[40px] md:text-[60px] font-black tracking-tighter uppercase leading-[0.95] mb-8">
            Escape the <span className="text-[#F29100]">Ordinary</span>.
          </h2>
          <p className="text-[16px] md:text-[18px] leading-relaxed font-light mb-10 text-[#1a1919]/80">
            A little slice of paradise right in the heart of Southampton. Our Tiki Lounge isn't just a bar; it's a sensory journey. With bamboo-lined walls, exotic greenery, and an award-winning menu of tropical libations, we bring the spirit of the South Pacific to Vernon Walk.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
                <Palmtree className="w-10 h-10 text-[#F29100] shrink-0" />
                <div>
                    <h4 className="text-[12px] font-black uppercase tracking-widest mb-1">Immersive Decor</h4>
                    <p className="text-[11px] text-[#1a1919]/60">Bamboo, palms, and tribal motifs.</p>
                </div>
            </div>
            <div className="flex gap-4">
                <Waves className="w-10 h-10 text-[#F29100] shrink-0" />
                <div>
                    <h4 className="text-[12px] font-black uppercase tracking-widest mb-1">Tropical Mixology</h4>
                    <p className="text-[11px] text-[#1a1919]/60">Authentic Tiki classics & house creations.</p>
                </div>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] lg:h-auto overflow-hidden bg-[#1a1919]">
            <img 
              src="/photos/tiki/tiki right side.jpg" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#F29100]/20 mix-blend-overlay"></div>
            <div className="absolute bottom-10 left-10 right-10 p-8 border-2 border-white/30 backdrop-blur-md bg-black/40">
                <p className="text-white text-[18px] md:text-[22px]">
                    "The best Mai Tai this side of Honolulu. An absolute must-visit."
                </p>
                <div className="mt-4 flex items-center gap-2">
                    <span className="text-[#F29100] text-[10px] font-black uppercase tracking-widest">TRIPADVISOR REVIEW</span>
                </div>
            </div>
        </div>
      </section>

      {/* 3. TIKI TABLES LIST */}
      <section className="bg-[#1a1919] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[50px] font-black uppercase tracking-tighter text-white mb-4">Island <span className="text-[#F29100]">Seating</span></h2>
            <p className="text-white/40 text-[12px] md:text-[14px] uppercase tracking-[0.3em] font-bold">Pick your perfect tropical perch</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {tikiTables.map((table, idx) => (
              <div key={idx} className="group flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden mb-8 border-2 border-white/20">
                  <img 
                    src={table.image} 
                    alt={table.title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#F29100] text-white px-4 py-1.5 text-[9px] font-black tracking-widest uppercase shadow-xl">
                      {table.vibe}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <a href="#dmn-booking-container" className="w-full py-4 bg-white text-black text-[10px] font-black tracking-widest uppercase hover:bg-[#F29100] hover:text-white transition-all text-center">
                        Request This Table
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-[28px] font-bold text-white uppercase tracking-tighter leading-none">{table.title}</h3>
                    <div className="flex flex-col items-end">
                        <span className="text-[8px] text-[#F29100] font-black uppercase tracking-widest">CAPACITY</span>
                        <span className="text-[12px] text-white font-black">{table.capacity}</span>
                    </div>
                  </div>
                  <p className="text-white/60 text-[14px] leading-relaxed font-light">
                    {table.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOOKING SECTION */}
      <BookingSection />
    </div>
  );
};

export default TikiPage;
