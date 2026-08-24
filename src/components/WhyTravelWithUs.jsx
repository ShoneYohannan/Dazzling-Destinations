import React, { useEffect, useRef } from 'react';
import { whyChooseUs } from '../data/testimonials';
import { Sparkles, Shield, Compass, HeartHandshake, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyTravelWithUs() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const icons = [Award, Compass, Shield, HeartHandshake];

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#121619] text-[#FBF9F5] relative overflow-hidden border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Difference</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold tracking-tight text-[#FBF9F5]">
            Why Travel With Us
          </h2>
          <p className="text-sm md:text-base text-[#E8DFD1]/80 font-light mt-3">
            We don't sell packaged tours. We build unrepeatable personal experiences anchored in deep authenticity and luxury.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, idx) => {
            const IconComp = icons[idx] || Award;
            return (
              <div
                key={item.number}
                ref={(el) => (itemsRef.current[idx] = el)}
                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif-luxury text-4xl font-bold text-[#D4AF37]">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#2A4A3E]/40 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif-luxury text-xl font-bold text-[#FBF9F5] uppercase tracking-wider group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#E8DFD1]/80 mt-3 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 w-full h-0.5 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/50 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
