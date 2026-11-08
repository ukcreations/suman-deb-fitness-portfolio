import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, X, Camera, Dumbbell, ShieldCheck, ZoomIn } from 'lucide-react';
import { sumanPhotoGallery } from '../data/portfolioData';

export default function TrainerGallery() {
  const scrollContainerRef = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, []);

  const scroll = (direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = direction === 'left' ? -320 : 320;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(checkScrollability, 350);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedPhoto) return;
      if (e.key === 'Escape') setSelectedPhoto(null);
      if (e.key === 'ArrowRight') {
        const currIdx = sumanPhotoGallery.findIndex((p) => p.id === selectedPhoto.id);
        if (currIdx < sumanPhotoGallery.length - 1) {
          setSelectedPhoto(sumanPhotoGallery[currIdx + 1]);
        }
      }
      if (e.key === 'ArrowLeft') {
        const currIdx = sumanPhotoGallery.findIndex((p) => p.id === selectedPhoto.id);
        if (currIdx > 0) {
          setSelectedPhoto(sumanPhotoGallery[currIdx - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  return (
    <section className="relative py-16 sm:py-20 bg-[#070707] border-b border-white/10 overflow-hidden">
      {/* Dark Ambient Underglows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#FF6B27]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[300px] bg-[#FF6B27]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B27]/10 border border-[#FF6B27]/30 text-[#FF6B27] text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>COACH IN ACTION • GALLERY ARCHIVE</span>
            </div>
            
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[0.95]">
              TRAINER ON THE GYM FLOOR<span className="text-[#FF6B27]">.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A5A5A5] mt-2 max-w-xl">
              Authentic snapshots of Suman Deb training, coaching, and living the fitness discipline.
            </p>
          </div>

          {/* Left & Right Navigation Buttons (Desktop view) */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? 'bg-black/70 border-white/20 text-white hover:bg-[#FF6B27] hover:border-[#FF6B27] hover:shadow-[0_0_15px_rgba(255,107,39,0.5)] active:scale-95'
                  : 'bg-white/5 border-white/5 text-neutral-600 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? 'bg-black/70 border-white/20 text-white hover:bg-[#FF6B27] hover:border-[#FF6B27] hover:shadow-[0_0_15px_rgba(255,107,39,0.5)] active:scale-95'
                  : 'bg-white/5 border-white/5 text-neutral-600 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slanted Parallelogram Banner Carousel */}
        <div className="relative group/carousel">
          
          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            className="flex items-start gap-4 sm:gap-6 overflow-x-auto scrollbar-none py-6 px-4 -mx-4 sm:mx-0 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {sumanPhotoGallery.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="shrink-0 snap-start flex flex-col items-center cursor-pointer group w-[200px] sm:w-[225px] md:w-[245px]"
              >
                {/* Slanted Card Frame (Matching the sample skew) */}
                <div className="relative w-full h-[290px] sm:h-[330px] md:h-[350px] rounded-2xl overflow-hidden border-2 border-white/20 group-hover:border-[#FF6B27] shadow-[0_15px_35px_rgba(0,0,0,0.7)] group-hover:shadow-[0_0_30px_rgba(255,107,39,0.5)] transition-all duration-500 transform -skew-x-12 group-hover:-translate-y-2 group-hover:scale-[1.02] bg-[#0A0A0A]">
                  
                  {/* Counter-skewed inner wrapper to keep the photo upright and distortion-free */}
                  <div className="w-full h-full transform skew-x-12 scale-[1.28] relative overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-95 group-hover:brightness-105 transition-all duration-700"
                    />

                    {/* Subtle aesthetic gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    {/* Zoom Icon indicator on hover */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <ZoomIn className="w-4 h-4 text-[#FF6B27]" />
                    </div>
                  </div>

                </div>

                {/* Highly Visible, Crystal-Clear Captions Correctly Offset to Match Slanted Card Bottom Center */}
                <div className="mt-4 text-center px-1 w-full -translate-x-7 sm:-translate-x-8 md:-translate-x-8 transition-transform duration-300">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase text-[#FF6B27] bg-[#FF6B27]/10 border border-[#FF6B27]/30 mb-1.5 transition-all duration-300 group-hover:bg-[#FF6B27] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,107,39,0.4)]">
                    {photo.badge}
                  </span>
                  
                  <h4 className="font-bebas text-lg sm:text-xl text-white uppercase tracking-wide group-hover:text-[#FF6B27] transition-colors leading-tight line-clamp-1">
                    {photo.title}
                  </h4>
                  
                  <p className="text-xs text-[#A5A5A5] line-clamp-1 mt-0.5 font-normal">
                    {photo.caption}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Floating Left & Right Click Arrows for direct in-strip control (Matching sample overlay) */}
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous photos"
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-2xl transition-all duration-300 ${
              canScrollLeft ? 'opacity-90 hover:opacity-100 hover:bg-[#FF6B27] hover:border-[#FF6B27]' : 'opacity-0 pointer-events-none'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Next photos"
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-2xl transition-all duration-300 ${
              canScrollRight ? 'opacity-90 hover:opacity-100 hover:bg-[#FF6B27] hover:border-[#FF6B27]' : 'opacity-0 pointer-events-none'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Micro-telemetry prompt */}
        <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B27] animate-pulse" />
            <span>SWIPE OR USE ARROWS &bull; CLICK ANY PHOTO TO EXPAND</span>
          </div>
          <span className="hidden sm:inline text-neutral-400">
            {sumanPhotoGallery.length} PHOTOS ARCHIVED
          </span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0E0E0E] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-[#FF6B27] hover:border-[#FF6B27] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo View */}
            <div className="md:w-3/5 bg-black flex items-center justify-center max-h-[70vh] md:max-h-[80vh] overflow-hidden">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Metadata / Details */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B27]/15 border border-[#FF6B27]/30 text-[#FF6B27] text-xs font-mono font-bold tracking-wider uppercase mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{selectedPhoto.badge}</span>
                </span>

                <h3 className="font-bebas text-3xl sm:text-4xl text-white uppercase tracking-wide leading-tight mb-2">
                  {selectedPhoto.title}
                </h3>

                <p className="text-sm text-[#A5A5A5] leading-relaxed mb-6 font-normal">
                  {selectedPhoto.caption}
                </p>

                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 mb-6">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#A5A5A5] block">
                    Coach Credentials
                  </span>
                  <span className="text-sm font-bold text-white block mt-0.5">
                    Suman Deb &bull; Certified Fitness Trainer Kolkata
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">
                  Use &larr; &rarr; to navigate
                </span>
                <a
                  href="#booking"
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-2 rounded-full bg-[#FF6B27] hover:bg-[#F47B35] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all"
                >
                  Train with Suman
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
