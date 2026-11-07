import React, { useState } from 'react';
import { 
  Dumbbell, 
  Flame, 
  Zap, 
  Activity, 
  Users, 
  Globe, 
  Apple, 
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { servicesData, personalInfo } from '../data/portfolioData';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-[#FF6B27]" />;
      case 'Flame': return <Flame className="w-6 h-6 text-[#FF6B27]" />;
      case 'Biceps': return <Sparkles className="w-6 h-6 text-[#FF6B27]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#FF6B27]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-[#FF6B27]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#FF6B27]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#FF6B27]" />;
      case 'Apple': return <Apple className="w-6 h-6 text-[#FF6B27]" />;
      default: return <Dumbbell className="w-6 h-6 text-[#FF6B27]" />;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#FF6B27]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#FF6B27]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B27]/10 border border-[#FF6B27]/30 text-[#FF6B27] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>WHAT I OFFER</span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[0.95] mb-4">
            LET'S GET YOU <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#FF6B27]">
              YOUR DREAM BODY!
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A5A5A5] leading-relaxed">
            Evidence-based training methodologies tailored for fat loss, muscular hypertrophy, athletic conditioning, and longevity.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-[#0E0E0E] border border-white/10 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#FF6B27]/50 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(255,107,39,0.15)]"
            >
              {/* Top Row: Service Number and Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-bebas text-white/30 group-hover:text-[#FF6B27] transition-colors font-bold tracking-wider">
                    {service.id}.
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#FF6B27]/40 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF6B27]/15">
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Category Badge */}
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF6B27] font-semibold block mb-2">
                  {service.category}
                </span>

                {/* Service Title */}
                <h3 className="font-oswald text-xl font-bold uppercase text-white mb-3 group-hover:text-[#FF6B27] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A5A5A5] leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Bullet Features */}
                <ul className="space-y-2 mb-6 border-t border-white/5 pt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle className="w-3.5 h-3.5 text-[#FF6B27] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link: WhatsApp prefill for this service */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/${personalInfo.phoneRaw}?text=${encodeURIComponent(
                    `Hi Suman, I would like to inquire about your ${service.title} (${service.category}) program.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#FF6B27] transition-colors"
                >
                  <span>Inquire Program</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#FF6B27]" />
                </a>
              </div>

              {/* Popular tag if applicable */}
              {service.popular && (
                <div className="absolute -top-3 right-5 bg-gradient-to-r from-[#FF6B27] to-[#e05312] text-white text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md">
                  POPULAR CHOICE
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#141414] via-[#1A1A1A] to-[#141414] border border-white/15 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <div>
            <h4 className="font-oswald text-2xl font-bold uppercase text-white mb-1">
              Not sure which training program fits you best?
            </h4>
            <p className="text-sm text-[#A5A5A5]">
              Get a complimentary 15-minute consultation to assess your current fitness level and goals.
            </p>
          </div>
          <a
            href="#booking"
            className="shrink-0 px-7 py-3.5 rounded-full bg-[#FF6B27] hover:bg-[#F47B35] text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(255,107,39,0.4)]"
          >
            Claim Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
