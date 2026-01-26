import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Globe } from 'lucide-react';
import { PersonalInfo } from '../types';

const MotionDiv = motion.div as any;

interface AboutProps {
  personalInfo: PersonalInfo;
}

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  const paragraphs = personalInfo.about.split('\n\n');

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-800/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Image Frame */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-2xl group">
              <img 
                src={personalInfo.aboutImage || "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"} 
                alt="Working on Tech" 
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute top-4 -right-4 w-full h-full border-2 border-blue-500/30 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-purple-500/30 rounded-2xl -z-10"></div>
            
            {/* Stat Cards - Visible on all screens now */}
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl z-20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-500 dark:text-blue-400">
                  <Code size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Projects Completed</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">15+</p>
                </div>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Driving Innovation with <span className="text-blue-600 dark:text-blue-400">Artificial Intelligence</span>
            </h3>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed text-justify">
              {paragraphs.map((para, idx) => (
                <p key={idx}>{para.trim()}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/50 transition-colors">
                <Brain className="text-blue-600 dark:text-blue-400 mb-2" size={28} />
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Problem Solver</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Analytical approach to complex technical challenges.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-purple-500/50 transition-colors">
                <Globe className="text-purple-600 dark:text-purple-400 mb-2" size={28} />
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Global Perspective</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Keeping up with worldwide tech trends and standards.</p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default About;