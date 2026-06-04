/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { JSX } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-navy w-full overflow-x-hidden">
      {/* Animated Floating Gradient Mesh Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
        <div className="absolute -top-[15%] -left-[15%] w-[65vw] h-[65vw] rounded-full bg-accent-primary/10 blur-[130px] animate-glow-1"></div>
        <div className="absolute -bottom-[15%] -right-[15%] w-[65vw] h-[65vw] rounded-full bg-accent-secondary/8 blur-[130px] animate-glow-2"></div>
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[55vw] h-[55vw] rounded-full bg-accent-tertiary/5 blur-[150px] animate-glow-3"></div>
      </div>

      {/* Abstract Noise Texture Overlay for Premium Vibe */}
      <div className="fixed inset-0 z-10 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
