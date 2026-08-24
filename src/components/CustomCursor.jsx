import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on non-touch devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovered(true);
        setHoverText(target.getAttribute('data-cursor') || '');
      } else if (e.target.closest('a, button, input, select')) {
        setIsHovered(true);
        setHoverText('');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Magnetic Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-150 ease-out -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/60 flex items-center justify-center ${
          isHovered ? 'w-16 h-16 bg-[#2A4A3E]/30 backdrop-blur-xs scale-110 border-[#D4AF37]' : 'w-10 h-10 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {hoverText && (
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#FBF9F5]">
            {hoverText}
          </span>
        )}
      </div>

      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-[#D4AF37] rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          opacity: isHovered ? 0 : 1,
        }}
      />
    </>
  );
}
