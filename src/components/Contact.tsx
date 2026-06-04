import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, Clipboard, Check, Sparkles, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import Magnetic from './Magnetic';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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
    <section id="contact" className="py-24 relative z-10 overflow-hidden bg-black border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3 h-3 text-accent-tertiary" />
            <span>Employment Inquiries</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Get In Touch.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary rounded-full"
          ></motion.div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md">
              I am currently open to **Full-Time SDE** positions and **Java Full Stack Developer** roles starting in **2026**. Let's discuss how I can contribute to your team.
            </p>
            
            <div className="flex flex-col gap-4">
              {/* Email Copier Card */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-primary/30 transition-colors group cursor-default"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-black/50 p-3 rounded-xl text-accent-primary border border-white/5 group-hover:scale-105 group-hover:text-accent-tertiary transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Email</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white font-medium hover:text-accent-secondary transition-colors">{PERSONAL_INFO.email}</a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 bg-black/40 hover:bg-black border border-white/5 hover:border-accent-primary/40 text-slate-400 hover:text-white rounded-lg transition-all cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Clipboard className="w-4 h-4" />}
                </button>
              </motion.div>
              
              {/* Phone Copier Card */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-primary/30 transition-colors group cursor-default"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-black/50 p-3 rounded-xl text-accent-primary border border-white/5 group-hover:scale-105 group-hover:text-accent-tertiary transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Phone</p>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white font-medium hover:text-accent-secondary transition-colors">{PERSONAL_INFO.phone}</a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 bg-black/40 hover:bg-black border border-white/5 hover:border-accent-primary/40 text-slate-400 hover:text-white rounded-lg transition-all cursor-pointer"
                  title="Copy phone number to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-green-400" /> : <Clipboard className="w-4 h-4" />}
                </button>
              </motion.div>

              {/* Location Card */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 cursor-default group"
              >
                <div className="bg-black/50 p-3 rounded-xl text-accent-primary border border-white/5 group-hover:scale-105 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Location</p>
                  <p className="text-white font-medium">Bangalore, Karnataka, India</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Google Form Link Card */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between h-full min-h-[420px]"
          >
            {/* Grid background decor */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-20"></div>

            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary text-[10px] font-semibold uppercase tracking-wider mb-6">
                  <Sparkles className="w-3 h-3 text-accent-tertiary" />
                  <span>Streamlined Inquiry</span>
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  Let's Connect & Collaborate
                </h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                  To keep track of opportunities and respond as efficiently as possible, I use a structured Google Form. Click below to share details about your role, company, or project request.
                </p>

                <div className="flex flex-col gap-3.5 bg-white/[0.02] border border-white/5 rounded-2xl p-5 mb-2">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">What you can expect:</h4>
                  <ul className="text-xs text-slate-400 space-y-2.5">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-1.5 flex-shrink-0"></span>
                      <span>Immediate notification sent straight to my inbox upon completion.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary mt-1.5 flex-shrink-0"></span>
                      <span>Detailed follow-up or reply from me within 24–48 hours.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-tertiary mt-1.5 flex-shrink-0"></span>
                      <span>Option to schedule a call directly for matching opportunities.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Magnetic className="w-full">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfWZGPXmfz9OakT1MwQSjzuWi-CVFJ3tx3Lpkb6U6_nCZzyqg/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-2.5 w-full py-4 bg-white hover:bg-slate-200 text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-white/10"
                >
                  <span>Open Contact Form</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent-primary" />
                </a>
              </Magnetic>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
