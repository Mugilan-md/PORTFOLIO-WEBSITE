import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';

const Github = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const categories = [
  { id: 'all', label: 'All Works' },
  { id: 'fullstack', label: 'Full-Stack Apps' },
  { id: 'ai', label: 'AI & Cloud Systems' },
];

const projects = [
  {
    id: 1,
    title: 'Agentic AI Weather Monitoring System',
    category: 'ai',
    categoryLabel: 'AI & Cloud Systems',
    description: 'Enterprise-grade Agentic AI Weather System featuring a 5-Agent Pipeline, Scikit-Learn ML Risk & Anomaly Engines, WebGL 3D visuals, and an interactive Assistant.',
    tags: ['Python', 'Scikit-Learn', 'Agentic AI', 'WebGL 3D', 'SQLite', 'React.js'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/Mugilan-md/Agentic-AI-Weather-Monitoring-System',
    liveUrl: 'https://agentic-ai-wms.vercel.app',
    featured: true,
  },
  {
    id: 2,
    title: 'EduTwin AI - Student Digital Twin Platform',
    category: 'ai',
    categoryLabel: 'AI & Machine Learning',
    description: 'AI-powered Student Digital Twin platform centralizing academic records, profile management, certificate verification, and intelligent ML career insights.',
    tags: ['TypeScript', 'React.js', 'Machine Learning', 'Digital Twin', 'Node.js', 'Vite'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/Mugilan-md/Edutwin-AI',
    liveUrl: 'https://edutwin-ai-mu.vercel.app',
    featured: true,
  },
  {
    id: 3,
    title: 'Serverless Event Registration & Pass Portal',
    category: 'fullstack',
    categoryLabel: 'Full-Stack App',
    description: 'Premium event portal with dynamic seat allocation, UPI QR payment auditing, base64 receipt uploads, and QR entry ticket passes with EmailJS dispatch.',
    tags: ['JavaScript', 'React.js', 'Vite', 'Tailwind CSS', 'EmailJS', 'Serverless'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/Mugilan-md/Event-portal',
    liveUrl: 'https://event-portal-tan.vercel.app',
    featured: false,
  },
  {
    id: 4,
    title: 'Smart Civic Issue Reporting System',
    category: 'fullstack',
    categoryLabel: 'Full-Stack App',
    description: 'Full-stack civic issue reporting SaaS web app for logging potholes, garbage, and water issues with geolocation, photo uploads, and admin tracking dashboard.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'SaaS UI'],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/Mugilan-md/Smart-Civic-Issue-System',
    liveUrl: 'https://smart-civic-issue-system.vercel.app',
    featured: false,
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative w-full bg-white text-black py-28 overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-[#FF2A2A] uppercase font-bold">
              <Sparkles className="w-4 h-4 text-[#FF2A2A]" />
              <span>Selected Works // 2026</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-['Outfit'] tracking-tight uppercase leading-none">
              Featured <span className="text-stroke-black text-transparent">Projects</span>
            </h2>
          </motion.div>

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-black text-white font-bold shadow-lg scale-105'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-black'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-zinc-950 text-white rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl flex flex-col justify-between hover:border-[#FF2A2A] transition-colors duration-500"
              >
                {/* Project Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90" />

                  {/* Category Badge Top Left */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-widest uppercase text-white font-bold">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] uppercase tracking-tight text-white group-hover:text-[#FF2A2A] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-400 font-normal leading-relaxed font-['Inter']">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Links Footer */}
                  <div className="pt-4 border-t border-zinc-900 flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-zinc-900 hover:bg-[#FF2A2A] text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-zinc-900 hover:bg-[#FF2A2A] text-white transition-colors"
                        title="Open Live Deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

