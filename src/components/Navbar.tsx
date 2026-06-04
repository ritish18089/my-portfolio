import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS } from '../data';
import { Menu, X, FileText, Sun, Moon } from 'lucide-react';
import ResumeModal from './ResumeModal';
import Magnetic from './Magnetic';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Theme initialization
    const savedTheme = localStorage.getItem('theme');
    const isLightMode = savedTheme === 'light';
    setIsLight(isLightMode);
    if (isLightMode) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextLight = !isLight;
    setIsLight(nextLight);
    if (nextLight) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Magnetic>
            <a href="#home" className="text-xl font-heading font-bold text-white relative group block">
              <span className="text-gradient">R</span>itish <span className="text-gradient">K</span>annur.
            </a>
          </Magnetic>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group block"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all group-hover:w-full rounded-full"></span>
                </a>
              </li>
            ))}
            <li>
              <Magnetic>
                <button 
                  onClick={toggleTheme}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white cursor-pointer transition-all hover:border-accent-primary/50 flex items-center justify-center"
                  aria-label="Toggle light/dark theme"
                >
                  {isLight ? <Moon className="w-4 h-4 text-accent-secondary" /> : <Sun className="w-4 h-4 text-accent-primary" />}
                </button>
              </Magnetic>
            </li>
            <li>
              <Magnetic>
                <button 
                  onClick={() => setIsResumeOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full bg-accent-primary/10 hover:bg-accent-primary/25 border border-accent-primary/30 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                >
                  <FileText className="w-4 h-4 text-accent-primary" />
                  <span>Interactive CV</span>
                </button>
              </Magnetic>
            </li>
          </ul>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl border-l border-white/5 px-6 py-6 md:hidden flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-heading font-bold text-gradient">Ritish Kannur.</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white cursor-pointer" aria-label="Close menu">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <ul className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-heading font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                
                <li className="pt-6 border-t border-white/10">
                  <button 
                    onClick={() => {
                      toggleTheme();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all"
                  >
                    {isLight ? (
                      <>
                        <Moon className="w-5 h-5 text-accent-secondary" />
                        <span>Switch to Dark Mode</span>
                      </>
                    ) : (
                      <>
                        <Sun className="w-5 h-5 text-accent-primary" />
                        <span>Switch to Light Mode</span>
                      </>
                    )}
                  </button>
                </li>

                <li className="pt-2">
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsResumeOpen(true);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent-primary/20 hover:bg-accent-primary/30 border border-accent-primary/40 text-white font-medium transition-all"
                  >
                    <FileText className="w-5 h-5 text-accent-primary" />
                    <span>View Interactive CV</span>
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Render Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
