import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking with IntersectionObserver
  useEffect(() => {
    const sections = ['features', 'projects', 'experience', 'testimonials', 'founder', 'cta'];

    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { threshold: 0.3, rootMargin: '-20% 0px -50% 0px' }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.disconnect();
      });
    };
  }, []);

  const navLinks = [
    { name: 'Skills', href: '#features', section: 'features' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Experience', href: '#experience', section: 'experience' },
    { name: 'Credentials', href: '#testimonials', section: 'testimonials' },
    { name: 'About', href: '#founder', section: 'founder' },
  ];

  const isActive = (section) => activeSection === section;

  return (
    <>
      <nav className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled
          ? 'py-3'
          : 'py-5'
        }
      `}>
        {/* Glassmorphism background - appears on scroll */}
        <div className={`
          absolute inset-0 transition-all duration-500
          ${scrolled
            ? 'bg-black/70 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
          }
        `} />

        {/* Gradient glow line at bottom when scrolled */}
        <div className={`
          absolute bottom-0 left-0 right-0 h-[1px] 
          bg-gradient-to-r from-transparent via-blue-500/50 to-transparent
          transition-opacity duration-500
          ${scrolled ? 'opacity-100' : 'opacity-0'}
        `} />

        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center relative z-10">

          {/* Brand Logo - Enhanced */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Logo Box with gradient border */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Logo */}
              <div className="relative w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-white to-gray-200 rounded-lg flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 font-black text-xl text-black group-hover:text-white transition-colors duration-300 font-mono tracking-tighter">RP</span>

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-blue-600 group-hover:bg-white transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-600 group-hover:bg-white transition-colors duration-300" />
              </div>
            </div>

            {/* Brand Text */}
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-black tracking-tighter text-white leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                PATHAK<span className="text-blue-500 group-hover:text-purple-400">.</span>
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.25em] text-gray-500 font-mono mt-0.5 group-hover:text-blue-400 transition-colors duration-500 uppercase">
                Full Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav - Enhanced with pill-style links */}
          <div className="hidden md:flex items-center gap-2">
            {/* Nav Links Container with subtle background */}
            <div className="flex items-center gap-1 bg-white/5 rounded-full px-2 py-1.5 border border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                    ${isActive(link.section)
                      ? 'text-white bg-gradient-to-r from-blue-600/80 to-purple-600/80 shadow-lg shadow-blue-500/25'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }
                  `}
                >
                  {link.name}
                  {/* Active glow */}
                  {isActive(link.section) && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-md opacity-30 -z-10" />
                  )}
                </a>
              ))}
            </div>

            {/* CTA Button - Enhanced */}
            <a
              href="#cta"
              className="group relative ml-4 px-6 py-2.5 text-sm font-bold overflow-hidden transition-all duration-300 active:scale-95 rounded-full transform hover:-translate-y-0.5"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full animate-gradient-nav" />

              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 blur-sm" />

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out rounded-full" />

              {/* Text with icon */}
              <span className="relative z-10 text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                LET'S CONNECT
              </span>
            </a>
          </div>

          {/* Mobile Toggle - Enhanced */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center z-[60]"
            aria-label="Toggle menu"
          >
            {/* Glow background on open */}
            <div className={`
              absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600
              transition-opacity duration-300
              ${isOpen ? 'opacity-100' : 'opacity-0'}
            `} />

            <div className="relative w-6 h-6">
              {/* Animated hamburger lines */}
              <span className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300 ease-out ${isOpen ? 'top-3 rotate-45' : 'top-1'}`} />
              <span className={`absolute left-0 top-3 w-full h-0.5 bg-white transition-all duration-300 ease-out ${isOpen ? 'opacity-0 translate-x-2' : 'opacity-100'}`} />
              <span className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300 ease-out ${isOpen ? 'top-3 -rotate-45' : 'top-5'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Enhanced with gradient */}
      <div
        className={`
          md:hidden fixed top-0 right-0 h-full w-[85%] max-w-[350px]
          bg-gradient-to-b from-neutral-900/98 to-black/98 backdrop-blur-xl z-[55]
          flex flex-col pt-24 px-8
          transition-transform duration-400 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          border-l border-white/10
          shadow-[-30px_0_80px_rgba(0,0,0,0.9)]
        `}
      >
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />

        {/* Mobile Nav Links */}
        <div className="flex flex-col gap-4 relative z-10">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`
                relative text-xl font-bold transition-all duration-300 py-3 px-4 rounded-xl
                flex items-center gap-3 group
                ${isActive(link.section)
                  ? 'text-white bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                }
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {isActive(link.section) && (
                <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
              )}
              {link.name}

              {/* Arrow on hover */}
              <span className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-400">→</span>
            </a>
          ))}
        </div>

        {/* Mobile Action Button */}
        <a
          href="#cta"
          onClick={() => setIsOpen(false)}
          className="mt-10 relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 text-center text-lg font-bold rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 group"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            LET'S CONNECT
          </span>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        </a>

        {/* Social hint */}
        <div className="mt-auto mb-8 text-center">
          <p className="text-gray-600 text-sm">Available for full-time roles</p>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-[54]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Animations */}
      <style>{`
        @keyframes gradient-nav {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-nav {
          background-size: 200% 200%;
          animation: gradient-nav 3s ease infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;