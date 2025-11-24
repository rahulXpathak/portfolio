import React, { useState, useRef } from 'react';
import { MousePointer2, Award } from 'lucide-react';

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Updated content: Certifications & Education
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
    <section id="testimonials" className="py-32 bg-black border-t border-white/10 overflow-hidden relative">
       <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">CREDENTIALS</h2>
          <div className="flex items-center gap-2 text-blue-500">
            <MousePointer2 size={16} /> <span className="text-sm font-mono">DRAG TO VIEW</span>
          </div>
       </div>

       <div 
        ref={scrollRef}
        className="flex overflow-x-scroll gap-8 px-6 pb-12 cursor-grab active:cursor-grabbing scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
       >
          {certifications.map((cert, i) => (
            <div 
              key={i} 
              className="min-w-[350px] md:min-w-[450px] bg-neutral-900 p-10 border border-white/5 hover:border-blue-500 transition-all duration-300 select-none flex flex-col justify-between h-[300px]"
            >
              {/* Decorative Icon */}
              <div className="text-blue-600 opacity-50 mb-4">
                 <Award size={40} strokeWidth={1} />
              </div>

              <p className="text-lg text-white font-light leading-relaxed mb-4">
                {cert.desc}
              </p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-none flex items-center justify-center font-bold text-white text-xs">
                    {/* Initials of Issuer */}
                    {cert.issuer.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide">{cert.title}</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Visual Spacer at end of list */}
          <div className="min-w-[100px]"></div>
       </div>
    </section>
  );
};

export default Testimonials;