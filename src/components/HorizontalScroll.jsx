import React, { useEffect, useRef } from 'react';
import { horizontalExperiences } from '../data/tours';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll({ onSelectCategory }) {
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Only run GSAP pin horizontal scroll on desktop screens (>=1024px)
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    let ctx;
    if (mediaQuery.matches) {
      ctx = gsap.context(() => {
        const totalWidth = containerRef.current.scrollWidth - window.innerWidth;

        gsap.to(containerRef.current, {
          x: -totalWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 1,
            end: () => `+=${totalWidth}`,
            invalidateOnRefresh: true,
          },
        });
      }, triggerRef);
    }

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={triggerRef}
      className="relative bg-[#FAF8F5] text-[#121619] py-20 lg:py-0 overflow-hidden lg:h-screen lg:flex lg:items-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 lg:hidden">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A4A3E]/10 text-[#2A4A3E] text-[11px] font-bold uppercase tracking-[0.25em] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Themes & Landscapes</span>
        </div>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-[#121619]">
          Places Worth Getting Lost In
        </h2>
      </div>

      {/* Horizontal Scroll Track Container */}
      <div
        ref={containerRef}
        className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-6 md:px-12 lg:px-24 w-full lg:w-max items-stretch lg:items-center"
      >
        {/* Title Card (Desktop Only inside track) */}
        <div className="hidden lg:flex flex-col justify-center min-w-[420px] pr-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A4A3E]/10 border border-[#2A4A3E]/20 text-[#2A4A3E] text-[11px] font-bold uppercase tracking-[0.25em] mb-6 w-max">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Themes & Landscapes</span>
          </div>
          <h2 className="font-serif-luxury text-6xl font-bold leading-[1.1] text-[#121619] tracking-tight">
            Places Worth <br />
            <span className="italic font-serif font-normal text-[#2A4A3E]">
              Getting Lost In
            </span>
          </h2>
          <p className="mt-6 text-base text-[#121619]/70 font-light leading-relaxed max-w-sm">
            Scroll to explore our five foundational travel themes designed for the discerning explorer.
          </p>
        </div>

        {/* 01 to 05 Cards */}
        {horizontalExperiences.map((exp) => (
          <div
            key={exp.id}
            onClick={() => onSelectCategory && onSelectCategory(exp.category)}
            className="group relative min-w-full lg:min-w-[480px] h-[520px] rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-black/5 flex flex-col justify-between p-8 text-[#FBF9F5] transition-transform duration-500 hover:-translate-y-2"
            data-cursor="View Theme"
          >
            {/* Background Photo */}
            <img
              src={exp.image}
              alt={exp.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121619]/90 via-[#121619]/40 to-black/20 group-hover:opacity-95 transition-opacity" />

            {/* Header Number & Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-serif-luxury text-4xl font-bold text-[#D4AF37]">
                {exp.id}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] uppercase font-semibold tracking-widest text-[#FBF9F5] border border-white/20">
                {exp.category}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold flex items-center gap-1.5 mb-1">
                <Compass className="w-3.5 h-3.5" />
                {exp.location}
              </span>
              <h3 className="font-serif-luxury text-3xl font-bold text-[#FBF9F5] group-hover:text-[#E8DFD1] transition-colors leading-snug">
                {exp.title}
              </h3>
              <p className="text-xs text-[#FBF9F5]/80 mt-3 font-light leading-relaxed line-clamp-3">
                {exp.desc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                <span>Discover Collections</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
