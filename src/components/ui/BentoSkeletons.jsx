import React from 'react';
import { Database } from 'lucide-react';

export const WireframeSkeleton = () => (
  <div className="w-full h-32 bg-black border border-white/10 p-2 flex flex-col gap-2 group-hover:border-blue-500/30 transition-colors">
    <div className="w-full h-2 border border-white/5 flex justify-between px-1 items-center">
      <div className="w-4 h-1 bg-white/20"></div>
      <div className="flex gap-1">
        <div className="w-2 h-1 bg-white/10"></div>
        <div className="w-2 h-1 bg-white/10"></div>
      </div>
    </div>
    <div className="flex-1 border border-white/5 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      <div className="grid grid-cols-2 gap-2 w-3/4">
        <div className="h-8 border border-white/10"></div>
        <div className="h-8 border border-white/10"></div>
      </div>
    </div>
  </div>
);

export const CodeSkeleton = () => (
  <div className="w-full h-full bg-black border border-white/10 p-3 font-mono text-[10px] leading-tight text-gray-600 overflow-hidden">
    <div className="flex gap-2 mb-2">
      <div className="w-2 h-2 bg-blue-500/50"></div>
      <div className="w-20 h-2 bg-white/10"></div>
    </div>
    <div className="space-y-1">
      <div className="w-full h-1 bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors"></div>
      <div className="w-3/4 h-1 bg-white/5"></div>
      <div className="w-1/2 h-1 bg-white/5"></div>
      <div className="w-5/6 h-1 bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors"></div>
      <div className="flex gap-1 mt-2">
        <Database size={12} className="text-blue-500" />
        <span className="text-blue-400">DB_CONNECTED</span>
      </div>
    </div>
  </div>
);

export const TestSkeleton = () => (
  <div className="w-full h-full flex flex-col gap-2">
    {[1, 2, 3].map((i) => (
      <div key={i} className="flex items-center justify-between p-2 border border-white/5 bg-black hover:bg-white/5 transition-colors">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 ${i === 3 ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></div>
          <div className="w-16 h-1 bg-white/20"></div>
        </div>
        <div className="w-4 h-1 bg-white/10"></div>
      </div>
    ))}
  </div>
);

export const TimelineSkeleton = () => (
  <div className="w-full h-full flex flex-col justify-center px-4">
    <div className="relative w-full h-px bg-white/20">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-0.5 bg-blue-500"></div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500"></div>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/20"></div>
    </div>
    <div className="flex justify-between text-[8px] text-gray-500 font-mono mt-2 uppercase tracking-widest">
      <span>Start</span>
      <span className="text-blue-400">Sprint 2</span>
      <span>Launch</span>
    </div>
  </div>
);

export const ChatSkeleton = () => (
  <div className="w-full h-full flex flex-col justify-end gap-2 p-2">
    <div className="self-start w-3/4 p-2 border border-white/10 bg-white/5">
      <div className="w-1/2 h-1 bg-white/20 mb-1"></div>
      <div className="w-3/4 h-1 bg-white/10"></div>
    </div>
    <div className="self-end w-2/3 p-2 border border-blue-500/30 bg-blue-500/10">
      <div className="w-full h-1 bg-blue-400/20"></div>
    </div>
  </div>
);