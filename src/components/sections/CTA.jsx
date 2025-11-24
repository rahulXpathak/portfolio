import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="py-32 bg-blue-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-black/20 px-4 py-2 mb-8 backdrop-blur-sm border border-white/10">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white text-xs font-bold tracking-widest uppercase">Limited Slots Available for Nov '23</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          READY TO SCALE?
        </h2>
        <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
          Stop settling for average. Let's build something that defines your industry. 
          Book a 15-min discovery call directly with Rahul.
        </p>

        <button className="group relative inline-flex items-center justify-center px-12 py-6 bg-black text-white font-bold text-lg tracking-wider overflow-hidden transition-transform active:scale-95">
          <span className="relative z-10 flex items-center gap-3">
            BOOK A CALL <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 mix-blend-difference"></div>
        </button>
      </div>
    </section>
  );
};

export default CTA;