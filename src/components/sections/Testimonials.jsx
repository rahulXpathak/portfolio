import React from 'react';
import { Award } from 'lucide-react';

const Testimonials = () => {
  const certifications = [
    { 
      title: "Full Stack Development", 
      issuer: "PW Skills", 
      desc: "Comprehensive mastery of the MERN ecosystem. Built scalable architectures using MongoDB, Express, React, and Node.js." 
    },
    { 
      title: "Java Full Stack", 
      issuer: "PW Skills", 
      desc: "Enterprise-grade development focusing on Object-Oriented Programming, Spring Boot microservices, and Hibernate." 
    },
    { 
      title: "Full Stack Web Dev", 
      issuer: "Apna College", 
      desc: "Intensive bootcamp covering modern JavaScript ES6+, responsive UI/UX design principles, and frontend performance." 
    },
    { 
      title: "Data Science", 
      issuer: "PW Skills", 
      desc: "Analytical problem solving using Python. Proficient in Machine Learning algorithms, Pandas, and data visualization." 
    },
  ];

  return (
    <section id="testimonials" className="py-32 bg-black border-t border-white/10 relative perspective-1000 overflow-hidden">
       <div className="max-w-7xl mx-auto px-6 mb-2">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">CREDENTIALS</h2>
          <div className="flex items-center gap-2 text-blue-500 font-mono text-sm tracking-widest">
            <span>// CERTIFIED EXCELLENCE</span>
          </div>
       </div>

       {/* Infinite Scroll Container */}
       {/* Added [mask-image] to gently fade the left and right edges */}
       <div className="flex overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          
          {/* Scroll Track */}
          {/* py-20 padding ensures the 3D cards have space to "Pop Up" without clipping */}
          <div className="flex flex-nowrap gap-8 animate-loop-scroll hover:pause py-20 px-4">
            
            {/* Duplicated array for seamless infinite loop */}
            {[...certifications, ...certifications].map((cert, i) => (
              <div 
                key={i} 
                className="
                  group
                  min-w-[350px] md:min-w-[450px] 
                  h-[300px]
                  bg-neutral-900/40 
                  p-10 
                  border border-white/5 
                  backdrop-blur-md
                  rounded-xl
                  flex flex-col justify-between 
                  select-none 
                  transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                  hover:border-blue-500/40
                  hover:bg-neutral-900/80
                  hover:shadow-[0_30px_60px_-10px_rgba(37,99,235,0.3)]
                  transform-gpu
                  hover:-translate-y-3
                  hover:scale-[1.02]
                  hover:rotate-1
                "
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>

                {/* Decorative Icon */}
                <div className="text-blue-600 opacity-50 mb-4 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300 origin-left">
                   <Award size={40} strokeWidth={1} />
                </div>

                <p className="text-lg text-white font-light leading-relaxed mb-4 relative z-10 group-hover:text-blue-50 transition-colors">
                  {cert.desc}
                </p>
                
                <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6 relative z-10">
                  <div className="
                    w-12 h-12 
                    bg-gradient-to-tr from-blue-600 to-purple-600 
                    rounded-lg 
                    flex items-center justify-center 
                    font-bold text-white text-sm 
                    shadow-lg 
                    group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] 
                    group-hover:scale-110
                    transition-all duration-300
                  ">
                      {cert.issuer.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-wide group-hover:text-blue-200 transition-colors">{cert.title}</h4>
                    <p className="text-gray-500 text-xs uppercase tracking-wider group-hover:text-gray-400 transition-colors">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
       </div>

       <style>{`
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </section>
  );
};

export default Testimonials;