import React from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../data';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5 px-6 md:px-12 relative z-10 w-full text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-xl font-heading font-bold text-white relative group inline-block mb-1 cursor-default">
            <span className="text-gradient">R</span>itish <span className="text-gradient">K</span>annur.
          </p>
          <p className="text-slate-500 text-xs">
            Designed & Engineered by {PERSONAL_INFO.name} • {new Date().getFullYear()}
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white hover:bg-accent-primary/10 hover:border-accent-primary/20 border border-transparent p-2.5 rounded-xl transition-all"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
