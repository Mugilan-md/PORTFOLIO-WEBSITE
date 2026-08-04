import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProcessTimeline from './components/ProcessTimeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white selection:bg-[#FF2A2A] selection:text-white font-['Inter'] relative overflow-x-hidden">
      {/* 1. Water-Fill Preloader Overlay */}
      {isLoading && (
        <Preloader onLoadingComplete={() => setIsLoading(false)} />
      )}

      {/* 2. Main Portfolio Web Application */}
      <div className={isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100 transition-opacity duration-700'}>
        {/* Floating Navbar */}
        <Navbar />

        {/* Fullscreen Video Hero Section (#hero) */}
        <Hero />

        {/* Vibrant Red Hanging ID Badge About Section (#about) */}
        <About />

        {/* Editorial Selected Works Showcase (#projects) */}
        <Projects />

        {/* Dark Glassmorphism Technical Stack Grid (#skills) */}
        <Skills />

        {/* Process Timeline (How We Work) Section (#process) */}
        <ProcessTimeline />

        {/* High-Converting Direct Consultation Hub (#contact) */}
        <Contact />

        {/* Editorial Dark Footer (#footer) */}
        <Footer />
      </div>
    </div>
  );
}
