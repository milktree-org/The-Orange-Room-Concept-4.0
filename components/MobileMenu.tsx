'use client';

import React from 'react';
import { X, ChevronRight } from 'lucide-react';
import { View } from '@/lib/types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (view: View) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const venuesSubmenu = [
    { label: 'Our Tables', view: 'tables' as const },
    { label: 'Tiki Lounge', view: 'tiki' as const },
    { label: 'Off Piste', view: 'off-piste' as const },
    { label: 'Full Venue', view: 'full-venue' as const },
    { label: 'Half Venue', view: 'half-venue' as const },
    { label: 'Mile High', view: 'mile-high' as const },
    { label: 'Neon Jungle', view: 'neon-jungle' as const }
  ];

  const eventsSubmenu = [
    { label: 'Line Up', view: 'events' as const },
    { label: 'Cocktail Bar', view: 'cocktail-bar' as const },
    { label: 'Bottomless Brunches', view: 'brunches' as const }
  ];

  const menusSubmenu = [
    { label: 'Drinks Menu', view: 'drinks-menu' as const },
    { label: 'Food Menu', view: 'food-menu' as const }
  ];

  const bookingsSubmenu = [
    { label: 'Private Hire', view: 'private-hire' as const },
    { label: 'Corporate Hire', view: 'corporate-hire' as const },
    { label: 'VIP Bookings', view: 'vip-bookings' as const }
  ];

  const handleLinkClick = (view?: View) => {
    if (view && onNavigate) {
      onNavigate(view);
      onClose();
    }
  };

  return (
    <div className={`
      fixed inset-0 z-[180] bg-[#1a1919] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
      ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
    `}>
      <div className="flex h-full w-full">
        
        {/* Placeholder for sidebar consistency — hidden on mobile */}
        <div className="hidden lg:block w-24 h-full" />

        {/* Main Menu Content */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-28 overflow-y-auto py-24 scrollbar-hide">
          <div className="flex flex-col space-y-2 md:space-y-4 lg:space-y-6">
            
            {/* MENUS + Horizontal Submenu */}
            <div className={`transition-all duration-700 delay-75 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-12">
                <span className="text-[52px] sm:text-[68px] md:text-[80px] lg:text-[100px] font-sans font-black text-[#F29100] leading-tight tracking-tight">
                  Menu
                </span>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 py-2">
                  {menusSubmenu.map((sub) => (
                    <button key={sub.label} onClick={() => handleLinkClick(sub.view)} className="text-[12px] md:text-[14px] font-sans font-black uppercase tracking-[0.2em] text-white hover:text-[#F29100] transition-colors text-left flex items-center gap-1.5 group">
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /> {sub.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* VENUE + Horizontal Submenu */}
            <div className={`transition-all duration-700 delay-150 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-12">
                <a href="/tables" onClick={(e) => { e.preventDefault(); handleLinkClick('tables'); }} className="text-[52px] sm:text-[68px] md:text-[80px] lg:text-[100px] font-sans font-black text-[#f5f5f1] hover:text-[#F29100] leading-tight tracking-tight transition-all">
                  Venue
                </a>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 py-2">
                  {venuesSubmenu.map((sub) => (
                    <button key={sub.label} onClick={() => handleLinkClick(sub.view)} className="text-[12px] md:text-[14px] font-sans font-black uppercase tracking-[0.2em] text-white hover:text-[#F29100] transition-colors text-left flex items-center gap-1.5 group">
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /> {sub.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* EVENTS + Horizontal Submenu */}
            <div className={`transition-all duration-700 delay-225 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-12">
                <a href="/events" onClick={(e) => { e.preventDefault(); handleLinkClick('events'); }} className="text-[52px] sm:text-[68px] md:text-[80px] lg:text-[100px] font-sans font-black text-[#f5f5f1] hover:text-[#F29100] leading-tight tracking-tight transition-all">
                  Events
                </a>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 py-2">
                  {eventsSubmenu.map((sub) => (
                    <button key={sub.label} onClick={() => handleLinkClick(sub.view)} className="text-[12px] md:text-[14px] font-sans font-black uppercase tracking-[0.2em] text-white hover:text-[#F29100] transition-colors text-left flex items-center gap-1.5 group">
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /> {sub.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* BOOKINGS + Horizontal Submenu */}
            <div className={`transition-all duration-700 delay-300 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-12">
                <a href="/private-hire" onClick={(e) => { e.preventDefault(); handleLinkClick('private-hire'); }} className="text-[52px] sm:text-[68px] md:text-[80px] lg:text-[100px] font-sans font-black text-[#f5f5f1] hover:text-[#F29100] leading-tight tracking-tight transition-all">
                  Bookings
                </a>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 py-2">
                  {bookingsSubmenu.map((sub) => (
                    <button key={sub.label} onClick={() => handleLinkClick(sub.view)} className="text-[12px] md:text-[14px] font-sans font-black uppercase tracking-[0.2em] text-white hover:text-[#F29100] transition-colors text-left flex items-center gap-1.5 group">
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /> {sub.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* BOOK */}
            <div className={`transition-all duration-700 delay-375 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <a href="/book" onClick={(e) => { e.preventDefault(); handleLinkClick('book'); }} className="text-[52px] sm:text-[68px] md:text-[80px] lg:text-[100px] font-sans font-black text-[#F29100] hover:text-white leading-tight tracking-tight transition-all">
                Reserve a Table
              </a>
            </div>

          </div>

          {/* Minimalist Footer Info */}
          <div className={`
            mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6
            transition-all duration-1000 delay-500
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <div className="flex gap-12">
              <div className="space-y-1">
                <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">LOCATION</span>
                <p className="text-[13px] text-white/50 font-light">Vernon Walk, Southampton</p>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">CONTACT</span>
                <p className="text-[13px] text-white/50 font-light">info@orangerooms.co.uk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Header Close button */}
      <button 
        onClick={onClose}
        className="lg:hidden absolute top-6 right-6 p-4 text-white hover:text-[#F29100] transition-colors z-[210]"
      >
        <X className="w-10 h-10" />
      </button>
    </div>
  );
};

export default MobileMenu;
