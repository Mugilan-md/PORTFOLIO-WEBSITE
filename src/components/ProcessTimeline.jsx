import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Compass, Palette, Code, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Define',
    subtitle: 'Discovery & Strategy',
    description: 'Deconstructing core objectives, user personas, and product roadmap to lay down an architectural blueprint built for performance.',
    icon: Compass,
    rotation: 'rotate-2',
    position: 'right',
  },
  {
    id: '02',
    title: 'Design',
    subtitle: 'UI/UX & Interactive Prototyping',
    description: 'Crafting luxury visual systems, micro-interactions, dark glassmorphism UIs, and responsive layouts tailored to captivate your audience.',
    icon: Palette,
    rotation: '-rotate-2',
    position: 'left',
  },
  {
    id: '03',
    title: 'Build',
    subtitle: 'Clean High-Speed Code',
    description: 'Writing scalable React.js, Node.js, and API structures. Optimized bundle sizes, smooth Framer Motion dynamics, and strict TypeScript types.',
    icon: Code,
    rotation: 'rotate-3',
    position: 'right',
  },
  {
    id: '04',
    title: 'Launch',
    subtitle: 'Deployment & Scaling',
    description: 'Rigorous cross-browser testing, SEO optimization, analytics integration, and seamless production deployment to Vercel or AWS.',
    icon: Rocket,
    rotation: '-rotate-3',
    position: 'left',
  },
];

// Full continuous curve for smooth mask reveal
const fullPathD = "M 500 0 C 500 40, 750 60, 750 160 C 750 320, 250 380, 250 560 C 250 720, 750 780, 750 960 C 750 1120, 250 1180, 250 1360 C 250 1480, 500 1540, 500 1600";

// Continuous (solid) segments: path leaving each card (first half of each bezier curve)
const continuousPathD = "M 500 0 C 500 28, 622.5 46.2, 696 88.9 M 750 160 C 750 272, 505 335, 358 424.5 M 250 560 C 250 672, 495 735, 642 824.5 M 750 960 C 750 1072, 505 1135, 358 1224.5 M 250 1360 C 250 1444, 372.5 1498.6, 446 1544.4";

// Stripped (dashed) segments: path entering each card (second half of each bezier curve)
const strippedPathD = "M 696 88.9 C 727.5 107.2, 750 130, 750 160 M 358 424.5 C 295 462.8, 250 506, 250 560 M 642 824.5 C 705 862.8, 750 906, 750 960 M 358 1224.5 C 295 1262.8, 250 1306, 250 1360 M 446 1544.4 C 477.5 1564, 500 1582, 500 1600";

