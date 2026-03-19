'use client';

import React, { useState } from 'react';
import BookingSection from '@/components/BookingSection';
import { Martini, ChevronLeft, ChevronRight, Maximize2, X, Info, Download } from 'lucide-react';

const DrinksMenuPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const menuImages = [
    "/photos/drinks/menu/SUMMER-INSIDE-1.png",
    "/photos/drinks/menu/SUMMER-OUTSIDE-1.png",
  ];

  const row1Images = [
    '/photos/cocktail/gallery/IMG_20250625_203444.jpg',
    '/photos/cocktail/gallery/Espresso Martini.jpg',
    '/photos/cocktail/gallery/Orange Rooms 07.02.2026 12.jpg',
    '/photos/cocktail/gallery/Bramble.png',
    '/photos/cocktail/gallery/IMG-20250630-WA0005.jpg',
    '/photos/cocktail/gallery/Rasp Gin Fizz.jpg',
    '/photos/cocktail/gallery/Orange Rooms 07.02.2026 27.jpg',
    '/photos/cocktail/gallery/IMG_20250708_151039.jpg',
  ];

  const row2Images = [
    '/photos/cocktail/gallery/IMG_20250630_150427.jpg',
    '/photos/cocktail/gallery/Caiprihna.png',
    '/photos/cocktail/gallery/Orange Rooms 07.02.2026 40.jpg',
    '/photos/cocktail/gallery/LIZ Old Fashioned.png',
    '/photos/cocktail/gallery/IMG_20250708_175051.jpg',
    '/photos/cocktail/gallery/Bottomless-Cocktails.jpg',
    '/photos/cocktail/gallery/Orange Rooms 07.02.2026 41.jpg',
    '/photos/cocktail/gallery/IMG_20250625_214028.jpg',
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % menuImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + menuImages.length) % menuImages.length);

  const textSections = [
    {
      title: "Signature Sips",
      items: [
        { name: "Zest Martini", price: "£10.50", desc: "Orange infused vodka, triple sec, fresh lime and a sugar rim." },
        { name: "Neon Jungle Juice", price: "£11.00", desc: "White rum, melon liqueur, pineapple, and a touch of neon magic." },
        { name: "Alpine Sour", price: "£10.00", desc: "Bourbon, amaretto, lemon, egg white and a dash of mountain bitters." },
        { name: "Retro Cosmo", price: "£9.50", desc: "Vodka, cranberry, lime and orange zest. A 2001 original." }
      ]
    },
    {
      title: "Tiki Classics",
      items: [
        { name: "Classic Mai Tai", price: "£11.50", desc: "Dark rum, white rum, orgeat, lime and orange curaçao. The island king." },
        { name: "Zombie (Limit 2)", price: "£13.00", desc: "Four types of rum, apricot brandy, pineapple and a flaming finish." },
        { name: "Piña Colada", price: "£10.50", desc: "Creamy coconut, pineapple and rum. Shaken, not blended." },
        { name: "Tiki Torch", price: "£11.00", desc: "Spiced rum, passionfruit, lime and aromatic bitters." }
      ]
    },
    {
      title: "Frozen & Refreshing",
      items: [
        { name: "Frozen Strawberry Daiquiri", price: "£9.00", desc: "Fresh strawberries, lime and white rum. Ice cold." },
        { name: "Margarita Slushie", price: "£9.50", desc: "Tequila, lime and agave, frozen to perfection." },
        { name: "Aperol Spritz", price: "£8.50", desc: "Aperol, prosecco and soda. The ultimate sunshine drink." },
        { name: "Lumberjack Punch", price: "£12.00", desc: "Sharing pitcher of dark rum, apple, lime and cinnamon. (Serves 2)" }
      ]
    }
  ];

  return (
    <div className="bg-[#1a1919] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden border-b-2 border-white/50">
        <img 
          src="/photos/drinks/drinks page header.jpg"
          alt="Drinks Menu"
          className="w-full h-full object-cover brightness-[0.4] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] uppercase tracking-[1em] font-black text-[#F29100] mb-6">LIQUID ARTISTRY</span>
          <h1 className="text-[54px] md:text-[90px] lg:text-[120px] font-black leading-none tracking-tighter text-white uppercase">
            Drinks <span className="text-[#F29100]">Menu</span>
          </h1>
          <div className="w-24 md:w-40 h-1.5 bg-[#F29100] mt-10"></div>
        </div>
      </section>

      {/* REFRESHED MENU CAROUSEL */}
      <section className="bg-[#1a1919] py-20 px-6 border-b-2 border-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#F29100]">THE LINEUP</span>
              <h2 className="text-[32px] md:text-[54px] font-black text-white uppercase leading-none tracking-tighter">
                New Refreshed <span className="text-[#F29100]">Drinks Menu</span>
              </h2>
            </div>
            <div className="flex gap-4">
              <button onClick={prevSlide} className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center hover:border-[#F29100] hover:text-[#F29100] transition-all text-white">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center hover:border-[#F29100] hover:text-[#F29100] transition-all text-white">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="relative group min-h-[70vh] overflow-hidden bg-black/40 border-2 border-white/50">
            <div 
              className="w-full h-full flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {menuImages.map((src, idx) => (
                <div key={idx} className="min-w-full h-full relative p-4 md:p-8">
                  <img 
                    src={src} 
                    alt={`Drinks Menu Board ${idx + 1}`}
                    className="w-full h-full object-contain cursor-zoom-in"
                    onClick={() => setIsLightboxOpen(true)}
                    onError={(e) => {
                       e.currentTarget.src = "https://www.orangerooms.co.uk/wp-content/uploads/2023/10/Summer-At-Orange-Menu-Screenshot-Placeholder.jpg";
                    }}
                  />
                  <div className="absolute bottom-10 right-10 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => setIsLightboxOpen(true)}
                      className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/50 text-white hover:bg-[#F29100] transition-colors"
                    >
                      <Maximize2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {menuImages.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all ${currentSlide === i ? 'bg-[#F29100] w-8' : 'bg-white/20'}`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6">
             <div className="flex items-center gap-2 text-white/40 text-[11px] font-black uppercase tracking-widest">
                <Info className="w-4 h-4 text-[#F29100]" /> Click image to expand for full details
             </div>
             <a href="#" className="flex items-center gap-2 text-[#F29100] text-[11px] font-black uppercase tracking-widest hover:text-white transition-colors">
                <Download className="w-4 h-4" /> Download PDF Menu
             </a>
          </div>
        </div>
      </section>

      {/* LIGHTBOX OVERLAY */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-12 animate-fade-in">
           <button 
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-4"
           >
             <X className="w-10 h-10" />
           </button>
           
           <div className="w-full h-full max-w-6xl max-h-[85vh] relative flex items-center justify-center">
              <img 
                src={menuImages[currentSlide]} 
                alt="Full Menu View" 
                className="w-full h-full object-contain shadow-2xl"
              />
           </div>

           <div className="mt-8 flex gap-8">
              <button onClick={prevSlide} className="text-white flex items-center gap-2 font-black uppercase tracking-widest text-[12px] hover:text-[#F29100]">
                <ChevronLeft /> Previous Board
              </button>
              <span className="text-white/40 font-black tracking-widest text-[12px]">{currentSlide + 1} / {menuImages.length}</span>
              <button onClick={nextSlide} className="text-white flex items-center gap-2 font-black uppercase tracking-widest text-[12px] hover:text-[#F29100]">
                Next Board <ChevronRight />
              </button>
           </div>
        </div>
      )}

      {/* TEXT MENU CONTENT */}
      <section className="bg-white text-[#1a1919] py-24 px-6 border-b-2 border-[#1a1919]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-0 lg:divide-x-2 lg:divide-[#1a1919]/10">
            {textSections.map((section, idx) => (
              <div key={idx} className="px-0 lg:px-12 space-y-12">
                <div className="space-y-2">
                  <h2 className="text-[32px] md:text-[42px] font-black uppercase tracking-tighter leading-none">{section.title}</h2>
                  <div className="w-12 h-1 bg-[#F29100]"></div>
                </div>
                <div className="space-y-10">
                  {section.items.map((item, i) => (
                    <div key={i} className="group cursor-default">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-[18px] font-black uppercase tracking-tight group-hover:text-[#F29100] transition-colors">{item.name}</h4>
                        <span className="text-[14px] font-bold text-[#F29100]">{item.price}</span>
                      </div>
                      <p className="text-[13px] text-[#1a1919]/60 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#1a1919] py-24 px-6 border-b-2 border-white/50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
           <h3 className="text-[32px] md:text-[48px] font-black uppercase text-white mb-8 tracking-tighter">Thirsty yet? <br /> <span className="text-[#F29100]">Secure your table</span>.</h3>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a href="#dmn-booking-container" className="px-12 py-5 bg-[#F29100] text-white text-[12px] font-black tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all shadow-2xl">
                Book A Table
             </a>
           </div>
        </div>
        {/* Floating Martini Icon */}
        <div className="absolute -right-20 -bottom-20 opacity-10 blur-sm pointer-events-none">
           <Martini className="w-[400px] h-[400px] text-white" />
        </div>
      </section>

      {/* GALLERY CAROUSEL */}
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
        {/* Row 2: Scrolls Right */}
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

      <BookingSection />
    </div>
  );
};

export default DrinksMenuPage;
