'use client';

import React from 'react';
import { View } from '@/lib/types';

interface FooterProps {
  onNavigate?: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks: { label: string; action: () => void; external?: boolean }[] = [
    { label: 'Private Party and Table Bookings', action: () => onNavigate?.('book') },
    { label: 'Cocktail Masterclass', action: () => onNavigate?.('cocktail-bar') },
    { label: 'Gift Vouchers', action: () => window.open('https://orangerooms.giftpro.co.uk/', '_blank', 'noopener,noreferrer') },
    { label: 'Feedback', action: () => window.location.href = 'mailto:feedback@orangerooms.co.uk' },
    { label: 'Jobs', action: () => window.location.href = 'mailto:jobs@orangerooms.co.uk' },
    { label: 'Contact Us', action: () => window.location.href = 'mailto:info@orangerooms.co.uk' },
  ];
  return (
    <footer className="bg-[#1a1919] border-t-2 border-white/50 flex flex-col relative">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr] lg:divide-x-2 lg:divide-white/50">

        {/* Column 1: Lets Connect */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col space-y-8 md:space-y-12 border-b-2 md:border-b-0 border-white/10 lg:border-b-0 min-w-0">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-[28px] md:text-[32px] font-bold tracking-tight text-white leading-none">Lets connect!</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black text-[#F29100] mb-2">FOR RESERVATION INQUIRIES:</p>
                <a href="mailto:info@orangerooms.co.uk" className="text-[14px] md:text-[15px] text-white/80 hover:text-white transition-colors underline decoration-white/20 underline-offset-4">info@orangerooms.co.uk</a>
              </div>
              <div className="pt-1">
                <a href="tel:02380232333" className="text-[14px] md:text-[15px] text-white/80 hover:text-white transition-colors">023 8023 2333</a>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="space-y-1">
              <p className="text-[14px] md:text-[15px] text-white/80">1-2 Vernon Walk, Southampton, SO15 2EJ</p>
            </div>
            <a href="mailto:contact@orangerooms.co.uk" className="text-[14px] md:text-[15px] text-white/80 hover:text-white transition-colors underline decoration-white/20 underline-offset-4 block">contact@orangerooms.co.uk</a>
          </div>

          <div className="pt-4 md:pt-8 space-y-4">
            <p className="text-[10px] md:text-[11px] text-white/40 leading-relaxed font-light italic">Age requirement: 18+</p>
            <p className="text-[9px] md:text-[10px] text-white/20 uppercase tracking-widest font-black pt-2">Copyright © 2026 Orange Rooms. All rights reserved.</p>
          </div>
        </div>

        {/* Column 2: Opening Hours */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col border-b-2 md:border-b-0 border-white/10 lg:border-b-0 min-w-0">
          <h3 className="text-[28px] md:text-[32px] font-bold tracking-tight text-white leading-none mb-8 md:mb-12">Opening hours</h3>
          <div className="grid grid-cols-2 gap-y-4 md:gap-y-6 text-[14px] md:text-[15px]">
            <span className="text-white/80">Mon</span>
            <span className="text-white/50 text-right italic text-[13px]">Private Hires Only</span>

            <span className="text-white/80">Tue</span>
            <span className="text-white/50 text-right italic text-[13px]">Private Hires Only</span>

            <span className="text-white/80">Wed — Fri</span>
            <span className="text-white text-right">16:00–03:00</span>

            <span className="text-white/80">Sat</span>
            <span className="text-white text-right">14:00–03:00</span>

            <span className="text-white/80 border-t border-white/10 pt-4">Sun</span>
            <span className="text-white/50 text-right border-t border-white/10 pt-4 italic text-[13px]">Private Hires Only</span>
          </div>
        </div>

        {/* Column 3: Quick Links */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col border-b-2 md:border-b-0 border-white/10 lg:border-b-0 min-w-0">
          <h3 className="text-[28px] md:text-[32px] font-bold tracking-tight text-white leading-none mb-8 md:mb-12">Quick Links</h3>
          <nav className="flex flex-col space-y-3 md:space-y-4">
            {quickLinks.map((link) => (
              <button key={link.label} onClick={link.action} className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-[#F29100] transition-colors text-left cursor-pointer">{link.label}</button>
            ))}
          </nav>
        </div>

        {/* Column 4: Brand Badge Element */}
        <div className="p-8 md:p-12 lg:p-16 flex items-center justify-center bg-black/20 min-w-0">
          <div className="relative w-52 h-52 md:w-56 md:h-56 lg:w-60 lg:h-60">
            <svg className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text className="text-[7.5px] uppercase font-black fill-white/40 tracking-[0.1em]">
                <textPath xlinkHref="#circlePath">
                   • HIGH ON LIFE • EST. 2001 • ORANGE ROOMS • SOUTHAMPTON •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="opacity-80 w-3/5 h-3/5">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#F29100" strokeWidth="1.5" />
                <path d="M5,50 Q50,0 95,50 Q50,100 5,50" fill="none" stroke="#F29100" strokeWidth="1" />
                <path d="M50,5 L50,95" fill="none" stroke="#F29100" strokeWidth="1" />
                <path d="M5,50 L95,50" fill="none" stroke="#F29100" strokeWidth="1" />
                <ellipse cx="50" cy="50" rx="20" ry="45" fill="none" stroke="#F29100" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>

      </div>

      {/* Tiny Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 border-t-2 border-white/50 py-6 gap-3 md:gap-4">
        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] font-black text-white/20 text-center md:text-left">SOUTHAMPTON'S LEGENDARY VENUE</span>
        <span className="text-[8px] md:text-[10px] text-white/30 uppercase font-black tracking-[0.15em] md:tracking-[0.2em] text-center md:text-right flex-shrink-0">
          WEBSITE BY <a href="https://milktreeagency.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F29100] transition-colors">MILKTREE AGENCY</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
