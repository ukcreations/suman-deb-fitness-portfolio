import React from 'react';
import { Award, ShieldCheck, CheckCircle2, GraduationCap, HeartHandshake } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const getCertIcon = (id) => {
    switch (id) {
      case '01':
        return <GraduationCap className="w-8 h-8 text-[#FF6B27]" />;
      case '02':
        return <Award className="w-8 h-8 text-[#FF6B27]" />;
      case '03':
        return <HeartHandshake className="w-8 h-8 text-[#FF6B27]" />;
      default:
        return <Award className="w-8 h-8 text-[#FF6B27]" />;
    }
  };

  return (
    <section id="certifications" className="relative py-28 bg-[#080808] border-t border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#FF6B27]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B27]/10 border border-[#FF6B27]/30 text-[#FF6B27] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CREDENTIALS &amp; ACCREDITATION</span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[0.95] mb-4">
            CERTIFIED<span className="text-[#FF6B27]">.</span> QUALIFIED<span className="text-[#FF6B27]">.</span> COMMITTED<span className="text-[#FF6B27]">.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A5A5A5] leading-relaxed">
            Rigorous scientific training certifications ensuring safe biomechanics, proper nutrition scope, and professional excellence.
          </p>
        </div>

        {/* 3 Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="relative rounded-3xl bg-[#0F0F0F] border border-white/10 hover:border-[#FF6B27]/50 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(255,107,39,0.15)] group"
            >
              <div>
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bebas text-white/20 group-hover:text-[#FF6B27] transition-colors font-bold tracking-widest">
                    {cert.id}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#FF6B27]/40 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF6B27]/15">
                    {getCertIcon(cert.id)}
                  </div>
                </div>

                {/* Badge & Year */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#FF6B27]/15 text-[#FF6B27] text-[10px] font-mono font-bold uppercase tracking-wider">
                    {cert.badge}
                  </span>
                  <span className="text-xs font-mono text-[#A5A5A5]">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-2 group-hover:text-[#FF6B27] transition-colors leading-tight">
                  {cert.title}
                </h3>

                {/* Institution */}
                <p className="text-sm font-semibold text-neutral-300 mb-6">
                  {cert.organization}
                </p>

                {/* Highlights */}
                <ul className="space-y-2.5 pt-4 border-t border-white/10">
                  {cert.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A5A5A5]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B27] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified seal */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  VERIFIED CREDENTIAL
                </span>
                <span className="text-xs font-mono text-white/40">
                  Kolkata, WB
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
