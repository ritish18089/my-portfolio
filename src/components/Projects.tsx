import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data';
import { ExternalLink, Github, Layers, TrendingUp, Cpu, Clock } from 'lucide-react';

export default function Projects() {
  // Mock impact metrics to display for recruiters
  const projectMetrics = [
    {
      metric: "94.2% Accuracy",
      label: "Model Classification",
      icon: Cpu
    },
    {
      metric: "60 FPS Render",
      label: "AR Latency < 50ms",
      icon: TrendingUp
    },
    {
      metric: "35% Delay Reduction",
      label: "In Service Scheduling",
      icon: Clock
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10 bg-black">
      {/* Ambient decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-secondary/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] font-semibold uppercase tracking-wider mb-4"
          >
            <Layers className="w-3 h-3 text-accent-tertiary" />
            <span>Featured Case Studies</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Selected Works.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary rounded-full"
          ></motion.div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {PROJECTS.map((project, idx) => {
            const MetricIcon = projectMetrics[idx]?.icon || Cpu;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative flex flex-col h-full rounded-3xl p-[1px] overflow-hidden bg-white/[0.05] hover:bg-gradient-to-br hover:from-accent-primary/40 hover:to-accent-tertiary/40 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] cursor-default"
              >
                {/* Dark Inner Base */}
                <div className="absolute inset-0 bg-navy-light/95 backdrop-blur-xl group-hover:bg-black/90 transition-all rounded-[23px] z-0"></div>
                
                <div className="relative p-8 h-full flex flex-col z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-accent-primary group-hover:text-accent-tertiary transition-all duration-300">
                      <span className="text-xl font-heading font-bold border-b border-accent-secondary">0{idx + 1}</span>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-white p-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-all"
                        aria-label={`GitHub source code for ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-accent-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Recruiter Appeal: Highlight Impact/Metrics row */}
                  {projectMetrics[idx] && (
                    <div className="mb-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                      <div className="p-2 rounded-xl bg-accent-primary/10 text-accent-primary">
                        <MetricIcon className="w-5 h-5 text-accent-primary group-hover:text-accent-tertiary transition-all" />
                      </div>
                      <div>
                        <span className="block text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Key Outcome / Metric</span>
                        <span className="text-xs font-bold text-white font-mono">{projectMetrics[idx].metric}</span>
                        <span className="text-[10px] text-slate-400 ml-1.5 font-light">({projectMetrics[idx].label})</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-mono text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
