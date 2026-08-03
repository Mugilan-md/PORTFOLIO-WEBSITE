import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Server, Database } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#FF2A2A] text-white pt-24 pb-36 overflow-hidden">
      {/* Abstract Floating Black Star Decorations */}
      <motion.div
        animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-10 text-black text-4xl font-bold select-none opacity-80 pointer-events-none"
      >
        ✦
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 right-12 text-black text-5xl font-bold select-none opacity-80 pointer-events-none"
      >
        ✦
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-28 left-1/4 text-black text-3xl font-bold select-none opacity-70 pointer-events-none"
      >
        ✦
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Hanging Employee ID Badge with Lanyard */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Hanging Lanyard Assembly */}
            <div className="relative flex flex-col items-center w-full max-w-sm">
              {/* Lanyard Strap Anchor at top */}
              <div className="w-10 h-3 bg-black rounded-b-md shadow-md z-20" />
              
              {/* Dual Black Lanyard Straps */}
              <div className="flex justify-center space-x-12 -mt-1 z-10">
                <div className="w-4 h-32 bg-black shadow-inner transform -rotate-6 origin-top" />
                <div className="w-4 h-32 bg-black shadow-inner transform rotate-6 origin-top" />
              </div>

              {/* Metallic Badge Clip */}
              <div className="w-8 h-8 bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-600 rounded-lg -mt-4 z-20 shadow-lg flex items-center justify-center border border-zinc-200">
                <div className="w-4 h-2 bg-zinc-800 rounded-sm" />
              </div>

              {/* Tilted Developer ID Card (-3 degree tilt) */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.03, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="w-full bg-[#1C1C1E] text-white rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-white/10 transform -rotate-3 transition-transform duration-300 relative overflow-hidden group cursor-pointer z-10"
              >
                {/* Lanyard Slot Hole at top of card */}
                <div className="w-12 h-3 bg-black/60 mx-auto rounded-full mb-6 border border-white/20" />

                {/* Badge Header */}
                <div className="flex justify-between items-center mb-6 pb-3 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A2A]" />
                    <span className="text-xs font-mono tracking-widest text-white/70 uppercase">CREATIVE DEV PASS</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#FF2A2A]">#2026-DEV</span>
                </div>

                {/* Profile Photo Area */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-zinc-900 border border-white/10 group-hover:border-[#FF2A2A] transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
                    alt="B. MUGILAN Profile Pass"
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                    <span className="text-xs font-mono text-white/80 uppercase">VERIFIED AUTHOR</span>
                    <Sparkles className="w-4 h-4 text-[#FF2A2A]" />
                  </div>
                </div>

                {/* ID Details */}
                <div className="space-y-1 text-center">
                  <h3 className="text-2xl font-black font-['Outfit'] uppercase tracking-tight text-white">
                    B. MUGILAN
                  </h3>
                  <p className="text-xs font-mono text-[#FF2A2A] uppercase tracking-widest font-semibold">
                    Full Stack Developer
                  </p>
                </div>

                {/* Bottom Barcode */}
                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                  <div className="h-6 flex space-x-1 items-center opacity-70">
                    {[3, 1, 4, 2, 5, 2, 1, 3, 2, 4, 1, 2, 3].map((w, i) => (
                      <div key={i} className={`h-full bg-white rounded-none`} style={{ width: `${w * 2}px` }} />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-white/50">B.MUGILAN INC</span>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Right Column: Bio & Intro */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-6xl sm:text-8xl lg:text-9xl font-black text-black uppercase tracking-tighter font-['Outfit'] leading-none select-none"
            >
              Hello!
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-lg sm:text-xl font-normal leading-relaxed text-white/90 font-['Inter']"
            >
              <p className="text-xl sm:text-2xl font-medium text-white">
                I am <span className="font-black text-black uppercase underline decoration-white underline-offset-4 tracking-tight">B. MUGILAN</span>, a full-stack engineer and digital architect driven by precision, high-speed engineering, and luxury interactive experiences.
              </p>
              <p className="text-white/80">
                Specializing in building robust, highly scalable web solutions using <strong className="text-black font-bold">React.js</strong>, <strong className="text-black font-bold">Node.js</strong>, and <strong className="text-black font-bold">Tailwind CSS</strong>. From pixel-perfect frontends with fluid Framer Motion animations to reliable microservices, I bring ideas to life with agency-grade perfection.
              </p>
            </motion.div>

            {/* Technology Logos (React, Node.js, MongoDB) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-4"
            >
              <h4 className="text-xs font-mono uppercase tracking-widest text-black/80 font-bold mb-6">
                Core Stack Arsenal
              </h4>
              <div className="flex items-center space-x-6 sm:space-x-10">
                
                {/* React Logo Badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.15 }}
                  className="flex items-center space-x-3 px-5 py-3 rounded-2xl bg-black/15 backdrop-blur-md border border-white/20 shadow-lg cursor-pointer group"
                >
                  <Code2 className="w-8 h-8 text-cyan-300 group-hover:rotate-180 transition-transform duration-700" />
                  <span className="font-bold text-sm tracking-wide font-['Outfit']">React.js</span>
                </motion.div>

                {/* Node.js Logo Badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  whileHover={{ scale: 1.15 }}
                  className="flex items-center space-x-3 px-5 py-3 rounded-2xl bg-black/15 backdrop-blur-md border border-white/20 shadow-lg cursor-pointer group"
                >
                  <Server className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-bold text-sm tracking-wide font-['Outfit']">Node.js</span>
                </motion.div>

                {/* MongoDB Logo Badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  whileHover={{ scale: 1.15 }}
                  className="flex items-center space-x-3 px-5 py-3 rounded-2xl bg-black/15 backdrop-blur-md border border-white/20 shadow-lg cursor-pointer group"
                >
                  <Database className="w-8 h-8 text-green-300 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-bold text-sm tracking-wide font-['Outfit']">MongoDB</span>
                </motion.div>

              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Bottom organic torn-paper SVG transition to white section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 sm:h-24 md:h-28 text-white fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,65 C650,140 900,10 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
