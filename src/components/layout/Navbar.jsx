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
    { name: 'Work', href: '#features' },
    { name: 'Stories', href: '#testimonials' },
    { name: 'Founder', href: '#founder' },
    { name: 'Contact', href: '#cta' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 bg-white flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow duration-500">
             <div className="absolute inset-0 bg-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
             <span className="relative z-10 font-black text-xl text-black group-hover:text-white transition-colors duration-300 font-mono tracking-tighter">RP</span>
             <div className="absolute top-0 right-0 w-2 h-2 bg-blue-600 group-hover:bg-white transition-colors duration-300"></div>
             <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-600 group-hover:bg-white transition-colors duration-300"></div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-xl font-bold tracking-tighter text-white leading-none group-hover:text-blue-500 transition-colors duration-300">
              PATHAK<span className="text-blue-600 group-hover:text-white transition-colors">.</span>
            </span>
            <span className="text-[9px] tracking-[0.3em] text-gray-500 font-mono mt-1 group-hover:text-white transition-colors duration-500 uppercase">
              Design Engineer
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
          <button className="bg-white text-black px-6 py-2 text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 active:scale-95">
            LET'S TALK
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-black z-40 flex flex-col justify-center items-center space-y-8 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className="text-3xl font-bold text-white hover:text-blue-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;