export default function ProcessTimeline() {
  const containerRef = useRef(null);

  // Track scroll progress for the SVG path growth
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 80%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform path length for SVG path animation
  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full bg-white text-black py-32 overflow-hidden bg-grid-pattern"
    >
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6 mb-24 relative z-10">
        
        {/* Rounded Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-neutral-100 border border-neutral-200 shadow-sm text-xs font-mono font-bold tracking-widest text-[#FF2A2A] uppercase"
        >
          <CheckCircle2 className="w-4 h-4 text-[#FF2A2A]" />
          <span>How We Work</span>
        </motion.div>

        {/* Headline with hand-drawn sketch arrow */}
        <div className="relative inline-block">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-['Outfit'] leading-tight max-w-3xl mx-auto"
          >
            Let us show you how we drive your brand to new heights
          </motion.h2>

          {/* Hand-drawn Sketch Arrow SVG */}
          <motion.svg
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden sm:block absolute -right-16 top-1/2 w-20 h-20 text-[#FF2A2A] pointer-events-none transform rotate-12"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M10,20 C40,10 70,30 80,60 M80,60 L65,55 M80,60 L75,45" />
          </motion.svg>
        </div>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto font-['Inter']"
        >
          A structured 4-step execution model designed to move from concept to award-winning launch with zero friction.
        </motion.p>
      </div>

      {/* Main Timeline Section */}
      <div className="max-w-6xl mx-auto px-6 relative min-h-[1100px]">
        
        {/* SVG Curved S-Curve Path (Desktop & Tablet): Half Continuous leaving card, Half Stripped entering next card */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1600"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Mask: Animated solid white stroke that progressively unmasks the path */}
              <mask id="process-path-mask" maskUnits="userSpaceOnUse">
                <motion.path
                  d={fullPathD}
                  stroke="#ffffff"
                  strokeWidth="16"
                  strokeLinecap="round"
                  fill="none"
                  style={{ pathLength }}
                />
              </mask>
            </defs>

            {/* Background static continuous guide lines (leaving cards) */}
            <path
              d={continuousPathD}
              stroke="#e5e5e5"
              strokeWidth="4"
              fill="none"
            />

            {/* Background static stripped/dashed guide lines (entering next card) */}
            <path
              d={strippedPathD}
              stroke="#e5e5e5"
              strokeWidth="4"
              strokeDasharray="12 12"
              fill="none"
            />

            {/* Scroll-driven animated red path: continuous when leaving card, stripped when entering card */}
            <g mask="url(#process-path-mask)">
              <path
                d={continuousPathD}
                stroke="#000000"
                strokeWidth="6"
                fill="none"
              />
              <path
                d={strippedPathD}
                stroke="#000000"
                strokeWidth="6"
                strokeDasharray="12 12"
                fill="none"
              />
            </g>

            {/* Glowing Accent Connector Nodes at each Card position */}
            <circle cx="750" cy="160" r="8" fill="#000000" />
            <circle cx="250" cy="560" r="8" fill="#000000" />
            <circle cx="750" cy="960" r="8" fill="#000000" />
            <circle cx="250" cy="1360" r="8" fill="#000000" />
          </svg>
        </div>

        {/* Mobile Vertical Dashed Line */}
        <div className="absolute top-0 bottom-0 left-8 md:hidden w-1 bg-neutral-200 border-r-2 border-dashed border-black pointer-events-none" />

        {/* Process Tag Cards */}
        <div className="space-y-24 md:space-y-36 relative z-10 pt-10">
          {steps.map((step) => {
            const IconComp = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
                className={`flex flex-col md:flex-row items-center ${
                  step.position === 'left'
                    ? 'md:justify-start'
                    : 'md:justify-end'
                }`}
              >
                <div
                  className={`w-full md:w-[480px] group cursor-pointer transform ${step.rotation} transition-all duration-500 hover:rotate-0 hover:scale-105 ml-12 md:ml-0`}
                >
                  {/* Tag Card with Hole Punch Details */}
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="relative bg-white border border-neutral-200 rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:bg-[#FF2A2A] hover:text-white transition-colors duration-500 group-hover:shadow-[0_25px_60px_rgba(255,42,42,0.35)] overflow-hidden"
                  >
                    {/* Luggage Tag Hole Punch Detail at Top */}
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-neutral-100 border border-neutral-300 shadow-inner group-hover:bg-black/20 group-hover:border-white/30 transition-colors" />
                    </div>

                    {/* Top Row: Large Italic Serif Number & Icon */}
                    <div className="flex justify-between items-center mb-6 pt-4">
                      <span className="text-5xl font-extrabold italic font-['Playfair_Display'] text-neutral-300 group-hover:text-white/90 transition-colors">
                        {step.id}
                      </span>
                      <div className="p-3.5 rounded-2xl bg-neutral-100 group-hover:bg-white/20 group-hover:text-white text-black transition-colors">
                        <IconComp className="w-7 h-7 text-[#FF2A2A] group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1 mb-4">
                      <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-400 group-hover:text-white/80 transition-colors">
                        {step.subtitle}
                      </span>
                      <h3 className="text-3xl font-black font-['Outfit'] tracking-tight group-hover:text-white text-black transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 group-hover:text-white/95 text-base leading-relaxed font-['Inter'] transition-colors">
                      {step.description}
                    </p>

                    {/* Corner Accent Detail */}
                    <div className="mt-8 pt-4 border-t border-neutral-100 group-hover:border-white/20 flex justify-between items-center text-xs font-mono text-neutral-400 group-hover:text-white/80">
                      <span>STAGE {step.id} / 04</span>
                      <span className="font-bold uppercase group-hover:underline">Explore Workflow →</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Bottom Section: Handwritten Sketchbook Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center mt-28 relative z-10"
      >
        <span className="inline-block text-4xl sm:text-5xl font-['Caveat'] text-[#FF2A2A] font-bold transform -rotate-3 select-none">
          Ready to be delivered! ✨
        </span>
      </motion.div>
    </section>
  );
}
