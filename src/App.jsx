import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProcessTimeline from './components/ProcessTimeline';
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

        {/* Fullscreen Video Hero Section */}
        <Hero />

        {/* Vibrant Red Hanging ID Badge About Section */}
        <About />

        {/* Process Timeline (How We Work) Section */}
        <ProcessTimeline />

        {/* Editorial Dark Footer */}
        <Footer />
      </div>
    </div>
  );
}
