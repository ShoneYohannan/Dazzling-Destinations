import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-28 md:py-36 bg-[#FBF9F5] text-[#121619] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A4A3E]/10 border border-[#2A4A3E]/20 text-[#2A4A3E] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guest Chronicles</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold tracking-tight text-[#121619]">
            Stories From Our Travelers
          </h2>
        </div>

        {/* Testimonial Card Slider */}
        <div className="relative bg-white rounded-3xl p-8 md:p-14 shadow-2xl border border-black/5 flex flex-col items-center text-center">
          {/* Large Decorative Quote Icon */}
          <div className="w-16 h-16 rounded-full bg-[#2A4A3E]/10 flex items-center justify-center text-[#2A4A3E] mb-8">
            <Quote className="w-8 h-8 rotate-180" />
          </div>

          {/* Animated Quote Content */}
          <div className="min-h-[160px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'power2.out' }}
                className="flex flex-col items-center"
              >
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#D4AF37] mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <blockquote className="font-serif-luxury text-xl sm:text-2xl md:text-3xl font-medium text-[#121619] leading-relaxed max-w-3xl">
                  "{current.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="mt-8 flex items-center gap-4 text-left">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#2A4A3E]"
                  />
                  <div>
                    <h4 className="font-serif-luxury text-lg font-bold text-[#121619]">
                      {current.author}
                    </h4>
                    <p className="text-xs text-[#121619]/60">
                      {current.role} — <span className="text-[#2A4A3E] font-medium">{current.location}</span>
                    </p>
                    <span className="text-[11px] text-[#D4AF37] font-semibold uppercase tracking-wider block mt-0.5">
                      Trip: {current.trip}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls & Progress Indicator */}
          <div className="mt-12 pt-8 border-t border-black/5 w-full flex items-center justify-between">
            {/* Progress Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 bg-[#2A4A3E]' : 'w-2 bg-black/20 hover:bg-black/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-[#121619] hover:bg-[#2A4A3E] hover:text-[#FBF9F5] hover:border-[#2A4A3E] transition-all duration-300"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-[#121619] hover:bg-[#2A4A3E] hover:text-[#FBF9F5] hover:border-[#2A4A3E] transition-all duration-300"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
