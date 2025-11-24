import React, { useRef, useState } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

const BentoItem = ({ title, desc, icon: Icon, colSpan = "col-span-1", children, delay }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  
  // State for 3D Tilt Effect
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on mouse position relative to center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -2; // Max rotation 2deg
    const rotateYValue = ((x - centerX) / centerX) * 2;  // Max rotation 2deg

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div 
      ref={ref}
      className={`${colSpan} perspective-1000 h-full`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`
          h-full group relative 
          bg-neutral-900/40 
          border border-white/10 
          p-6 
          overflow-hidden 
          rounded-xl 
          backdrop-blur-sm
          flex flex-col 
          transition-all duration-500 ease-out
          transform-gpu
          hover:border-blue-500/40
          hover:bg-neutral-900/60
          hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.3)]
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`,
          transition: 'transform 0.1s ease-out, opacity 0.7s ease-out, border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease'
        }}
      >
        {/* Dynamic Spotlight Gradient that follows mouse roughly (simulated via group-hover opacity) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div className="absolute -inset-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        {/* Header */}
        <div className="relative z-10 flex items-start justify-between mb-6 pointer-events-none">
          <div>
              <h3 className="text-lg font-bold text-white mb-1 tracking-tight flex items-center gap-2 group-hover:text-blue-200 transition-colors">
                  {title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[200px] group-hover:text-gray-400 transition-colors">{desc}</p>
          </div>
          <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 rounded-lg group-hover:text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/20">
            <Icon size={16} />
          </div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 flex-1 min-h-[100px] bg-black/20 border border-dashed border-white/10 p-2 rounded-lg group-hover:border-blue-500/20 transition-colors pointer-events-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BentoItem;