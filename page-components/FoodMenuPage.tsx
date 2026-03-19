'use client';

import React, { useState } from 'react';
import BookingSection from '@/components/BookingSection';
import { Utensils, Heart, Star, ChevronLeft, ChevronRight, Maximize2, X, Info, Download, Clock, Pizza } from 'lucide-react';

const FoodMenuPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const menuImages = [
    "/photos/food/menu/Pizza Menu.jpg",
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % menuImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + menuImages.length) % menuImages.length);

  const pizzaMenu = [
    {
      name: "Diavolo",
      price: "£12.95",
      desc: "Nduja, fresh chilli, fennel salami, rocket.",
      tags: []
    },
    {
      name: "Chorizo",
      price: "£12.95",
      desc: "With feta and hot honey.",
      tags: []
    },
    {
      name: "Classic Margarita",
      price: "£12.95",
      desc: "Fior di latte, marzano tomato, basil.",
      tags: ["V"]
    },
    {
      name: "Caprino",
      price: "£12.95",
      desc: "Goat's cheese, red onion marmalade, cherry tomatoes.",
      tags: ["V"]
    },
  ];

  return (
    <div className="bg-[#1a1919] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden border-b-2 border-white/50">
        <img
          src="/photos/food/food page header.jpg"
          alt="Food Menu"
          className="w-full h-full object-cover brightness-[0.5] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] uppercase tracking-[1em] font-black text-[#F29100] mb-6">FEED YOUR SOUL</span>
          <h1 className="text-[54px] md:text-[90px] lg:text-[120px] font-black leading-none tracking-tighter text-white uppercase">
            Food <span className="text-[#F29100]">Menu</span>
          </h1>
          <div className="mt-10 flex items-center gap-4 bg-white/10 backdrop-blur-md px-8 py-4 border border-white/50">
            <Clock className="w-5 h-5 text-[#F29100]" />
            <span className="text-[14px] font-black tracking-[0.2em] uppercase">KITCHEN OPEN TUESDAY — SUNDAY</span>
          </div>
        </div>
      </section>

      {/* FIGARATI PIZZA COLLABORATION SECTION */}
      <section className="bg-white text-[#1a1919] border-b-2 border-[#1a1919] relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          {/* Left — Text */}
          <div className="flex flex-col justify-center px-10 py-20 md:px-16 md:py-24 border-b-2 lg:border-b-0 lg:border-r-2 border-[#1a1919] space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#F29100]">COLLABORATION</span>
              <h2 className="text-[42px] md:text-[60px] font-black uppercase leading-[0.9] tracking-tighter">
                Pizza by <br /><span className="text-[#F29100]">Figurati</span>
              </h2>
              <p className="text-[17px] font-light leading-relaxed text-[#1a1919]/70 max-w-md">
                We've teamed up with Southampton's finest pizza makers, Figurati, to bring stone-baked perfection straight to your table at Orange Rooms. Every pizza is handcrafted to order — real ingredients, real flavour.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-7 border-2 border-[#1a1919] flex flex-col gap-3 hover:bg-[#1a1919] hover:text-white transition-all group">
                <Pizza className="w-9 h-9 text-[#F29100]" />
                <h4 className="text-[16px] font-black uppercase">Stone Baked</h4>
                <p className="text-[13px] font-medium opacity-70">Authentic Italian technique — crispy base, pillowy crust.</p>
              </div>
              <div className="p-7 border-2 border-[#1a1919] flex flex-col gap-3 hover:bg-[#1a1919] hover:text-white transition-all group">
                <Utensils className="w-9 h-9 text-[#F29100]" />
                <h4 className="text-[16px] font-black uppercase">Fresh Daily</h4>
                <p className="text-[13px] font-medium opacity-70">Dough proved daily, toppings sourced fresh every morning.</p>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <div className="bg-[#1a1919] px-8 py-5">
                <span className="text-white text-[11px] font-black uppercase tracking-[0.3em]">All Pizzas</span>
                <div className="text-[#F29100] text-[36px] font-black leading-none mt-1">£12.95</div>
              </div>
              <a href="#dmn-booking-container" className="flex-1 py-5 border-2 border-[#1a1919] text-[#1a1919] text-[12px] font-black uppercase tracking-[0.2em] hover:bg-[#F29100] hover:border-[#F29100] hover:text-white transition-all flex items-center justify-center gap-2">
                Book a Table <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative min-h-[50vh] lg:min-h-full">
            <img
              src="/photos/food/Pizza 1.jpg"
              alt="Figurati Pizza at Orange Rooms"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#F29100]/10 mix-blend-multiply" />
            {/* Figurati badge */}
            <div className="absolute bottom-8 left-8 bg-[#1a1919]/90 backdrop-blur-md px-6 py-4 border border-white/50">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">In collaboration with</span>
              <div className="text-white text-[22px] font-black uppercase tracking-tight mt-1">Figurati</div>
              <div className="text-[#F29100] text-[11px] font-black uppercase tracking-widest">Southampton</div>
            </div>
          </div>
        </div>
      </section>

      {/* PIZZA MENU CAROUSEL */}
      <section className="bg-[#1a1919] py-20 px-6 border-b-2 border-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#F29100]">PIZZA BY FIGURATI</span>
              <h2 className="text-[32px] md:text-[54px] font-black text-white uppercase leading-none tracking-tighter">
                The <span className="text-[#F29100]">Pizza Menu</span>
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

          <div className="relative group min-h-[60vh] overflow-hidden bg-black/40 border-2 border-white/50">
            <div 
              className="w-full h-full flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {menuImages.map((src, idx) => (
                <div key={idx} className="min-w-full h-full relative p-4 md:p-8">
                  <img 
                    src={src} 
                    alt={`Food Menu Board ${idx + 1}`}
                    className="w-full h-full object-contain cursor-zoom-in"
                    onClick={() => setIsLightboxOpen(true)}
                    onError={(e) => {
                       // Fallback placeholder with colorful style
                       e.currentTarget.src = "/photos/wp-assets/orange-logo-1.png";
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
             <a href="/food-menu" className="flex items-center gap-2 text-[#F29100] text-[11px] font-black uppercase tracking-widest hover:text-white transition-colors">
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
                onError={(e) => {
                  e.currentTarget.src = "/photos/wp-assets/orange-logo-1.png";
                }}
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

      {/* FIGARATI PIZZA MENU GRID */}
      <section className="bg-white text-[#1a1919] py-24 px-6 border-b-2 border-[#1a1919]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#F29100]">PIZZA BY FIGURATI</span>
              <h2 className="text-[36px] md:text-[54px] font-black uppercase leading-none tracking-tighter">
                Our <span className="text-[#F29100]">Pizzas</span>
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-[#1a1919] px-8 py-4">
              <Star className="w-5 h-5 text-[#F29100] fill-[#F29100]" />
              <span className="text-white text-[13px] font-black uppercase tracking-widest">All Pizzas — £12.95</span>
            </div>
          </div>

          {/* Pizza Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t-2 border-l-2 border-[#1a1919]">
            {pizzaMenu.map((pizza, idx) => (
              <div key={idx} className="border-b-2 border-r-2 border-[#1a1919] p-8 group hover:bg-[#F29100]/5 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-[20px] font-black uppercase tracking-tight group-hover:text-[#F29100] transition-colors leading-tight">{pizza.name}</h3>
                  <span className="text-[14px] font-black text-[#F29100] ml-4 shrink-0">{pizza.price}</span>
                </div>
                <p className="text-[13px] text-[#1a1919]/60 font-light leading-relaxed mb-4">{pizza.desc}</p>
                {pizza.tags.length > 0 && (
                  <div className="flex gap-2">
                    {pizza.tags.map((tag, t) => (
                      <span key={t} className="text-[10px] font-black uppercase tracking-widest px-2 py-1 border border-[#1a1919]/20 text-[#1a1919]/40">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Figurati credit */}
          <div className="mt-10 flex items-center gap-4">
            <div className="w-12 h-1 bg-[#F29100]"></div>
            <p className="text-[12px] font-black uppercase tracking-widest text-[#1a1919]/40">Pizza crafted by Figurati — Southampton's artisan pizza makers</p>
          </div>
        </div>
      </section>

      {/* SPECIAL NOTICE */}
      <section className="bg-[#1a1919] py-20 px-6 border-b-2 border-white/50 text-center">
        <div className="max-w-2xl mx-auto border-2 border-[#F29100] p-10">
           <Heart className="w-10 h-10 text-[#F29100] mx-auto mb-6" />
           <h3 className="text-[24px] font-black uppercase text-white mb-4">Allergies & Dietary</h3>
           <p className="text-white/60 text-[14px] font-light leading-relaxed mb-8">
             We cater to all! Our menu has plenty of Vegan and Gluten-Free options. Please inform your server of any allergies before ordering.
           </p>
           <a href="mailto:info@orangerooms.co.uk" className="text-[12px] font-black text-[#F29100] uppercase tracking-widest underline underline-offset-8">Download Full Allergen Guide</a>
        </div>
      </section>

      <BookingSection />
    </div>
  );
};

export default FoodMenuPage;
