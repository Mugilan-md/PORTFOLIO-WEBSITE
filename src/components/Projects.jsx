import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, X, Sparkles, ArrowUpRight } from 'lucide-react';

const Github = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const categories = [
  { id: 'all', label: 'All Works' },
  { id: 'fullstack', label: 'Full-Stack Apps' },
  { id: 'video', label: 'Video & Motion Reels' },
  { id: 'ai', label: 'AI & Cloud Systems' },
];

const projects = [
  {
    id: 1,
    title: 'Nexus Stream AI',
    category: 'fullstack',
    categoryLabel: 'Full-Stack App',
    description: 'High-throughput video streaming platform with real-time AI metadata indexing and interactive analytics dashboard.',
    longDescription: 'Nexus Stream AI combines custom HLS video streaming pipelines with Google Gemini vision API to auto-generate timestamped video chapters, automated captions, and engagement heatmaps in real-time.',
    tags: ['React 19', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'Gemini API'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-code-coding-on-a-computer-screen-41551-large.mp4',
    githubUrl: 'https://github.com/Mugilan-md',
    liveUrl: '#hero',
    featured: true,
  },
  {
    id: 2,
    title: 'Cinematic 4K Master Reel',
    category: 'video',
    categoryLabel: 'Video Production',
    description: 'Agency-grade 60-second video showcase featuring custom 3D motion graphics, speed ramping, and spatial audio design.',
    longDescription: 'Crafted for high-end tech launches, this reel blends raw 4K cinema camera footage with DaVinci Resolve color grading, custom After Effects particle systems, and rhythmic sound design.',
    tags: ['After Effects', 'Premiere Pro', 'DaVinci Resolve', '4K Cinema', 'Sound Design'],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-green-screen-41220-large.mp4',
    githubUrl: 'https://github.com/Mugilan-md',
    liveUrl: '#hero',
    featured: true,
  },
  {
    id: 3,
    title: 'Aether Luxury Web Architecture',
    category: 'fullstack',
    categoryLabel: 'Full-Stack App',
    description: 'Ultra-fast web platform built for high-end digital brands with glassmorphic UIs and sub-second page transitions.',
    longDescription: 'Engineered with React, Vite, and custom CSS design tokens. Features webgl canvas shaders, dark-mode glass panel aesthetics, and dynamic page state management.',
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'WebGL', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-41552-large.mp4',
    githubUrl: 'https://github.com/Mugilan-md',
    liveUrl: '#hero',
    featured: false,
  },
  {
    id: 4,
    title: 'Pulse Cloud Telemetry Suite',
    category: 'ai',
    categoryLabel: 'AI & Cloud',
    description: 'Distributed microservices telemetry portal providing real-time server health monitoring and automated anomaly detection.',
    longDescription: 'Combines Node.js backend microservices, MongoDB time-series indexing, and WebSocket live channels to display server throughput, memory spikes, and latency alerts across multi-region deployments.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Docker', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-code-coding-on-a-computer-screen-41551-large.mp4',
    githubUrl: 'https://github.com/Mugilan-md',
    liveUrl: '#hero',
    featured: false,
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative w-full bg-white text-black py-28 overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 shadow-sm text-xs font-mono font-bold tracking-widest text-[#FF2A2A] uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF2A2A]" />
              <span>// Selected Works '26</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black font-['Outfit'] tracking-tight text-black uppercase leading-tight"
            >
              Featured Works & Showcase
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-neutral-600 text-lg font-['Inter'] leading-relaxed"
            >
              A curated lineup of production-ready full-stack applications, video reels, and interactive digital products built for scale and luxury UX.
            </motion.p>
          </div>

          {/* Filter Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 self-start md:self-end"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#FF2A2A] text-white shadow-md shadow-[#FF2A2A]/30 scale-105'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_rgba(255,42,42,0.18)] transition-all duration-500 flex flex-col justify-between"
              >
                {/* Media Card Container */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-video w-full overflow-hidden bg-neutral-900 cursor-pointer group/media"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/media:scale-105 group-hover/media:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/media:opacity-80 transition-opacity duration-300" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold tracking-wider uppercase">
                    {project.categoryLabel}
                  </div>

                  {/* Hover Play / View Details Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/media:opacity-100 transition-all duration-300 scale-90 group-hover/media:scale-100">
                    <div className="w-16 h-16 rounded-full bg-[#FF2A2A] text-white flex items-center justify-center shadow-xl transform transition-transform group-hover/media:scale-110">
                      <Play className="w-7 h-7 fill-white translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col justify-between flex-grow space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-2xl sm:text-3xl font-black font-['Outfit'] tracking-tight text-black hover:text-[#FF2A2A] transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <button
                        onClick={() => setSelectedProject(project)}
                        aria-label="View Project"
                        className="p-2 rounded-full bg-neutral-100 hover:bg-[#FF2A2A] hover:text-white transition-colors group/btn"
                      >
                        <ArrowUpRight className="w-5 h-5 text-neutral-700 group-hover/btn:text-white transition-colors" />
                      </button>
                    </div>

                    <p className="text-neutral-600 font-['Inter'] text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-mono text-[11px] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full text-neutral-600 hover:text-black hover:bg-neutral-100 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        className="p-2 rounded-full text-neutral-600 hover:text-[#FF2A2A] hover:bg-neutral-100 transition-colors"
                        title="Live Preview"
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

      {/* Lightbox / Video Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#111111] text-white rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/70 text-white hover:bg-[#FF2A2A] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black overflow-hidden">
                <video
                  src={selectedProject.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Details */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-[#FF2A2A] uppercase font-bold tracking-widest">
                      {selectedProject.categoryLabel}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-black font-['Outfit'] tracking-tight text-white mt-1">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-3">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code Repo</span>
                    </a>
                    <a
                      href={selectedProject.liveUrl}
                      className="px-5 py-2.5 rounded-full bg-[#FF2A2A] hover:bg-white hover:text-black text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-colors shadow-lg shadow-[#FF2A2A]/40"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-neutral-300 font-['Inter'] text-base leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Tech Stack List */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-neutral-400 font-bold uppercase tracking-wider mr-2">
                    Technologies Used:
                  </span>
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md bg-white/10 text-white font-mono text-xs border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
