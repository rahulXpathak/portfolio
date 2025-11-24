import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="py-32 bg-blue-600 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-black/20 px-4 py-2 mb-8 backdrop-blur-sm border border-white/10">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white text-xs font-bold tracking-widest uppercase">Open to Full-time Roles</span>
        </div>

        {/* Headline */}
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          LET'S BUILD TOGETHER
        </h2>
        
        {/* Pitch Text */}
        <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
          I am currently looking for opportunities to contribute my skills in scalable web development and system architecture. 
          If you have a team that values clean code and rapid innovation, let's talk.
        </p>

        {/* Action Button */}
        <a 
          href="mailto:your.email@example.com" 
          // FIX EXPLANATION: 
          // 1. Added 'hover:text-black' (Changes text color when you mouse over)
          // 2. Added 'transition-colors duration-300' (Makes the text color change smoothly at same speed as background)
          className="group relative inline-flex items-center justify-center px-12 py-6 bg-black text-white hover:text-black font-bold text-lg tracking-wider overflow-hidden transition-colors duration-300 active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-3">
            GET IN TOUCH <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          
          {/* Sliding White Background */}
          <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
        </a>
      </div>
    </section>
  );
};

export default CTA;