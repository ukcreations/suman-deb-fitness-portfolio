import React, { useEffect, useState, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';

// Custom animated counter hook
function Counter({ targetValue, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract pure number from string e.g. "1,200+" -> 1200
  const numericTarget = parseInt(targetValue.replace(/[^0-9]/g, ''), 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const stepTime = 25;
          const totalSteps = duration / stepTime;
          const increment = numericTarget / totalSteps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= numericTarget) {
              setCount(numericTarget);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [numericTarget, hasAnimated]);

  const formattedCount = count.toLocaleString();

  return (
    <span ref={elementRef} className="font-bebas tracking-tight text-[#FF6B27]">
      {hasAnimated ? formattedCount : targetValue.replace(/[^0-9]/g, '')}
      {targetValue.includes('+') ? '+' : ''}
    </span>
  );
}

export default function Achievements() {
  const statsList = [
    {
      target: "1,200+",
      label: "CLIENTS SUPPORTED",
      sub: "Across general fitness & goal-based routines"
    },
    {
      target: "350+",
      label: "1-ON-1 SESSIONS",
      sub: "Custom biomechanical coaching"
    },
    {
      target: "200+",
      label: "PERSONAL & GROUP CLIENTS",
      sub: "Comprehensive cohort transformations"
    },
    {
      target: "2021",
      label: "JOURNEY BEGAN",
      sub: "Years of dedicated gym floor coaching"
    }
  ];

  return (
    <section className="relative py-24 bg-[#050505] border-y border-white/10 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#FF6B27]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#FF6B27] font-bold block mb-2">
            PROVEN TRACK RECORD
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wider">
            IMPACT DELIVERED ON THE GYM FLOOR
          </h2>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsList.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-[#FF6B27]/50 transition-all duration-300 hover:-translate-y-1 group text-center flex flex-col justify-center items-center shadow-lg"
            >
              {/* Subtle top indicator bar */}
              <div className="w-12 h-1 bg-[#FF6B27]/30 group-hover:bg-[#FF6B27] rounded-full mb-6 transition-all duration-300 group-hover:w-20" />

              {/* Oversized Number */}
              <div className="text-6xl sm:text-7xl lg:text-7xl font-black mb-2 orange-text-glow leading-none">
                <Counter targetValue={stat.target} />
              </div>

              {/* Stat Label */}
              <h3 className="font-oswald text-base sm:text-lg font-bold uppercase tracking-wider text-white mb-2 group-hover:text-[#FF6B27] transition-colors">
                {stat.label}
              </h3>

              {/* Sub description */}
              <p className="text-xs text-[#A5A5A5] leading-relaxed">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
