'use client';

import React, { useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const googleReviews = [
  { name: "Grace", date: "2 months ago", rating: 5, content: "Wheelchair accessible, the bouncers are lovely helped us with an incident very well best bouncers husky recommend this club", avatar: "G" },
  { name: "Lloyd S", date: "3 months ago", rating: 5, content: "Really nice place to chill and enjoy some good music. Great vibe and even better drinks.", avatar: "L" },
  { name: "Shane K", date: "4 months ago", rating: 5, content: "Great venue, friendly staff and reasonable prices and a really good atmosphere. Great little venue.", avatar: "S" },
  { name: "Sarah J", date: "5 months ago", rating: 5, content: "The best night out in Southampton. The music is always spot on and the staff are amazing.", avatar: "S" },
  { name: "Michael R", date: "6 months ago", rating: 5, content: "Awesome selection of cocktails and the DJ was fire last Saturday. Definitely coming back.", avatar: "M" },
  { name: "Emma W", date: "7 months ago", rating: 5, content: "Incredible atmosphere and very unique decor. The orange theme is so iconic.", avatar: "E" },
  { name: "David L", date: "8 months ago", rating: 5, content: "Southampton's finest. The VIP service is worth every penny. Top class experience.", avatar: "D" },
  { name: "Jessica T", date: "9 months ago", rating: 5, content: "Loved the Tiki lounge area. It felt like a proper tropical getaway in the city center.", avatar: "J" },
  { name: "Ryan P", date: "10 months ago", rating: 5, content: "Best place for a late night drink. The mixologists really know their craft.", avatar: "R" },
  { name: "Chloe B", date: "11 months ago", rating: 5, content: "Staff are so welcoming and the security team made us feel safe all night. 10/10.", avatar: "C" }
];

const tripAdvisorReviews = [
  { name: "Tracy N", date: "1 month ago", rating: 5, title: "A night to remember", content: "The customer service from crystal when booking our night was 1st class and our night followed was perfect." },
  { name: "Josie W", date: "2 months ago", rating: 5, title: "Bottomless Cocktails", content: "Alice and Alacey were such good hostesses, amazing service, so quick, and so friendly." },
  { name: "notlimuk", date: "3 months ago", rating: 5, title: "40th Birthday", content: "Hired a room for 40th Birthday and we had a blast! Staff were really helpful." },
  { name: "James H", date: "4 months ago", rating: 5, title: "Top Tier Mixology", content: "Best cocktails in Southampton. The attention to detail is insane and the staff know their stuff." },
  { name: "Mark D", date: "5 months ago", rating: 5, title: "Vibe is Unmatched", content: "If you want a night you'll remember, this is the spot. The energy is just different here." },
  { name: "Lisa M", date: "6 months ago", rating: 5, title: "Fantastic Party Venue", content: "The Neon Jungle room is spectacular. My friends were blown away by the lighting and service." },
  { name: "Paul G", date: "7 months ago", rating: 5, title: "Great Music Policy", content: "Refreshing to go somewhere that plays proper bangers without it being cheesy. Great crowd too." },
  { name: "Sophie K", date: "8 months ago", rating: 5, title: "Excellent Service", content: "From the door staff to the bar staff, everyone was polite and efficient. Highly recommended." },
  { name: "Tom S", date: "9 months ago", rating: 5, title: "Best Tiki Bar", content: "The Tiki lounge is world-class. The Mai Tais are authentic and the decor is immersive." },
  { name: "Alice B", date: "10 months ago", rating: 5, title: "Great Night", content: "Had an amazing time last Friday. Will definitely be returning for the next event." }
];

const ReviewsSection: React.FC = () => {
  const googleRef = useRef<HTMLDivElement>(null);
  const tripRef = useRef<HTMLDivElement>(null);
  const isHoveringGoogle = useRef(false);
  const isHoveringTrip = useRef(false);

  useEffect(() => {
    let animationFrameId: number;
    const calculateSpeed = () => (window.innerWidth / 20) / 60;
    let speed = calculateSpeed();

    const handleResize = () => { speed = calculateSpeed(); };
    window.addEventListener('resize', handleResize);

    const update = () => {
      if (googleRef.current && !isHoveringGoogle.current) {
        googleRef.current.scrollLeft -= speed;
        if (googleRef.current.scrollLeft <= 0) {
          googleRef.current.scrollLeft = googleRef.current.scrollWidth / 2;
        }
      }
      if (tripRef.current && !isHoveringTrip.current) {
        tripRef.current.scrollLeft += speed;
        if (tripRef.current.scrollLeft >= tripRef.current.scrollWidth / 2) {
          tripRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(update);
    };

    if (googleRef.current) googleRef.current.scrollLeft = googleRef.current.scrollWidth / 2;

    animationFrameId = requestAnimationFrame(update);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigate = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const boxWidth = window.innerWidth * 0.25; 
      const scrollAmount = direction === 'left' ? -boxWidth : boxWidth;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const repeatedGoogle = [...googleReviews, ...googleReviews, ...googleReviews, ...googleReviews];
  const repeatedTrip = [...tripAdvisorReviews, ...tripAdvisorReviews, ...tripAdvisorReviews, ...tripAdvisorReviews];

  return (
    <section className="bg-[#1a1919] flex flex-col relative pb-20 overflow-hidden">
      
      {/* GOOGLE REVIEWS Header - Grid aligned h-24 */}
      <div className="h-24 nav-border grid grid-cols-6 bg-[#1a1919] relative z-30 box-border">
        <div className="flex items-center justify-center h-full">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white">GOOGLE</span>
        </div>
        <div className="col-span-4 h-full opacity-0" />
        <div className="flex items-center justify-center space-x-4 h-full">
          <button onClick={() => navigate(googleRef, 'left')} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center hover:bg-white group transition-all">
            <ChevronLeft className="w-4 h-4 text-white group-hover:text-black" />
          </button>
          <button onClick={() => navigate(googleRef, 'right')} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center hover:bg-white group transition-all">
            <ChevronRight className="w-4 h-4 text-white group-hover:text-black" />
          </button>
        </div>
      </div>

      <div ref={googleRef} onMouseEnter={() => isHoveringGoogle.current = true} onMouseLeave={() => isHoveringGoogle.current = false} className="relative border-b-2 border-white/50 overflow-x-auto scrollbar-hide flex cursor-grab active:cursor-grabbing select-none">
        <div className="flex">
          {repeatedGoogle.map((item, idx) => (
            <div key={idx} className="min-w-[100vw] md:min-w-[50vw] lg:min-w-[25vw] p-10 lg:p-12 flex flex-col space-y-5 group hover:bg-white/[0.03] transition-colors duration-500 block-border">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#F29100] flex items-center justify-center text-[12px] font-bold text-white shadow-lg">{item.avatar}</div>
                  <div>
                    <h4 className="text-[14px] font-bold text-white tracking-tight">{item.name}</h4>
                    <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold">{item.date}</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => ( <Star key={i} className="w-2.5 h-2.5 fill-[#F29100] text-[#F29100]" /> ))}
              </div>
              <p className="text-[13px] text-white/70 leading-relaxed font-light italic">"{item.content}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* TRIPADVISOR REVIEWS Header - Grid aligned h-24 */}
      <div className="h-24 nav-border grid grid-cols-6 bg-[#1a1919] relative z-30 box-border">
        <div className="flex items-center justify-center h-full">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white">TRIP ADVISOR</span>
        </div>
        <div className="col-span-4 h-full opacity-0" />
        <div className="flex items-center justify-center space-x-4 h-full">
          <button onClick={() => navigate(tripRef, 'left')} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center hover:bg-white group transition-all">
            <ChevronLeft className="w-4 h-4 text-white group-hover:text-black" />
          </button>
          <button onClick={() => navigate(tripRef, 'right')} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center hover:bg-white group transition-all">
            <ChevronRight className="w-4 h-4 text-white group-hover:text-black" />
          </button>
        </div>
      </div>

      <div ref={tripRef} onMouseEnter={() => isHoveringTrip.current = true} onMouseLeave={() => isHoveringTrip.current = false} className="relative border-b-2 border-white/50 overflow-x-auto scrollbar-hide flex cursor-grab active:cursor-grabbing select-none">
        <div className="flex">
          {repeatedTrip.map((item, idx) => (
            <div key={idx} className="min-w-[100vw] md:min-w-[50vw] lg:min-w-[25vw] p-10 lg:p-12 flex flex-col space-y-5 group hover:bg-white/[0.03] transition-colors duration-500 block-border">
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <h4 className="text-[14px] font-bold text-white tracking-tight">{item.name}</h4>
                  <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold">{item.date}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => ( <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#00af87]"></div> ))}
                </div>
                <h5 className="text-[14px] font-bold text-white/90 leading-tight">{item.title}</h5>
              </div>
              <p className="text-[13px] text-white/60 leading-relaxed font-light">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ReviewsSection;
