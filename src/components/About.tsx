import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, STATS } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-center">
          {/* Left Column - Intro details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
              My <span className="text-gradient">Introduction.</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-base md:text-lg font-light leading-relaxed mb-12">
              <p>
                Hello, I'm <strong className="text-white font-medium">Ritish Kannur</strong>, an Information Science and Engineering graduate from APS College of Engineering, Bangalore, Karnataka. I am passionate about software development and building innovative digital solutions that solve real-world problems.
              </p>
              <p>
                During my academic journey, I worked on projects such as Plant Disease Detection using Convolutional Neural Networks (CNN) and AI in Interior Design using Augmented Reality, which strengthened my skills in full stack development, artificial intelligence, and problem-solving.
              </p>
              <p className="text-slate-500 text-sm md:text-base font-light">
                I am currently enhancing my expertise as a Java Full Stack Developer, focusing on creating scalable web applications, learning modern technologies, and continuously improving my technical skills to contribute effectively to the software industry.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-panel p-6 rounded-2xl flex flex-col justify-center border-l-2 border-l-accent-primary hover:border-l-accent-tertiary transition-all duration-300 hover:shadow-[0_10px_20px_rgba(168,85,247,0.05)] cursor-default"
                >
                  <p className="text-2xl font-heading font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column - Academic Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
             <div className="glass-panel p-8 rounded-3xl relative z-10 aspect-[4/5] flex flex-col justify-end overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center rounded-3xl opacity-10 -z-10 mix-blend-luminosity transition-transform duration-500 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent rounded-3xl z-0"></div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 mb-3 text-[10px] font-mono font-semibold rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary">
                    Academics
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Information Science & Engineering</h3>
                  <p className="text-accent-secondary font-medium mb-4">Bachelor's Degree • CGPA: 8.44</p>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    Graduating in 2026 with a robust theoretical foundation in computing structures, database design, software engineering methodologies, and analytical problem solving.
                  </p>
                </div>
             </div>
             
             {/* Decorative graphic behind */}
             <div className="absolute -inset-4 bg-gradient-to-tr from-accent-primary/15 to-accent-secondary/15 blur-3xl rounded-3xl -z-10 mt-8 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
