import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, ChevronRight, Info } from 'lucide-react';
import { transformationGallery } from '../data/portfolioData';

export default function ClientResults() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const isDragging = useRef(false);
  const containerRef = useRef(null);

  const currentItem = transformationGallery[activeStoryIdx];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percent = (x / rect.width) * 100;
    if (percent < 5) percent = 5;
    if (percent > 95) percent = 95;
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleStart = () => {
    isDragging.current = true;
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  return (
    <section id="results" className="relative py-28 bg-[#070707] border-b border-white/10 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF6B27]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B27]/10 border border-[#FF6B27]/30 text-[#FF6B27] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>REAL TRANSFORMATIONS</span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[0.95] mb-4">
            RESULTS SPEAK FOR THEMSELVES<span className="text-[#FF6B27]">.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A5A5A5] italic leading-relaxed">
            "Every fitness journey is different. Every achievement begins with consistency."
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#A5A5A5]">
            <Info className="w-3.5 h-3.5 text-[#FF6B27]" />
            <span>Interactive comparison slider &bull; Drag slider handle left or right</span>
          </div>
        </div>

        {/* Story Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {transformationGallery.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveStoryIdx(index);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 ${
                activeStoryIdx === index
                  ? 'bg-[#FF6B27] text-white shadow-[0_0_20px_rgba(255,107,39,0.5)] scale-105'
                  : 'bg-white/5 text-[#A5A5A5] hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Main Interactive Comparison Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#0E0E0E] rounded-3xl border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl">
          
          {/* LEFT: The Interactive Drag Slider */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-white/15 shadow-inner"
              onMouseDown={handleStart}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onMouseMove={handleMouseMove}
              onTouchStart={handleStart}
              onTouchEnd={handleEnd}
              onTouchMove={handleTouchMove}
            >
              {/* "AFTER" Image (Full background) */}
              <img
                src={currentItem.afterImg}
                alt={`${currentItem.title} - After`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-100"
              />
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#FF6B27]/40 text-[#FF6B27] text-xs font-mono font-bold uppercase tracking-wider shadow">
                AFTER &bull; GOAL ACHIEVED
              </div>

              {/* "BEFORE" Image (Clipped with width matching sliderPos) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none transition-none"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={currentItem.beforeImg}
                  alt={`${currentItem.title} - Before`}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-95"
                  style={{
                    width: containerRef.current ? containerRef.current.clientWidth : '100%',
                    maxWidth: 'none'
                  }}
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider shadow">
                  BEFORE &bull; DAY 1
                </div>
              </div>

              {/* Slider Handle Divider Line */}
              <div
                className="absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-[#FF6B27] to-transparent pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#FF6B27] text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,107,39,0.8)] border-2 border-white">
                  <MoveHorizontal className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Bottom helper prompt */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-[11px] font-mono text-neutral-300">
                DRAG HANDLE TO COMPARE
              </div>
            </div>
          </div>

          {/* RIGHT: Detailed Transformation Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B27]/10 text-[#FF6B27] text-xs font-mono font-bold tracking-wider uppercase mb-3 w-fit">
              <span>{currentItem.category}</span>
            </div>

            <h3 className="font-bebas text-3xl sm:text-4xl text-white uppercase tracking-wide mb-2">
              {currentItem.title}
            </h3>

            {/* Duration & Key Metrics */}
            <div className="grid grid-cols-2 gap-3 my-4">
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#A5A5A5] block">
                  Timeframe
                </span>
                <span className="text-lg font-bebas text-[#FF6B27] tracking-wider">
                  {currentItem.duration}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#A5A5A5] block">
                  Outcome Metrics
                </span>
                <span className="text-sm font-bold text-white leading-tight block mt-0.5">
                  {currentItem.metrics}
                </span>
              </div>
            </div>

            {/* Narrative */}
            <p className="text-sm text-[#A5A5A5] leading-relaxed mb-6 font-normal">
              {currentItem.description}
            </p>

            {/* Testimonial Quote */}
            <div className="p-4 rounded-xl bg-black/50 border-l-2 border-[#FF6B27] mb-6">
              <p className="text-xs sm:text-sm text-neutral-200 italic mb-2">
                "{currentItem.quote}"
              </p>
              <span className="text-xs font-mono font-bold text-[#FF6B27] uppercase">
                &mdash; {currentItem.clientName}
              </span>
            </div>

            {/* Action */}
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#FF6B27] hover:bg-[#F47B35] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(255,107,39,0.3)]"
            >
              <span>Start Your Transformation</span>
              <ChevronRight className="w-4 h-4" />
            </a>

          </div>

        </div>

        {/* Note on genuine client data placeholder */}
        <p className="text-center text-[11px] font-mono text-[#777777] mt-8">
          Note: Photographs and client names serve as placeholders representing Suman Deb's real verified client case-studies. Actual client photos can be replaced directly.
        </p>

      </div>
    </section>
  );
}
