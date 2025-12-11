import React, { useRef, useState } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

const BentoItem = ({ title, desc, icon: Icon, colSpan = "col-span-1", children, delay }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <div
      ref={ref}
      className={`${colSpan} h-full`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          h-full group relative 
          rounded-2xl 
          overflow-hidden
          transition-all duration-500 ease-out
          transform hover:-translate-y-2 hover:scale-[1.02]
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        {/* Gradient border - ALWAYS VISIBLE */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-cyan-500/30 p-[1px]">
          <div className="absolute inset-[1px] rounded-2xl bg-[#0c0c0c]" />
        </div>

        {/* Hover glow effect */}
        <div className={`
          absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 
          blur-xl transition-all duration-500
          ${isHovered ? 'opacity-30' : 'opacity-0'}
        `} />

        {/* Card Content */}
        <div className="relative h-full bg-gradient-to-br from-neutral-900/95 to-neutral-950/95 rounded-2xl p-6 flex flex-col border border-white/10 hover:border-blue-500/40 transition-colors duration-300">

          {/* Corner gradient accent - ALWAYS VISIBLE */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 via-purple-500/10 to-transparent rounded-bl-[100px] pointer-events-none" />

          {/* Bottom gradient accent */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-500/5 to-transparent rounded-b-2xl pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 flex items-start justify-between mb-5">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-300 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[220px] group-hover:text-gray-300 transition-colors">
                {desc}
              </p>
            </div>

            {/* Icon - More colorful by default */}
            <div className="relative flex-shrink-0">
              <div className={`
                absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-lg transition-opacity duration-300
                ${isHovered ? 'opacity-60' : 'opacity-30'}
              `} />
              <div className={`
                relative w-12 h-12 flex items-center justify-center rounded-xl 
                bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                border border-blue-500/30
                text-blue-400 
                group-hover:text-white group-hover:from-blue-500/30 group-hover:to-purple-500/30 group-hover:border-blue-400/50
                transition-all duration-300
              `}>
                <Icon size={22} />
              </div>
            </div>
          </div>

          {/* Content Area - Better visibility */}
          <div className="relative z-10 flex-1 min-h-[120px] bg-black/50 border border-white/10 p-4 rounded-xl group-hover:border-blue-500/30 group-hover:bg-black/60 transition-all duration-300 overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />

            <div className="relative z-10">
              {children}
            </div>
          </div>

          {/* Bottom glow line - ALWAYS VISIBLE */}
          <div className="absolute bottom-0 left-1/4 right-1/4 h-[2px] rounded-full bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-50 group-hover:opacity-100 group-hover:via-blue-400 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default BentoItem;