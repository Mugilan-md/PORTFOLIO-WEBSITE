import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Preloader Component
 * - Solid bright red (#ff2a2a) background
 * - Centered "B.MUGILAN ." text
 * - Dual-layer text: dark transparent background layer + white foreground layer
 * - 1.6s upward clip-path water fill animation
 * - Cinematic shutter-up exit reveal with logo scale down & fade out
 */
export default function Preloader({ onLoadingComplete }) {
  const [fillFinished, setFillFinished] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Phase 1: 1.6s fill animation finishes
    const fillTimer = setTimeout(() => {
      setFillFinished(true);
    }, 1600);

    // Phase 2: Brief pause (400ms), then start shutter exit animation
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2100);

    // Phase 3: Shutter exit completes (800ms exit), unmount preloader
    const completeTimer = setTimeout(() => {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 2900);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="preloader-overlay"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.95,
              ease: [0.76, 0, 0.24, 1], // Custom cubic bezier for smooth cinematic shutter
            },
          }}
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-[#ff2a2a] select-none overflow-hidden"
        >
          {/* Logo Container */}
          <motion.div
            animate={
              fillFinished
                ? { scale: 0.9, opacity: 0 }
                : { scale: 1, opacity: 1 }
            }
            transition={{
              duration: 0.7,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="relative px-6 py-4 flex items-center justify-center"
          >
            {/* Background Layer: Dark Transparent Text */}
            <span
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black/20 font-['Outfit'] uppercase pointer-events-none whitespace-nowrap"
              aria-hidden="true"
            >
              B.MUGILAN <span className="text-black/30">.</span>
            </span>

            {/* Foreground Layer: Water-Fill White Text */}
            <motion.div
              initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{
                duration: 1.6,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none px-6 py-4"
            >
              <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white font-['Outfit'] uppercase whitespace-nowrap drop-shadow-lg">
                B.MUGILAN <span className="text-black">.</span>
              </span>
            </motion.div>
          </motion.div>

          {/* Luxury bottom indicator line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
            className="absolute bottom-12 h-[2px] w-24 bg-white/40 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
