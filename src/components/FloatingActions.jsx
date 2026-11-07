import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0F0F0F] border border-white/20 text-white shadow-2xl animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono">Chat with Suman directly</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-[#A5A5A5] hover:text-white ml-1"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${personalInfo.phoneRaw}?text=${encodeURIComponent("Hi Suman! I found your portfolio and want to discuss personal training.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-[#FF6B27] hover:bg-[#F47B35] text-white flex items-center justify-center shadow-[0_0_25px_rgba(255,107,39,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#FF6B27] opacity-40 animate-ping pointer-events-none" />
        <MessageSquare className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
}
