import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PERSONAL_INFO, 
  SKILLS, 
  PROJECTS, 
  EXPERIENCE, 
  ACHIEVEMENTS, 
  CERTIFICATIONS, 
  BLOGS, 
  SOCIAL_LINKS 
} from './constants';

const MotionDiv = motion.div as any;

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    // Simulate loading time for initial animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center z-50">
        <div className="relative flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-slate-200 dark:border-slate-800 animate-pulse"></div>
            <div className="absolute text-4xl font-bold font-display text-blue-600 dark:text-blue-500 animate-bounce">Jp</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans selection:bg-blue-500 selection:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero 
          personalInfo={PERSONAL_INFO} 
          onViewResume={() => setShowResumeModal(true)}
        />
        <About personalInfo={PERSONAL_INFO} />
        <Skills skills={SKILLS} />
        <Projects projects={PROJECTS} />
        <Experience experience={EXPERIENCE} />
        <Achievements achievements={ACHIEVEMENTS} />
        <Certifications certifications={CERTIFICATIONS} />
        <Blogs blogs={BLOGS} />
        <Contact personalInfo={PERSONAL_INFO} socialLinks={SOCIAL_LINKS} />
      </main>
      
      <Footer />

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={showResumeModal} 
        onClose={() => setShowResumeModal(false)} 
        resumeUrl={PERSONAL_INFO.resumeUrl || ''} 
      />

      {/* Back To Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg cursor-pointer z-40 transition-colors"
          >
            <ArrowUp size={24} />
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;