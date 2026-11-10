import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Award } from 'lucide-react';
import { personalInfo, heroMediaLoop } from '../data/portfolioData';

export default function Hero() {
  const marqueeContainerRef = useRef(null);

  // Guarantee all background workout videos immediately autoplay silently on site load
  useEffect(() => {
    if (marqueeContainerRef.current) {
      const vids = marqueeContainerRef.current.querySelectorAll('video');
      vids.forEach((v) => {
        v.muted = true;
        v.defaultMuted = true;
        v.volume = 0;
        v.playsInline = true;
        v.play().catch(() => {});
      });
    }
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden bg-[#050505]">
      {/* ============================================================ */}
      {/* SEAMLESS SIDEWAYS LOOPING BACKGROUND: GYM PHOTOS & VIDEOS     */}
      {/* ============================================================ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center">
        {/* Ambient warm orange atmospheric mesh */}
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF6B27]/12 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#FF6B27]/10 rounded-full blur-[140px] pointer-events-none" />
        
        {/* Subtle grid pattern accent */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        {/* Marquee Track: Seamless Infinite Sideways Loop */}
        <div
          ref={marqueeContainerRef}
          className="animate-hero-marquee flex items-center gap-6 sm:gap-8 shrink-0 select-none opacity-50"
        >
          {/* Group 1 (Curated 10 media items: interleaved videos & photos) */}
          {heroMediaLoop.map((item, idx) => (
            <div
              key={`g1-${item.id}-${idx}`}
              className="shrink-0 w-[210px] sm:w-[250px] md:w-[285px] lg:w-[315px] h-[340px] sm:h-[400px] md:h-[450px] lg:h-[490px]"
            >
              <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 sm:border-2 sm:border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transform -skew-x-12 bg-[#0A0A0A]">
                <div className="w-full h-full transform skew-x-12 scale-[1.3] relative overflow-hidden">
                  {item.type === 'video' ? (
                    <video
                      src={item.videoSrc}
                      poster={item.src}
                      autoPlay
                      loop
                      muted
                      defaultMuted
                      playsInline
                      preload="auto"
                      onVolumeChange={(e) => {
                        e.currentTarget.muted = true;
                        e.currentTarget.volume = 0;
                      }}
                      className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-95 pointer-events-none"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-95"
                      loading="eager"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25" />
                </div>
              </div>
            </div>
          ))}

          {/* Group 2 (Identical Set for mathematically seamless 100% loop) */}
          {heroMediaLoop.map((item, idx) => (
            <div
              key={`g2-${item.id}-${idx}`}
              className="shrink-0 w-[210px] sm:w-[250px] md:w-[285px] lg:w-[315px] h-[340px] sm:h-[400px] md:h-[450px] lg:h-[490px]"
            >
              <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 sm:border-2 sm:border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transform -skew-x-12 bg-[#0A0A0A]">
                <div className="w-full h-full transform skew-x-12 scale-[1.3] relative overflow-hidden">
                  {item.type === 'video' ? (
                    <video
                      src={item.videoSrc}
                      poster={item.src}
                      autoPlay
                      loop
                      muted
                      defaultMuted
                      playsInline
                      preload="auto"
                      onVolumeChange={(e) => {
                        e.currentTarget.muted = true;
                        e.currentTarget.volume = 0;
                      }}
                      className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-95 pointer-events-none"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-95"
                      loading="eager"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Multi-Stop Cinematic Vignettes for Flawless Readability */}
        {/* Left Column Text Protection Gradient */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[62%] bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent pointer-events-none" />
        
        {/* Top and Bottom atmospheric blend */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none" />
        
        {/* Right edge subtle soft fade */}
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505]/70 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Identity, Heading, Credibility */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow with pulsing orange radar dot */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FF6B27]/10 border border-[#FF6B27]/30 text-[#FF6B27] text-xs font-mono font-bold tracking-widest uppercase mb-6 w-fit shadow-[0_0_15px_rgba(255,107,39,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B27] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B27]"></span>
              </span>
              <span>{personalInfo.eyebrow}</span>
            </div>

            {/* MAIN HEADING: SUMAN DEB */}
            <h1 className="font-bebas text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tight font-black text-white leading-[0.88] select-none mb-3">
              <span className="block text-white">SUMAN</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#FF6B27]/90">
                DEB<span className="text-[#FF6B27]">.</span>
              </span>
            </h1>

            {/* SUBTITLE: Certified Fitness Trainer & Personal Trainer */}
            <div className="mt-2 mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-oswald font-bold tracking-wide uppercase text-white/95 flex flex-wrap items-center gap-2">
                <span className="text-[#FF6B27]">CERTIFIED FITNESS TRAINER</span>
                <span className="text-white/40">&amp;</span>
                <span>PERSONAL TRAINER</span>
              </h2>
            </div>

            {/* INTRODUCTORY PARAGRAPH */}
            <p className="text-base sm:text-lg text-[#A5A5A5] leading-relaxed max-w-2xl mb-8 font-normal">
              {personalInfo.tagline}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#booking"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF6B27] hover:bg-[#F47B35] text-white text-base font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(255,107,39,0.45)] hover:shadow-[0_0_45px_rgba(255,107,39,0.7)] hover:scale-[1.02] active:scale-95 group"
              >
                <span>Book A Session</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white text-base font-semibold border border-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Explore My Journey</span>
              </a>
            </div>

            {/* THREE CREDIBILITY INDICATORS */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FF6B27]/15 border border-[#FF6B27]/40 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B27]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    1,200+ Clients
                  </span>
                  <span className="text-[11px] text-[#A5A5A5]">Supported in Fitness</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FF6B27]/15 border border-[#FF6B27]/40 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B27]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    350+ Sessions
                  </span>
                  <span className="text-[11px] text-[#A5A5A5]">One-To-One Coached</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FF6B27]/15 border border-[#FF6B27]/40 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B27]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Since 2021
                  </span>
                  <span className="text-[11px] text-[#A5A5A5]">Gym Floor Experience</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Cinematic Fitness Photography with Dramatic Lighting */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient orange halo behind the portrait */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B27]/35 via-[#FF6B27]/15 to-transparent rounded-3xl blur-2xl transform scale-95" />
            
            {/* Outer luxury glass container matching screenshot */}
            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#141414] to-[#0A0A0A] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
              
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#111]">
                {/* Real Cinematic Photograph of Suman Deb */}
                <img
                  src="/images/suman-physique.jpg"
                  alt="Suman Deb - Certified Fitness Trainer & Personal Trainer"
                  className="w-full h-full object-cover object-center filter contrast-115 brightness-95 transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Dramatic Gradient Vignette & Orange Rim Lighting */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-[#FF6B27]/15" />

                {/* Floating Telemetry Badge: DPT (K11) & CPT (NIFS) */}
                <div className="absolute top-4 left-4 backdrop-blur-md bg-black/60 border border-white/15 rounded-xl px-3.5 py-2 flex items-center gap-2.5 shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white font-bold">
                      K11 &amp; NIFS Certified
                    </span>
                    <span className="text-[9px] text-[#A5A5A5] font-mono">
                      Kolkata, West Bengal
                    </span>
                  </div>
                </div>

                {/* Floating Real Coach Thumbnail Badge */}
                <div className="absolute top-4 right-4 backdrop-blur-md bg-black/70 border border-[#FF6B27]/40 rounded-xl p-1.5 flex items-center gap-2 shadow-lg">
                  <img
                    src="/images/suman-portrait.jpg"
                    alt="Suman Deb Portrait"
                    className="w-8 h-8 rounded-lg object-cover object-top border border-white/20"
                  />
                  <span className="text-[9px] font-mono text-white pr-1 uppercase tracking-wider font-bold">
                    Official
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 backdrop-blur-xl bg-black/75 border border-white/15 rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider font-mono text-[#FF6B27] font-semibold">
                      SUMAN DEB
                    </span>
                    <span className="text-sm font-bold text-white">
                      Gym Floor Conditioning
                    </span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#FF6B27]/20 border border-[#FF6B27]/40 text-[#FF6B27] text-xs font-mono font-bold">
                    REAL COACH
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
