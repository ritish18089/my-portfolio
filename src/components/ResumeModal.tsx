import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github, Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/80 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-navy-light border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-8 max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-primary"></span>
            <h3 className="text-lg font-heading font-semibold text-white">Interactive CV</h3>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-accent-primary/20 hover:bg-accent-primary/30 border border-accent-primary/30 rounded-xl transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            
            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/5 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content (Screener View) */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-black/20">
          
          {/* Printable Resume Container */}
          <div 
            id="printable-resume" 
            className="w-full bg-white text-slate-800 p-8 md:p-12 shadow-inner rounded-2xl mx-auto font-sans text-sm leading-relaxed max-w-[800px]"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {/* Header / Name */}
            <div className="border-b-2 border-purple-900 pb-6 mb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-purple-950 font-heading tracking-tight mb-1">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-purple-700 font-semibold uppercase tracking-wider text-xs">
                  {PERSONAL_INFO.role}
                </p>
              </div>
              
              <div className="flex flex-col gap-1 text-xs text-slate-600 font-medium md:items-end">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-purple-700" />
                  {PERSONAL_INFO.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-purple-700" />
                  {PERSONAL_INFO.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-700" />
                  Bangalore, Karnataka, India
                </span>
              </div>
            </div>

            {/* Grid Layout for CV contents */}
            <div className="grid md:grid-cols-[2fr_1fr] gap-8">
              
              {/* Left Column (Experience & Education & Projects) */}
              <div className="space-y-6">
                
                {/* Executive Summary */}
                <div>
                  <h2 className="text-xs font-bold text-purple-900 uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-700" /> Professional Profile
                  </h2>
                  <p className="text-slate-600 text-xs leading-relaxed font-light">
                    Highly motivated Information Science Engineering graduate with a strong foundation in Java development, object-oriented concepts, and full-stack software development. Passionate about building robust backend APIs, training machine learning models, and delivering immersive web and AR interfaces. Proven ability to translate academic theories into functional, high-quality projects.
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-xs font-bold text-purple-900 uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-purple-700" /> Work Experience
                  </h2>
                  {EXPERIENCE.map((exp, idx) => (
                    <div key={idx} className="mb-4">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <h3 className="font-bold text-slate-800 text-sm">{exp.role}</h3>
                          <p className="text-purple-700 text-xs font-medium">{exp.company}</p>
                        </div>
                        <span className="text-xs text-slate-500 font-mono font-medium">{exp.date}</span>
                      </div>
                      <ul className="list-disc pl-4 space-y-1 text-slate-600 text-xs font-light">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Selected Projects */}
                <div>
                  <h2 className="text-xs font-bold text-purple-900 uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-purple-700" /> Selected Projects
                  </h2>
                  <div className="space-y-4">
                    {/* Project 1 */}
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-bold text-slate-800 text-sm">Plant Disease Detection System</h3>
                        <span className="text-[10px] font-mono font-semibold text-purple-800 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-full">Python / TensorFlow</span>
                      </div>
                      <p className="text-slate-600 text-xs font-light leading-relaxed">
                        Developed a CNN-based deep learning system that analyzes leaf images to diagnose agricultural plant diseases with high accuracy. Utilized OpenCV for advanced image preprocessing and pandas/NumPy for statistical classification.
                      </p>
                    </div>
                    {/* Project 2 */}
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-bold text-slate-800 text-sm">AI in Interior Design (AR App)</h3>
                        <span className="text-[10px] font-mono font-semibold text-purple-800 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-full">React Native / Three.js</span>
                      </div>
                      <p className="text-slate-600 text-xs font-light leading-relaxed">
                        Created an augmented reality workspace that helps users place and render virtual 3D furniture models inside actual environments. Enabled seamless object rotation and dimensional calculations to deliver a premium user planning tool.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column (Skills, Education, Certifications) */}
              <div className="space-y-6">
                
                {/* Tech Stack Matrix */}
                <div>
                  <h2 className="text-xs font-bold text-purple-900 uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-purple-700" /> Technical Skills
                  </h2>
                  <div className="space-y-3">
                    {SKILLS.map((skillGroup, idx) => (
                      <div key={idx}>
                        <h4 className="text-[11px] font-bold text-slate-700 uppercase mb-1">{skillGroup.category}</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {skillGroup.items.map((skill, i) => (
                            <span 
                              key={i} 
                              className="text-[10px] bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200/50 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-xs font-bold text-purple-900 uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-purple-700" /> Education
                  </h2>
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="space-y-1">
                      <h3 className="font-bold text-slate-800 text-xs leading-snug">{edu.degree}</h3>
                      <p className="text-slate-600 text-[11px] font-medium leading-none">{edu.institution}</p>
                      <div className="flex justify-between items-center text-[10px] text-slate-500 font-medium mt-1">
                        <span>{edu.date}</span>
                        <span className="text-purple-800 font-bold bg-purple-50 px-1.5 py-0.5 rounded border border-purple-100">CGPA: {edu.cgpa}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certifications */}
                <div>
                  <h2 className="text-xs font-bold text-purple-900 uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-700" /> Certifications
                  </h2>
                  <div className="space-y-2">
                    {CERTIFICATIONS.map((cert, idx) => (
                      <div key={idx} className="flex justify-between items-start gap-1">
                        <div>
                          <p className="font-bold text-slate-800 text-xs leading-tight">{cert.name}</p>
                          <p className="text-slate-500 text-[10px]">{cert.issuer}</p>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono whitespace-nowrap">{cert.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Print Footer Notice */}
            <div className="mt-8 pt-4 border-t border-slate-200 text-center text-[10px] text-slate-400 font-mono hidden print:block">
              Generated via Ritish Kannur Portfolio - https://github.com/ritish18089
            </div>
            
          </div>
          
        </div>
        
        {/* Screen view Footer info */}
        <div className="px-6 py-4 border-t border-white/10 bg-black/40 text-center text-xs text-slate-500">
          Tip: Hit "Print / Save PDF" and select "Save as PDF" to save a copy directly to your files.
        </div>

      </div>
    </div>
  );
}
