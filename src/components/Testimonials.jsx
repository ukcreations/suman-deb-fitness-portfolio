import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquareQuote } from 'lucide-react';
import { clientReviews } from '../data/portfolioData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? clientReviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === clientReviews.length - 1 ? 0 : prev + 1));
  };

  const current = clientReviews[currentIndex];

  return (
    <section className="relative py-28 bg-[#070707] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#FF6B27]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B27]/10 border border-[#FF6B27]/30 text-[#FF6B27] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>COMMUNITY FEEDBACK</span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[0.95] mb-4">
            WHAT MY CLIENTS SAY<span className="text-[#FF6B27]">.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A5A5A5] leading-relaxed">
            Real experiences from personal training clients and fitness floor members across Kolkata.
          </p>
        </div>

        {/* Testimonial Card Display */}
        <div className="relative rounded-3xl bg-[#0D0D0D] border border-white/15 p-8 sm:p-12 md:p-14 shadow-2xl overflow-hidden">
          
          <Quote className="absolute top-6 right-8 w-24 h-24 text-white/5 pointer-events-none" />

          {/* Stars */}
          <div className="flex items-center gap-1.5 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-[#FF6B27] text-[#FF6B27] drop-shadow-[0_0_8px_rgba(255,107,39,0.6)]"
              />
            ))}
          </div>

          {/* Main Quote */}
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-light text-white leading-relaxed mb-8">
            "{current.quote}"
          </blockquote>

          {/* Sub Highlight */}
          {current.subQuote && (
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#FF6B27]/15 border border-[#FF6B27]/30 text-xs font-mono text-[#FF6B27] font-semibold mb-8">
              &bull; {current.subQuote}
            </div>
          )}

          {/* Client Author Info & Navigation Controls */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h4 className="font-oswald text-xl font-bold uppercase text-white tracking-wide">
                {current.name}
              </h4>
              <p className="text-xs text-[#A5A5A5] mt-0.5">
                {current.role} &bull; <span className="text-[#FF6B27]">{current.gymLocation}</span>
              </p>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#FF6B27] hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 text-neutral-300 active:scale-95"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1.5 px-3 font-mono text-xs text-[#A5A5A5]">
                <span className="text-white font-bold">{currentIndex + 1}</span>
                <span>/</span>
                <span>{clientReviews.length}</span>
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#FF6B27] hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 text-neutral-300 active:scale-95"
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
