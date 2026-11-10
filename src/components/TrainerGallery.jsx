import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, X, Camera, Dumbbell, ShieldCheck, ZoomIn, Play, Pause, RotateCcw, Maximize2, Minimize2, VolumeX, Film, Image as ImageIcon } from 'lucide-react';
import { sumanPhotoGallery } from '../data/portfolioData';

// Custom Dedicated Muted Video Player for Lightbox Modal
// Physically locked to zero audio with no volume or unmute controls whatsoever
function MutedVideoPlayer({ src, poster, title }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const hideControlsTimer = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.defaultMuted = true;
      v.volume = 0;
      v.currentTime = 0;
      setCurrentTime(0);
      v.play().catch(() => {});
    }
  }, [src]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (v) {
      setCurrentTime(v.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.defaultMuted = true;
      v.volume = 0;
      setDuration(v.duration || 0);
    }
  };

  const handleSeek = (e) => {
    const v = videoRef.current;
    if (!v) return;
    const seekTime = parseFloat(e.target.value);
    v.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleRestart = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    setCurrentTime(0);
    v.play().catch(() => {});
    setIsPlaying(true);
  };

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const formatTime = (secs) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[320px] max-h-[70vh] md:max-h-[80vh] flex items-center justify-center bg-black overflow-hidden group/player select-none"
      onMouseMove={() => {
        setShowControls(true);
        if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
        hideControlsTimer.current = setTimeout(() => {
          if (isPlaying) setShowControls(false);
        }, 2800);
      }}
      onMouseLeave={() => {
        if (isPlaying) setShowControls(false);
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        defaultMuted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onVolumeChange={(e) => {
          e.currentTarget.muted = true;
          e.currentTarget.volume = 0;
        }}
        onClick={togglePlay}
        className="w-full h-full max-h-[70vh] md:max-h-[80vh] object-contain cursor-pointer"
      />

      {/* Center Play Overlay when Paused */}
      {!isPlaying && (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/45 backdrop-blur-[2px] transition-all cursor-pointer z-10"
          aria-label="Resume video"
        >
          <div className="w-16 h-16 rounded-full bg-[#FF6B27] text-white flex items-center justify-center shadow-[0_0_35px_rgba(255,107,39,0.7)] transform hover:scale-110 active:scale-95 transition-transform">
            <Play className="w-7 h-7 fill-white translate-x-0.5" />
          </div>
        </button>
      )}

      {/* Top Telemetry Badge: Clearly identifies soundless feed */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-2 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold tracking-wider uppercase shadow-lg">
          <VolumeX className="w-3.5 h-3.5 text-emerald-400" />
          <span>MUTED ONLY &bull; ZERO AUDIO</span>
        </span>
      </div>

      {/* Sleek Custom Control Bar (Zero unmute button / Zero volume controls) */}
      <div
        className={`absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/85 to-transparent transition-opacity duration-300 z-20 ${
          showControls || !isPlaying ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Progress Slider */}
        <div className="relative mb-2 flex items-center">
          <input
            type="range"
            min="0"
            max={duration || 100}
            step="0.05"
            value={currentTime}
            onChange={handleSeek}
            aria-label="Seek video progress"
            className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FF6B27] focus:outline-none"
            style={{
              background: `linear-gradient(to right, #FF6B27 ${progressPercent}%, rgba(255, 255, 255, 0.2) ${progressPercent}%)`
            }}
          />
        </div>

        {/* Action Controls Row */}
        <div className="flex items-center justify-between gap-3 text-white">
          <div className="flex items-center gap-2">
            {/* Play/Pause */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF6B27] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white translate-x-0.5" />}
            </button>

            {/* Restart */}
            <button
              type="button"
              onClick={handleRestart}
              aria-label="Restart video"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            {/* Time Indicator */}
            <span className="text-xs font-mono text-neutral-300 ml-1">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Status Telemetry Pill */}
            <div
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-[10px] font-mono select-none"
              title="All training videos run in permanent soundless mode"
            >
              <VolumeX className="w-3 h-3 text-[#FF6B27]" />
              <span>SOUNDLESS FEED</span>
            </div>

            {/* Fullscreen Button */}
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label="Toggle fullscreen"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TrainerGallery() {
  const scrollContainerRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'video' | 'image'

  // Extract photos and videos
  const photos = sumanPhotoGallery.filter((item) => item.type === 'image');
  const videos = sumanPhotoGallery.filter((item) => item.type === 'video');

  // Build gallery items: When 'all', strictly alternate 1 Photo, 1 Video, 1 Photo, 1 Video...
  const filteredGallery = (() => {
    if (activeFilter === 'video') return videos;
    if (activeFilter === 'image') return photos;

    // Alternating sequence: 1 photo, 1 video continuously
    const alternating = [];
    for (let i = 0; i < photos.length; i++) {
      alternating.push(photos[i]);
      if (videos.length > 0) {
        alternating.push({
          ...videos[i % videos.length],
          id: `${videos[i % videos.length].id}-alt-${i}`
        });
      }
    }
    return alternating;
  })();

  const selectedPhoto = selectedIndex !== null ? filteredGallery[selectedIndex] : null;

  const videoCount = videos.length;
  const photoCount = photos.length;

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
  }, [filteredGallery]);

  // Ensure all preview videos are muted and playing continuously
  useEffect(() => {
    if (scrollContainerRef.current) {
      const vids = scrollContainerRef.current.querySelectorAll('video');
      vids.forEach((v) => {
        v.muted = true;
        v.defaultMuted = true;
        v.volume = 0;
        v.playsInline = true;
        v.play().catch(() => {});
      });
    }
  }, [filteredGallery]);

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
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev !== null && prev < filteredGallery.length - 1 ? prev + 1 : prev));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredGallery]);

  return (
    <section id="trainer-gallery" className="relative py-16 sm:py-24 bg-[#070707] border-b border-white/10 overflow-hidden scroll-mt-20">
      {/* Dark Ambient Underglows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#FF6B27]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[300px] bg-[#FF6B27]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B27]/10 border border-[#FF6B27]/30 text-[#FF6B27] text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>COACH IN ACTION • LIVE ARCHIVE</span>
            </div>
            
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[0.95]">
              TRAINER ON THE GYM FLOOR<span className="text-[#FF6B27]">.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A5A5A5] mt-2 max-w-xl">
              Authentic workout videos and snapshots of Suman Deb coaching, lifting, and living the fitness discipline.
            </p>
          </div>

          {/* Filter Pills + Left & Right Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter Buttons */}
            <div className="inline-flex items-center p-1 rounded-full bg-white/[0.04] border border-white/10">
              <button
                type="button"
                onClick={() => {
                  setActiveFilter('all');
                  if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0;
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 ${
                  activeFilter === 'all'
                    ? 'bg-[#FF6B27] text-white shadow-[0_0_15px_rgba(255,107,39,0.4)]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                All ({sumanPhotoGallery.length})
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter('video');
                  if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0;
                }}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 ${
                  activeFilter === 'video'
                    ? 'bg-[#FF6B27] text-white shadow-[0_0_15px_rgba(255,107,39,0.4)]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Film className="w-3 h-3" />
                <span>Videos ({videoCount})</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter('image');
                  if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0;
                }}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 ${
                  activeFilter === 'image'
                    ? 'bg-[#FF6B27] text-white shadow-[0_0_15px_rgba(255,107,39,0.4)]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <ImageIcon className="w-3 h-3" />
                <span>Photos ({photoCount})</span>
              </button>
            </div>

            {/* Scroll Navigation */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  canScrollLeft
                    ? 'bg-black/70 border-white/20 text-white hover:bg-[#FF6B27] hover:border-[#FF6B27] hover:shadow-[0_0_15px_rgba(255,107,39,0.5)] active:scale-95'
                    : 'bg-white/5 border-white/5 text-neutral-600 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  canScrollRight
                    ? 'bg-black/70 border-white/20 text-white hover:bg-[#FF6B27] hover:border-[#FF6B27] hover:shadow-[0_0_15px_rgba(255,107,39,0.5)] active:scale-95'
                    : 'bg-white/5 border-white/5 text-neutral-600 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
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
            {filteredGallery.map((photo, idx) => (
              <div
                key={`${photo.id}-${idx}`}
                onClick={() => setSelectedIndex(idx)}
                className="shrink-0 snap-start flex flex-col items-center cursor-pointer group w-[205px] sm:w-[230px] md:w-[250px]"
              >
                {/* Slanted Card Frame (Matching the sample skew) */}
                <div className="relative w-full h-[290px] sm:h-[330px] md:h-[350px] rounded-2xl overflow-hidden border-2 border-white/20 group-hover:border-[#FF6B27] shadow-[0_15px_35px_rgba(0,0,0,0.7)] group-hover:shadow-[0_0_30px_rgba(255,107,39,0.5)] transition-all duration-500 transform -skew-x-12 group-hover:-translate-y-2 group-hover:scale-[1.02] bg-[#0A0A0A]">
                  
                  {/* Counter-skewed inner wrapper to keep media upright and distortion-free */}
                  <div className="w-full h-full transform skew-x-12 scale-[1.28] relative overflow-hidden pointer-events-none">
                    {photo.type === 'video' ? (
                      <video
                        src={photo.videoSrc}
                        poster={photo.src}
                        autoPlay
                        loop
                        muted
                        defaultMuted
                        playsInline
                        preload="metadata"
                        onVolumeChange={(e) => {
                          e.currentTarget.muted = true;
                          e.currentTarget.volume = 0;
                        }}
                        className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-95 group-hover:brightness-105 transition-all duration-700 pointer-events-none"
                      />
                    ) : (
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-95 group-hover:brightness-105 transition-all duration-700 pointer-events-none"
                        loading="lazy"
                      />
                    )}

                    {/* Subtle aesthetic gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    {/* Video Badge on Top-Left */}
                    {photo.type === 'video' ? (
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-[#FF6B27]/50 flex items-center gap-1.5 text-white shadow-lg">
                        <Play className="w-3 h-3 text-[#FF6B27] fill-[#FF6B27]" />
                        <span className="text-[9px] font-mono font-bold tracking-widest text-[#FF6B27]">VIDEO</span>
                      </div>
                    ) : null}

                    {/* Zoom / Play Icon indicator on hover */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      {photo.type === 'video' ? (
                        <Play className="w-4 h-4 text-[#FF6B27] fill-[#FF6B27]" />
                      ) : (
                        <ZoomIn className="w-4 h-4 text-[#FF6B27]" />
                      )}
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
            aria-label="Previous media"
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
            aria-label="Next media"
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
            <span>SWIPE OR USE ARROWS &bull; CLICK ANY CARD TO PLAY / EXPAND</span>
          </div>
          <span className="hidden sm:inline text-neutral-400">
            {activeFilter === 'all'
              ? '1 PHOTO & 1 VIDEO ALTERNATING &bull; 24 MEDIA ARCHIVED'
              : `${filteredGallery.length} ${activeFilter === 'video' ? 'VIDEOS' : 'PHOTOS'} IN ARCHIVE`}
          </span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0E0E0E] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-[#FF6B27] hover:border-[#FF6B27] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media View (Video or Image) */}
            <div className="md:w-3/5 bg-black flex items-center justify-center max-h-[70vh] md:max-h-[80vh] overflow-hidden relative">
              {selectedPhoto.type === 'video' ? (
                <MutedVideoPlayer
                  src={selectedPhoto.videoSrc}
                  poster={selectedPhoto.src}
                  title={selectedPhoto.title}
                />
              ) : (
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* Metadata / Details */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B27]/15 border border-[#FF6B27]/30 text-[#FF6B27] text-xs font-mono font-bold tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{selectedPhoto.badge}</span>
                  </span>

                  {selectedPhoto.type === 'video' && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-mono uppercase tracking-wider">
                      <Film className="w-3 h-3 text-[#FF6B27]" />
                      <span>HD Video</span>
                    </span>
                  )}
                </div>

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
                  onClick={() => setSelectedIndex(null)}
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
