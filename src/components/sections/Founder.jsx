import React from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
// Import your image
import rahulImage from '../../assets/Rahul.jpeg';

const Founder = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.3 });

  return (
    <section id="founder" className="py-32 bg-[#050505] px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        <div 
          ref={ref}
          className={`relative ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'} transition-all duration-1000`}
        >
          {/* Changed aspect ratio to aspect-[4/5] to better fit a portrait photo 
             without cropping too much 
          */}
          <div className="relative w-full aspect-[4/5] bg-neutral-800 overflow-hidden group">
            <img 
              src={rahulImage} 
              alt="Rahul Pathak" 
              // ADDED: object-top (Keeps head in frame)
              // KEPT: object-cover (Fills box without stretching)
              className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 border-[1px] border-white/10 m-4 z-10 transition-all duration-500 group-hover:m-0 group-hover:border-blue-500"></div>
          </div>
        </div>

        <div className={`space-y-8 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} transition-all duration-1000 delay-300`}>
          <div>
            <h2 className="text-blue-500 font-mono text-sm mb-2 tracking-widest">ABOUT ME</h2>
            <h3 className="text-5xl font-bold text-white mb-6">RAHUL PATHAK</h3>
          </div>
          
          <p className="text-gray-400 text-lg leading-relaxed">
            I don't just write code; I solve problems. With a deep focus on the MERN stack and React Native, I bridge the gap between complex backend logic and intuitive, pixel-perfect user interfaces.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            I am a builder at heart, constantly exploring new technologies like <span className="text-white font-bold">Next.js</span> and <span className="text-white font-bold">Data Science</span> to create software that is not just functional, but exceptional. I am currently seeking a role where I can contribute to high-impact engineering teams.
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