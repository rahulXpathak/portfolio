import React from 'react';
// Importing appropriate icons from Lucide
import { 
  Code2, Globe, Database, Server, Box, Layers, 
  Cpu, Terminal, FileJson, AppWindow, GitBranch, Cloud 
} from 'lucide-react';

const TechStack = () => {
  // Split stack into two rows for the "dual-stream" effect
  // Row 1: Frontend / Core
  const row1 = [
    { name: "react", icon: Box },
    { name: "React Native", icon: AppWindow },
    { name: "Next.js", icon: Globe },
    { name: "TypeScript", icon: Code2 },
    { name: "Tailwind CSS", icon: Layers },
    { name: "Redux", icon: FileJson },
    { name: "Three.js", icon: Box },
    { name: "Angular", icon: Code2 },
  ];

  // Row 2: Backend / Data / Tools
  const row2 = [
    { name: "Node.js", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "Express", icon: Terminal },
    { name: "Python", icon: FileJson },
    { name: "TensorFlow", icon: Cpu },
    { name: "OpenCV", icon: Layers },
    { name: "Docker", icon: Box },
    { name: "AWS", icon: Cloud },
    { name: "Git", icon: GitBranch },
  ];

  return (
    <section className="py-24 bg-[#050505] border-y border-white/5 overflow-hidden flex flex-col gap-8 relative">
      
      {/* Central subtle glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[200px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Side Fade Gradients for depth */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

      {/* --- ROW 1 (Moves Left) --- */}
      <div className="flex overflow-hidden group/track">
        {/* Added 'hover:pause' to stop animation on mouseover */}
        <div className="flex animate-loop-scroll whitespace-nowrap gap-6 group-hover/track:pause">
          {/* Repeat list 3 times for smoother infinite loop */}
          {[...row1, ...row1, ...row1].map((tech, index) => (
            <TechCard key={index} name={tech.name} Icon={tech.icon} />
          ))}
        </div>
      </div>

      {/* --- ROW 2 (Moves Right) --- */}
      <div className="flex overflow-hidden group/track">
        {/* Uses reverse animation class */}
        <div className="flex animate-loop-scroll-reverse whitespace-nowrap gap-6 group-hover/track:pause">
          {[...row2, ...row2, ...row2].map((tech, index) => (
            <TechCard key={index} name={tech.name} Icon={tech.icon} />
          ))}
        </div>
      </div>

    </section>
  );
};

// Internal Component for the individual "Cyber Card"
const TechCard = ({ name, Icon }) => (
  <div className="relative group/card flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-blue-950/10 hover:border-blue-500/50 transition-all duration-500 cursor-default backdrop-blur-md">
    
    {/* Glowing Icon Container */}
    <div className="relative flex items-center justify-center w-10 h-10 bg-black/50 border border-white/10 rounded-lg group-hover/card:border-blue-400/50 transition-colors duration-500">
      <Icon size={18} className="text-gray-400 group-hover/card:text-blue-400 transition-colors duration-500" />
      {/* Subtle inner glow on hover */}
      <div className="absolute inset-0 bg-blue-500/20 blur-md rounded-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
    </div>

    {/* Tech Name */}
    <span className="text-gray-300 font-mono text-sm font-bold uppercase tracking-wider group-hover/card:text-white transition-colors duration-500">
      {name}
    </span>
  </div>
);

export default TechStack;