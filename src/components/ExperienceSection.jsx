import React, { useState } from 'react';
import { experiences } from '../data/experiences';
import { Sparkles, ArrowUpRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExperienceSection({ onSelectExperience }) {
  const [activeExp, setActiveExp] = useState(experiences[0]);

  return (
    <section
      id="experiences"
      className="py-28 md:py-36 bg-[#FBF9F5] text-[#121619] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A4A3E]/10 border border-[#2A4A3E]/20 text-[#2A4A3E] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Pursuits</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#121619]">
            Signature Experiences
          </h2>
          <p className="text-sm md:text-base text-[#121619]/70 font-light max-w-xl mt-3">
            Hover over any discipline to preview our curated luxury itineraries tailored around your personal passions.
          </p>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Categories List */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            {experiences.map((exp) => {
              const isSelected = activeExp.id === exp.id;
              return (
                <div
                  key={exp.id}
                  onMouseEnter={() => setActiveExp(exp)}
                  onClick={() => onSelectExperience && onSelectExperience(exp)}
                  className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 border ${
                    isSelected
                      ? 'bg-[#121619] text-[#FBF9F5] border-[#121619] shadow-xl scale-[1.02]'
                      : 'bg-white/60 hover:bg-white text-[#121619]/60 hover:text-[#121619] border-black/5'
                  }`}
                  data-cursor="Select"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs font-mono font-bold uppercase tracking-widest ${
                          isSelected ? 'text-[#D4AF37]' : 'text-[#121619]/40'
                        }`}
                      >
                        0{experiences.indexOf(exp) + 1}
                      </span>
                      <h3
                        className={`font-serif-luxury text-2xl md:text-3xl font-bold ${
                          isSelected ? 'text-[#FBF9F5]' : 'text-[#121619]'
                        }`}
                      >
                        {exp.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isSelected
                          ? 'text-[#D4AF37] translate-x-1 -translate-y-1'
                          : 'text-[#121619]/40 group-hover:text-[#121619]'
                      }`}
                    />
                  </div>

                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-white/10"
                    >
                      <p className="text-xs text-[#E8DFD1]/90 font-light leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.tags.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-white/10 text-[10px] uppercase font-semibold text-[#D4AF37]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/10 aspect-[4/5] group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeExp.id}
                  src={activeExp.image}
                  alt={activeExp.title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1.0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: 'power2.out' }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Dynamic Bottom Info Bar */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#121619]/90 backdrop-blur-md border border-white/15 text-[#FBF9F5] shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Featured Theme: {activeExp.title}
                </span>
                <p className="text-lg font-serif-luxury font-bold text-[#FBF9F5] mt-1">
                  {activeExp.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
