import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Eye } from 'lucide-react';
import { PersonalInfo } from '../types';

const MotionDiv = motion.div as any;

interface HeroProps {
  personalInfo: PersonalInfo;
  onViewResume: () => void;
}

const Hero: React.FC<HeroProps> = ({ personalInfo, onViewResume }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = personalInfo.roles || [personalInfo.title, personalInfo.subtitle];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  // Typewriter Effect
  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[textIndex % roles.length];
      
      if (isDeleting) {
        if (charIndex > 0) {
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % roles.length);
        }
      } else {
        if (charIndex < currentRole.length) {
          setCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, roles]);

  // Particle Background Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; color: string }[] = [];
    let animationFrameId: number;
    
    const colors = ["#6c6dff", "#ff6584", "#ffffff"];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(window.innerWidth / 20, 60); 
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(drawParticles);
    };
    window.addEventListener('resize', () => { resizeCanvas(); createParticles(); });
    resizeCanvas(); createParticles(); drawParticles();
    return () => { window.removeEventListener('resize', resizeCanvas); cancelAnimationFrame(animationFrameId); };
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-60 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display text-slate-900 dark:text-white mb-4 tracking-tight">
            Hi, I'm <span className="text-blue-600 dark:text-blue-500">{personalInfo.name}</span>
          </h1>
          
          <div className="h-12 mb-6 flex items-center">
            <span className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-display">
              {roles[textIndex % roles.length].substring(0, charIndex)}
            </span>
            <span className="w-0.5 h-8 bg-blue-600 dark:bg-accent ml-1 animate-blink"></span>
          </div>

          <p className="max-w-xl text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onViewResume}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/30 transform hover:translate-y-[-2px]"
            >
              View Resume
              <Eye className="w-5 h-5" />
            </button>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 rounded-full font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Contact Me
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </MotionDiv>

        {/* Right Column: Image with Tech Icons */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse blur-3xl"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl z-10 bg-white dark:bg-slate-900">
                 <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover"
                />
            </div>
            
            {/* Tech Icons Floating */}
            <div className="absolute top-0 -left-10 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg animate-bounce duration-[3000ms] z-20">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-8 h-8" alt="Python" />
            </div>
            <div className="absolute top-1/2 -right-12 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg animate-bounce duration-[4000ms] z-20">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8" alt="React" />
            </div>
            <div className="absolute -bottom-4 left-10 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg animate-bounce duration-[3500ms] z-20">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" className="w-8 h-8" alt="TensorFlow" />
            </div>
             <div className="absolute top-10 right-0 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg animate-bounce duration-[4500ms] z-20">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-8 h-8" alt="JS" />
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;