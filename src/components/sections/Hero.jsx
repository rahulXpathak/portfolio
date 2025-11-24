import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import HeroCanvas from '../ui/HeroCanvas';
import CodeWindow from '../ui/CodeWindow';

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // The list of titles to cycle through
  const titles = [
    "FULL STACK ENGINEER", 
    "FULL STACK DEVELOPER", 
    "MOBILE DEVELOPER", 
    "FRONTEND DEVELOPER"
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Typing speed adjustment
      setTypingSpeed(isDeleting ? 40 : 100);

      // Pause at end of word
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Helper to split text into two lines
  const formatText = (str) => {
    if (!str) return <span className="opacity-0">|</span>;
    const words = str.split(" ");
    const lastWord = words.length > 1 ? words.pop() : "";
    const firstLine = words.join(" ");
    
    return (
      <>
        {firstLine} <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-white">
          {lastWord}
        </span>
      </>
    );
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] pt-20 pb-10 perspective-1000">
      <HeroCanvas />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content with 3D Animation */}
        <div className="text-left transform-gpu hover:rotate-x-1 hover:rotate-y-1 transition-transform duration-500 ease-out">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 px-4 py-1 mb-8 animate-fade-in-up">
            <div className="w-1 h-1 bg-blue-400 animate-pulse"></div>
            <span className="text-blue-400 text-xs font-mono tracking-[0.2em] uppercase">Available for Hire</span>
          </div>
          
          {/* TYPEWRITER TITLE - REMOVED BLINKING CURSOR */}
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]  transform-gpu translate-z-10 min-h-[160px] md:min-h-[220px]">
            {formatText(text)}
          </h1>
          
          <p className="text-gray-400 max-w-xl text-lg md:text-xl mb-10 leading-relaxed border-l border-blue-500/30 pl-6 transform-gpu translate-z-5">
            Specializing in scalable <span className="text-blue-400">React Native</span> and <span className="text-blue-400">Next.js</span> architectures. 
            I build robust backends and pixel-perfect frontends.
            <span className="text-white block mt-2 font-medium">Clean code. Production ready.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 transform-gpu translate-z-5">
            {/* BUTTON 1: VIEW WORK */}
            <a 
              href="#features" 
              className="group relative px-8 py-4 bg-blue-600 text-white hover:text-blue-600 font-bold text-sm tracking-widest overflow-hidden w-full sm:w-auto text-center transition-colors duration-300 hover:shadow-[0_10px_20px_rgba(37,99,235,0.3)] transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                VIEW WORK <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </a>
            
            {/* BUTTON 2: DOWNLOAD CV */}
            <a href="/resume.pdf" download className="group px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2 hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)] transform hover:-translate-y-1">
              <span>DOWNLOAD CV</span>
              <Download className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Right: Code Window with Enhanced 3D Animation */}
        <div className="hidden lg:block perspective-1000 group">
          <div className="transform rotate-y-12 rotate-x-6 group-hover:rotate-y-6 group-hover:rotate-x-3 transition-transform duration-700 ease-out shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] group-hover:shadow-[0_30px_60px_-12px_rgba(37,99,235,0.2)]">
            <CodeWindow />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-blue-500 animate-pulse"></div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .translate-z-10 { transform: translateZ(10px); }
        .translate-z-5 { transform: translateZ(5px); }
        .rotate-x-1 { transform: rotateX(1deg); }
        .rotate-y-1 { transform: rotateY(1deg); }
      `}</style>
    </section>
  );
};

export default Hero;