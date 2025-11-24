import React from 'react';
import { Layout, Code, Terminal, Zap, MessageSquare, Globe } from 'lucide-react';
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
    <section id="features" className="py-32 bg-[#050505] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:flex justify-between items-end border-b border-white/10 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">TECHNICAL EXPERTISE</h2>
            <p className="text-gray-400 max-w-md">Building robust applications with a focus on scalability and user experience.</p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-blue-500 font-mono">01 // SKILLS</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Item 1: Frontend Focus */}
          <BentoItem title="Frontend Engineering" desc="Pixel-perfect React & Tailwind." icon={Layout} delay={0}>
            <WireframeSkeleton />
          </BentoItem>

          {/* Item 2: Full Stack Focus */}
          <BentoItem title="Full Stack Systems" desc="Next.js, Node.js & MongoDB ecosystems." icon={Code} colSpan="md:col-span-2" delay={100}>
            <div className="grid grid-cols-2 gap-4 h-full">
                <CodeSkeleton />
                <div className="hidden md:block border border-white/10 bg-black p-2">
                    <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                        <Globe size={12} className="text-gray-500" />
                        <span className="text-[10px] text-gray-500">localhost:3000</span>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-8 bg-neutral-900 border border-white/5"></div>
                        <div className="flex gap-2">
                            <div className="w-1/3 h-24 bg-neutral-900 border border-white/5"></div>
                            <div className="w-2/3 h-24 bg-neutral-900 border border-white/5"></div>
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
    </section>
  );
};

export default Features;