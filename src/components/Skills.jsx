import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Film, Wrench, Cpu, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Architecture',
    subtitle: 'UI/UX & Interactive Engineering',
    icon: Code2,
    accentColor: 'from-[#FF2A2A] to-rose-600',
    skills: [
      { name: 'React 19 / JSX', level: 'Expert', desc: 'Custom hooks, state isolation, dynamic DOM hydration' },
      { name: 'Tailwind CSS v4', level: 'Expert', desc: 'Design tokens, custom utility classes, responsive grids' },
      { name: 'Framer Motion', level: 'Advanced', desc: 'Physics-based spring animations & scroll timeline triggers' },
      { name: 'JavaScript / ES6+', level: 'Expert', desc: 'Async execution, closure scopes, performance optimization' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Cloud Systems',
    subtitle: 'APIs, Microservices & Databases',
    icon: Server,
    accentColor: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'Node.js & Express', level: 'Expert', desc: 'RESTful API routing, middleware authentication, rate limiting' },
      { name: 'MongoDB / Mongoose', level: 'Advanced', desc: 'Document schemas, aggregate queries, indexing optimizations' },
      { name: 'REST & WebSockets', level: 'Expert', desc: 'Real-time state sync & JSON API contract definitions' },
      { name: 'Vercel / Cloud Deploy', level: 'Advanced', desc: 'Serverless functions, edge routing & CI/CD automation' },
    ],
  },
  {
    id: 'video',
    title: 'Video & Cinema Production',
    subtitle: '4K Editing, VFX & Motion Graphics',
    icon: Film,
    accentColor: 'from-purple-500 to-indigo-600',
    skills: [
      { name: 'Adobe After Effects', level: 'Expert', desc: '3D camera motion, lower thirds, title animation & particles' },
      { name: 'Premiere Pro', level: 'Expert', desc: 'Speed ramping, multi-cam narrative pacing, audio sync' },
      { name: 'DaVinci Resolve', level: 'Advanced', desc: 'Node-based color grading, LUT mapping, skin tone recovery' },
      { name: 'Spatial Audio Design', level: 'Advanced', desc: 'Sound design, noise suppression & audio mastering' },
    ],
  },
  {
    id: 'tools',
    title: 'DevOps & Workflow Tools',
    subtitle: 'Tooling, Code Quality & Build Systems',
    icon: Wrench,
    accentColor: 'from-amber-500 to-orange-600',
    skills: [
      { name: 'Vite & Build Engines', level: 'Expert', desc: 'HMR dev server, bundle splitting, tree-shaking' },
      { name: 'Git & GitHub Workflows', level: 'Expert', desc: 'Branch management, pull requests & code review pipelines' },
      { name: 'Oxlint & Code Quality', level: 'Advanced', desc: 'AST static linting & JavaScript code safety rules' },
      { name: 'PostCSS & CSS Tools', level: 'Advanced', desc: 'Automated prefixing, custom media queries & theme variables' },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#0d0d0d] text-white py-32 overflow-hidden flex flex-col justify-center"
    >
      {/* Background Neon Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF2A2A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-rose-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full space-y-20">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold tracking-widest text-[#FF2A2A] uppercase"
          >
            <Cpu className="w-3.5 h-3.5 text-[#FF2A2A]" />
            <span>// Core Technical Arsenal</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-['Outfit'] tracking-tight uppercase leading-tight text-white"
          >
            Engineered for Speed & Visual Brilliance
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg font-['Inter'] leading-relaxed"
          >
            Combining modern JavaScript web stacks with professional cinema post-production tools to deliver complete digital products.
          </motion.p>
        </div>

        {/* 4-Category Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => {
            const IconComponent = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-panel-dark rounded-3xl p-8 border border-white/10 hover:border-[#FF2A2A]/40 transition-all duration-500 group relative overflow-hidden shadow-2xl flex flex-col justify-between"
              >
                {/* Glowing Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`} />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold tracking-widest text-[#FF2A2A] uppercase">
                        {category.subtitle}
                      </span>
                      <h3 className="text-2xl font-black font-['Outfit'] tracking-tight text-white group-hover:text-[#FF2A2A] transition-colors">
                        {category.title}
                      </h3>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-[#FF2A2A] group-hover:border-[#FF2A2A] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Skills List inside Category */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-colors space-y-1"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-sm font-['Outfit'] text-white flex items-center space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-[#FF2A2A]" />
                            <span>{skill.name}</span>
                          </span>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FF2A2A]/20 text-[#FF2A2A] border border-[#FF2A2A]/30">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 font-['Inter'] leading-normal pl-6">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Badge */}
                <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-neutral-500">
                  <span>PRODUCTION READY</span>
                  <Zap className="w-4 h-4 text-[#FF2A2A]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-neutral-900 to-zinc-900 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-2xl bg-[#FF2A2A]/20 text-[#FF2A2A] border border-[#FF2A2A]/30">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold font-['Outfit'] text-white">Clean Code & High Performance Guaranteed</h4>
              <p className="text-sm text-neutral-400 font-['Inter']">Responsive layouts, optimized asset loading, accessible HTML markup, and maintainable modular code structures.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-white text-black font-extrabold text-xs uppercase font-mono tracking-widest hover:bg-[#FF2A2A] hover:text-white transition-colors flex-shrink-0"
          >
            Request Technical Deck →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
