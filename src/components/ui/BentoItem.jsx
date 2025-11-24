import React from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

const BentoItem = ({ title, desc, icon: Icon, colSpan = "col-span-1", children, delay }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`${colSpan} group relative bg-neutral-900/30 border border-white/10 p-6 overflow-hidden hover:border-blue-500/50 transition-colors duration-500 flex flex-col
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 ease-out`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-900/0 group-hover:from-blue-600/5 group-hover:to-blue-900/5 transition-all duration-500"></div>
      
      <div className="relative z-10 flex items-start justify-between mb-6">
        <div>
            <h3 className="text-lg font-bold text-white mb-1 tracking-tight flex items-center gap-2">
                {title}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">{desc}</p>
        </div>
        <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-blue-500 group-hover:border-blue-500/30 transition-all">
          <Icon size={16} />
        </div>
      </div>

      <div className="relative z-10 flex-1 min-h-[100px] bg-black/40 border border-dashed border-white/10 p-2 group-hover:border-white/20 transition-colors">
        {children}
      </div>
    </div>
  );
};

export default BentoItem;