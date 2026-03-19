'use client';

import React from 'react';
import { Instagram, Facebook, Martini, Menu, X } from 'lucide-react';

interface SidebarProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleMenu, isMenuOpen }) => {
  return (
    <aside className={`
      fixed left-0 top-0 h-full z-[200] bg-[#1a1919] transition-all duration-500
      w-20 lg:w-24 border-r-2 border-white/50 flex flex-col items-center
      hidden lg:flex
    `}>
      {/* Burger / Logo Trigger Area - Synchronized height and border with Navigation.tsx */}
      <button 
        onClick={toggleMenu}
        className={`
          w-full h-20 lg:h-24 flex items-center justify-center border-b-2 
          transition-all duration-500 group border-white/50 hover:bg-[#F29100] text-white
          box-border p-0 m-0 overflow-hidden
          ${isMenuOpen ? 'bg-[#F29100]' : ''}
        `}
      >
        <div className="relative flex items-center justify-center w-full h-full">
          {isMenuOpen ? (
            <X className="w-10 h-10 hover:scale-110 transition-transform" />
          ) : (
            <div className="flex flex-col items-center justify-center group">
              {/* Show the actual Burger Menu icon clearly as requested */}
              <Menu className="w-10 h-10 group-hover:scale-110 transition-transform" />
            </div>
          )}
        </div>
      </button>
      
      {/* Vertical Branding Labels */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-32 py-10">
        <span className="vertical-text text-[9px] uppercase tracking-[0.6em] text-white font-black whitespace-nowrap">ORANGE ROOMS</span>
        <span className="vertical-text text-[9px] uppercase tracking-[0.6em] text-white font-black whitespace-nowrap">EST. 2001</span>
        <span className="vertical-text text-[9px] uppercase tracking-[0.6em] text-white font-black whitespace-nowrap">SOUTHAMPTON</span>
      </div>
      
      {/* Social Links */}
      <div className="mt-auto space-y-10 flex flex-col items-center pb-12">
        <a href="https://www.instagram.com/orangerooms/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F29100] transition-colors">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="https://www.facebook.com/orangerooms/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F29100] transition-colors">
          <Facebook className="w-6 h-6" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
