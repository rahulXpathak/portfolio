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
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">OUR PROCESS</h2>
            <p className="text-gray-400 max-w-md">A rigorous engineering approach to creative problems.</p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-blue-500 font-mono">01 // SERVICES</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BentoItem title="UI/UX Design" desc="Minimalist aesthetics." icon={Layout} delay={0}>
            <WireframeSkeleton />
          </BentoItem>

          <BentoItem title="Full Stack Dev" desc="Scalable architectures." icon={Code} colSpan="md:col-span-2" delay={100}>
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

          <BentoItem title="Test Driven" desc="Zero tolerance for bugs." icon={Terminal} delay={200}>
             <TestSkeleton />
          </BentoItem>

          <BentoItem title="Rapid Delivery" desc="4-5 week sprints." icon={Zap} colSpan="md:col-span-2" delay={300}>
            <TimelineSkeleton />
          </BentoItem>

           <BentoItem title="Feedback Loops" desc="Direct communication." icon={MessageSquare} delay={400}>
            <ChatSkeleton />
          </BentoItem>
        </div>
      </div>
    </section>
  );
};

export default Features;