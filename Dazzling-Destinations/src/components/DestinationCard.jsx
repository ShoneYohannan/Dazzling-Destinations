import React from 'react';
import { ArrowUpRight, Clock, Sparkles } from 'lucide-react';

export default function DestinationCard({ destination, onSelect }) {
  return (
    <div
      onClick={() => onSelect && onSelect(destination)}
      className="group relative h-[480px] md:h-[540px] rounded-3xl overflow-hidden cursor-pointer border border-black/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between p-7 text-[#FBF9F5]"
      data-cursor="Discover"
    >
      {/* Background Image */}
      <img
        src={destination.image}
        alt={destination.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#121619]/90 via-[#121619]/30 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
      <div className="absolute inset-0 bg-[#2A4A3E]/0 group-hover:bg-[#2A4A3E]/20 transition-colors duration-500" />

      {/* Top Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-semibold uppercase tracking-widest text-[#FBF9F5] border border-white/20">
          {destination.badge}
        </span>
        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform duration-300 group-hover:bg-[#2A4A3E] group-hover:border-[#D4AF37]">
          <ArrowUpRight className="w-4 h-4 text-[#FBF9F5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#D4AF37]" />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
          {destination.region}
        </span>

        <h3 className="font-serif-luxury text-3xl md:text-4xl font-bold mt-1 text-[#FBF9F5] group-hover:text-[#E8DFD1] transition-colors">
          {destination.name}
        </h3>

        <p className="text-xs italic text-[#E8DFD1]/80 mt-1 font-serif">
          "{destination.tagline}"
        </p>

        {/* Hover Expandable Text */}
        <p className="text-xs text-[#FBF9F5]/80 line-clamp-2 mt-3 font-light leading-relaxed opacity-90 transition-all duration-300 group-hover:opacity-100">
          {destination.description}
        </p>

        {/* Info Highlights Pill */}
        <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-[#E8DFD1]">
          <span className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            {destination.duration}
          </span>
          <span className="font-bold text-[#FBF9F5]">
            From {destination.startingPrice}
          </span>
        </div>
      </div>
    </div>
  );
}
