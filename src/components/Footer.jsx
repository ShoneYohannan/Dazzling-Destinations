import React, { useState } from 'react';
import { Compass, ArrowRight, Mail, MapPin, Phone, CheckCircle2, Globe, Share2, MessageCircle } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer id="contact" className="bg-[#0D1012] text-[#FBF9F5] pt-24 pb-12 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a href="#hero" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]/50 shadow-lg bg-[#121619] shrink-0">
                  <img src="./logo.png" alt="Dazzling Destinations Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-serif-luxury text-2xl font-bold uppercase tracking-wider text-[#FBF9F5]">
                  Dazzling Destinations
                </span>
              </a>

              <p className="text-xs text-[#E8DFD1]/70 font-light leading-relaxed mt-6 max-w-sm">
                Architects of high-end luxury journeys across India. Extraordinary private houseboats, royal palaces, Himalayan sanctuaries, and secluded coastal retreats.
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              {[
                { icon: Globe, label: 'Website' },
                { icon: Share2, label: 'Social' },
                { icon: MessageCircle, label: 'Chat' },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href="#"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E8DFD1] hover:bg-[#2A4A3E] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs text-[#E8DFD1]/80 font-light">
              <li><a href="#hero" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#destinations" className="hover:text-[#D4AF37] transition-colors">Destinations</a></li>
              <li><a href="#experiences" className="hover:text-[#D4AF37] transition-colors">Experiences</a></li>
              <li><a href="#tours" className="hover:text-[#D4AF37] transition-colors">Featured Tours</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Concierge</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-6">
              Headquarters
            </h4>
            <ul className="space-y-4 text-xs text-[#E8DFD1]/80 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>The Imperial Arcade, Janpath, New Delhi 110001, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>concierge@dazzlingdestinations.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>+91 (0) 11 4890 2200</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-6">
              Private Gazette
            </h4>
            <p className="text-xs text-[#E8DFD1]/70 font-light leading-relaxed mb-4">
              Receive confidential luxury travel dispatches, private estate openings, and seasonal retreat invitations.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-2xl bg-[#2A4A3E]/40 border border-[#D4AF37]/50 text-xs text-[#D4AF37] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed to Gazette!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col gap-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/15 text-xs text-[#FBF9F5] placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-full bg-[#2A4A3E] hover:bg-[#3B6754] text-[#D4AF37] text-xs font-semibold uppercase flex items-center justify-center transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Oversized Large Brand Statement */}
        <div className="py-12 border-b border-white/10 text-center overflow-hidden select-none">
          <span className="font-syne-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight text-white/5 block hover:text-[#D4AF37]/10 transition-colors duration-700">
            Dazzling Destinations
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#E8DFD1]/50 font-light gap-4">
          <p>© {new Date().getFullYear()} Dazzling Destinations Luxury Travel Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
