import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  Sparkles,
  MoveHorizontal,
  ChevronRight,
  Info,
  Columns2,
  SlidersHorizontal,
  CheckCircle2,
  Flame,
  Dumbbell,
  ShieldCheck,
  TrendingUp,
  Maximize2
} from 'lucide-react';
import { transformationGallery } from '../data/portfolioData';

export default function ClientResults() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const [viewMode, setViewMode] = useState('slider'); // 'slider' | 'split'
  const [containerWidth, setContainerWidth] = useState(0);
  const isDragging = useRef(false);
  const containerRef = useRef(null);

  const currentItem = transformationGallery[activeStoryIdx] || transformationGallery[0];

  // Keep inner image width strictly synchronized with outer container to prevent squishing
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => {
      if (el) {
        setContainerWidth(el.clientWidth);
      }
    };

    updateWidth();
    const observer = new ResizeObserver(() => updateWidth());
    observer.observe(el);

    return () => observer.disconnect();
  }, [activeStoryIdx, viewMode]);

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

  const handleStart = (e) => {
    isDragging.current = true;
    if (e.type === 'mousedown') {
      handleMove(e.clientX);
    } else if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  return (
    <section id="results" className="relative py-24 sm:py-28 bg-[#070707] border-b border-white/10 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF6B27]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-[#FF6B27]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B27]/10 border border-[#FF6B27]/30 text-[#FF6B27] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>REAL TRANSFORMATIONS • PROVEN OUTCOMES</span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[0.95] mb-4">
            RESULTS SPEAK FOR THEMSELVES<span className="text-[#FF6B27]">.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A5A5A5] italic leading-relaxed max-w-2xl mx-auto">
            "No gimmicks, no fake promises. Just scientific programming, disciplined nutrition, and relentless consistency."
          </p>

          {/* View Mode Switcher & Helper */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
                  viewMode === 'slider'
                    ? 'bg-[#FF6B27] text-white shadow-[0_0_15px_rgba(255,107,39,0.5)]'
                    : 'text-[#A5A5A5] hover:text-white'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Interactive Slider</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('split')}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
                  viewMode === 'split'
                    ? 'bg-[#FF6B27] text-white shadow-[0_0_15px_rgba(255,107,39,0.5)]'
                    : 'text-[#A5A5A5] hover:text-white'
                }`}
              >
                <Columns2 className="w-3.5 h-3.5" />
                <span>Side-by-Side</span>
              </button>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Genuine Client Results</span>
            </div>
          </div>
        </div>

        {/* Story Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          {transformationGallery.map((item, index) => {
            const isActive = activeStoryIdx === index;
            const IconComponent = index === 0 ? Dumbbell : (index === 1 ? Sparkles : Flame);

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveStoryIdx(index);
                  setSliderPos(50);
                }}
                className={`group flex items-center justify-between sm:justify-start gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-[11px] sm:text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF6B27] to-[#F47B35] text-white border-[#FF6B27] shadow-[0_0_25px_rgba(255,107,39,0.4)] scale-[1.02] sm:scale-105'
                    : 'bg-[#0E0E0E] text-[#A5A5A5] hover:text-white hover:bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-2">
                  <IconComponent className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#FF6B27]'}`} />
                  <span className="text-left">{item.title}</span>
                </div>
                <span className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full shrink-0 ${isActive ? 'bg-black/30 text-white' : 'bg-white/10 text-neutral-400'}`}>
                  {item.duration}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Comparison Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-[#0E0E0E] rounded-3xl border border-white/15 p-5 sm:p-8 lg:p-10 shadow-2xl relative">
          
          {/* Subtle Top corner label */}
          <div className="absolute top-4 left-6 hidden sm:flex items-center gap-2 text-[10px] font-mono text-neutral-500 tracking-widest uppercase">
            <span>[CASE STUDY #{String(activeStoryIdx + 1).padStart(2, '0')}]</span>
            <span>&bull;</span>
            <span className="text-emerald-400 font-bold">VERIFIED REAL CLIENT</span>
          </div>

          {/* LEFT: Transformation Visual (Slider OR Side-by-Side) */}
          <div className="lg:col-span-7 mt-4 sm:mt-0">
            {viewMode === 'slider' ? (
              /* INTERACTIVE SLIDER VIEW */
              <div
                ref={containerRef}
                className="relative w-full aspect-[4/5] sm:aspect-[4/5] max-h-[580px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#050505]"
                onMouseDown={handleStart}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                onMouseMove={handleMouseMove}
                onTouchStart={handleStart}
                onTouchEnd={handleEnd}
                onTouchMove={handleTouchMove}
              >
                {/* "AFTER" Image (Full background layer) */}
                <img
                  src={currentItem.afterImg}
                  alt={`${currentItem.title} - After`}
                  className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none filter brightness-100"
                />

                {/* Top-Right After Badge */}
                <div className="absolute top-3 right-3 z-20 bg-black/85 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                  <span>AFTER<span className="hidden sm:inline"> • GOAL ACHIEVED</span></span>
                </div>

                {/* "BEFORE" Image (Clipped overlay with exact container width) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none transition-none z-10"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={currentItem.beforeImg}
                    alt={`${currentItem.title} - Before`}
                    className="absolute inset-0 max-w-none h-full object-cover object-top filter brightness-95"
                    style={{
                      width: containerWidth > 0 ? `${containerWidth}px` : '100%',
                    }}
                  />

                  {/* Top-Left Before Badge */}
                  <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/30 text-white text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF6B27]" />
                    <span>BEFORE<span className="hidden sm:inline"> • DAY 1</span></span>
                  </div>
                </div>

                {/* Slider Handle Divider Line */}
                <div
                  className="absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-[#FF6B27] to-transparent pointer-events-none z-30"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#FF6B27] text-white flex items-center justify-center shadow-[0_0_25px_rgba(255,107,39,0.9)] border-2 border-white cursor-ew-resize">
                    <MoveHorizontal className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Bottom Instruction Prompt */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-20 bg-black/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 text-[11px] font-mono text-neutral-300 tracking-wider uppercase shadow flex items-center gap-2">
                  <MoveHorizontal className="w-3.5 h-3.5 text-[#FF6B27] animate-pulse" />
                  <span>DRAG SLIDER TO REVEAL TRANSFORMATION</span>
                </div>
              </div>
            ) : (
              /* SIDE-BY-SIDE SPLIT VIEW */
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
                {/* BEFORE CARD */}
                <div className="relative aspect-[4/5] sm:aspect-[4/5] rounded-2xl overflow-hidden border border-white/20 bg-black/60 shadow-lg group">
                  <img
                    src={currentItem.beforeImg}
                    alt={`${currentItem.title} - Before`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 text-white text-[11px] font-mono font-bold uppercase tracking-wider">
                    BEFORE • DAY 1
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">Baseline Starting Point</span>
                    <span className="text-xs font-bold text-white">Initial Physical State</span>
                  </div>
                </div>

                {/* AFTER CARD */}
                <div className="relative aspect-[4/5] sm:aspect-[4/5] rounded-2xl overflow-hidden border border-[#FF6B27]/40 bg-black/60 shadow-[0_0_25px_rgba(255,107,39,0.2)] group">
                  <img
                    src={currentItem.afterImg}
                    alt={`${currentItem.title} - After`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 right-3 bg-emerald-500/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider shadow">
                    AFTER • RESULT
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF6B27] block font-bold">Goal Achieved</span>
                    <span className="text-xs font-bold text-emerald-400">{currentItem.metrics.split('•')[0]}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Detailed Transformation Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B27]/15 border border-[#FF6B27]/30 text-[#FF6B27] text-xs font-mono font-bold tracking-wider uppercase">
                {activeStoryIdx === 0 ? (
                  <Dumbbell className="w-3 h-3" />
                ) : activeStoryIdx === 1 ? (
                  <Sparkles className="w-3 h-3" />
                ) : (
                  <Flame className="w-3 h-3" />
                )}
                <span>{currentItem.category}</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-400">
                {currentItem.badge}
              </span>
            </div>

            <h3 className="font-bebas text-3xl sm:text-4xl text-white uppercase tracking-wide mb-2 leading-tight">
              {currentItem.title}
            </h3>

            {/* Duration & Key Metrics */}
            <div className="grid grid-cols-2 gap-3 my-4">
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#A5A5A5] block">
                  Timeframe
                </span>
                <span className="text-xl font-bebas text-[#FF6B27] tracking-wider block mt-0.5">
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

            {/* Highlights Chips */}
            {currentItem.highlights && (
              <div className="flex flex-wrap gap-2 mb-4">
                {currentItem.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-neutral-300 font-mono"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#FF6B27]" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>
            )}

            {/* Narrative */}
            <p className="text-sm text-[#A5A5A5] leading-relaxed mb-5 font-normal">
              {currentItem.description}
            </p>

            {/* Testimonial Quote */}
            <div className="p-4 rounded-xl bg-black/60 border-l-2 border-[#FF6B27] mb-6">
              <p className="text-xs sm:text-sm text-neutral-200 italic mb-2 leading-relaxed">
                "{currentItem.quote}"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#FF6B27] uppercase">
                  &mdash; {currentItem.clientName}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Verified Trainee
                </span>
              </div>
            </div>

            {/* Action */}
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-[#FF6B27] to-[#F47B35] hover:from-[#F47B35] hover:to-[#FF6B27] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(255,107,39,0.35)] hover:shadow-[0_0_30px_rgba(255,107,39,0.6)] active:scale-[0.98]"
            >
              <span>Book Your Transformation Consultation</span>
              <ChevronRight className="w-4 h-4" />
            </a>

          </div>

        </div>

        {/* Both Transformations At-A-Glance Gallery Cards */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-bebas text-2xl sm:text-3xl text-white uppercase tracking-wide">
                ALL FEATURED CLIENT CASE STUDIES
              </h3>
              <p className="text-xs text-[#A5A5A5]">
                Click any case study to load in the interactive slider above
              </p>
            </div>
            <span className="text-xs font-mono text-[#FF6B27]">
              {transformationGallery.length} Verified Stories
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformationGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  setActiveStoryIdx(idx);
                  setSliderPos(50);
                  const el = document.getElementById('results');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`p-5 rounded-2xl bg-[#0E0E0E] border transition-all duration-300 cursor-pointer group hover:border-[#FF6B27]/50 ${
                  activeStoryIdx === idx
                    ? 'border-[#FF6B27] shadow-[0_0_20px_rgba(255,107,39,0.2)] bg-white/[0.03]'
                    : 'border-white/10 hover:bg-white/[0.02]'
                }`}
              >
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {/* Before thumbnail */}
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black/40 border border-white/10">
                    <img
                      src={item.beforeImg}
                      alt={`${item.title} Before`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 rounded text-[9px] font-mono font-bold text-white uppercase">
                      Before
                    </div>
                  </div>

                  {/* After thumbnail */}
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black/40 border border-[#FF6B27]/30">
                    <img
                      src={item.afterImg}
                      alt={`${item.title} After`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-emerald-500 px-2 py-0.5 rounded text-[9px] font-mono font-bold text-white uppercase">
                      After
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-[#FF6B27] font-bold uppercase">
                    {item.duration} &bull; {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Verified
                  </span>
                </div>

                <h4 className="font-bebas text-xl text-white uppercase tracking-wide group-hover:text-[#FF6B27] transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-[#A5A5A5] mt-1 line-clamp-2">
                  {item.metrics}
                </p>

                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span>{item.clientName}</span>
                  <span className="text-[#FF6B27] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Compare &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Genuine Client Trust Guarantee */}
        <div className="mt-12 p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <p className="text-xs font-mono text-[#A5A5A5]">
            <strong className="text-white">100% Authentic Client Results:</strong> Photographs showcase genuine Kolkata clients personally coached and transformed by Suman Deb.
          </p>
        </div>

      </div>
    </section>
  );
}
