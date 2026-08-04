import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronDown, ArrowRight, X, Volume2, VolumeX } from 'lucide-react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bgVideoRef = useRef(null);
  const modalVideoRef = useRef(null);

  const handleVideoEnded = () => {
    setIsPlaying(false);
    if (bgVideoRef.current) {
      bgVideoRef.current.currentTime = 0;
    }
  };

  // Toggle video playback & audio directly in the hero section when user clicks play button
  const handlePlayButtonClick = () => {
    if (bgVideoRef.current) {
      if (isPlaying) {
        bgVideoRef.current.pause();
        setIsPlaying(false);
      } else {
        if (bgVideoRef.current.ended || bgVideoRef.current.currentTime >= (bgVideoRef.current.duration || 0)) {
          bgVideoRef.current.currentTime = 0;
        }
        bgVideoRef.current.muted = false;
        bgVideoRef.current.play().then(() => {
          setIsPlaying(true);
          setIsAudioOn(true);
        }).catch((err) => {
          console.log('Video playback error:', err);
          setIsPlaying(true);
          setIsAudioOn(true);
        });
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[720px] bg-[#D81B1B] text-white overflow-hidden flex items-center justify-center">
      
      {/* 1. SEAMLESS UNIFIED VIDEO FRAME - Clean natural laptop & subject colors with zero red tint mixing */}
      <div 
        className="absolute right-0 top-0 bottom-0 h-full w-full lg:w-[60%] z-0 flex items-end justify-end overflow-hidden pointer-events-none select-none"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
          WebkitMaskComposite: 'source-in',
          maskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
          maskComposite: 'intersect',
        }}
      >
        <video
          ref={bgVideoRef}
          className="w-full h-full object-contain object-bottom-right"
          playsInline
          muted={!isAudioOn}
          onEnded={handleVideoEnded}
        >
          <source src="/portfolio-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Watermark Removal Patch to completely erase embedded video star watermark */}
        <div className="absolute bottom-0 right-0 w-28 h-28 bg-[#D81B1B] blur-lg pointer-events-none z-10" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex flex-col justify-between pt-24 pb-8">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full my-auto pb-2">
          
          {/* Left Column Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Agency Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-black/20 text-xs font-mono tracking-widest text-white uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>Full Stack Portfolio '26</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black font-['Outfit'] tracking-tight"
              >
                Hi, I'm a
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black font-['Outfit'] tracking-tighter uppercase leading-none text-white drop-shadow-md"
              >
                Full Stack Developer
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-lg sm:text-xl text-white/95 max-w-xl font-normal leading-relaxed font-['Inter']"
            >
              Crafting high-performance, scalable web applications with <span className="text-black font-bold underline decoration-white underline-offset-4">React.js</span>, <span className="text-black font-bold underline decoration-white underline-offset-4">Node.js</span>, and <span className="text-black font-bold underline decoration-white underline-offset-4">Tailwind CSS</span>. Blending luxury aesthetics with award-winning speed.
            </motion.p>

            {/* CTA Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-black text-white font-extrabold text-sm tracking-wide uppercase transition-all duration-300 hover:scale-105 hover:bg-neutral-900 shadow-2xl flex items-center space-x-2 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 text-[#FF2A2A] transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-white/15 text-white border border-white/30 font-bold text-sm tracking-wide uppercase backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 shadow-lg"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: SLEEK TRANSPARENT GLASS PLAY BUTTON placed right over the transparent star logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-end mt-6 lg:mt-0 relative z-30 pointer-events-auto pr-2 pb-0"
          >
            <div className="flex flex-col items-center group cursor-pointer" onClick={handlePlayButtonClick}>
              {/* Circular Play Button - Transparent Glass without any black shadow */}
              <button
                onClick={handlePlayButtonClick}
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
                className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/20 hover:bg-white text-white hover:text-black border-2 border-white/70 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 fill-current" />
                ) : (
                  <Play className="w-7 h-7 fill-current translate-x-0.5" />
                )}
              </button>

              {/* Sub-label below Circular Play Button */}
              <span className="mt-2 text-xs font-mono tracking-widest text-white uppercase font-bold group-hover:text-black transition-colors select-none">
                {isPlaying ? "PAUSE REEL" : "PLAY REEL"}
              </span>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar: Scroll Indicator */}
        <div className="w-full flex justify-center pt-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hidden md:flex flex-col items-center space-y-1 pointer-events-none"
          >
            <span className="text-[10px] font-mono tracking-widest text-black/80 uppercase font-bold">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="p-1 rounded-full border border-black/30 text-black"
            >
              <ChevronDown className="w-4 h-4 text-black" />
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Fullscreen Video Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/95 backdrop-blur-2xl"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-[#111111] text-white rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(255,42,42,0.4)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-zinc-900/90">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 rounded-full bg-[#FF2A2A] animate-pulse" />
                  <div>
                    <h3 className="text-base sm:text-lg font-black font-['Outfit'] uppercase tracking-wider text-white">
                      B. MUGILAN // PORTFOLIO SHOWCASE REEL
                    </h3>
                    <p className="text-[11px] font-mono text-neutral-400">Official Video Showcase</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={closeModal}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-[#FF2A2A] text-white transition-colors"
                    title="Close Player"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Fullscreen Video Player */}
              <div className="relative aspect-video w-full bg-black overflow-hidden">
                <video
                  ref={modalVideoRef}
                  src="/portfolio-video.mp4"
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-zinc-900/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
                <span className="font-mono text-xs uppercase text-neutral-300">OFFICIAL PORTFOLIO REEL</span>
                <button
                  onClick={closeModal}
                  className="px-5 py-2 rounded-full bg-[#FF2A2A] text-white font-bold uppercase hover:bg-white hover:text-black transition-colors"
                >
                  Close Video
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
