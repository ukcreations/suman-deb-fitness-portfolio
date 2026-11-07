import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X, ArrowUpRight, Flame, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Client Results', href: '#results' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Tagline */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#FF6B27] shadow-[0_0_15px_rgba(255,107,39,0.5)] transition-transform duration-300 group-hover:scale-105 shrink-0">
              <img
                src="/images/suman-portrait.jpg"
                alt="Suman Deb"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-2xl tracking-wider text-white group-hover:text-[#FF6B27] transition-colors leading-none">
                {personalInfo.name}
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#A5A5A5] font-mono mt-0.5">
                FITNESS PROFESSIONAL
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#A5A5A5] hover:text-white transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B27] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#booking"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF6B27] hover:bg-[#F47B35] text-white text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(255,107,39,0.4)] hover:shadow-[0_0_35px_rgba(255,107,39,0.7)] hover:scale-[1.02] active:scale-95"
            >
              <span>Book A Session</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-[#FF6B27] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 px-5 pt-4 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-gray-300 hover:text-[#FF6B27] hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full bg-[#FF6B27] text-white text-sm font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(255,107,39,0.5)]"
            >
              Book A Session
            </a>
            <a
              href={`https://wa.me/${personalInfo.phoneRaw}?text=${encodeURIComponent("Hi Suman, I'm interested in personal training with you.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-full bg-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF6B27]" />
              WhatsApp: {personalInfo.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
