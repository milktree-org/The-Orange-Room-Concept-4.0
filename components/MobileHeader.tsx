'use client';

import React from 'react';
import { Menu, X, CalendarDays } from 'lucide-react';
import { View } from '@/lib/types';

interface MobileHeaderProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  onNavigate?: (view: View) => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ toggleMenu, isMenuOpen, onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-[#1a1919] z-[100] border-b-2 border-white/50 flex items-center lg:hidden shadow-xl">
      {/* Brand Logo Area */}
      <div className="flex-1 px-4 flex items-center gap-3">
        <img 
          src="https://www.orangerooms.co.uk/wp-content/uploads/2023/10/orange-logo-1.png" 
          alt="Orange Rooms" 
          className="h-10 w-auto"
        />
      </div>

      {/* Quick Actions */}
      <div className="flex h-full">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onNavigate?.('book'); }}
          className="h-full px-6 bg-[#F29100] flex items-center justify-center gap-2 border-l-2 border-white/20 transition-active"
        >
          <CalendarDays className="w-5 h-5 text-white" />
          <span className="text-[10px] font-black tracking-widest text-white uppercase">BOOK</span>
        </a>

        <button 
          onClick={toggleMenu}
          className={`
            w-20 flex items-center justify-center border-l-2 border-white/30 
            transition-colors duration-300
            ${isMenuOpen ? 'bg-white text-[#F29100]' : 'bg-transparent text-white'}
          `}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>
    </header>
  );
};

export default MobileHeader;
