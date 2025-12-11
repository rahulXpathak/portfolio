import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
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

  // Helper to split text into two lines with enhanced gradient
  const formatText = (str) => {
    if (!str) return <span className="opacity-0">|</span>;
    const words = str.split(" ");
    const lastWord = words.length > 1 ? words.pop() : "";
    const firstLine = words.join(" ");

    return (
      <>
        {firstLine} <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 animate-gradient-x">
          {lastWord}
        </span>
      </>
    );
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-10 perspective-1000">
      <HeroCanvas />

      {/* Additional glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content with 3D Animation */}
        <div className="text-left transform-gpu hover:rotate-x-1 hover:rotate-y-1 transition-transform duration-500 ease-out">

          {/* Clean Status Badge */}
          <div className="inline-flex items-center gap-2 mb-8 animate-fade-in-up">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10 hover:border-white/20 transition-colors">
              {/* Pulsing dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              {/* Text */}
              <span className="text-white/80 text-xs font-medium tracking-wide uppercase">
                Available for Work
              </span>
            </div>
          </div>

          {/* TYPEWRITER TITLE with enhanced gradient */}
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] transform-gpu translate-z-10 min-h-[160px] md:min-h-[220px]">
            {formatText(text)}
            <span className="inline-block w-1 h-16 md:h-20 bg-gradient-to-b from-blue-500 to-purple-500 ml-2 animate-blink" />
          </h1>

          <p className="text-gray-400 max-w-xl text-lg md:text-xl mb-10 leading-relaxed border-l-2 border-gradient-vertical pl-6 transform-gpu translate-z-5">
            Specializing in scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">React Native</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">Next.js</span> architectures.
            I build robust backends and pixel-perfect frontends.
            <span className="text-white block mt-3 font-medium text-xl">Clean code. Production ready.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 transform-gpu translate-z-5">
            {/* BUTTON 1: VIEW WORK - Premium gradient */}
            <a
              href="#features"
              className="group relative px-8 py-4 font-bold text-sm tracking-widest overflow-hidden w-full sm:w-auto text-center transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-lg animate-gradient-x" />
              <div className="absolute inset-[2px] bg-black rounded-lg group-hover:bg-transparent transition-colors duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                VIEW WORK <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_30px_rgba(59,130,246,0.5)]" />
            </a>

            {/* BUTTON 2: DOWNLOAD CV - Glassmorphism */}
            <a
              href="/resume.pdf"
              download
              className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-widest rounded-lg transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/40 transform hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)]"
            >
              <span>DOWNLOAD CV</span>
              <Download className="w-4 h-4 group-hover:animate-bounce" />
            </a>
          </div>
        </div>

        {/* Right: Code Window with Enhanced 3D Animation */}
        <div className="hidden lg:block perspective-1000 group">
          <div className="relative">
            {/* Glow behind code window */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative transform rotate-y-12 rotate-x-6 group-hover:rotate-y-6 group-hover:rotate-x-3 transition-transform duration-700 ease-out shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] group-hover:shadow-[0_30px_60px_-12px_rgba(37,99,235,0.3)]">
              <CodeWindow />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-500 text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-scroll-down" />
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .translate-z-10 { transform: translateZ(10px); }
        .translate-z-5 { transform: translateZ(5px); }
        .rotate-x-1 { transform: rotateX(1deg); }
        .rotate-y-1 { transform: rotateY(1deg); }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        @keyframes scroll-down {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.5; }
        }
        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }
        
        .border-gradient-vertical {
          border-image: linear-gradient(to bottom, #3b82f6, #8b5cf6) 1;
        }
      `}</style>
    </section>
  );
};

export default Hero;