import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Plus } from 'lucide-react';

const FloatingActions = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            href: 'https://github.com/rahulXpathak',
            gradient: 'from-gray-600 to-gray-800',
            glow: 'group-hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: 'https://linkedin.com/in/rahulpathak',
            gradient: 'from-blue-600 to-blue-800',
            glow: 'group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]'
        },
        {
            name: 'Email',
            icon: Mail,
            href: 'mailto:rahulpathak7966@gmail.com',
            gradient: 'from-red-500 to-pink-600',
            glow: 'group-hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]'
        },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

            {/* Social Links - expand on hover */}
            <div
                className="relative"
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
            >
                {/* Expanded social buttons */}
                <div className={`
          flex flex-col gap-3 mb-3 transition-all duration-400 ease-out
          ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}>
                    {socialLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                group relative w-12 h-12 rounded-full
                flex items-center justify-center text-white
                transition-all duration-300 ease-out
                hover:scale-110 ${link.glow}
                transform hover:-translate-y-1
              `}
                            style={{
                                transitionDelay: `${index * 60}ms`,
                            }}
                            aria-label={link.name}
                        >
                            {/* Gradient border */}
                            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${link.gradient} animate-spin-slow`} style={{ animationDuration: '3s' }} />

                            {/* Inner background */}
                            <div className="absolute inset-[2px] rounded-full bg-neutral-900 group-hover:bg-neutral-800 transition-colors" />

                            {/* Glow ring on hover */}
                            <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${link.glow}`} />

                            {/* Icon */}
                            <link.icon size={18} className="relative z-10 group-hover:scale-110 transition-transform" />

                            {/* Tooltip */}
                            <span className="
                absolute right-full mr-4 px-3 py-1.5 
                bg-black/90 backdrop-blur-sm text-white text-xs font-bold
                rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300
                border border-white/10 whitespace-nowrap
                transform -translate-x-2 group-hover:translate-x-0
                shadow-[0_4px_20px_rgba(0,0,0,0.5)]
              ">
                                {link.name}
                                <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black/90 rotate-45 border-r border-t border-white/10" />
                            </span>
                        </a>
                    ))}
                </div>

                {/* Main toggle button (plus icon) */}
                <button
                    className={`
            group relative w-14 h-14 rounded-full flex items-center justify-center text-white
            transition-all duration-300 ease-out
            hover:scale-110 transform
            ${isExpanded ? 'rotate-45' : 'rotate-0'}
          `}
                    aria-label="Social links"
                >
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 animate-spin-slow" style={{ animationDuration: '3s' }} />

                    {/* Inner background */}
                    <div className="absolute inset-[2px] rounded-full bg-blue-600 group-hover:bg-blue-500 transition-colors" />

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-shadow" />

                    {/* Plus icon */}
                    <Plus size={24} className="relative z-10" />
                </button>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`
          group relative w-12 h-12 rounded-full flex items-center justify-center
          transition-all duration-500 ease-out
          transform hover:-translate-y-1 hover:scale-110
          ${showScrollTop
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-4 pointer-events-none'
                    }
        `}
                aria-label="Scroll to top"
            >
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-gray-200 to-white" />

                {/* Inner background */}
                <div className="absolute inset-[2px] rounded-full bg-white group-hover:bg-gray-100 transition-colors" />

                {/* Glow */}
                <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-shadow" />

                {/* Icon */}
                <ArrowUp size={20} className="relative z-10 text-black group-hover:text-blue-600 transition-colors" />
            </button>

            {/* Animations */}
            <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default FloatingActions;
