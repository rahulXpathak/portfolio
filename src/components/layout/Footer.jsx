import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#020202] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-bold tracking-tighter">
            PATHAK<span className="text-blue-500">.</span>
          </a>
          <p className="text-gray-500 text-sm mt-2">© 2023 Pathak Studio. All rights reserved.</p>
        </div>

        <div className="flex gap-8">
          {['Twitter', 'LinkedIn', 'GitHub', 'Email'].map((link) => (
            <a key={link} href="#" className="text-gray-400 hover:text-blue-500 text-sm font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;