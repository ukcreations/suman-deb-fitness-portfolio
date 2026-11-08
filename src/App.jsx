import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import TrainerGallery from './components/TrainerGallery';
import About from './components/About';
import Achievements from './components/Achievements';
import ClientResults from './components/ClientResults';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Philosophy from './components/Philosophy';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FF6B27] selection:text-white flex flex-col font-sans">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Social Proof / Quick Trust Bar */}
        <SocialProof />

        {/* 3. Services ("What I Offer" / "Let's Get You Your Dream Body!") */}
        <Services />

        {/* 3.5 Suman Deb In Action - Slanted Photo Ribbon Banner */}
        <TrainerGallery />

        {/* 4. About Suman Deb */}
        <About />

        {/* 5. Achievements & Statistics Counters */}
        <Achievements />

        {/* 6. Client Results & Interactive Before/After Comparison */}
        <ClientResults />

        {/* 7. Professional Experience Timeline */}
        <Experience />

        {/* 8. Certifications & Credentials */}
        <Certifications />

        {/* 9. Coaching Philosophy */}
        <Philosophy />

        {/* 10. Client Testimonials Carousel */}
        <Testimonials />

        {/* 11. Book A Session Form with WhatsApp Dispatch */}
        <Booking />

        {/* 12. Contact & Quick Connect */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Lead Generation Button */}
      <FloatingActions />
    </div>
  );
}
