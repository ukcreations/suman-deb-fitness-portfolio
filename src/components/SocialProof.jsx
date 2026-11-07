import React from 'react';
import { Star, Quote } from 'lucide-react';
import { clientReviews } from '../data/portfolioData';

export default function SocialProof() {
  const topReviews = clientReviews.slice(0, 3);

  return (
    <section className="relative py-14 bg-[#080808] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#FF6B27] font-bold block mb-2">
            CLIENT SATISFACTION
          </span>
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white">
            TRUST BUILT THROUGH CONSISTENCY.
          </h2>
          <p className="text-xs text-[#A5A5A5] mt-2 font-mono">
            * Sample client feedback representations based on verified training programs
          </p>
        </div>

        {/* 3-Column Testimonial Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topReviews.map((review) => (
            <div
              key={review.id}
              className="relative p-6 rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-[#FF6B27]/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                {/* 5 Orange Stars */}
                <div className="flex items-center gap-1.5 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FF6B27] text-[#FF6B27] drop-shadow-[0_0_6px_rgba(255,107,39,0.5)]"
                    />
                  ))}
                </div>

                {/* Feedback Quote */}
                <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed italic mb-6">
                  "{review.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#FF6B27] transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-[#A5A5A5]">
                    {review.role}
                  </p>
                </div>
                <div className="text-[10px] font-mono text-[#FF6B27] uppercase tracking-wider bg-[#FF6B27]/10 px-2.5 py-1 rounded-md border border-[#FF6B27]/20">
                  Verified
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
