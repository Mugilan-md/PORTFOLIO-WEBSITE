import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ChevronDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.log("Video playback error:", err);
          // Fallback toggle state
          setIsPlaying(true);
        });
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Full-Screen Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isPlaying ? 'opacity-80 scale-105 transition-transform duration-10000' : 'opacity-40 scale-100'
          }`}
          playsInline
          loop
          muted
          poster="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
        >
          {/* Sample high quality dark tech showcase reel loop */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-code-coding-on-a-computer-screen-41551-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Dark Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex items-center justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full pt-16">
          
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="lg:col-span-8 flex flex-col items-start space-y-6"
          >
            {/* Small Agency Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono tracking-widest text-[#FF2A2A] uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-ping" />
              <span>Full Stack Portfolio '26</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-['Outfit'] tracking-tight"
              >
                Hi, I'm a
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black font-['Outfit'] tracking-tighter uppercase leading-none text-stroke-white"
              >
                Full Stack Developer
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-lg sm:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed text-shadow-sm font-['Inter']"
            >
              Crafting high-performance, scalable web applications with <span className="text-white font-semibold underline decoration-[#FF2A2A]">React.js</span>, <span className="text-white font-semibold underline decoration-[#FF2A2A]">Node.js</span>, and <span className="text-white font-semibold underline decoration-[#FF2A2A]">Tailwind CSS</span>. Blending luxury aesthetics with award-winning speed.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              {/* Primary CTA */}
              <a
                href="#process"
                className="px-8 py-4 rounded-full bg-white text-black font-extrabold text-sm tracking-wide uppercase transition-all duration-300 hover:scale-105 hover:bg-neutral-200 shadow-lg flex items-center space-x-2 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#footer"
                className="px-8 py-4 rounded-full glass-button text-white border border-white/30 font-bold text-sm tracking-wide uppercase backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-105 shadow-lg"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Circular Play Reel Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col items-center justify-center mt-8 lg:mt-0"
          >
            <div className="relative group cursor-pointer flex flex-col items-center" onClick={togglePlay}>
              {/* Pulsing Accent Glow */}
              <div className="absolute inset-0 rounded-full bg-[#FF2A2A]/20 blur-xl group-hover:bg-[#FF2A2A]/50 group-hover:scale-125 transition-all duration-500" />
              
              {/* Play Reel Circular Container */}
              <button
                aria-label={isPlaying ? "Pause Reel" : "Play Reel"}
                className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full glass-panel-dark border-2 border-white/40 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[#FF2A2A] group-hover:shadow-[0_0_35px_rgba(255,42,42,0.6)]"
              >
                {isPlaying ? (
                  <Pause className="w-10 h-10 sm:w-12 sm:h-12 text-white fill-white transition-transform duration-300 group-hover:scale-110" />
                ) : (
                  <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white fill-white translate-x-0.5 transition-transform duration-300 group-hover:scale-110" />
                )}
              </button>

              {/* Sub-label below button */}
              <span className="mt-4 text-xs font-mono tracking-widest text-white/90 uppercase font-bold group-hover:text-[#FF2A2A] transition-colors">
                {isPlaying ? "PAUSE" : "PLAY REEL"}
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Desktop Scroll Indicator (Bouncing Arrow at bottom center) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center space-y-2 pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-widest text-white/60 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full border border-white/20 text-white/80"
        >
          <ChevronDown className="w-4 h-4 text-[#FF2A2A]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
