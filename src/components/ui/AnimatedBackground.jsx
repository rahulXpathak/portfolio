import React, { useEffect, useRef } from 'react';

/**
 * Animated background with floating gradient blobs
 * Creates a dynamic, premium visual effect
 */
const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-[#030303]" />

            {/* Animated gradient orbs */}
            <div
                className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full opacity-30 animate-blob"
                style={{
                    background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
            />
            <div
                className="absolute top-[50%] right-[-10%] w-[40vw] h-[40vw] rounded-full opacity-20 animate-blob animation-delay-2000"
                style={{
                    background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
            />
            <div
                className="absolute bottom-[-20%] left-[30%] w-[45vw] h-[45vw] rounded-full opacity-25 animate-blob animation-delay-4000"
                style={{
                    background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
            />

            {/* Noise texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
                }}
            />

            {/* Animation styles */}
            <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.95); }
          75% { transform: translate(30px, 10px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    );
};

export default AnimatedBackground;
