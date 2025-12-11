import React, { useRef, useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Calendar, Award, Sparkles } from 'lucide-react';
import { useOnScreen } from '../../hooks/useOnScreen';

const Experience = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  // Scroll Listener to animate the line
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const centerOffset = windowHeight / 2;

      const start = rect.top - centerOffset;
      const end = rect.height;

      let progress = (Math.abs(start) / end) * 100;

      if (rect.top > centerOffset) progress = 0;
      if (progress > 100) progress = 100;

      setLineHeight(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const history = [
    {
      type: "education",
      role: "B.Tech in Computer Science",
      org: "DIATM (Durgapur, West Bengal)",
      date: "2022 - 2025",
      desc: "Durgapur Institute of Advance Technology and Management. Built strong foundations in CS fundamentals while pursuing parallel certifications."
    },
    {
      type: "certification",
      role: "Full Stack & Data Science",
      org: "PW Skills & Apna College",
      date: "2023 - 2025",
      desc: "Completed intensive bootcamps in Full Stack Web Development (MERN) and Data Science (Python/ML) to bridge the gap between theory and industry application."
    },
    {
      type: "work",
      role: "Frontend Developer (Intern)",
      org: "CAD Institute Kolkata Pvt Ltd",
      date: "Sept 2024 - July 2025",
      desc: "Spearheaded frontend development for client projects. Focused on UI responsiveness, component reusability, and optimizing load times."
    },
    {
      type: "work",
      role: "Full Stack Developer",
      org: "Sky IT Solutions",
      date: "Sept 2, 2025 - Present",
      desc: "Currently architecting scalable solutions using Next.js, React Native, and Angular. Integrating 3D visuals with Three.js and managing hybrid database architectures."
    }
  ];

  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden perspective-1000">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Floating gradient orbs */}
      <div className="absolute top-40 left-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header - Consistent Style */}
        <div className="mb-20 md:flex justify-between items-end pb-10 relative">
          <div className="relative">
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent" />
              <span className="text-cyan-400 text-xs font-mono tracking-[0.3em] uppercase">My Path</span>
              <Sparkles className="w-3 h-3 text-cyan-400" />
            </div>

            {/* Main title with gradient */}
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[0.9]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
                CAREER
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient-x bg-[length:200%_200%]">
                JOURNEY
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              From <span className="text-white font-medium">education</span> to
              <span className="text-cyan-400"> professional experience</span>, building
              <span className="text-blue-400"> expertise</span> step by step.
            </p>
          </div>

          {/* Right side - Number */}
          <div className="hidden md:flex flex-col items-end gap-4 mt-8 md:mt-0">
            <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent">03</span>
            <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">// Experience</p>
          </div>

          {/* Decorative line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-cyan-500/50 via-blue-500/30 to-transparent" />
        </div>

        {/* TIMELINE CONTAINER */}
        {/* Mobile: minimal left margin, Desktop: space for date badges */}
        <div ref={containerRef} className="relative ml-6 md:ml-48 space-y-8 md:space-y-12">

          {/* --- 3D VERTICAL LINE ANIMATION --- */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-neutral-800/50"></div>

          <div
            className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all duration-100 ease-linear z-10"
            style={{ height: `${lineHeight}%` }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-4 bg-white blur-[4px] rounded-full"></div>
          </div>


          {/* --- TIMELINE ITEMS --- */}
          <div ref={ref} className="space-y-8 md:space-y-12">
            {history.map((item, index) => (
              <div
                key={index}
                className={`relative pl-8 md:pl-20 group transition-all duration-700 ease-out 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div
                  className={`
                    absolute left-[-5px] top-1 md:top-6 w-3 h-3 rounded-full z-20 border-2 transition-all duration-500
                    ${lineHeight > (index * 25) + 10
                      ? 'bg-blue-500 border-white shadow-[0_0_15px_rgba(59,130,246,1)] scale-125'
                      : 'bg-neutral-900 border-neutral-700'
                    }
                  `}
                ></div>

                {/* Date Badge - Mobile: inline at top, Desktop: positioned left */}
                <div className="md:absolute md:left-[-200px] md:top-4 z-10 mb-4 md:mb-0">
                  <div className="inline-flex md:grid md:place-items-center w-auto md:w-[170px] h-[36px] md:h-[44px] px-3 md:px-0 bg-black/80 border border-blue-900/30 rounded-sm backdrop-blur-sm group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="shrink-0 text-blue-500" />
                      <span className="text-[11px] font-mono text-blue-100 font-bold whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3D Card */}
                <div className="relative perspective-1000 w-full max-w-4xl">
                  <div className="
                    relative 
                    bg-neutral-900/40 
                    border border-white/5 
                    p-5 md:p-8 
                    rounded-xl
                    backdrop-blur-md
                    group-hover:border-blue-500/30
                    group-hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)]
                    card-3d-hover
                  ">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>

                    <div className="relative z-10">
                      <div className="flex items-start md:items-center gap-3 md:gap-4 mb-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 text-blue-400 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300 shrink-0">
                          {item.type === 'education' && <GraduationCap size={18} className="md:w-5 md:h-5" />}
                          {item.type === 'work' && <Briefcase size={18} className="md:w-5 md:h-5" />}
                          {item.type === 'certification' && <Award size={18} className="md:w-5 md:h-5" />}
                        </div>

                        <h3 className="text-base md:text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                          {item.role}
                        </h3>
                      </div>

                      <h4 className="text-gray-500 font-mono text-[10px] md:text-xs mb-3 md:mb-4 pl-1">
                        @ {item.org}
                      </h4>

                      <p className="text-gray-400 leading-relaxed text-xs md:text-sm border-l-2 border-white/5 pl-3 md:pl-4 group-hover:border-blue-500/50 transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .card-3d-hover {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s, box-shadow 0.3s;
          transform-style: preserve-3d;
        }
        .group:hover .card-3d-hover {
          transform: translateY(-5px) rotateX(2deg) rotateY(2deg);
        }
      `}</style>
    </section>
  );
};

export default Experience;