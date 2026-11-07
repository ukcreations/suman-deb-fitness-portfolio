import React from 'react';
import { Flame, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030303] text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Identity & Motto */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#FF6B27] shrink-0 shadow-[0_0_15px_rgba(255,107,39,0.5)]">
                <img
                  src="/images/suman-portrait.jpg"
                  alt="Suman Deb"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="font-bebas text-3xl tracking-wider text-white">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF6B27] font-semibold mb-2">
              CERTIFIED FITNESS TRAINER &bull; PERSONAL TRAINER
            </p>

            <p className="text-sm text-[#A5A5A5] italic">
              "BUILD STRENGTH. STAY CONSISTENT."
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-[#A5A5A5]">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#results" className="hover:text-white transition-colors">Results</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#FF6B27] border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-300 text-neutral-300 hover:text-white group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#777777]">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. ALL RIGHTS RESERVED.
          </div>
          <div>
            Kestopur, Kolkata, West Bengal &bull; Contact: {personalInfo.phone}
          </div>
        </div>

      </div>
    </footer>
  );
}
