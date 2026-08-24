import React, { useState, useEffect } from 'react';
import { X, Compass, Calendar, Users, CheckCircle2, Sparkles, Send, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { destinations } from '../data/destinations';

export default function TourModal({ isOpen, onClose, selectedTour }) {
  const [formData, setFormData] = useState({
    destination: selectedTour?.name || selectedTour?.title || 'Kerala',
    guests: '2 Guests',
    date: '2026-10-15',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedTour) {
      setFormData((prev) => ({
        ...prev,
        destination: selectedTour.name || selectedTour.title || prev.destination,
      }));
    }
  }, [selectedTour]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: 'power2.out' }}
          className="relative w-full max-w-2xl bg-[#121619] text-[#FBF9F5] rounded-3xl border border-white/15 shadow-2xl overflow-hidden p-6 md:p-10 my-8"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#2A4A3E]/30 blur-[100px] pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={resetForm}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Modal Header */}
              <div className="flex items-center gap-2 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Concierge Reservation</span>
              </div>

              <h3 className="font-serif-luxury text-3xl md:text-4xl font-bold text-[#FBF9F5]">
                Plan Your Private Journey
              </h3>
              <p className="text-xs text-[#E8DFD1]/80 mt-1 font-light">
                Fill in your details below and our personal travel concierge will customize your itinerary within 2 hours.
              </p>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Select Destination */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#E8DFD1]/70 font-semibold block mb-1.5">
                      Destination / Tour
                    </label>
                    <div className="relative">
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-xs text-[#FBF9F5] focus:border-[#D4AF37] focus:outline-none appearance-none"
                      >
                        {destinations.map((d) => (
                          <option key={d.id} value={d.name} className="bg-[#121619] text-white">
                            {d.name} — {d.tagline}
                          </option>
                        ))}
                        <option value="Kerala Escape" className="bg-[#121619] text-white">
                          Kerala Escape (7 Days)
                        </option>
                        <option value="Custom Multi-Region Expedition" className="bg-[#121619] text-white">
                          Custom Multi-Region Expedition
                        </option>
                      </select>
                      <MapPin className="w-4 h-4 text-[#D4AF37] absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Travel Dates */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#E8DFD1]/70 font-semibold block mb-1.5">
                      Target Travel Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-xs text-[#FBF9F5] focus:border-[#D4AF37] focus:outline-none"
                      />
                      <Calendar className="w-4 h-4 text-[#D4AF37] absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Guest Count */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#E8DFD1]/70 font-semibold block mb-1.5">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-xs text-[#FBF9F5] focus:border-[#D4AF37] focus:outline-none appearance-none"
                      >
                        <option value="1 Guest" className="bg-[#121619] text-white">1 Solo Explorer</option>
                        <option value="2 Guests" className="bg-[#121619] text-white">2 Guests (Couple / Pair)</option>
                        <option value="3-5 Guests" className="bg-[#121619] text-white">3 - 5 Guests (Small Family)</option>
                        <option value="6+ Guests" className="bg-[#121619] text-white">6+ Private Group Charter</option>
                      </select>
                      <Users className="w-4 h-4 text-[#D4AF37] absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#E8DFD1]/70 font-semibold block mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alexandra Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-xs text-[#FBF9F5] placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#E8DFD1]/70 font-semibold block mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="alexandra@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-xs text-[#FBF9F5] placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#E8DFD1]/70 font-semibold block mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-1234"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-xs text-[#FBF9F5] placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#E8DFD1]/70 font-semibold block mb-1.5">
                    Special Preferences or Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about dietary needs, anniversary celebrations, preferred pace, or room preferences..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-xs text-[#FBF9F5] placeholder-white/30 focus:border-[#D4AF37] focus:outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-[#2A4A3E] hover:bg-[#3B6754] text-[#FBF9F5] text-xs font-semibold uppercase tracking-widest transition-all duration-300 border border-[#D4AF37]/50 shadow-xl flex items-center justify-center gap-2 mt-4"
                >
                  {loading ? (
                    <span>Processing Concierge Request...</span>
                  ) : (
                    <>
                      <span>Submit Tour Inquiry</span>
                      <Send className="w-4 h-4 text-[#D4AF37]" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* Confirmation Success Card */
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#2A4A3E] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                Reservation Confirmed
              </span>

              <h3 className="font-serif-luxury text-4xl font-bold text-[#FBF9F5] mt-2">
                Thank You, {formData.name || 'Valued Guest'}!
              </h3>

              <p className="text-sm text-[#E8DFD1]/80 mt-3 max-w-md font-light leading-relaxed">
                Your luxury trip request for <span className="font-bold text-[#D4AF37]">{formData.destination}</span> has been received. Our senior travel advisor will review your preferences and email a private draft itinerary to <span className="text-white font-medium">{formData.email}</span>.
              </p>

              <button
                onClick={resetForm}
                className="mt-8 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FBF9F5] text-xs font-semibold uppercase tracking-widest border border-white/20"
              >
                Back To Exploration
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
