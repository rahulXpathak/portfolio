import React from 'react';
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp, MapPin, Phone, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/rahul-pathak-a3bb25246', icon: Linkedin, color: '#0077B5' },
    { name: 'GitHub', href: 'https://github.com/rahulXpathak', icon: Github, color: '#ffffff' },
    { name: 'Twitter', href: 'https://twitter.com/rahulXpathak', icon: Twitter, color: '#1DA1F2' },
    { name: 'Email', href: 'mailto:rahulpathak@example.com', icon: Mail, color: '#EA4335' }
  ];

  const quickLinks = [
    { name: 'Skills', href: '#features' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#founder' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">

      {/* Animated gradient top border */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 animate-pulse opacity-50" />
      </div>

      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        {/* Radial glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-blue-600/10 via-purple-600/5 to-transparent blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand Section - Takes more space */}
          <div className="md:col-span-5">
            {/* Logo with glow */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-40 group-hover:opacity-70 transition-opacity" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="font-black text-xl text-white font-mono">RP</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Rahul Pathak</h3>
                <p className="text-blue-400 text-sm font-medium">Full Stack Developer</p>
              </div>
            </div>

            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Passionate about creating innovative digital solutions that make a difference. Let's build something amazing together.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+918509027843" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <span>+91 8509027843</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4">
            <h4 className="text-white font-semibold mb-6">Let's Connect</h4>
            <p className="text-gray-400 text-sm mb-6">Follow me on social media for updates on my latest projects and insights.</p>

            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                    style={{ backgroundColor: link.color }}
                  />
                  <div className="relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-white/30 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300">
                    <link.icon size={20} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider with decoration */}
        <div className="relative mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-2 bg-[#0a0a0a] px-4">
            <div className="w-4 h-4 rounded-full border-2 border-blue-500 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-500 text-sm flex items-center gap-2">
            © {currentYear} Rahul Pathak. Crafted with
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            in India
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            <span className="text-sm">Back to Top</span>
          </button>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600" />
    </footer>
  );
};

export default Footer;