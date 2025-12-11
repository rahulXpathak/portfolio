import React, { useRef, useState } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

const BentoItem = ({ title, desc, icon: Icon, colSpan = "col-span-1", children, delay }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  // State for 3D Tilt Effect
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation based on mouse position relative to center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -3;
    const rotateYValue = ((x - centerX) / centerX) * 3;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);

    // Calculate glow position as percentage
    setGlowPosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowPosition({ x: 50, y: 50 });
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
          p-[1px]
          rounded-2xl 
          overflow-hidden
          transition-all duration-500 ease-out
          transform-gpu
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out, opacity 0.7s ease-out'
        }}
      >
        {/* Animated gradient border */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `
              radial-gradient(
                600px circle at ${glowPosition.x}% ${glowPosition.y}%,
                rgba(59, 130, 246, 0.3),
                rgba(139, 92, 246, 0.15),
                transparent 40%
              )
            `
          }}
        />

        {/* Static border gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

        {/* Inner card */}
        <div className="relative h-full bg-[#0a0a0a] rounded-2xl p-6 flex flex-col backdrop-blur-xl">

          {/* Spotlight effect */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `
                radial-gradient(
                  400px circle at ${glowPosition.x}% ${glowPosition.y}%,
                  rgba(59, 130, 246, 0.08),
                  transparent 50%
                )
              `
            }}
          />

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Header */}
          <div className="relative z-10 flex items-start justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight flex items-center gap-2 group-hover:text-blue-100 transition-colors">
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] group-hover:text-gray-400 transition-colors">{desc}</p>
            </div>

            {/* Icon with gradient background */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
              <div className="relative w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 rounded-xl group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-500/20 group-hover:border-blue-500/30 transition-all duration-300">
                <Icon size={18} />
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="relative z-10 flex-1 min-h-[100px] bg-black/40 border border-white/5 p-3 rounded-xl group-hover:border-blue-500/20 group-hover:bg-black/60 transition-all">
            {children}
          </div>

          {/* Bottom glow line */}
          <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
};

export default BentoItem;