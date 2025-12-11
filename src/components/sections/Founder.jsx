import React from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import { Sparkles, Quote } from 'lucide-react';
// Import your image
import rahulImage from '../../assets/Rahul.jpeg';

const Founder = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.3 });

  return (
    <section id="founder" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Floating gradient orbs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-green-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-teal-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header - Consistent Style */}
        <div className="mb-16 md:flex justify-between items-end pb-10 relative">
          <div className="relative">
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-[2px] bg-gradient-to-r from-green-500 to-transparent" />
              <span className="text-green-400 text-xs font-mono tracking-[0.3em] uppercase">Get to Know Me</span>
              <Sparkles className="w-3 h-3 text-green-400" />
            </div>

            {/* Main title with gradient */}
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[0.9]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
                ABOUT
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 animate-gradient-x bg-[length:200%_200%]">
                ME
              </span>
            </h2>
          </div>

          {/* Right side - Number */}
          <div className="hidden md:flex flex-col items-end gap-4 mt-8 md:mt-0">
            <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent">05</span>
            <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">// About</p>
          </div>

          {/* Decorative line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-green-500/50 via-teal-500/30 to-transparent" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div
            ref={ref}
            className={`relative ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'} transition-all duration-1000`}
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden group rounded-2xl">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 via-teal-500/10 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <img
                src={rahulImage}
                alt="Rahul Pathak"
                className="relative w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105 rounded-2xl"
              />

              {/* Border overlay */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-green-500/50 transition-colors duration-500" />
            </div>
          </div>

          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} transition-all duration-1000 delay-300`}>

            <div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                RAHUL <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">PATHAK</span>
              </h3>
              <p className="text-green-400 text-sm font-mono tracking-widest uppercase">Full Stack Developer</p>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              I don't just write code; I <span className="text-white font-medium">solve problems</span>. With a deep focus on the <span className="text-green-400">MERN stack</span> and <span className="text-teal-400">React Native</span>, I bridge the gap between complex backend logic and intuitive, pixel-perfect user interfaces.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              I am a builder at heart, constantly exploring new technologies like <span className="text-white font-bold">Next.js</span> and <span className="text-white font-bold">Data Science</span> to create software that is not just functional, but exceptional.
            </p>

            {/* Quote */}
            <div className="flex gap-4 pt-4 items-start">
              <Quote className="w-8 h-8 text-green-500/50 flex-shrink-0" />
              <p className="text-white italic text-lg">"Simplicity is the ultimate sophistication."</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;