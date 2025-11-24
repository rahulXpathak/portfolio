import React, { useRef, useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';
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
    <section id="experience" className="py-20 bg-[#050505] relative border-t border-white/10 perspective-1000">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TITLE: Left Aligned */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16">
          CAREER JOURNEY
        </h2>

        {/* TIMELINE CONTAINER */}
        {/* Added md:ml-48 to create space for the date badges on the left */}
        <div ref={containerRef} className="relative ml-4 md:ml-48 space-y-12">
          
          {/* --- 3D VERTICAL LINE ANIMATION --- */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-neutral-800/50 md:left-0 ml-4 md:ml-0"></div>

          <div 
            className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all duration-100 ease-linear md:left-0 ml-4 md:ml-0 z-10"
            style={{ height: `${lineHeight}%` }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-4 bg-white blur-[4px] rounded-full"></div>
          </div>


          {/* --- TIMELINE ITEMS --- */}
          <div ref={ref} className="space-y-12">
            {history.map((item, index) => (
              <div 
                key={index} 
                className={`relative pl-12 md:pl-20 group transition-all duration-700 ease-out 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div 
                  className={`
                    absolute left-[11px] md:left-[-5px] top-6 w-3 h-3 rounded-full z-20 border-2 transition-all duration-500
                    ${lineHeight > (index * 25) + 10 
                      ? 'bg-blue-500 border-white shadow-[0_0_15px_rgba(59,130,246,1)] scale-125' 
                      : 'bg-neutral-900 border-neutral-700'
                    }
                  `}
                ></div>

                {/* Date Badge */}
                <div className="absolute left-12 md:left-[-200px] top-4 z-10">
                  <div className="grid place-items-center w-[170px] h-[44px] bg-black/80 border border-blue-900/30 rounded-sm backdrop-blur-sm group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="shrink-0 text-blue-500" />
                      <span className="text-[11px] font-mono text-blue-100 font-bold whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3D Card */}
                <div className="relative mt-14 md:mt-0 perspective-1000 w-full max-w-4xl">
                  <div className="
                    relative 
                    bg-neutral-900/40 
                    border border-white/5 
                    p-8 
                    rounded-xl
                    backdrop-blur-md
                    group-hover:border-blue-500/30
                    group-hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)]
                    card-3d-hover
                  ">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 text-blue-400 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
                          {item.type === 'education' && <GraduationCap size={20} />}
                          {item.type === 'work' && <Briefcase size={20} />}
                          {item.type === 'certification' && <Award size={20} />}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                          {item.role}
                        </h3>
                      </div>
                      
                      <h4 className="text-gray-500 font-mono text-xs mb-4 pl-1">
                        @ {item.org}
                      </h4>
                      
                      <p className="text-gray-400 leading-relaxed text-sm pl-1 border-l-2 border-white/5 pl-4 group-hover:border-blue-500/50 transition-colors duration-300">
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