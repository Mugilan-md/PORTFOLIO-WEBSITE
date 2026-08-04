import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Copy, Check, Sparkles, MessageSquare, Clock, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';

const services = ['Full-Stack Web App', 'Video Editing & VFX', 'UI/UX Design', 'Full Retainer'];
const budgetRanges = ['< $1,000', '$1,000 - $3,000', '$3,000 - $7,000', '$7,000+'];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [selectedService, setSelectedService] = useState('Full-Stack Web App');
  const [selectedBudget, setSelectedBudget] = useState('$1,000 - $3,000');
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mugilan20062007@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF2A2A', '#ffffff', '#111111'],
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#111111] text-white py-32 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF2A2A]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold tracking-widest text-[#FF2A2A] uppercase"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#FF2A2A]" />
            <span>// Direct Consultation Hub</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-['Outfit'] tracking-tight text-white uppercase leading-tight"
          >
            Let's Build Something Extraordinary Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg font-['Inter'] leading-relaxed"
          >
            Have a new web application to launch, a brand video reel to produce, or technical consulting needed? Send a message directly to start the discovery process.
          </motion.p>
        </div>

        {/* 2-Column Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Fast Copy Email Card & Status Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Quick Email Copy Card */}
            <div className="glass-panel-dark rounded-3xl p-8 border border-white/15 space-y-6 relative overflow-hidden group shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#FF2A2A] uppercase tracking-widest">
                  DIRECT EMAIL
                </span>
                <Sparkles className="w-4 h-4 text-[#FF2A2A]" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold font-['Outfit'] text-white">
                  mugilan20062007@gmail.com
                </h4>
                <p className="text-xs text-neutral-400 font-['Inter']">
                  Click below to copy email address directly to your clipboard.
                </p>
              </div>

              <button
                onClick={handleCopyEmail}
                className={`w-full py-4 rounded-2xl font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 border ${
                  copied
                    ? 'bg-emerald-500 text-black border-emerald-400 shadow-lg shadow-emerald-500/20'
                    : 'bg-white/10 hover:bg-[#FF2A2A] hover:border-[#FF2A2A] text-white border-white/20'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Availability & Response Times Badges */}
            <div className="glass-panel-dark rounded-3xl p-8 border border-white/10 space-y-6">
              <h4 className="text-xs font-mono font-bold text-[#FF2A2A] uppercase tracking-widest">
                // GUARANTEES & AVAILABILITY
              </h4>

              <div className="space-y-4 font-['Inter'] text-sm">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">Worldwide Client Support</h5>
                    <p className="text-xs text-neutral-400">Available across US, European, and Asian time zones.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">24-Hour Response Turnaround</h5>
                    <p className="text-xs text-neutral-400">All project inquiries receive a response within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel-dark rounded-3xl p-8 sm:p-12 border border-white/15 shadow-2xl relative"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#FF2A2A] text-white flex items-center justify-center mx-auto shadow-xl">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black font-['Outfit'] uppercase">Message Transmitted!</h3>
                <p className="text-neutral-400 text-sm max-w-md mx-auto">
                  Thank you for reaching out. B. Mugilan will review your requirements and respond shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Service Type Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-300 block">
                    01. What service do you need?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <button
                        type="button"
                        key={service}
                        onClick={() => setSelectedService(service)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all duration-300 border ${
                          selectedService === service
                            ? 'bg-[#FF2A2A] text-white border-[#FF2A2A] shadow-md shadow-[#FF2A2A]/30'
                            : 'bg-white/5 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-300 block">
                    02. Estimated Project Budget
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetRanges.map((budget) => (
                      <button
                        type="button"
                        key={budget}
                        onClick={() => setSelectedBudget(budget)}
                        className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 border ${
                          selectedBudget === budget
                            ? 'bg-white text-black border-white shadow-md'
                            : 'bg-white/5 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-300 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 font-['Inter'] text-sm focus:outline-none focus:border-[#FF2A2A] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-300 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 font-['Inter'] text-sm focus:outline-none focus:border-[#FF2A2A] transition-colors"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-300 block">
                    Project Brief / Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project, timeline, or key objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 font-['Inter'] text-sm focus:outline-none focus:border-[#FF2A2A] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#FF2A2A] text-white font-extrabold text-sm uppercase font-mono tracking-widest shadow-[0_10px_30px_rgba(255,42,42,0.4)] transition-all duration-300 hover:bg-white hover:text-black hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <span>Send Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>

              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
