import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    const sections = ['features', 'projects', 'testimonials', 'founder', 'cta'];

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
    { name: 'Certifications', href: '#testimonials', section: 'testimonials' },
    { name: 'About', href: '#founder', section: 'founder' },
  ];

  const isActive = (section) => activeSection === section;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">

        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 md:gap-3 group">
          <div className="relative w-9 h-9 md:w-10 md:h-10 bg-white flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow duration-500">
            <div className="absolute inset-0 bg-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10 font-black text-lg md:text-xl text-black group-hover:text-white transition-colors duration-300 font-mono tracking-tighter">RP</span>
            <div className="absolute top-0 right-0 w-2 h-2 bg-blue-600 group-hover:bg-white transition-colors duration-300"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-600 group-hover:bg-white transition-colors duration-300"></div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-lg md:text-xl font-bold tracking-tighter text-white leading-none group-hover:text-blue-500 transition-colors duration-300">
              PATHAK<span className="text-blue-600 group-hover:text-white transition-colors">.</span>
            </span>
            <span className="text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] text-gray-500 font-mono mt-1 group-hover:text-white transition-colors duration-500 uppercase">
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors relative overflow-hidden group ${isActive(link.section) ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
            >
              <span className="relative z-10">{link.name}</span>
              {/* Underline - always visible for active, shows on hover for inactive */}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transition-transform duration-300 ${isActive(link.section) ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'
                  }`}
              />
              {/* Active dot indicator */}
              {isActive(link.section) && (
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" />
              )}
            </a>
          ))}

          {/* Premium Action Button */}
          <a
            href="#cta"
            className={`group relative px-6 py-2.5 text-sm font-bold overflow-hidden transition-all duration-300 active:scale-95 rounded-lg transform hover:-translate-y-0.5 ${isActive('cta')
              ? 'shadow-[0_0_30px_rgba(59,130,246,0.5)]'
              : ''
              }`}
          >
            {/* Gradient border background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-lg animate-gradient-nav" />

            {/* Inner background - white normally, transparent on hover */}
            <div className={`absolute inset-[1.5px] rounded-[6px] transition-all duration-300 ${isActive('cta') ? 'bg-transparent' : 'bg-black group-hover:bg-transparent'
              }`} />

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out rounded-lg" />

            {/* Text */}
            <span className="relative z-10 text-white">LET'S CONNECT</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 z-[60] relative"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            {/* Animated hamburger lines */}
            <span className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300 ease-out ${isOpen ? 'top-3 rotate-45' : 'top-1'}`} />
            <span className={`absolute left-0 top-3 w-full h-0.5 bg-white transition-all duration-300 ease-out ${isOpen ? 'opacity-0 translate-x-2' : 'opacity-100'}`} />
            <span className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300 ease-out ${isOpen ? 'top-3 -rotate-45' : 'top-5'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`
          md:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px]
          bg-black/98 backdrop-blur-xl z-[55]
          flex flex-col pt-24 px-8
          transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          border-l border-white/10
          shadow-[-20px_0_60px_rgba(0,0,0,0.8)]
        `}
      >
        {/* Mobile Nav Links */}
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-bold transition-colors duration-300 py-2 border-b border-white/5 flex items-center gap-3 ${isActive(link.section) ? 'text-blue-500' : 'text-white hover:text-blue-500'
                }`}
            >
              {isActive(link.section) && (
                <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" />
              )}
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Action Button */}
        <a
          href="#cta"
          onClick={() => setIsOpen(false)}
          className="mt-8 bg-blue-600 text-white px-6 py-3 text-center text-lg font-bold rounded-lg hover:bg-blue-500 transition-all duration-300"
        >
          LET'S CONNECT
        </a>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-[54]"
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
    </nav>
  );
};

export default Navbar;