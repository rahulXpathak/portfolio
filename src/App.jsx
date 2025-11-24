import React from 'react';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import TechStack from './components/sections/TechStack';   // Dual Direction Marquee
import Features from './components/sections/Features';     // Technical Skills
import Projects from './components/sections/Projects';     // Selected Works
import Experience from './components/sections/Experience'; // Career Timeline
import Testimonials from './components/sections/Testimonials'; // Certifications
import Founder from './components/sections/Founder';       // About Me
import CTA from './components/sections/CTA';               // Contact

// Utility Components
import ScrollProgress from './components/ui/ScrollProgress'; // Top reading bar

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* 1. Progress Bar at the top */}
      <ScrollProgress /> 
      
      {/* 2. Navigation */}
      <Navbar />
      
      {/* 3. Main Sections */}
      <main>
        <Hero />
        <TechStack />
        <Features />
        <Projects />
        <Experience />
        <Testimonials />
        <Founder />
        <CTA />
      </main>

      {/* 4. Footer */}
      <Footer />
      
      {/* 5. Global Styles & Animations */}
      <style>{`
        /* --- MARQUEE ANIMATIONS (TechStack) --- */
        
        /* Row 1: Moves Left */
        @keyframes loop-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        /* Row 2: Moves Right */
        @keyframes loop-scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-loop-scroll {
          animation: loop-scroll 50s linear infinite;
        }
        
        .animate-loop-scroll-reverse {
          animation: loop-scroll-reverse 50s linear infinite;
        }

        /* Pause animation class (used on hover) */
        .pause {
          animation-play-state: paused;
        }

        /* --- FADE IN UP ANIMATION (Hero) --- */
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        /* --- UTILITIES --- */
        
        /* Hides scrollbar but allows scrolling */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        
        /* 3D Perspective for Code Window */
        .perspective-1000 {
          perspective: 1000px;
        }
        
        /* Default Cursor */
        body {
          cursor: default;
        }
      `}</style>
    </div>
  );
};

export default App;