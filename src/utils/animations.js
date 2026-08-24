import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Standard Fade Up animation with ScrollTrigger
 */
export const fadeUp = (element, delay = 0, duration = 1) => {
  if (!element) return;
  return gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: duration,
      delay: delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

/**
 * Staggered Reveal for child elements
 */
export const staggerReveal = (elements, trigger, stagger = 0.15) => {
  if (!elements || elements.length === 0) return;
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || elements[0],
        start: 'top 82%',
      },
    }
  );
};

/**
 * Scale reveal for imagery
 */
export const scaleReveal = (imageElement, containerElement) => {
  if (!imageElement) return;
  return gsap.fromTo(
    imageElement,
    { scale: 1.25, opacity: 0.8 },
    {
      scale: 1,
      opacity: 1,
      duration: 1.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerElement || imageElement,
        start: 'top 85%',
        end: 'bottom top',
        scrub: 1,
      },
    }
  );
};

/**
 * Clip path expand reveal
 */
export const clipPathReveal = (containerElement) => {
  if (!containerElement) return;
  return gsap.fromTo(
    containerElement,
    { clipPath: 'inset(15% 15% 15% 15% round 24px)', opacity: 0.4 },
    {
      clipPath: 'inset(0% 0% 0% 0% round 0px)',
      opacity: 1,
      duration: 1.2,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: containerElement,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 0.8,
      },
    }
  );
};
