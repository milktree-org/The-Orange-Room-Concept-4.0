'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { View } from '@/lib/types';

interface NavigationProps {
  onNavigate?: (view: View) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { 
      label: 'VENUES', 
      href: '#', 
      hasSubmenu: true, 
      submenu: [
        { label: 'OUR TABLES', view: 'tables' as const },
        { label: 'TIKI', view: 'tiki' as const },
        { label: 'OFF PISTE', view: 'off-piste' as const },
        { label: 'FULL VENUE', view: 'full-venue' as const },
        { label: 'HALF VENUE', view: 'half-venue' as const },
        { label: 'MILE HIGH', view: 'mile-high' as const }
      ] 
    },
    { 
      label: 'LINEUP', 
      href: '#', 
      hasSubmenu: true, 
      submenu: [
        { label: 'EVENTS', view: 'events' as const },
        { label: 'COCKTAIL BAR', view: 'cocktail-bar' as const },
        { label: 'BOTTOMLESS BRUNCHES', view: 'brunches' as const },
        { label: 'NEON JUNGLE', view: 'neon-jungle' as const }
      ] 
    },
    { label: 'PRIVATE HIRE', href: '#', view: 'private-hire' as const },
    { label: 'CORPORATE HIRE', href: '#', view: 'corporate-hire' as const },
    { label: 'VIP BOOKINGS', href: '#', view: 'vip-bookings' as const },
    { label: 'BOOK', href: '#', view: 'book' as const, isSpecial: true },
  ];

  const handleClick = (view?: View) => {
    if (view && onNavigate) {
      onNavigate(view);
    }
  };

  return (
    <nav className="fixed top-0 left-20 lg:left-24 right-0 z-50 h-20 lg:h-24 nav-border bg-[#1a1919]/95 backdrop-blur-md box-border hidden lg:block">
      <div className="grid grid-cols-[240px_repeat(6,1fr)] h-full">
        <div 
          onClick={() => handleClick('home')}
          className="flex items-center justify-center block-border px-6 transition-colors hover:bg-white/5 cursor-pointer group h-full box-border"
        >
          <img 
            src="https://www.orangerooms.co.uk/wp-content/uploads/2023/10/orange-logo-1.png" 
            alt="Orange Rooms Logo" 
            className="h-14 lg:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {menuItems.map((item, idx) => {
          const isActive = activeDropdown === item.label;
          
          return (
            <div 
              key={item.label}
              className={`relative group h-full ${idx < 5 ? 'block-border' : ''}`}
              onMouseEnter={() => item.hasSubmenu && setActiveDropdown(item.label)}
              onMouseLeave={() => item.hasSubmenu && setActiveDropdown(null)}
            >
              <a 
                href={item.href} 
                onClick={(e) => {
                  if (item.view) {
                    e.preventDefault();
                    handleClick(item.view);
                  }
                }}
                className={`
                  flex items-center justify-center h-full w-full transition-all duration-300 uppercase tracking-[0.3em] text-[10px] font-black box-border
                  ${item.isSpecial 
                    ? 'bg-[#F29100] text-white hover:bg-white hover:text-[#F29100]' 
                    : (isActive ? 'bg-[#F29100] text-white' : 'text-white hover:bg-[#F29100] hover:text-white')
                  }
                `}
              >
                <span className="flex items-center gap-1.5">
                  {item.label}
                  {item.hasSubmenu && (
                    <div className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  )}
                </span>
              </a>

              {item.hasSubmenu && (
                <div className={`
                  absolute top-full left-[-2px] right-[-2px] bg-[#1a1919] border-x-2 border-b-2 border-white/50 
                  transition-all duration-300 origin-top shadow-2xl z-[70]
                  ${isActive ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}
                `}>
                  <div className="flex flex-col">
                    {item.submenu?.map((sub: any) => (
                      <a 
                        key={sub.label}
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick(sub.view);
                          setActiveDropdown(null);
                        }}
                        className={`
                          flex items-center px-10 h-24 text-[10px] font-sans font-black uppercase tracking-[0.3em]
                          transition-all duration-200 border-b-2 border-white/20 last:border-b-0
                          text-white hover:bg-[#F29100] hover:text-white
                        `}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
