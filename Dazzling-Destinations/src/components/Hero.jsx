import React, { useEffect, useRef } from 'react';
import { ArrowDownRight, Compass, Sparkles, MapPin } from 'lucide-react';
import gsap from 'gsap';

export default function Hero({ onOpenModal }) {
  const heroRef = useRef(null);
  const bgImgRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial background zoom out animation
      gsap.fromTo(
        bgImgRef.current,
        { scale: 1.25 },
        { scale: 1.0, duration: 2.2, ease: 'power2.out' }
      );

      // 2. Staggered reveal for Hero content elements
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
      )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
          '-=0.7'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.4'
        );

      // 3. Mouse Parallax Effect
      const handleMouseMove = (e) => {
        if (!heroRef.current || !bgImgRef.current) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const moveX = (clientX / innerWidth - 0.5) * 20;
        const moveY = (clientY / innerHeight - 0.5) * 20;

        gsap.to(bgImgRef.current, {
          x: moveX,
          y: moveY,
          duration: 1.2,
          ease: 'power1.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      // 4. Scroll Indicator Fade Out on Scroll
      const handleScroll = () => {
        if (window.scrollY > 80 && scrollIndicatorRef.current) {
          gsap.to(scrollIndicatorRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.4,
          });
        } else if (window.scrollY <= 80 && scrollIndicatorRef.current) {
          gsap.to(scrollIndicatorRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.4,
          });
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#121619]"
    >
      {/* Background Image with Mouse Parallax & Dark Gradient Overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={bgImgRef}
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=90"
          alt="Cinematic Kerala Backwaters Houseboat"
          className="w-full h-full object-cover object-center will-change-transform scale-105"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121619] via-[#121619]/40 to-[#121619]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#121619]/30 to-[#121619]/80" />
      </div>

      {/* Floating Decorative Badges */}
      <div className="absolute top-32 left-8 md:left-16 hidden lg:flex items-center gap-3 px-4 py-2 rounded-full glass-nav text-xs text-[#E8DFD1] border border-white/10 shadow-lg">
        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span>Kerala & Rajasthan Collection</span>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center pt-16 md:pt-24">
        {/* Eyebrow */}
        <div ref={eyebrowRef} className="opacity-0 mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] md:text-xs font-semibold uppercase tracking-[0.3em]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Discover The Extraordinary</span>
        </div>

        {/* Main Headline */}
        <h1
          ref={headingRef}
          className="opacity-0 font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FBF9F5] tracking-tight leading-[1.05] max-w-4xl"
        >
          Travel Beyond <br />
          <span className="italic font-normal text-[#E8DFD1] font-serif">The Ordinary</span>
        </h1>

        {/* Supporting Sentence */}
        <p
          ref={subtextRef}
          className="opacity-0 mt-6 text-base md:text-xl text-[#FBF9F5]/80 font-light max-w-2xl leading-relaxed"
        >
          Curated bespoke expeditions across India’s most serene backwaters, royal fortresses, high mountain sanctuaries, and emerald coasts.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="opacity-0 mt-10 flex flex-col sm:flex-row items-center gap-5">
          <a
            href="#destinations"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#2A4A3E] hover:bg-[#3B6754] text-[#FBF9F5] text-xs font-semibold uppercase tracking-widest transition-all duration-300 border border-[#D4AF37]/40 shadow-xl shadow-[#2A4A3E]/40 flex items-center justify-center gap-3 group"
            data-cursor="Explore"
          >
            Explore Destinations
            <ArrowDownRight className="w-4 h-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>

          <button
            onClick={() => onOpenModal && onOpenModal()}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-[#FBF9F5] text-xs font-semibold uppercase tracking-widest transition-all duration-300 border border-white/20 flex items-center justify-center gap-3"
            data-cursor="Tours"
          >
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            View Tours
          </button>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[#E8DFD1]/70"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-medium text-white/70">
          Scroll To Explore
        </span>
        <div className="w-[1.5px] h-10 bg-white/20 relative overflow-hidden rounded-full">
          <div className="w-full h-full bg-[#D4AF37] animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
