import React, { useEffect, useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

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
    const numStars = 800; // Density
    const speed = 4; // Warp speed
    
    // Initialize stars with random 3D coordinates
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 2000 - 1000,
        z: Math.random() * 2000 
      });
    }

    const animate = () => {
      // Clear with opacity for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      stars.forEach((star) => {
        // Move star towards viewer (decrease Z)
        star.z -= speed;

        // Reset star if it hits the screen (Z <= 0)
        if (star.z <= 0) {
          star.x = Math.random() * 2000 - 1000;
          star.y = Math.random() * 2000 - 1000;
          star.z = 2000;
        }

        // 3D Projection Formula: 2D_x = x / z
        const scale = 800 / star.z; // 800 is focal length
        const px = cx + star.x * scale * 0.5;
        const py = cy + star.y * scale * 0.5;

        // Calculate radius based on proximity (closer = bigger)
        const radius = Math.max(0, (1 - star.z / 2000) * 3);

        // Draw Star
        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const colorVal = Math.floor(255 * (1 - star.z / 2000));
          
          // Mix Blue and White based on depth
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

      {/* Radial Vignette to blend edges into black */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_90%)] z-0 pointer-events-none"></div>

      {/* --- CONTENT --- */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 mb-8 backdrop-blur-md border border-white/10 rounded-full">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></div>
          <span className="text-gray-300 text-xs font-mono font-bold tracking-widest uppercase">Open to Full-time Roles</span>
        </div>

        {/* Headline */}
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          LET'S BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">THE FUTURE</span>
        </h2>
        
        {/* Pitch Text */}
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          I am currently looking for opportunities to contribute my skills in scalable web development and system architecture. 
          If you have a team that values clean code and rapid innovation, let's talk.
        </p>

        {/* Action Button */}
        <a 
          href="mailto:rahulpathak7966@gmail.com" 
          className="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-black font-bold text-lg tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
            GET IN TOUCH <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          
          {/* Sliding Black Background on Hover */}
          <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
        </a>
      </div>
    </section>
  );
};

export default CTA;