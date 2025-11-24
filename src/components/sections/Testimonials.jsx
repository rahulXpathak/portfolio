import React, { useState, useRef } from 'react';
import { MousePointer2 } from 'lucide-react';

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

  const testimonials = [
    { name: "Sarah Jenkins", role: "CEO, FinTech Co", text: "Pathak Studio transformed our vague concept into a razor-sharp product. The attention to detail is unmatched." },
    { name: "David Chen", role: "Founder, StartupX", text: "Fast, reliable, and surprisingly creative. The shader animations they added increased our engagement by 40%." },
    { name: "Elena Rodriguez", role: "CTO, Enterprise", text: "Code quality is stellar. As a technical founder myself, I appreciate the clean architecture provided." },
    { name: "Mark Foster", role: "Director, ArtStudio", text: "Finally a developer who understands design. No rounded corners, just pure grid goodness." },
    { name: "Priya Patel", role: "VP Marketing", text: "The feedback loop was incredible. Daily updates and immediate implementation of feedback." }
  ];

  return (
    <section id="testimonials" className="py-32 bg-black border-t border-white/10 overflow-hidden relative">
       <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">CLIENT VOICES</h2>
          <div className="flex items-center gap-2 text-blue-500">
            <MousePointer2 size={16} /> <span className="text-sm font-mono">DRAG TO EXPLORE</span>
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
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="min-w-[350px] md:min-w-[450px] bg-neutral-900 p-10 border border-white/5 hover:border-blue-500 transition-all duration-300 select-none flex flex-col justify-between h-[300px]"
            >
              <div className="text-4xl text-blue-600 font-serif opacity-30">"</div>
              <p className="text-xl text-white font-light leading-relaxed">{t.text}</p>
              
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-none"></div>
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="min-w-[100px]"></div>
       </div>
    </section>
  );
};

export default Testimonials;