import React, { useEffect, useRef, useState } from 'react';
import { featuredTour } from '../data/tours';
import { Sparkles, CheckCircle2, Clock, Users, ShieldCheck, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedTour({ onOpenModal }) {
  const sectionRef = useRef(null);
  const imageBoxRef = useRef(null);
  const contentRef = useRef(null);
  const [showItinerary, setShowItinerary] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Clip Path Reveal
      gsap.fromTo(
        imageBoxRef.current,
        { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', scale: 1.1 },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          scale: 1.0,
          duration: 1.4,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      // Content Slide Up
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="tours"
      ref={sectionRef}
      className="py-28 md:py-36 bg-[#121619] text-[#FBF9F5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Image with Clip Path Animation */}
        <div className="lg:col-span-6 relative">
          <div
            ref={imageBoxRef}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]"
          >
            <img
              src={featuredTour.heroImage}
              alt={featuredTour.title}
              className="w-full h-full object-cover"
            />
            {/* Top Overlay Badge */}
            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-[#2A4A3E]/90 backdrop-blur-md text-[#D4AF37] text-[10px] uppercase tracking-[0.25em] font-bold border border-[#D4AF37]/40 shadow-lg">
              {featuredTour.badge}
            </div>

            {/* Rating Tag */}
            <div className="absolute bottom-6 right-6 px-5 py-2.5 rounded-2xl bg-[#121619]/90 backdrop-blur-md border border-white/15 flex items-center gap-2">
              <span className="text-[#D4AF37] font-bold text-sm">★ {featuredTour.rating}</span>
              <span className="text-xs text-[#E8DFD1]/80 font-light">({featuredTour.reviewsCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Tour Details & Itinerary */}
        <div ref={contentRef} className="lg:col-span-6 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Journey</span>
          </div>

          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            {featuredTour.duration}
          </span>

          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold tracking-tight text-[#FBF9F5] mt-2">
            {featuredTour.title}
          </h2>

          <p className="text-sm md:text-base italic font-serif text-[#E8DFD1]/90 mt-1">
            "{featuredTour.subTitle}"
          </p>

          <p className="text-sm text-[#FBF9F5]/80 font-light leading-relaxed mt-5">
            {featuredTour.overview}
          </p>

          {/* Quick Specs Pills */}
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-[#E8DFD1]">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>{featuredTour.duration}</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
              <Users className="w-4 h-4 text-[#D4AF37]" />
              <span>{featuredTour.groupSize}</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>{featuredTour.type}</span>
            </div>
          </div>

          {/* Bullet Highlights */}
          <div className="mt-8 space-y-3 w-full">
            {featuredTour.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-[#FBF9F5]/90">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Toggle Itinerary Accordion */}
          <button
            onClick={() => setShowItinerary(!showItinerary)}
            className="mt-6 text-xs text-[#D4AF37] uppercase tracking-wider font-semibold flex items-center gap-2 hover:underline"
          >
            {showItinerary ? 'Hide Day-by-Day Itinerary' : 'View Day-by-Day Itinerary'}
            {showItinerary ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showItinerary && (
            <div className="mt-4 p-5 rounded-2xl bg-white/5 border border-white/10 w-full space-y-3 animate-fadeIn">
              {featuredTour.itinerary.map((item, i) => (
                <div key={i} className="border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                    {item.day}: {item.title}
                  </span>
                  <p className="text-xs text-[#E8DFD1]/80 mt-0.5 font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* CTA & Price */}
          <div className="mt-10 pt-8 border-t border-white/10 w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs text-[#E8DFD1]/60 uppercase tracking-widest block">
                All-Inclusive Luxury Rate
              </span>
              <span className="font-serif-luxury text-3xl font-bold text-[#FBF9F5]">
                {featuredTour.price}{' '}
                <span className="text-xs font-sans font-light text-[#E8DFD1]/70">
                  / per guest
                </span>
              </span>
            </div>

            <button
              onClick={() => onOpenModal && onOpenModal(featuredTour)}
              className="px-8 py-4 rounded-full bg-[#2A4A3E] hover:bg-[#3B6754] text-[#FBF9F5] text-xs font-semibold uppercase tracking-widest transition-all duration-300 border border-[#D4AF37]/50 shadow-xl flex items-center justify-center gap-3 group"
              data-cursor="Reserve"
            >
              View Journey
              <ArrowRight className="w-4 h-4 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
