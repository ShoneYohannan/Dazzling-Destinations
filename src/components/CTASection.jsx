import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection({ onOpenModal }) {
  const sectionRef = useRef(null);
  const bgImgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Image Scroll Zoom Effect
      gsap.fromTo(
        bgImgRef.current,
        { scale: 1.2 },
        {
          scale: 1.0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Content Reveal
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-36 md:py-48 flex items-center justify-center overflow-hidden bg-[#121619]"
    >
      {/* Full-width Image background with scroll zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={bgImgRef}
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90"
          alt="Misty Mountain Peaks at Dawn - Dazzling Destinations"
          className="w-full h-full object-cover object-center will-change-transform scale-110"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121619] via-[#121619]/50 to-[#121619]/70" />
      </div>

      {/* Content Box */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.3em] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Your Expedition Awaits</span>
        </div>

        <h2 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FBF9F5] tracking-tight leading-tight">
          Where will you <br />
          <span className="italic font-serif font-normal text-[#E8DFD1]">
            go next?
          </span>
        </h2>

        <p className="mt-6 text-base md:text-xl text-[#FBF9F5]/80 font-light max-w-xl leading-relaxed">
          Let our travel architects design an unrepeatable journey tailored strictly around your personal taste and schedule.
        </p>

        <div className="mt-10">
          <button
            onClick={() => onOpenModal && onOpenModal()}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#2A4A3E] hover:bg-[#3B6754] text-[#FBF9F5] text-xs font-semibold uppercase tracking-widest transition-all duration-300 border border-[#D4AF37]/50 shadow-2xl shadow-[#2A4A3E]/50 overflow-hidden"
            data-cursor="Start"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Journey
              <ArrowUpRight className="w-5 h-5 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/25 to-[#D4AF37]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>
      </div>
    </section>
  );
}
