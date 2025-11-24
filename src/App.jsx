import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Projects from './components/sections/Projects'; // <--- IMPORT THIS
import Testimonials from './components/sections/Testimonials';
import Founder from './components/sections/Founder';
import CTA from './components/sections/CTA';

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Projects /> {/* <--- ADD THIS HERE */}
      <Testimonials />
      <Founder />
      <CTA />
      <Footer />
      
      {/* Global Styles... */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        body {
          cursor: default;
        }
      `}</style>
    </div>
  );
};

export default App;