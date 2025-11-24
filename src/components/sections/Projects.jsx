import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Cpu, 
  Code, 
  Database, 
  Brain, 
  FileText, 
  Layers, 
  Globe,
  MapPin,       
  GitBranch     
} from 'lucide-react';
import { useOnScreen } from '../../hooks/useOnScreen';

const Projects = () => {
  // Hook for scroll animation
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  const projects = [
    {
      title: "Lung Tumor Segmentation",
      category: "Computer Vision & Research",
      tech: ["Python", "OpenCV", "Deep Learning", "TensorFlow"],
      desc: "Automated detection of lung tumors using advanced image segmentation techniques. Includes a published research paper and certification.",
      icon: Brain,
      highlight: true, 
      link: "#"
    },
    {
      title: "Build Your Own Git (VCS)",
      category: "System Programming",
      tech: ["Node.js", "File System", "SHA-1 Hashing", "CLI"],
      desc: "A distributed version control system built from scratch. Implements core Git features like 'init', 'add', 'commit', and content hashing.",
      icon: GitBranch,
      link: "#"
    },
    {
      title: "Airbnb Clone",
      category: "Booking Platform",
      tech: ["MERN Stack", "Mapbox API", "Tailwind"],
      desc: "Full-stack rental marketplace featuring map-based search, date reservation system, and property management for hosts.",
      icon: MapPin,
      link: "#"
    },
    {
      title: "Smart Shopping Cart",
      category: "IoT & Embedded Systems",
      date: "June 1 - June 20, 2023",
      tech: ["Arduino", "C++", "Sensors", "IoT"],
      desc: "An automated billing system built with Arduino to streamline the retail checkout experience and reduce queue times.",
      icon: Cpu,
      link: "#"
    },
    {
      title: "Learning Management System",
      category: "EdTech Platform",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      desc: "A comprehensive LMS allowing instructors to manage courses and students to track learning progress.",
      icon: Database,
      link: "#"
    },
    {
      title: "Netflix Clone",
      category: "Streaming UI",
      tech: ["React", "TMDB API", "Firebase", "CSS"],
      desc: "Pixel-perfect replica of the streaming giant, featuring dynamic movie data fetching and authentication.",
      icon: Layers,
      link: "#"
    },
    {
      title: "Zerodha Clone",
      category: "FinTech Dashboard",
      tech: ["MERN Stack", "Chart.js", "Real-time Data"],
      desc: "Stock trading dashboard implementation featuring real-time data visualization and portfolio management.",
      icon: Code,
      link: "#"
    },
    {
      title: "LinkedIn Clone",
      category: "Social Network",
      tech: ["MERN Stack", "Socket.io", "Redux"],
      desc: "Professional networking platform with features for connections, posts, and real-time messaging.",
      icon: Globe,
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-[#050505] border-t border-white/10 perspective-2000">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">SELECTED WORKS</h2>
            <div className="h-1 w-20 bg-blue-600"></div>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-gray-500 font-mono text-sm">SHIP IT.</p>
          </div>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              // 3D CARD CONTAINER
              className={`
                group relative 
                bg-neutral-900/40 border border-white/10 
                p-8 
                flex flex-col justify-between 
                rounded-xl backdrop-blur-md
                transform-style-3d
                transition-all duration-500 ease-out
                hover:border-blue-500/30
                hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.25)]
                project-card-3d
                ${project.highlight ? 'lg:col-span-2 bg-gradient-to-br from-neutral-900/80 to-blue-900/20' : ''}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover Slide Effect (Inner Glow) */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none translate-z-0"></div>

              {/* CONTENT WRAPPER (Floats above card) */}
              <div className="transform-style-3d translate-z-20 group-hover:translate-z-10 transition-transform duration-500">
                {/* Header */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="p-3 bg-white/5 border border-white/10 text-blue-400 rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <project.icon size={24} />
                  </div>
                  <div className="flex gap-3 translate-z-30">
                     <a href={project.link} className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-md hover:scale-110 transform"><Github size={20} /></a>
                     <a href={project.link} className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-md hover:scale-110 transform"><ExternalLink size={20} /></a>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors relative z-10 translate-z-10">{project.title}</h3>
                
                {/* Subtitle / Date */}
                <div className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-wider relative z-10">
                  {project.date ? project.date : project.category}
                </div>

                <p className="text-gray-400 leading-relaxed mb-6 text-sm relative z-10 group-hover:text-gray-300 transition-colors">
                  {project.desc}
                </p>

                {/* Special Badge for Research Paper */}
                {project.highlight && (
                  <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 mb-6 rounded-full relative z-10 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                    <FileText size={12} className="text-blue-400" />
                    <span className="text-blue-400 text-xs font-bold">PAPER PUBLISHED</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto relative z-10 translate-z-20">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono border border-white/10 px-2 py-1 text-gray-400 rounded bg-black/40 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-2000 { perspective: 2000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        
        /* Depth Utility Classes */
        .translate-z-0 { transform: translateZ(0px); }
        .translate-z-10 { transform: translateZ(10px); }
        .translate-z-20 { transform: translateZ(20px); }
        .translate-z-30 { transform: translateZ(30px); }

        /* 3D Rotation on Hover */
        .project-card-3d {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s, box-shadow 0.3s;
        }
        .project-card-3d:hover {
          transform: translateY(-10px) rotateX(2deg) rotateY(-2deg);
        }
      `}</style>
    </section>
  );
};

export default Projects;