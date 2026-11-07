import React from 'react';
import { Flame, Dumbbell } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="relative py-32 sm:py-40 bg-[#050505] overflow-hidden flex items-center justify-center">
      {/* Background Cinematic Gym Photo with heavy dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1920&q=80"
          alt="Gym background"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]" />
        <div className="absolute inset-0 bg-[#FF6B27]/5 mix-blend-color" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B27]/15 border border-[#FF6B27]/40 text-[#FF6B27] text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(255,107,39,0.3)]">
          <Flame className="w-4 h-4" />
          <span>COACHING PRINCIPLE</span>
        </div>

        {/* Huge Core Pillars Typography */}
        <h2 className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-black tracking-tight uppercase leading-[0.9] mb-8 select-none">
          DISCIPLINE<span className="text-[#FF6B27]">.</span> <br />
          CONSISTENCY<span className="text-[#FF6B27]">.</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#FF6B27]">
            PROGRESSION.
          </span>
        </h2>

        {/* Philosophy Quote */}
        <div className="max-w-3xl mx-auto backdrop-blur-md bg-black/60 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <p className="text-lg sm:text-2xl text-neutral-200 font-light leading-relaxed italic">
            "Fitness is not about achieving results overnight. It is about building habits, improving gradually and staying committed to the process."
          </p>
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-3">
            <span className="w-8 h-0.5 bg-[#FF6B27]" />
            <span className="font-bebas text-xl uppercase tracking-widest text-[#FF6B27]">
              SUMAN DEB
            </span>
            <span className="w-8 h-0.5 bg-[#FF6B27]" />
          </div>
        </div>

      </div>
    </section>
  );
}
