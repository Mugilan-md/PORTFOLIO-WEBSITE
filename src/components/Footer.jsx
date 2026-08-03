import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative w-full bg-[#111111] text-[#F4F4F4] pt-24 pb-8 overflow-hidden flex flex-col justify-between select-none">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full space-y-20">
        
        {/* Contact Column / Section (Placed immediately after Process Timeline) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/60 rounded-3xl p-8 sm:p-14 border border-white/10 backdrop-blur-xl relative overflow-hidden group shadow-2xl"
        >
          {/* Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF2A2A]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#FF2A2A]/20 transition-all duration-700" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Contact Headline */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono tracking-widest text-[#FF2A2A] uppercase font-bold flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#FF2A2A]" />
                <span>// Get In Touch</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-['Outfit'] tracking-tight text-white leading-tight">
                Let's build something extraordinary together.
              </h2>
              <p className="text-neutral-400 text-base font-['Inter'] max-w-xl">
                Have a project in mind, a brand to launch, or need a full-stack developer? Reach out directly.
              </p>
            </div>

            {/* Email Contact Link CTA */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center space-y-4">
              <a
                href="mailto:mugilan20062007@gmail.com"
                className="group relative px-8 py-4 rounded-full bg-[#FF2A2A] text-white font-extrabold text-sm sm:text-base tracking-wide uppercase shadow-[0_10px_30px_rgba(255,42,42,0.4)] transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 flex items-center space-x-3"
              >
                <span>mugilan20062007@gmail.com</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <span className="text-xs font-mono text-neutral-400">
                Typically responds within 24 hours
              </span>
            </div>
          </div>
        </motion.div>

        {/* Information Grid (3-Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          
          {/* Left Column: Creative Services List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xs font-mono tracking-widest text-[#FF2A2A] uppercase font-bold">
              // Core Competencies
            </h4>
            <ul className="space-y-2 font-mono text-xs uppercase tracking-widest text-neutral-400">
              <li className="hover:text-white transition-colors cursor-default">Cinematic Production</li>
              <li className="hover:text-white transition-colors cursor-default">Motion Graphics</li>
              <li className="hover:text-white transition-colors cursor-default">Web Development</li>
              <li className="hover:text-white transition-colors cursor-default">UI/UX Design</li>
            </ul>
          </motion.div>

          {/* Center Column: Experience Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-xs font-mono tracking-widest text-[#FF2A2A] uppercase font-bold">
              // Industry Experience
            </h4>
            <div className="space-y-2">
              <p className="text-xl font-bold font-['Outfit'] text-[#F4F4F4]">
                5+ Years of Experience
              </p>
              <a
                href="#hero"
                className="inline-flex items-center space-x-1 text-sm font-semibold underline underline-offset-4 text-white hover:text-[#FF2A2A] transition-colors group"
              >
                <span>View Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Availability Status & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 md:text-right"
          >
            <h4 className="text-xs font-mono tracking-widest text-[#FF2A2A] uppercase font-bold">
              // Status & Copyright
            </h4>
            <div className="space-y-1 text-xs font-mono text-neutral-400">
              <div className="inline-flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-white">Available Worldwide</span>
              </div>
              <p>© {currentYear} B.MUGILAN. All rights reserved.</p>
              <p className="text-neutral-500">Built with React.js & Framer Motion</p>
            </div>
          </motion.div>

        </div>

        {/* Final Section: Giant Hero Branding Text B.MUGILAN at the VERY END */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center pt-4 pb-2 overflow-hidden group cursor-pointer"
        >
          <h1 className="text-[14vw] leading-none font-black tracking-tighter uppercase font-['Outfit'] text-neutral-200 group-hover:text-white transition-colors duration-700 selection:bg-[#FF2A2A] selection:text-white group-hover:drop-shadow-[0_0_50px_rgba(255,42,42,0.3)]">
            b.mugilan<span className="text-[#FF2A2A]">.</span>
          </h1>
        </motion.div>

      </div>
    </footer>
  );
}
