'use client';

import React, { useState } from 'react';
import BookingSection from '@/components/BookingSection';
import { LayoutGrid, Map, Users, GlassWater, Sparkles, ChevronRight, Calendar } from 'lucide-react';

const OurTablesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tables' | 'spaces'>('tables');

  const tables = [
    {
      title: "Fish Tank Tables",
      capacity: "4 - 6 Guests",
      image: "/photos/venues/tables/Fish Tank Tables.jpg",
      description: "Iconic seating right next to our live tropical fish tanks. A unique aquatic backdrop for your cocktails.",
      vibe: "AQUATIC / CHILL"
    },
    {
      title: "High Bar Tables",
      capacity: "2 - 4 Guests",
      image: "/photos/venues/tables/High Bar Tables.jpg",
      description: "Perfect for smaller groups who want to be in the heart of the bar's energy and close to the action.",
      vibe: "SOCIAL / ENERGETIC"
    },
    {
      title: "Neon Booth",
      capacity: "6 - 8 Guests",
      image: "/photos/venues/tables/Neon Booth.jpg",
      description: "Vibrant and immersive, our neon booths are the perfect spot for those iconic late-night photos.",
      vibe: "RETRO / NEON"
    },
    {
      title: "Small Cassette Booth",
      capacity: "4 - 6 Guests",
      image: "/photos/venues/tables/Small Cassette Booth.jpg",
      description: "Intimate retro-themed booth featuring our signature oversized cassette tape wall art.",
      vibe: "RETRO / INTIMATE"
    },
    {
      title: "Large Cassette Booth",
      capacity: "8 - 12 Guests",
      image: "/photos/venues/tables/Large Cassette Booth.jpg",
      description: "Our most popular large booking spot. Plenty of room for big groups to celebrate in style.",
      vibe: "LEGENDARY / PARTY"
    },
    {
      title: "Small Dance Floor Booth",
      capacity: "6 Guests",
      image: "/photos/venues/tables/Small Dancefloor Booth.jpg",
      description: "Direct access to the dance floor. Ideal for those who want to transition from drinks to dancing seamlessly.",
      vibe: "DANCE / ACTIVE"
    },
    {
      title: "Tiki Booths",
      capacity: "6 - 8 Guests",
      image: "/photos/wp-assets/tiki-booths.jpg",
      description: "Escape to the islands in our bamboo-clad Tiki booths. Best served with a Mai Tai.",
      vibe: "EXOTIC / TROPICAL"
    },
    {
      title: "Tiki Shack",
      capacity: "Up to 15 Guests",
      image: "/photos/wp-assets/tiki-shack.jpg",
      description: "A semi-private 'shack' area within the Tiki lounge for larger groups wanting their own island corner.",
      vibe: "EXCLUSIVE / TRIBAL"
    },
    {
      title: "Tiki Double Booths",
      capacity: "12 - 20 Guests",
      image: "/photos/wp-assets/tiki-double-booths.jpg",
      description: "Combine two large Tiki booths for the ultimate tropical group gathering.",
      vibe: "TROPICAL / GRAND"
    },
    {
      title: "Off Piste Booth",
      capacity: "6 - 10 Guests",
      image: "/photos/venues/tables/Off Piste Booth.jpg",
      description: "Alpine-themed cozy corners with faux fur and wood-cabin vibes in our ski-lodge room.",
      vibe: "ALPINE / COZY"
    }
  ];

  const spaces = [
    {
      title: "Full Venue",
      capacity: "Up to 500 Guests",
      image: "/photos/venues/spaces/full_venue.jpg",
      description: "The ultimate takeover. Take control of all our rooms, including Tiki, Off Piste, and the main floor.",
      features: "4 ROOMS / 3 BARS / STAGE"
    },
    {
      title: "Half Venue",
      capacity: "Up to 250 Guests",
      image: "/photos/venues/spaces/half_venue.jpg",
      description: "A flexible option for medium-sized corporate events and private parties.",
      features: "2 ROOMS / 2 BARS"
    },
    {
      title: "Tiki Lounge",
      capacity: "Up to 150 Guests",
      image: "/photos/venues/spaces/tiki lounge.jpg",
      description: "Southampton's original Tiki bar. Fully immersive tropical decor and dedicated cocktail bar.",
      features: "PRIVATE BAR / EXOTIC VIBE"
    },
    {
      title: "Off Piste",
      capacity: "Up to 100 Guests",
      image: "/photos/venues/spaces/Off Piste Booth.jpg",
      description: "Our alpine-themed retreat. Perfect for a cozy winter vibe or a unique themed celebration.",
      features: "WOOD CABIN / SHOT-SKIS"
    },
    {
      title: "Mile High",
      capacity: "Up to 60 Guests",
      image: "/photos/venues/spaces/mile high.jpg",
      description: "Aviation-themed first-class lounge. Sleek, sophisticated, and exclusive for your top-tier guests.",
      features: "VIP LOUNGE / PRIVATE BAR"
    },
    {
      title: "Outside Orange",
      capacity: "Up to 80 Guests",
      image: "/photos/venues/spaces/outside orange.jpg",
      description: "Our Al Fresco oasis. Perfect for summer socials, garden parties, and outdoor cocktails.",
      features: "OUTDOOR / TROPICAL GARDEN"
    }
  ];

  return (
    <div className="bg-[#1a1919] min-h-screen">
      {/* 1. PAGE HEADER: Landscape Landscape */}
      <section className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden border-b-2 border-white/50">
        <img
          src="/photos/venues/our tables page header background image.jpg"
          alt="Our Tables & Spaces" 
          className="w-full h-full object-cover grayscale-[0.1] contrast-[1.1] brightness-[0.7] scale-105 transition-transform duration-[10s]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-[#1a1919]/20 to-black/40" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.8em] font-black text-[#F29100] mb-6 drop-shadow-lg">
            CHOOSE YOUR PARTY MOOD
          </span>
          <h1 className="text-[54px] md:text-[88px] lg:text-[130px] font-black leading-none tracking-tighter text-white uppercase drop-shadow-2xl">
            Our Tables <br className="hidden md:block" />
            <span className="text-[#F29100]">& Spaces</span>
          </h1>
          <div className="w-24 md:w-40 h-1.5 md:h-2.5 bg-[#F29100] mt-8 shadow-2xl"></div>
        </div>
      </section>

      {/* 2. SHORT ABOUT SECTION */}
      <section className="bg-white text-[#1a1919] py-16 md:py-24 px-6 md:px-12 border-b-2 border-[#1a1919]">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-[36px] md:text-[54px] font-black uppercase tracking-tighter leading-none">
            Southampton's Finest <span className="text-[#F29100]">Independent Bar</span>
          </h2>
          <p className="text-[16px] md:text-[20px] font-light leading-relaxed max-w-3xl mx-auto">
            Orange Rooms is Southampton’s finest independent bar. We have a whole range of tables for you to visit and enjoy, all of which are available every night of the week for you to reserve. Whether it be Off Piste, our ‘ski lodge’ inspired lounge, Tiki Lounge, our little slice of paradise, or our Cassette Booths which guarantee you’ll be right at the heart of the action, we have something for everyone!
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
             <div className="flex items-center gap-2 px-4 py-2 bg-[#F29100]/10 rounded-full">
                <Users className="w-4 h-4 text-[#F29100]" />
                <span className="text-[11px] font-black tracking-widest uppercase">Groups 2 - 500</span>
             </div>
             <div className="flex items-center gap-2 px-4 py-2 bg-[#F29100]/10 rounded-full">
                <GlassWater className="w-4 h-4 text-[#F29100]" />
                <span className="text-[11px] font-black tracking-widest uppercase">Mixology Focus</span>
             </div>
             <div className="flex items-center gap-2 px-4 py-2 bg-[#F29100]/10 rounded-full">
                <Sparkles className="w-4 h-4 text-[#F29100]" />
                <span className="text-[11px] font-black tracking-widest uppercase">Vibrant Atmosphere</span>
             </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. TABS SECTION (TABLES & SPACES) */}
      <section className="bg-[#1a1919] min-h-screen">
        {/* Tab Selection Bar */}
        <div className="h-20 md:h-28 grid grid-cols-2 border-b-2 border-white/50 sticky top-20 lg:top-24 z-40 bg-[#1a1919]">
          <button 
            onClick={() => setActiveTab('tables')}
            className={`
              flex items-center justify-center gap-4 text-[11px] md:text-[14px] font-black uppercase tracking-[0.5em] transition-all
              ${activeTab === 'tables' ? 'bg-[#F29100] text-white' : 'text-white/40 hover:bg-white/5'}
            `}
          >
            <LayoutGrid className={`w-5 h-5 transition-transform ${activeTab === 'tables' ? 'scale-110' : ''}`} /> 
            <span className="hidden sm:inline">EXPLORE</span> OUR TABLES
          </button>
          <button 
            onClick={() => setActiveTab('spaces')}
            className={`
              flex items-center justify-center gap-4 text-[11px] md:text-[14px] font-black uppercase tracking-[0.5em] transition-all
              ${activeTab === 'spaces' ? 'bg-[#F29100] text-white' : 'text-white/40 hover:bg-white/5'}
            `}
          >
            <Map className={`w-5 h-5 transition-transform ${activeTab === 'spaces' ? 'scale-110' : ''}`} /> 
            <span className="hidden sm:inline">EXPLORE</span> OUR SPACES
          </button>
        </div>

        {/* Dynamic Content */}
        <div className="p-0">
          {activeTab === 'tables' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {tables.map((table, idx) => (
                <div key={idx} className="group relative min-h-[450px] md:min-h-[550px] border-b-2 border-white/30 md:border-r-2 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r-2 lg:[&:nth-child(3n)]:border-r-0 xl:[&:nth-child(3n)]:border-r-2 xl:[&:nth-child(4n)]:border-r-0 overflow-hidden flex flex-col justify-end p-8">
                  {/* Background Image Container */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                      src={table.image} 
                      alt={table.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-[#1a1919]/60 to-transparent transition-opacity group-hover:opacity-40" />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] font-black tracking-widest text-[#F29100] bg-white px-3 py-1 inline-block uppercase">{table.vibe}</span>
                    <h3 className="text-[28px] md:text-[34px] font-bold text-white uppercase leading-tight tracking-tighter">{table.title}</h3>
                    <p className="text-white/70 text-[13px] leading-relaxed max-w-[280px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {table.description}
                    </p>
                    <div className="pt-6 border-t border-white/20 flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">CAPACITY</span>
                            <span className="text-[10px] font-black text-white uppercase tracking-widest">{table.capacity}</span>
                        </div>
                        <a 
                          href="#dmn-booking-container" 
                          className="flex items-center gap-2 bg-[#F29100] text-white px-4 py-2 text-[9px] font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all"
                        >
                            BOOK <Calendar className="w-3 h-3" />
                        </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {spaces.map((space, idx) => (
                <div key={idx} className="group relative min-h-[500px] md:min-h-[650px] border-b-2 border-white/30 md:border-r-2 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r-2 lg:[&:nth-child(3n)]:border-r-0 overflow-hidden flex flex-col justify-end p-10 md:p-14">
                  {/* Background Image Container */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                      src={space.image} 
                      alt={space.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-[#1a1919]/70 to-transparent group-hover:opacity-30 transition-opacity" />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 space-y-6">
                    <div className="space-y-2">
                        <span className="text-[10px] font-black tracking-[0.3em] text-[#F29100] uppercase block">{space.features}</span>
                        <h3 className="text-[42px] md:text-[54px] font-black text-white uppercase leading-none tracking-tighter">{space.title}</h3>
                    </div>
                    
                    <p className="text-white/80 text-[15px] leading-relaxed font-light max-w-[400px]">
                      {space.description}
                    </p>
                    
                    <div className="pt-8 border-t border-white/20 flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">CAPACITY</span>
                            <span className="text-[12px] font-black text-white uppercase tracking-widest">{space.capacity}</span>
                        </div>
                        <a 
                          href="#dmn-booking-container" 
                          className="px-8 py-4 bg-white text-black text-[10px] font-black tracking-widest uppercase hover:bg-[#F29100] hover:text-white transition-all shadow-xl"
                        >
                            ENQUIRE NOW
                        </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. BOOKING SECTION - Duplicate of Home Page */}
      <BookingSection />
    </div>
  );
};

export default OurTablesPage;
