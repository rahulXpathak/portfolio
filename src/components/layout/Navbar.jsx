import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Skills', href: '#features' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#testimonials' },
    { name: 'About', href: '#founder' },
  ];

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
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          ))}

          {/* Action Button - Updated Title */}
          <a
            href="#cta"
            className="bg-white text-black px-6 py-2 text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 active:scale-95"
          >
            LET'S CONNECT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 z-[60] relative"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
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
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold text-white hover:text-blue-500 transition-colors duration-300 py-2 border-b border-white/5"
            >
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
    </nav>
  );
};

export default Navbar;