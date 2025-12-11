import React, { useEffect, useRef } from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

const CTA = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Resize handler
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Starfield Logic
    const stars = [];
    const numStars = 800;
    const speed = 4;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 2000 - 1000,
        z: Math.random() * 2000
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      stars.forEach((star) => {
        star.z -= speed;

        if (star.z <= 0) {
          star.x = Math.random() * 2000 - 1000;
          star.y = Math.random() * 2000 - 1000;
          star.z = 2000;
        }

        const scale = 800 / star.z;
        const px = cx + star.x * scale * 0.5;
        const py = cy + star.y * scale * 0.5;
        const radius = Math.max(0, (1 - star.z / 2000) * 3);

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const colorVal = Math.floor(255 * (1 - star.z / 2000));
          ctx.fillStyle = `rgb(${colorVal}, ${colorVal}, 255)`;
          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="cta" className="relative py-32 overflow-hidden bg-black">

      {/* --- 3D ANIMATED CANVAS --- */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full opacity-60"
      />

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_90%)] z-0 pointer-events-none"></div>

      {/* --- CONTENT --- */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-lg opacity-40 animate-pulse" />
            <div className="relative flex items-center gap-2 bg-white/5 backdrop-blur-md border border-green-500/30 px-5 py-2.5 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></div>
              <span className="text-green-400 text-xs font-mono font-bold tracking-widest uppercase">Open to Full-time Roles</span>
              <Sparkles className="w-3 h-3 text-green-400" />
            </div>
          </div>
        </div>

        {/* Headline with enhanced gradient */}
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          LET'S BUILD{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient-shift bg-[length:200%_200%]">
            THE FUTURE
          </span>
        </h2>

        {/* Pitch Text */}
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          I am currently looking for opportunities to contribute my skills in scalable web development and system architecture.
          If you have a team that values clean code and rapid innovation, let's talk.
        </p>

        {/* PREMIUM ACTION BUTTON */}
        <a
          href="mailto:rahulpathak7966@gmail.com"
          className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden font-bold text-lg tracking-wider transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 active:scale-95"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl animate-gradient-shift bg-[length:200%_200%]" />

          {/* Inner background */}
          <div className="absolute inset-[2px] bg-black rounded-[10px] group-hover:bg-transparent transition-all duration-500" />

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_60px_rgba(59,130,246,0.5),0_0_100px_rgba(139,92,246,0.3)]" />

          {/* Shine sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-xl" />

          {/* Particles on hover */}
          <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-float-particle" style={{ animationDelay: '0s' }} />
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-float-particle" style={{ animationDelay: '0.2s' }} />
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-float-particle" style={{ animationDelay: '0.4s' }} />
          </div>

          {/* Content */}
          <span className="relative z-10 flex items-center gap-3 text-white">
            GET IN TOUCH
            <Mail className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
          </span>
        </a>

        {/* Secondary links */}
        <div className="mt-8 flex justify-center gap-6 text-sm">
          <a href="tel:+917966000000" className="group text-gray-500 hover:text-white transition-colors flex items-center gap-2">
            <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:scale-150 transition-transform" />
            Call Me
          </a>
          <a href="https://linkedin.com/in/rahul-pathak-a3bb25246" target="_blank" rel="noopener noreferrer" className="group text-gray-500 hover:text-white transition-colors flex items-center gap-2">
            <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:scale-150 transition-transform" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0; }
          50% { transform: translateY(-20px) scale(1.5); opacity: 1; }
        }
        .animate-float-particle {
          animation: float-particle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CTA;