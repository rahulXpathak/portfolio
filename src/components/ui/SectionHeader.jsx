import React from 'react';
import { Sparkles } from 'lucide-react';

/**
 * Consistent Section Header Component
 * Used across all portfolio sections for unified styling
 */
const SectionHeader = ({
    badge,           // Small text above title (e.g., "What I Do")
    titleLine1,      // First line of title
    titleLine2,      // Second line (gradient animated)
    subtitle,        // Description text with optional highlights
    sectionNumber,   // Number indicator (e.g., "02")
    sectionLabel,    // Label after number (e.g., "// Projects")
}) => {
    return (
        <div className="mb-20 md:flex justify-between items-end pb-10 relative">
            {/* Left side - Title */}
            <div className="relative">
                {/* Decorative badge */}
                {badge && (
                    <div className="inline-flex items-center gap-2 mb-6">
                        <div className="w-10 h-[2px] bg-gradient-to-r from-blue-500 to-transparent" />
                        <span className="text-blue-400 text-xs font-mono tracking-[0.3em] uppercase">{badge}</span>
                        <Sparkles className="w-3 h-3 text-blue-400" />
                    </div>
                )}

                {/* Main title with gradient */}
                <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[0.9]">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
                        {titleLine1}
                    </span>
                    {titleLine2 && (
                        <>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient-shift bg-[length:200%_200%]">
                                {titleLine2}
                            </span>
                        </>
                    )}
                </h2>

                {/* Subtitle */}
                {subtitle && (
                    <p className="text-gray-400 max-w-md text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: subtitle }} />
                )}
            </div>

            {/* Right side - Number indicator */}
            {sectionNumber && (
                <div className="hidden md:flex flex-col items-end gap-4 mt-8 md:mt-0">
                    <div className="text-right">
                        <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent">
                            {sectionNumber}
                        </span>
                    </div>
                    {sectionLabel && (
                        <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">{sectionLabel}</p>
                    )}
                </div>
            )}

            {/* Decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-500/50 via-purple-500/30 to-transparent" />

            {/* Animations */}
            <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 4s ease infinite;
        }
      `}</style>
        </div>
    );
};

export default SectionHeader;
