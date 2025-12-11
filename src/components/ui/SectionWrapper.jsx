import React from 'react';

/**
 * Reusable Section Wrapper with consistent background effects
 * Provides: gradient orbs, grid pattern, relative positioning
 */
const SectionWrapper = ({
    children,
    id,
    className = '',
    showOrbs = true,
    orbColors = ['blue', 'purple'] // Can be customized per section
}) => {
    const orbColorMap = {
        blue: 'bg-blue-600/10',
        purple: 'bg-purple-600/10',
        cyan: 'bg-cyan-600/10',
        green: 'bg-green-600/10',
        pink: 'bg-pink-600/10',
    };

    return (
        <section id={id} className={`relative py-32 px-6 overflow-hidden ${className}`}>
            {/* Background */}
            <div className="absolute inset-0 bg-[#030303]" />

            {/* Floating gradient orbs */}
            {showOrbs && (
                <>
                    <div className={`absolute top-20 left-10 w-72 h-72 ${orbColorMap[orbColors[0]]} rounded-full blur-[100px] pointer-events-none`} />
                    <div className={`absolute bottom-20 right-10 w-96 h-96 ${orbColorMap[orbColors[1]]} rounded-full blur-[120px] pointer-events-none`} />
                </>
            )}

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Content */}
            <div className="max-w-7xl mx-auto relative z-10">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
