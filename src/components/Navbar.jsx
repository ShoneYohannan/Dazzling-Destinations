import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Tours', href: '#tours' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-[#121619]/85 backdrop-blur-md border-b border-white/10 shadow-2xl'
            : 'py-6 bg-gradient-to-b from-[#121619]/80 via-[#121619]/30 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-3 text-[#FBF9F5] focus:outline-none"
            data-cursor="Home"
          >
            <div className="w-10 h-10 rounded-full bg-[#2A4A3E] border border-[#D4AF37]/40 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 group-hover:scale-105">
              <Compass className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-xl md:text-2xl font-bold tracking-wide uppercase text-[#FBF9F5]">
                Dazzling<span className="text-[#D4AF37] font-sans font-light text-lg">.</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#E8DFD1]/80 font-medium -mt-1">
                Destinations
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 bg-white/5 backdrop-blur-md px-8 py-2.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium text-[#FBF9F5]/90 hover:text-[#D4AF37] transition-colors duration-300 relative group py-1"
                data-cursor="View"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onOpenModal && onOpenModal()}
              className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#2A4A3E] hover:bg-[#3B6754] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider transition-all duration-300 border border-[#D4AF37]/40 shadow-lg shadow-[#2A4A3E]/30 overflow-hidden"
              data-cursor="Book"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Tours
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#D4AF37]" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/20 to-[#D4AF37]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FBF9F5] hover:bg-white/20 transition-colors"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-[#121619] text-[#FBF9F5] flex flex-col justify-between p-8 md:p-12 overflow-hidden"
          >
            {/* Background Aesthetic Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center filter grayscale mix-blend-overlay" />

            {/* Mobile Header */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#2A4A3E] border border-[#D4AF37]/40 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <span className="font-serif-luxury text-xl font-bold uppercase tracking-wider">
                  Dazzling Destinations
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-full bg-white/10 border border-white/20 text-[#FBF9F5] hover:bg-white/20 transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links List */}
            <nav className="relative z-10 my-auto flex flex-col items-start gap-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> Navigation
              </span>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                  className="font-serif-luxury text-4xl md:text-5xl hover:text-[#D4AF37] transition-colors flex items-center gap-4 group"
                >
                  <span className="text-sm font-sans text-[#E8DFD1]/50 group-hover:text-[#D4AF37]">
                    0{i + 1}
                  </span>
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* Mobile Footer CTAs */}
            <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#E8DFD1]/70 uppercase tracking-widest">
                  Concierge Inquiry
                </p>
                <p className="text-sm text-[#FBF9F5] font-medium mt-0.5">
                  concierge@dazzlingdestinations.com
                </p>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal && onOpenModal();
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2A4A3E] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border border-[#D4AF37]/50"
              >
                Explore Tours <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
