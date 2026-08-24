import React, { useEffect, useRef } from 'react';
import DestinationCard from './DestinationCard';
import { destinations } from '../data/destinations';
import { Sparkles, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DestinationSection({ onSelectDestination }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sequentially reveal cards on scroll
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
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
      id="destinations"
      ref={sectionRef}
      className="py-28 md:py-36 bg-[#121619] text-[#FBF9F5] relative overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#2A4A3E]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Horizons</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FBF9F5]">
              Explore Destinations
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#E8DFD1]/80 font-light max-w-md">
            Handpicked luxury sanctuaries spanning emerald waterways, ancient desert fortresses, high Himalayan passes, and private island coasts.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {destinations.map((dest, idx) => (
            <div
              key={dest.id}
              ref={(el) => (cardsRef.current[idx] = el)}
            >
              <DestinationCard destination={dest} onSelect={onSelectDestination} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
