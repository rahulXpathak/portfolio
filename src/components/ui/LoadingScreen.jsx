import React, { useState, useEffect, useMemo } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const increment = prev < 70 ? 8 : prev < 90 ? 4 : 2;
                return Math.min(prev + increment, 100);
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            const timer = setTimeout(() => {
                setIsExiting(true);
                setTimeout(() => {
                    onLoadingComplete?.();
                }, 1000);
            }, 400);
            return () => clearTimeout(timer);
        }
    }, [progress, onLoadingComplete]);

    // Generate floating particles - memoized to avoid calling Math.random during re-renders
    const particles = useMemo(() =>
        Array.from({ length: 30 }, (_, i) => ({
            id: i,
            size: 2 + (i % 5),
            left: (i * 3.33) % 100,
            delay: (i * 0.1) % 3,
            duration: 4 + (i % 4),
        }))
        , []);

    return (
        <div
            className={`
        fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center overflow-hidden
        transition-all duration-1000 ease-in-out
        ${isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}
      `}
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 opacity-40">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full animate-pulse-slow"
                    style={{
                        background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 60%)',
                        filter: 'blur(60px)',
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-spin-slow"
                    style={{
                        background: 'conic-gradient(from 0deg, transparent, rgba(139,92,246,0.2), transparent)',
                        filter: 'blur(40px)',
                    }}
                />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="absolute rounded-full bg-blue-500/30 animate-float"
                        style={{
                            width: p.size,
                            height: p.size,
                            left: `${p.left}%`,
                            bottom: '-10px',
                            animationDelay: `${p.delay}s`,
                            animationDuration: `${p.duration}s`,
                        }}
                    />
                ))}
            </div>

            {/* Main Logo Container */}
            <div className="relative mb-16">
                {/* Outer glow ring */}
                <div
                    className={`
            absolute -inset-8 rounded-full transition-all duration-700
            ${progress > 30 ? 'opacity-100' : 'opacity-0'}
          `}
                    style={{
                        background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)',
                        filter: 'blur(20px)',
                        animation: 'spin 3s linear infinite',
                    }}
                />

                {/* Logo box */}
                <div
                    className={`
            relative w-28 h-28 bg-black flex items-center justify-center overflow-hidden
            border-2 border-white/20 shadow-[0_0_60px_rgba(59,130,246,0.4)]
            transition-all duration-700 ease-out
            ${progress > 50 ? 'rotate-0 scale-100' : 'rotate-[-10deg] scale-90'}
          `}
                >
                    {/* Animated fill from bottom */}
                    <div
                        className="absolute bottom-0 left-0 right-0 transition-all duration-300 ease-out"
                        style={{
                            height: `${progress}%`,
                            background: 'linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%)',
                        }}
                    />

                    {/* Logo text */}
                    <span
                        className={`
              relative z-10 font-black text-5xl tracking-tighter font-mono
              transition-all duration-500
              ${progress > 50 ? 'text-white' : 'text-white/80'}
            `}
                        style={{
                            textShadow: progress > 70 ? '0 0 30px rgba(255,255,255,0.5)' : 'none'
                        }}
                    >
                        RP
                    </span>

                    {/* Corner accents */}
                    <div className="absolute top-0 right-0 w-5 h-5 bg-gradient-to-bl from-blue-500 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-5 h-5 bg-gradient-to-tr from-purple-500 to-transparent" />

                    {/* Shine sweep effect */}
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shine"
                    />
                </div>

                {/* Orbiting particles */}
                <div className="absolute inset-[-20px] animate-spin" style={{ animationDuration: '4s' }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_#3b82f6,0_0_30px_#3b82f6]" />
                </div>
                <div className="absolute inset-[-30px] animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_15px_#a855f7]" />
                </div>
                <div className="absolute inset-[-25px] animate-spin" style={{ animationDuration: '5s' }}>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_#06b6d4]" />
                </div>
            </div>

            {/* Brand Name with gradient */}
            <div className="mb-10">
                <span className="text-3xl font-bold tracking-tighter">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white">
                        PATHAK
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">.</span>
                </span>
            </div>

            {/* Progress Bar */}
            <div className="w-72 h-[3px] bg-white/10 overflow-hidden rounded-full backdrop-blur-sm">
                <div
                    className="h-full transition-all duration-100 ease-out rounded-full relative overflow-hidden"
                    style={{
                        width: `${progress}%`,
                        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
                    }}
                >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer" />
                </div>
            </div>

            {/* Progress Text */}
            <div className="mt-6 font-mono text-sm tracking-widest">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">
                    {progress}
                </span>
                <span className="text-gray-600">%</span>
            </div>

            {/* Status text */}
            <div className="absolute bottom-16 text-gray-600 text-xs font-mono tracking-[0.4em] uppercase flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${progress < 100 ? 'bg-blue-500 animate-pulse' : 'bg-green-500'}`} />
                {progress < 30 ? 'LOADING ASSETS' : progress < 70 ? 'INITIALIZING' : progress < 100 ? 'ALMOST READY' : 'WELCOME'}
            </div>

            {/* Animations */}
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }
        .animate-float {
          animation: float 6s linear infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default LoadingScreen;
