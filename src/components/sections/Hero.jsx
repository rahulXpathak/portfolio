import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import HeroCanvas from '../ui/HeroCanvas';
import CodeWindow from '../ui/CodeWindow';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] pt-20 pb-10">
      <HeroCanvas />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 px-4 py-1 mb-8 animate-fade-in-up">
            {/* Kept blue to match design, but text signals availability */}
            <div className="w-1 h-1 bg-blue-400 animate-pulse"></div>
            <span className="text-blue-400 text-xs font-mono tracking-[0.2em] uppercase">Available for Hire</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
            FULL STACK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-white">ENGINEER</span>
          </h1>
          
          <p className="text-gray-400 max-w-xl text-lg md:text-xl mb-10 leading-relaxed border-l border-blue-500/30 pl-6">
            Specializing in scalable <span className="text-blue-400">React Native</span> and <span className="text-blue-400">Next.js</span> architectures. 
            I build robust backends and pixel-perfect frontends.
            <span className="text-white block mt-2 font-medium">Clean code. Production ready.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* BUTTON 1: VIEW WORK (FIXED) */}
            <a 
              href="#features" 
              className="group relative px-8 py-4 bg-blue-600 text-white hover:text-blue-600 font-bold text-sm tracking-widest overflow-hidden w-full sm:w-auto text-center transition-colors duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                VIEW WORK <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* REMOVED mix-blend-screen to fix text visibility */}
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </a>
            
            {/* BUTTON 2: DOWNLOAD CV */}
            <a href="/resume.pdf" download className="group px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2">
              <span>DOWNLOAD CV</span>
              <Download className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Right: Code Window */}
        <div className="hidden lg:block perspective-1000">
          <div className="transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-700 ease-out">
            <CodeWindow />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-blue-500 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;