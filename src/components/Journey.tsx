import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../data';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

export default function Journey() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-black">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] font-semibold uppercase tracking-wider mb-4"
          >
            <Calendar className="w-3 h-3 text-accent-tertiary" />
            <span>Timeline History</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            My Journey.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary rounded-full"
          ></motion.div>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
               <div className="p-3 rounded-2xl bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
                 <Briefcase className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-heading font-bold text-white">Experience</h3>
            </div>
            
            <div className="relative border-l border-white/5 pl-8 ml-5 space-y-12">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="relative"
                >
                   {/* Node indicator with outer purple pulse */}
                   <div className="absolute -left-[42px] top-1.5 flex items-center justify-center">
                     <span className="absolute inline-flex h-4 w-4 rounded-full bg-accent-primary/30 animate-ping"></span>
                     <div className="relative w-4.5 h-4.5 rounded-full bg-black border-4 border-accent-primary"></div>
                   </div>
                   
                   <motion.div 
                     whileHover={{ y: -5, scale: 1.01 }}
                     transition={{ type: "spring", stiffness: 300, damping: 20 }}
                     className="glass-panel p-6 rounded-3xl relative group hover:border-accent-primary/30 hover:shadow-[0_10px_20px_rgba(168,85,247,0.05)] transition-all duration-300 cursor-default"
                   >
                     <span className="inline-block px-3 py-1 mb-4 text-[10px] font-mono font-semibold rounded-full bg-white/5 border border-white/5 text-accent-secondary">
                       {exp.date}
                     </span>
                     <h4 className="text-xl font-heading font-bold text-white mb-1 group-hover:text-accent-primary transition-colors duration-300">{exp.role}</h4>
                     <p className="text-slate-400 font-medium mb-4 text-sm">{exp.company}</p>
                     
                     <ul className="space-y-3">
                       {exp.responsibilities.map((resp, i) => (
                         <li key={i} className="flex items-start text-sm text-slate-300 font-light leading-relaxed">
                           <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/50 mt-1.5 mr-3 flex-shrink-0"></span>
                           {resp}
                         </li>
                       ))}
                     </ul>
                   </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 rounded-2xl bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20">
                   <GraduationCap className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-heading font-bold text-white">Education</h3>
              </div>
              
              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 25 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     whileHover={{ y: -6, scale: 1.01 }}
                     transition={{ type: "spring", stiffness: 300, damping: 20 }}
                     className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:border-accent-secondary/30 transition-all duration-300 cursor-default"
                   >
                     {/* Watermark Logo */}
                     <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                       <GraduationCap className="w-24 h-24 text-accent-secondary" />
                     </div>
                     <span className="inline-block px-3 py-1 mb-4 text-[10px] font-mono font-semibold rounded-full bg-white/5 border border-white/5 text-accent-secondary">
                       {edu.date}
                     </span>
                     <h4 className="text-xl font-heading font-bold text-white mb-2">{edu.degree}</h4>
                     <p className="text-slate-400 font-medium mb-4 text-sm">{edu.institution}</p>
                     <p className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary">
                       <Award className="w-4 h-4 text-accent-tertiary" />
                       <span>CGPA: {edu.cgpa}</span>
                     </p>
                   </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 rounded-2xl bg-accent-tertiary/10 text-accent-tertiary border border-accent-tertiary/20">
                   <Award className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-heading font-bold text-white">Certifications</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     whileHover={{ y: -5, scale: 1.02 }}
                     transition={{ type: "spring", stiffness: 350, damping: 22 }}
                     className="glass-panel p-5 rounded-2xl flex flex-col justify-between group hover:border-accent-tertiary/30 hover:shadow-[0_0_15px_rgba(236,72,153,0.05)] transition-all duration-300 cursor-default"
                   >
                     <h4 className="text-sm font-heading font-bold text-white mb-6 group-hover:text-accent-primary transition-colors">{cert.name}</h4>
                     <div className="flex items-center justify-between mt-auto">
                        <span className="text-xs font-semibold text-slate-400">{cert.issuer}</span>
                        <span className="text-[10px] font-mono text-slate-500 font-medium">{cert.date}</span>
                     </div>
                   </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
