import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import DestinationSection from './components/DestinationSection';
import HorizontalScroll from './components/HorizontalScroll';
import FeaturedTour from './components/FeaturedTour';
import ExperienceSection from './components/ExperienceSection';
import WhyTravelWithUs from './components/WhyTravelWithUs';
import TestimonialSlider from './components/TestimonialSlider';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import TourModal from './components/TourModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // 2. Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  const handleOpenModal = (tourData = null) => {
    setSelectedTour(tourData);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTour(null);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#121619] relative font-sans">
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Experience Visual Flow */}
      <main>
        {/* HERO */}
        <Hero onOpenModal={handleOpenModal} />

        {/* INTRO EDITORIAL */}
        <IntroSection />

        {/* DESTINATIONS GRID */}
        <DestinationSection onSelectDestination={handleOpenModal} />

        {/* HORIZONTAL PINNED SCROLL */}
        <HorizontalScroll onSelectCategory={handleOpenModal} />

        {/* FEATURED TOUR SHOWCASE */}
        <FeaturedTour onOpenModal={handleOpenModal} />

        {/* EXPERIENCES HOVER SHOWCASE */}
        <ExperienceSection onSelectExperience={handleOpenModal} />

        {/* WHY TRAVEL WITH US */}
        <WhyTravelWithUs />

        {/* TESTIMONIAL SLIDER */}
        <TestimonialSlider />

        {/* FINAL DRAMATIC CTA */}
        <CTASection onOpenModal={handleOpenModal} />
      </main>

      {/* FOOTER */}
      <Footer onOpenModal={handleOpenModal} />

      {/* INTERACTIVE CONCIERGE MODAL */}
      <TourModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        selectedTour={selectedTour}
      />
    </div>
  );
}
