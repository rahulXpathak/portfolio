import React from 'react';
import { Github, Linkedin, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/your-profile-here', // REPLACE WITH YOUR LINKEDIN
      icon: Linkedin 
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/your-username', // REPLACE WITH YOUR GITHUB
      icon: Github 
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/your-handle', // REPLACE WITH YOUR INSTAGRAM
      icon: Instagram 
    },
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/your-profile', // REPLACE WITH YOUR FACEBOOK
      icon: Facebook 
    },
    { 
      name: 'Email', 
      href: 'mailto:your.email@example.com', // REPLACE WITH YOUR EMAIL
      icon: Mail 
    }
  ];

  return (
    <footer className="bg-[#020202] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-bold tracking-tighter hover:text-blue-500 transition-colors">
            PATHAK<span className="text-blue-500 text-3xl">.</span>
          </a>
          <p className="text-gray-500 text-sm mt-2">
            © {currentYear} Rahul Pathak. Built with React & Passion.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {socialLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-500 text-sm font-medium transition-colors group"
            >
              <link.icon size={16} className="group-hover:-translate-y-1 transition-transform" />
              <span className="hidden sm:inline">{link.name}</span>
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;