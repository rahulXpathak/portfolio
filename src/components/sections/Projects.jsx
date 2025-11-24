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
  MapPin,       // For Airbnb
  GitBranch     // For Version Control
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Lung Tumor Segmentation",
      category: "Computer Vision & Research",
      tech: ["Python", "OpenCV", "Deep Learning", "TensorFlow"],
      desc: "Automated detection of lung tumors using advanced image segmentation techniques. Includes a published research paper and certification.",
      icon: Brain,
      highlight: true, // Takes up 2 columns
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
    <section id="projects" className="py-32 bg-[#050505] border-t border-white/10">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative bg-neutral-900 border border-white/10 p-8 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-500 ${project.highlight ? 'lg:col-span-2 bg-gradient-to-br from-neutral-900 to-blue-900/20' : ''}`}
            >
              {/* Hover Slide Effect */}
              <div className="absolute inset-0 bg-blue-600/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none"></div>

              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 border border-white/10 text-blue-400">
                    <project.icon size={20} />
                  </div>
                  <div className="flex gap-3">
                     <a href={project.link} className="text-gray-500 hover:text-white transition-colors"><Github size={18} /></a>
                     <a href={project.link} className="text-gray-500 hover:text-white transition-colors"><ExternalLink size={18} /></a>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                
                {/* Subtitle / Date */}
                <div className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-wider">
                  {project.date ? project.date : project.category}
                </div>

                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  {project.desc}
                </p>

                {/* Special Badge for Research Paper */}
                {project.highlight && (
                  <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 mb-6">
                    <FileText size={12} className="text-blue-400" />
                    <span className="text-blue-400 text-xs font-bold">PAPER PUBLISHED</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono border border-white/10 px-2 py-1 text-gray-400 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;