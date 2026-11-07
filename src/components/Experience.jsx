import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#FF6B27]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B27]/10 border border-[#FF6B27]/30 text-[#FF6B27] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TIMELINE</span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[0.95] mb-4">
            EXPERIENCE BUILT ON <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#FF6B27]">
              THE GYM FLOOR.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A5A5A5] leading-relaxed">
            Real coaching pedigree across premier fitness institutions in Kolkata since 2021.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          
          {experienceData.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#050505] border-2 border-[#FF6B27] flex items-center justify-center shadow-[0_0_15px_rgba(255,107,39,0.7)] group-hover:scale-125 transition-transform duration-300">
                <div className="w-2 h-2 rounded-full bg-[#FF6B27]" />
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-[#FF6B27]/50 p-6 sm:p-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_15px_30px_rgba(255,107,39,0.1)]">
                
                {/* Header Row: Role, Gym, Period Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B27] block mb-1">
                      {item.role}
                    </span>
                    <h3 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-white flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-white/50" />
                      <span>{item.gym}</span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-neutral-300">
                      <Calendar className="w-3.5 h-3.5 text-[#FF6B27]" />
                      <span>{item.period}</span>
                    </span>
                    {item.status && (
                      <span className="px-2.5 py-1 rounded-full bg-[#FF6B27]/15 text-[#FF6B27] border border-[#FF6B27]/30 text-[10px] font-mono uppercase font-bold">
                        {item.status}
                      </span>
                    )}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-xs font-mono text-[#A5A5A5] mb-5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6B27]" />
                  <span>{item.location}</span>
                </div>

                {/* Responsibilities list from resume */}
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-3">
                  Key Scope of Coaching &amp; Floor Duties:
                </h4>
                
                <ul className="space-y-2.5">
                  {item.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="flex items-start gap-3 text-sm text-[#A5A5A5] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B27] shrink-0 mt-0.5" />
                      <span className="text-neutral-300">{resp}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
