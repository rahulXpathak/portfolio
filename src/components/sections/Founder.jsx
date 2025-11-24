import React from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

const Founder = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.3 });

  return (
    <section id="founder" className="py-32 bg-[#050505] px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        <div 
          ref={ref}
          className={`relative ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'} transition-all duration-1000`}
        >
          <div className="relative w-full aspect-[3/4] bg-neutral-800 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Rahul Pathak" 
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 border-[1px] border-white/10 m-4 z-10 transition-all duration-500 group-hover:m-0 group-hover:border-blue-500"></div>
          </div>
        </div>

        <div className={`space-y-8 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} transition-all duration-1000 delay-300`}>
          <div>
            <h2 className="text-blue-500 font-mono text-sm mb-2 tracking-widest">THE FOUNDER</h2>
            <h3 className="text-5xl font-bold text-white mb-6">RAHUL PATHAK</h3>
          </div>
          
          <p className="text-gray-400 text-lg leading-relaxed">
            I don't just write code; I architect solutions. With a background in systems engineering and design, I bridge the gap between "looks good" and "works perfectly."
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            My studio, <span className="text-white font-bold">Pathak</span>, was born from a frustration with bloated agencies. We keep it lean, sharp, and delivered on time.
          </p>

          <div className="flex gap-4 pt-4">
             <div className="h-px w-12 bg-blue-500 self-center"></div>
             <span className="text-white italic">"Simplicity is the ultimate sophistication."</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Founder;