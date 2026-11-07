import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Languages, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-[#080808] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#FF6B27]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B27]/10 border border-[#FF6B27]/30 text-[#FF6B27] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Phone className="w-3.5 h-3.5" />
            <span>DIRECT ACCESS</span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[0.95] mb-4">
            LET'S CONNECT<span className="text-[#FF6B27]">.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A5A5A5] leading-relaxed">
            Reach out directly for 1-on-1 personal coaching slots, gym floor consultations, or online fitness inquiries.
          </p>
        </div>

        {/* Contact Information & Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Phone Call Card */}
          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
            className="group p-6 rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-[#FF6B27]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FF6B27]/15 border border-[#FF6B27]/30 flex items-center justify-center text-[#FF6B27] mb-5 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A5A5A5] font-semibold block mb-1">
                Direct Call
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B27] transition-colors font-mono">
                {personalInfo.phone}
              </h3>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#FF6B27] font-semibold uppercase tracking-wider">
              <span>Tap to Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${personalInfo.phoneRaw}?text=${encodeURIComponent("Hi Suman! I'd like to talk to you about fitness training.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-[#FF6B27]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A5A5A5] font-semibold block mb-1">
                Instant Chat
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors font-mono">
                WhatsApp Chat
              </h3>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-semibold uppercase tracking-wider">
              <span>Open WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group p-6 rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-[#FF6B27]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FF6B27]/15 border border-[#FF6B27]/30 flex items-center justify-center text-[#FF6B27] mb-5 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A5A5A5] font-semibold block mb-1">
                Email Inquiry
              </span>
              <h3 className="text-sm font-bold text-white group-hover:text-[#FF6B27] transition-colors truncate font-mono">
                {personalInfo.email}
              </h3>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#FF6B27] font-semibold uppercase tracking-wider">
              <span>Send Mail</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          {/* Location */}
          <div className="group p-6 rounded-2xl bg-[#0D0D0D] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white mb-5">
                <MapPin className="w-5 h-5 text-[#FF6B27]" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A5A5A5] font-semibold block mb-1">
                Location Base
              </span>
              <h3 className="text-sm font-bold text-white leading-snug">
                {personalInfo.location}
              </h3>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#A5A5A5] font-mono">
              Serving Kolkata &amp; Suburbs
            </div>
          </div>

        </div>

        {/* Coach Summary & Languages Card */}
        <div className="rounded-3xl bg-[#0F0F0F] border border-white/15 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#FF6B27] shrink-0 shadow-[0_0_20px_rgba(255,107,39,0.5)]">
              <img
                src="/images/suman-portrait.jpg"
                alt="Suman Deb"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h4 className="font-bebas text-2xl text-white tracking-wide">
                {personalInfo.name}
              </h4>
              <p className="text-xs text-[#FF6B27] font-mono uppercase tracking-wider font-semibold">
                {personalInfo.roleTitle}
              </p>
            </div>
          </div>

          {/* Languages Supported */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-mono uppercase text-[#A5A5A5] flex items-center gap-1.5">
              <Languages className="w-4 h-4 text-[#FF6B27]" />
              Languages:
            </span>
            {personalInfo.languages.map((lang) => (
              <span
                key={lang.name}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-200 font-mono"
              >
                <strong className="text-white font-bold">{lang.name}</strong> ({lang.level})
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
