import React, { useEffect, useRef } from 'react';
import { Compass, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IntroSection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text Reveal Animation
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          },
        }
      );

      // 2. Side Image Slide & Parallax Entrance
      gsap.fromTo(
        imgRef.current,
        { x: 100, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imgRef.current,
            start: 'top 85%',
          },
        }
      );

      // 3. Label Badge Reveal
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: badgeRef.current,
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 md:py-40 bg-[#FBF9F5] text-[#121619] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Oversized Editorial Statement */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Label */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A4A3E]/10 border border-[#2A4A3E]/20 text-[#2A4A3E] text-[11px] font-bold uppercase tracking-[0.25em] mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Journey</span>
          </div>

          {/* Oversized Statement */}
          <h2
            ref={textRef}
            className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-[#121619] tracking-tight"
          >
            Some places are visited.{' '}
            <span className="italic font-normal text-[#2A4A3E] font-serif block mt-2">
              Others become part of you.
            </span>
          </h2>

          <p className="mt-8 text-base md:text-lg text-[#121619]/70 font-light leading-relaxed max-w-2xl">
            We curate intimate travel experiences across India’s most magnificent horizons — blending timeless heritage, pristine natural sanctuaries, and refined luxury so every trip turns into an enduring story.
          </p>

          {/* Stats Bar */}
          <div className="mt-12 pt-8 border-t border-[#121619]/10 grid grid-cols-3 gap-6 w-full">
            <div>
              <span className="font-serif-luxury text-3xl md:text-4xl font-bold text-[#2A4A3E]">
                100%
              </span>
              <p className="text-xs uppercase tracking-wider text-[#121619]/60 mt-1">
                Bespoke Journeys
              </p>
            </div>
            <div>
              <span className="font-serif-luxury text-3xl md:text-4xl font-bold text-[#2A4A3E]">
                15+
              </span>
              <p className="text-xs uppercase tracking-wider text-[#121619]/60 mt-1">
                Curated Regions
              </p>
            </div>
            <div>
              <span className="font-serif-luxury text-3xl md:text-4xl font-bold text-[#2A4A3E]">
                4.98
              </span>
              <p className="text-xs uppercase tracking-wider text-[#121619]/60 mt-1">
                Guest Satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Editorial Image Frame */}
        <div className="lg:col-span-5 relative" ref={imgRef}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/5 aspect-[4/5] group">
            <img
              src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85"
              alt="Rajasthan Fort & Palace Heritage"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Subtle Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 shadow-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#2A4A3E]">
                  Rajasthan Heritage
                </span>
                <p className="text-sm font-serif-luxury font-bold text-[#121619] mt-0.5">
                  Udaipur Palace Experience
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#2A4A3E] text-[#FBF9F5] flex items-center justify-center">
                <Compass className="w-4 h-4 text-[#D4AF37]" />
              </div>
            </div>
          </div>

          {/* Decorative Backing Accent */}
          <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl border-2 border-[#2A4A3E]/20 -z-10 hidden sm:block" />
        </div>
      </div>
    </section>
  );
}
