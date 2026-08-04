import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerHireMeEffect = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.1, x: 0.85 },
      colors: ['#FF2A2A', '#ffffff', '#111111']
    });

    const contact = document.querySelector('#contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'py-3 bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left Side: Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center text-2xl md:text-3xl font-black font-['Outfit'] tracking-tight text-white transition-opacity hover:opacity-90"
          >
            B.MUGILAN
            <span className="text-[#FF2A2A] text-3xl font-black inline-block transition-transform duration-300 group-hover:scale-125 group-hover:translate-x-0.5">
              .
            </span>
          </a>

          {/* Center Navigation (Desktop) */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative py-1 text-sm font-medium tracking-wider text-white/80 hover:text-white transition-colors uppercase font-['Inter'] group"
              >
                {item.name}
                {/* Animated underline left to right */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF2A2A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Right Side: Hire Me CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <button
              onClick={triggerHireMeEffect}
              className="relative group px-6 py-2.5 rounded-full glass-button text-sm font-semibold text-white tracking-wide overflow-hidden transition-all duration-300 hover:border-[#FF2A2A] hover:shadow-[0_0_25px_rgba(255,42,42,0.4)] hover:scale-105 flex items-center space-x-2"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF2A2A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#FF2A2A] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Red Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-40 bg-[#FF2A2A] flex flex-col justify-between px-8 py-20 text-white overflow-hidden md:hidden"
          >
            {/* Top Close indicator */}
            <div className="flex justify-between items-center pb-6 border-b border-white/20">
              <span className="font-['Outfit'] font-bold text-xl uppercase tracking-widest text-white/80">
                Navigation
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white bg-black/20 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-6 my-auto">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08, duration: 0.3 }}
                  className="text-4xl font-extrabold tracking-tight font-['Outfit'] uppercase hover:text-black transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Bottom Mobile CTA */}
            <div className="pt-6 border-t border-white/20">
              <button
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  triggerHireMeEffect(e);
                }}
                className="w-full py-4 rounded-full bg-black text-white font-bold tracking-wider text-center uppercase shadow-xl hover:bg-zinc-900 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-5 h-5 text-[#FF2A2A]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
