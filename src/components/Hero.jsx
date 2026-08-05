import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronDown, ArrowRight, X } from 'lucide-react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bgVideoRef = useRef(null);
  const modalVideoRef = useRef(null);

  // Freeze on last frame when video finishes (no looping)
  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  // Toggle video playback & audio directly in the hero section when user clicks play button
  const handlePlayButtonClick = () => {
    if (bgVideoRef.current) {
      if (isPlaying) {
        bgVideoRef.current.pause();
        setIsPlaying(false);
      } else {
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
    <section id="hero" className="relative w-full h-screen min-h-[720px] bg-black text-white overflow-hidden flex items-center justify-center">
      
      {/* 1. NATIVE RESOLUTION CRISP HARDWARE-ACCELERATED BACKGROUND VIDEO */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none transform-gpu translate-z-0 backface-hidden">
        <video
          ref={bgVideoRef}
          className="w-full h-full object-cover object-[50%_22%] md:object-[54%_25%] lg:object-[57%_25%] xl:object-[58%_25%] transition-[object-position] duration-500 ease-out transform-gpu"
          playsInline
          controls={false}
          autoPlay={false}
          preload="metadata"
          muted={!isAudioOn}
          onEnded={handleVideoEnded}
        >
          <source src="/portfolio-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 2. CINEMATIC OVERLAY (rgba(0,0,0,0.25)) FOR MAXIMUM VIDEO VISIBILITY */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-[rgba(0,0,0,0.25)] bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(0,0,0,0.38)_100%)]" />

      {/* 3. MAIN CONTENT CONTAINER */}
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
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-mono tracking-widest text-white uppercase shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-ping" />
              <span>Full Stack Portfolio '26</span>
            </motion.div>

            {/* Main Headline (Optimized Typography: ~10% smaller for "Hi, I'm a" and ~15% smaller for "FULL STACK DEVELOPER") */}
            <div className="space-y-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-xl sm:text-2xl lg:text-[3.1rem] font-extrabold text-[#FFFFFF] font-['Outfit'] tracking-tight leading-snug drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
              >
                Hi, I'm a
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-2xl sm:text-4xl lg:text-[4.1rem] xl:text-[4.25rem] font-black font-['Outfit'] tracking-tighter uppercase leading-none text-[#FFFFFF] drop-shadow-[0_6px_24px_rgba(0,0,0,0.95)]"
              >
                Full Stack Developer
              </motion.h1>
            </div>

            {/* Subheading (With slightly increased breathing room margin) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/95 max-w-xl font-normal leading-relaxed font-['Inter'] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            >
              Crafting high-performance, scalable web applications with <span className="text-white font-bold underline decoration-[#FF2A2A] underline-offset-4">React.js</span>, <span className="text-white font-bold underline decoration-[#FF2A2A] underline-offset-4">Node.js</span>, and <span className="text-white font-bold underline decoration-[#FF2A2A] underline-offset-4">Tailwind CSS</span>. Blending luxury aesthetics with award-winning speed.
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
                className="px-8 py-4 rounded-full bg-white text-black font-extrabold text-sm tracking-wide uppercase transition-all duration-300 hover:scale-105 hover:bg-[#FF2A2A] hover:text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center space-x-2 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 text-[#FF2A2A] group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-white/15 text-white border border-white/40 font-bold text-sm tracking-wide uppercase backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 shadow-lg"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: CIRCULAR FROSTED GLASS PLAY BUTTON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-end mt-6 lg:mt-0 relative z-30 pointer-events-auto pr-2 pb-0"
          >
            <div className="flex flex-col items-center group cursor-pointer" onClick={handlePlayButtonClick}>
              {/* Circular Play Button with Soft Glowing Red Halo on Hover */}
              <button
                onClick={handlePlayButtonClick}
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/15 hover:bg-[#FF2A2A] text-white border-2 border-white/70 hover:border-[#FF2A2A] backdrop-blur-md flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-[0_0_30px_#FF2A2A] shadow-2xl cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
                ) : (
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                )}
              </button>

              {/* Sub-label below Circular Play Button */}
              <span className="mt-2.5 text-xs font-mono tracking-widest text-white uppercase font-extrabold group-hover:text-[#FF2A2A] transition-colors select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {isPlaying ? "PAUSE" : "PLAY REEL"}
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
            <span className="text-[10px] font-mono tracking-widest text-white/90 uppercase font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="p-1 rounded-full border border-white/40 text-white backdrop-blur-sm"
            >
              <ChevronDown className="w-4 h-4 text-white" />
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
