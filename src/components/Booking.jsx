import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    fitnessGoal: 'Fat Loss',
    trainingType: 'Personal Training',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const goalOptions = [
    'Fat Loss',
    'Muscle Building',
    'Weight Gain',
    'Strength Training',
    'General Fitness',
    'Endurance',
    'Other'
  ];

  const trainingOptions = [
    'Personal Training',
    'Group Training',
    'Online Coaching'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your phone number';
    } else if (formData.phoneNumber.trim().length < 8) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FF6B27', '#ffffff', '#F47B35']
      });
    } catch {
      // ignore
    }

    // Construct WhatsApp message URL
    const waText = `Hi Suman! I would like to book a fitness training session with you.

Name: ${formData.fullName.trim()}
Phone: ${formData.phoneNumber.trim()}
Goal: ${formData.fitnessGoal}
Training Type: ${formData.trainingType}
${formData.message ? `Notes: ${formData.message.trim()}` : ''}

Looking forward to your guidance!`;

    const waUrl = `https://wa.me/${personalInfo.phoneRaw}?text=${encodeURIComponent(waText)}`;

    setSubmitted(true);

    // Open WhatsApp
    window.open(waUrl, '_blank');
  };

  return (
    <section id="booking" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Background Cinematic Gym Photo with Dark Luxury Refraction */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
          alt="Gym floor backdrop"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-[#050505]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching screenshot */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B27]/15 border border-[#FF6B27]/40 text-[#FF6B27] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(255,107,39,0.3)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START YOUR TRANSFORMATION</span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[0.95] mb-4">
            LET'S SCHEDULE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#FF6B27]">
              YOUR FIRST SESSION.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A5A5A5] leading-relaxed max-w-xl mx-auto">
            "Take the first step towards a stronger, healthier and more confident you."
          </p>
        </div>

        {/* The Booking Card Container */}
        <div className="relative rounded-3xl bg-[#0F0F0F]/90 backdrop-blur-2xl border border-white/15 p-6 sm:p-10 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
          
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FF6B27]/20 border border-[#FF6B27] mx-auto flex items-center justify-center text-[#FF6B27] shadow-[0_0_25px_rgba(255,107,39,0.5)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-bebas text-3xl text-white tracking-wide">
                ENQUIRY PREPARED &amp; DISPATCHED!
              </h3>
              <p className="text-sm text-[#A5A5A5] max-w-md mx-auto">
                WhatsApp has been launched with your enquiry details. Suman will review your goals and reply to schedule your session slot.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider"
                >
                  Send Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold mb-2">
                    Full Name <span className="text-[#FF6B27]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border ${
                      errors.fullName ? 'border-red-500' : 'border-white/15 focus:border-[#FF6B27]'
                    } text-white placeholder-neutral-500 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold mb-2">
                    Phone / WhatsApp Number <span className="text-[#FF6B27]">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border ${
                      errors.phoneNumber ? 'border-red-500' : 'border-white/15 focus:border-[#FF6B27]'
                    } text-white placeholder-neutral-500 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Fitness Goal */}
                <div>
                  <label htmlFor="fitnessGoal" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold mb-2">
                    Primary Fitness Goal
                  </label>
                  <div className="relative">
                    <select
                      id="fitnessGoal"
                      name="fitnessGoal"
                      value={formData.fitnessGoal}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#161616] border border-white/15 focus:border-[#FF6B27] text-white text-sm focus:outline-none transition-colors cursor-pointer appearance-none"
                    >
                      {goalOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#161616] text-white py-2">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#A5A5A5]">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Preferred Training Type */}
                <div>
                  <label htmlFor="trainingType" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold mb-2">
                    Preferred Training Format
                  </label>
                  <div className="relative">
                    <select
                      id="trainingType"
                      name="trainingType"
                      value={formData.trainingType}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#161616] border border-white/15 focus:border-[#FF6B27] text-white text-sm focus:outline-none transition-colors cursor-pointer appearance-none"
                    >
                      {trainingOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#161616] text-white py-2">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#A5A5A5]">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold mb-2">
                  Additional Message / Medical History / Target Timeline (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details like your preferred gym timing (morning/evening) or any prior injuries..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#FF6B27] text-white placeholder-neutral-500 text-sm focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#FF6B27] hover:bg-[#F47B35] text-white font-bebas text-2xl tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(255,107,39,0.45)] hover:shadow-[0_0_40px_rgba(255,107,39,0.7)] hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>Book My Session</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>

              {/* Functional note */}
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#A5A5A5]">
                <Phone className="w-3.5 h-3.5 text-[#FF6B27]" />
                <span>Direct WhatsApp dispatch to Suman Deb: +91 62907 34280</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
