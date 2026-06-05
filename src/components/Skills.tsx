import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../data';
import { Sparkles } from 'lucide-react';

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black border-y border-white/5">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.01]"></div>
      
      {/* Background soft glow spots */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3 h-3 text-accent-tertiary" />
            <span>SDE Capabilities</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Technical Arsenal.
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary mx-auto rounded-full"
          ></motion.div>
        </div>

        <motion.div
           variants={container}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, margin: "-100px" }}
           className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILLS.map((skillGroup, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className="glass-panel p-8 rounded-3xl group hover:border-accent-primary/30 hover:shadow-[0_15px_35px_rgba(168,85,247,0.12)] transition-all duration-300 relative overflow-hidden cursor-default"
            >
               {/* Background Card Grid Line Pattern */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none opacity-40"></div>

               <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 text-accent-primary border border-white/10 group-hover:border-accent-primary/50 group-hover:text-accent-tertiary transition-all duration-300 shadow-inner">
                  <skillGroup.icon className="w-6 h-6" />
               </div>
               
               <h3 className="text-xl font-heading font-bold text-white mb-4 relative z-10">{skillGroup.category}</h3>
               
               <ul className="space-y-3 relative z-10">
                 {skillGroup.items.map((skill, i) => (
                   <li key={i} className="flex items-center text-slate-400 font-light text-sm group-hover:text-slate-300 transition-colors">
                     <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary mr-3 opacity-60 group-hover:bg-accent-primary group-hover:opacity-100 transition-all"></span>
                     {skill}
                   </li>
                 ))}
               </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
