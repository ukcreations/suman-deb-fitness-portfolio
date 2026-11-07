import React from 'react';
import { ArrowRight, Award, ShieldCheck, HeartPulse, Target, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#080808] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#FF6B27]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Professional Fitness Photography */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient orange glow frame */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FF6B27]/30 to-amber-600/10 rounded-3xl blur-xl opacity-60" />

            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#121212] p-2 shadow-2xl">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#111]">
                <img
                  src="/images/suman-portrait.jpg"
                  alt="Suman Deb - Certified Personal Trainer"
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05] transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-black/75 border border-white/15 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF6B27] font-bold block">
                      Certified Coach
                    </span>
                    <span className="font-bebas text-2xl text-white tracking-wider">
                      SUMAN DEB &bull; SINCE 2021
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B27]/20 border border-[#FF6B27]/40 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#FF6B27]" />
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT: Content, Philosophy, Core Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B27]/10 border border-[#FF6B27]/30 text-[#FF6B27] text-xs font-mono font-bold tracking-widest uppercase mb-4 w-fit">
              <span>ABOUT SUMAN DEB</span>
            </div>

            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase leading-[0.95] tracking-tight mb-6">
              MORE THAN JUST FITNESS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#FF6B27]">
                A COMMITMENT TO PROGRESS.
              </span>
            </h2>

            {/* Resume Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#A5A5A5] leading-relaxed mb-8">
              <p>
                <strong className="text-white font-semibold">Suman Deb</strong> is a Certified Fitness Trainer and Personal Trainer with professional experience in the fitness industry since 2021.
              </p>
              <p>
                He specialises in one-to-one and group coaching, developing goal-based workout programmes for fat loss, muscle building, weight management, strength and endurance development.
              </p>
              <p>
                His approach combines structured training, exercise technique coaching, mobility work and consistent progress monitoring.
              </p>
              <p className="text-white/90 font-medium">
                His focus is on safe exercise instruction, client motivation and building sustainable training habits that last a lifetime.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#FF6B27]/15 border border-[#FF6B27]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#FF6B27]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Safe Biomechanics</h4>
                  <p className="text-xs text-[#A5A5A5] mt-1">Zero-compromise form correction to prevent injury and maximize muscular engagement.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#FF6B27]/15 border border-[#FF6B27]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Target className="w-4 h-4 text-[#FF6B27]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Goal-Based Splits</h4>
                  <p className="text-xs text-[#A5A5A5] mt-1">Precision routines designed around your schedule, body type, and metabolic targets.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#FF6B27]/15 border border-[#FF6B27]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <HeartPulse className="w-4 h-4 text-[#FF6B27]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Mobility &amp; Recovery</h4>
                  <p className="text-xs text-[#A5A5A5] mt-1">Prehab, active stretching, and flexibility to keep joints healthy and agile.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#FF6B27]/15 border border-[#FF6B27]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4 text-[#FF6B27]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Daily Accountability</h4>
                  <p className="text-xs text-[#A5A5A5] mt-1">Continuous progress tracking, weekly check-ins, and sustained motivation.</p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div>
              <a
                href="#experience"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider text-sm border border-white/20 hover:border-[#FF6B27] transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
              >
                <span>Discover My Experience</span>
                <ArrowRight className="w-4 h-4 text-[#FF6B27] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
