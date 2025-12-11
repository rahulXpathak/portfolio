import React from 'react';

/**
 * Animated gradient border card wrapper
 * Creates a neon glow effect on hover
 */
const GlowCard = ({
    children,
    className = '',
    glowColor = 'blue',
    intensity = 'medium',
    ...props
}) => {
    const glowColors = {
        blue: 'from-blue-500 via-cyan-400 to-blue-600',
        purple: 'from-purple-500 via-pink-400 to-purple-600',
        green: 'from-green-500 via-emerald-400 to-green-600',
        rainbow: 'from-blue-500 via-purple-500 to-pink-500',
    };

    const intensityStyles = {
        low: 'opacity-30 group-hover:opacity-50',
        medium: 'opacity-40 group-hover:opacity-70',
        high: 'opacity-60 group-hover:opacity-100',
    };

    return (
        <div className={`group relative ${className}`} {...props}>
            {/* Animated gradient border */}
            <div
                className={`
          absolute -inset-[1px] rounded-xl bg-gradient-to-r ${glowColors[glowColor]}
          ${intensityStyles[intensity]}
          blur-sm transition-all duration-500
          group-hover:blur-md group-hover:-inset-[2px]
          animate-gradient-rotate
        `}
            />

            {/* Glow effect */}
            <div
                className={`
          absolute -inset-4 rounded-xl bg-gradient-to-r ${glowColors[glowColor]}
          opacity-0 group-hover:opacity-20
          blur-2xl transition-all duration-700
        `}
            />

            {/* Card content */}
            <div className="relative bg-neutral-900/90 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
                {/* Inner shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

                {children}
            </div>

            <style>{`
        @keyframes gradient-rotate {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-rotate {
          background-size: 200% 200%;
          animation: gradient-rotate 3s ease infinite;
        }
      `}</style>
        </div>
    );
};

export default GlowCard;
