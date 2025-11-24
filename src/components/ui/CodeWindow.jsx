import React, { useState, useEffect } from 'react';

const CodeWindow = () => {
  const [code, setCode] = useState('');
  const fullCode = `const Studio = () => {
  const mission = "Crafting Digital Excellence";
  
  return (
    <Experience
      quality="Sharp"
      corners="None"
      performance={100}
    />
  );
};`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCode(fullCode.slice(0, i));
      i++;
      if (i > fullCode.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto bg-black/80 backdrop-blur border border-white/20 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-neutral-900/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        </div>
        <div className="text-[10px] text-gray-500 font-mono ml-4">App.jsx — readonly</div>
      </div>
      
      <div className="p-6 font-mono text-sm md:text-base overflow-hidden min-h-[240px]">
        <pre className="text-blue-300">
          <span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;
          {'\n\n'}
          {code}
          <span className="animate-pulse inline-block w-2 h-4 bg-blue-500 align-middle ml-1"></span>
        </pre>
      </div>
      
      <div className="px-4 py-1 bg-blue-900/20 border-t border-white/10 flex justify-between text-[10px] text-blue-400 font-mono">
        <span>master*</span>
        <span>Ln 12, Col 4</span>
      </div>
    </div>
  );
};

export default CodeWindow;