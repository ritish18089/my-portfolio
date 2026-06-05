import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, Clipboard, Check, Sparkles, User, Building2, Briefcase, FileText, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import Magnetic from './Magnetic';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    details: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const { name, email, company, role, details } = formData;
    const subject = `Job Opportunity: ${role} at ${company}`;
    const message = `Proposed Role: ${role}\nCompany: ${company}\n\nDetails of the Job:\n${details}`;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          subject,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          details: ''
        });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        throw new Error(data.error || 'Failed to send message.');
      }
    } catch (error: any) {
      console.error('Contact Form Error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Failed to connect. Launching mail client instead...');
      
      // Fallback: trigger mailto if backend fails or is blocked
      setTimeout(() => {
        const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + `\n\nContact Name: ${name}\nContact Email: ${email}`)}`;
        window.location.href = mailtoUrl;
        setStatus('idle');
      }, 2000);
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

          {/* Interactive Hire Form Card */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="glass-panel p-6 md:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between h-full"
          >
            {/* Grid background decor */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-20"></div>

            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
              <div>
                {/* Form Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary border border-accent-primary/20">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider">HIRE RITISH KANNUR</h3>
                    <p className="text-slate-400 text-xs font-light">Provide direct hire details to compose offer</p>
                  </div>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email side-by-side on desktop */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Your Name */}
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                        <User className="w-3.5 h-3.5 text-accent-primary" />
                        <span>Your Name *</span>
                      </label>
                      <input 
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Aaditya HR"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#030208] border border-white/10 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:border-accent-primary/50 transition-colors"
                      />
                    </div>

                    {/* Your Email */}
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                        <Mail className="w-3.5 h-3.5 text-accent-primary" />
                        <span>Your Email *</span>
                      </label>
                      <input 
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. hr@agency.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#030208] border border-white/10 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:border-accent-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                      <Building2 className="w-3.5 h-3.5 text-accent-primary" />
                      <span>Company Name *</span>
                    </label>
                    <input 
                      type="text"
                      name="company"
                      required
                      placeholder="e.g. Mind Matrix Inc"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#030208] border border-white/10 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:border-accent-primary/50 transition-colors"
                    />
                  </div>

                  {/* Proposed Role */}
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                      <Briefcase className="w-3.5 h-3.5 text-accent-primary" />
                      <span>Proposed Role *</span>
                    </label>
                    <input 
                      type="text"
                      name="role"
                      required
                      placeholder="e.g. Full-Stack React Engineer / Android Intern"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#030208] border border-white/10 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:border-accent-primary/50 transition-colors"
                    />
                  </div>

                  {/* Details of the Job */}
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                      <FileText className="w-3.5 h-3.5 text-accent-primary" />
                      <span>Details of the Job *</span>
                    </label>
                    <textarea 
                      name="details"
                      required
                      rows={4}
                      placeholder="Enter salary package, tech stack requirements, project duration, or location details (Bangalore)..."
                      value={formData.details}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#030208] border border-white/10 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:border-accent-primary/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Targeted Recipient Summary Box */}
                  <div className="p-4 bg-[#030208]/60 border border-white/5 rounded-xl space-y-2 text-xs font-mono">
                    <div className="flex items-center gap-2 text-accent-primary">
                      <Send className="w-3.5 h-3.5" />
                      <span className="font-semibold uppercase tracking-wider text-[10px]">Targeted Recipient:</span>
                    </div>
                    <div className="text-slate-400 space-y-1">
                      <p><span className="text-slate-600">To:</span> {PERSONAL_INFO.email}</p>
                      <p><span className="text-slate-600">Subject:</span> Job Opportunity: <span className={formData.role ? "text-accent-secondary font-semibold" : "text-slate-500 font-light"}>{formData.role || '[Role]'}</span> at <span className={formData.company ? "text-accent-secondary font-semibold" : "text-slate-500 font-light"}>{formData.company || '[Company]'}</span></p>
                    </div>
                  </div>

                  {/* Submit button */}
                  <Magnetic className="w-full">
                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className={`group relative flex items-center justify-center gap-2.5 w-full py-4 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-lg cursor-pointer ${
                        status === 'loading' 
                          ? 'bg-purple-800/50 border border-purple-500/30 cursor-not-allowed' 
                          : status === 'success' 
                          ? 'bg-green-600 hover:bg-green-700 shadow-green-600/10' 
                          : status === 'error'
                          ? 'bg-red-600 hover:bg-red-700 shadow-red-600/10'
                          : 'bg-accent-primary hover:bg-purple-600 hover:shadow-accent-primary/10'
                      }`}
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending Inquiry...</span>
                        </>
                      ) : status === 'success' ? (
                        <>
                          <Check className="w-4 h-4 text-white" />
                          <span>Offer Sent Successfully!</span>
                        </>
                      ) : status === 'error' ? (
                        <>
                          <X className="w-4 h-4 text-white" />
                          <span>Fallback: Opening Mail App...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          <span>Proceed to Compose Email</span>
                        </>
                      )}
                    </button>
                  </Magnetic>
                  
                  {/* Status Helper Messages */}
                  {status === 'success' && (
                    <p className="text-center text-xs text-green-400 font-medium animate-[fadeIn_0.2s_ease-out]">
                      Your inquiry has been sent directly to Ritish's inbox!
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-center text-xs text-red-400 font-medium animate-[fadeIn_0.2s_ease-out]">
                      {errorMessage || 'Direct send failed. Launching mail composer instead...'}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


