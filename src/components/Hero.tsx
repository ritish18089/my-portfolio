import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import { ArrowRight, Download, Clipboard, Check, FileText, Sparkles, MapPin, CheckCircle, Code, Database, Server } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import ResumeModal from './ResumeModal';
import Magnetic from './Magnetic';

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-black">
      {/* Background purple & fuchsia ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-primary/15 rounded-full blur-[130px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-secondary/15 rounded-full blur-[120px] opacity-25 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-tertiary/5 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* Left Column: Bio & Info */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-semibold uppercase tracking-wider mb-6 w-fit"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-accent-tertiary" />
            <span>{PERSONAL_INFO.role}</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.08] mb-6"
          >
            Engineering <br />
            <span className="text-gradient">Robust Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-slate-400 max-w-xl mb-8 leading-relaxed font-light"
          >
            Hi, I'm <span className="text-white font-medium">{PERSONAL_INFO.name}</span>. {PERSONAL_INFO.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <Magnetic>
              <a 
                href="#projects" 
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-102 active:scale-98 shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            
            <Magnetic>
              <button 
                onClick={() => setIsResumeOpen(true)}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-primary/40 text-white font-medium rounded-full transition-all cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
              >
                <FileText className="w-4 h-4 text-accent-primary group-hover:scale-110 transition-transform" />
                <span>View Interactive CV</span>
              </button>
            </Magnetic>
          </motion.div>
        </div>
        
        {/* Right Column: Profile & Recruiter Corner */}
        <div className="flex flex-col gap-6 relative">

          {/* Profile Picture Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[280px] aspect-square mx-auto lg:mr-auto lg:ml-0 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-tr from-accent-primary/10 to-accent-secondary/10 p-1 group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-navy-light to-black -z-10"></div>
            <div className="w-full h-full rounded-2xl overflow-hidden bg-black flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
              <img 
                 src={profileImg} 
                 alt="Ritish Kannur Profile" 
                 className="w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] text-white font-medium uppercase tracking-wider">Available immediately</span>
              </div>
            </div>
          </motion.div>

          {/* Recruiter Corner Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-6 rounded-3xl relative overflow-hidden purple-glow-border"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Sparkles className="w-24 h-24 text-accent-primary" />
            </div>

            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-primary"></span>
                </span>
                <h3 className="text-sm font-heading font-semibold text-white tracking-wider uppercase">Recruiter Quick Access</h3>
              </div>
              <span className="text-[10px] text-accent-secondary font-mono">Bangalore, India</span>
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
              Information Science & Engineering Graduate from <strong className="text-white font-medium">APS College of Engineering</strong> | Java Full Stack Developer | Building innovative digital solutions through code and creativity.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Copy Email Button */}
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-accent-primary/30 transition-all text-left text-xs text-slate-300 font-medium group cursor-pointer"
              >
                <div className="truncate pr-2">
                  <span className="block text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Copy Email</span>
                  <span className="truncate block font-mono text-[11px] text-white">{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex-shrink-0 bg-black/40 p-1.5 rounded-lg border border-white/5 text-accent-primary group-hover:scale-105 transition-all">
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Clipboard className="w-3.5 h-3.5" />}
                </div>
              </button>

              {/* Copy Phone Button */}
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-accent-primary/30 transition-all text-left text-xs text-slate-300 font-medium group cursor-pointer"
              >
                <div className="truncate pr-2">
                  <span className="block text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Copy Phone</span>
                  <span className="truncate block font-mono text-[11px] text-white">{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex-shrink-0 bg-black/40 p-1.5 rounded-lg border border-white/5 text-accent-primary group-hover:scale-105 transition-all">
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Clipboard className="w-3.5 h-3.5" />}
                </div>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <Magnetic>
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-accent-primary/20 hover:bg-accent-primary/30 border border-accent-primary/30 rounded-xl transition-all cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Open Digital CV</span>
                </button>
              </Magnetic>
              <Magnetic>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-black bg-white hover:bg-slate-200 rounded-xl transition-all"
                >
                  <span>Schedule Interview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll down</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-slate-600 to-transparent"></div>
      </motion.div>

      {/* Render Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
