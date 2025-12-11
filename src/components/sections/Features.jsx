import React from 'react';
import { Layout, Code, Terminal, Zap, MessageSquare, Globe, Sparkles } from 'lucide-react';
import BentoItem from '../ui/BentoItem';
import {
  WireframeSkeleton,
  CodeSkeleton,
  TestSkeleton,
  TimelineSkeleton,
  ChatSkeleton
} from '../ui/BentoSkeletons';

const Features = () => {
  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="mb-20 md:flex justify-between items-end pb-10 relative">
          {/* Left side - Title */}
          <div className="relative">
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-[2px] bg-gradient-to-r from-blue-500 to-transparent" />
              <span className="text-blue-400 text-xs font-mono tracking-[0.3em] uppercase">What I Do</span>
              <Sparkles className="w-3 h-3 text-blue-400" />
            </div>

            {/* Main title with gradient */}
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[0.9]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
                TECHNICAL
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient-shift bg-[length:200%_200%]">
                EXPERTISE
              </span>
            </h2>

            {/* Subtitle with accent */}
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              Building <span className="text-white font-medium">robust applications</span> with a focus on
              <span className="text-blue-400"> scalability</span> and
              <span className="text-purple-400"> user experience</span>.
            </p>
          </div>

          {/* Right side - Number indicator */}
          <div className="hidden md:flex flex-col items-end gap-4 mt-8 md:mt-0">
            <div className="text-right">
              <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent">01</span>
            </div>
            <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">// Skills</p>
          </div>

          {/* Decorative line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-500/50 via-purple-500/30 to-transparent" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Item 1: Frontend Focus */}
          <BentoItem title="Frontend Engineering" desc="Pixel-perfect React & Tailwind." icon={Layout} delay={0}>
            <WireframeSkeleton />
          </BentoItem>

          {/* Item 2: Full Stack Focus */}
          <BentoItem title="Full Stack Systems" desc="Next.js, Node.js & MongoDB ecosystems." icon={Code} colSpan="md:col-span-2" delay={100}>
            <div className="grid grid-cols-2 gap-4 h-full">
              <CodeSkeleton />
              <div className="hidden md:block border border-white/10 bg-black/50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-[10px] text-gray-500 ml-2">localhost:3000</span>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-8 bg-gradient-to-r from-neutral-800 to-neutral-900 rounded border border-white/5"></div>
                  <div className="flex gap-2">
                    <div className="w-1/3 h-24 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded border border-white/5"></div>
                    <div className="w-2/3 h-24 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded border border-white/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </BentoItem>

          {/* Item 3: Backend/Logic Focus */}
          <BentoItem title="Backend Logic" desc="Secure APIs & Schema Design." icon={Terminal} delay={200}>
            <TestSkeleton />
          </BentoItem>

          {/* Item 4: Performance Focus */}
          <BentoItem title="High Performance" desc="Optimized Core Web Vitals & SEO." icon={Zap} colSpan="md:col-span-2" delay={300}>
            <TimelineSkeleton />
          </BentoItem>

          {/* Item 5: Soft Skills Focus */}
          <BentoItem title="Collaboration" desc="Agile workflows & Git flow." icon={MessageSquare} delay={400}>
            <ChatSkeleton />
          </BentoItem>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 4s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Features;