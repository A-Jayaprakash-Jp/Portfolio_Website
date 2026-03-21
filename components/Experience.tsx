import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, Code, Laptop, X, FileCheck } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

const MotionDiv = motion.div as any;

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  const [selectedItem, setSelectedItem] = useState<ExperienceType | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case 'Education': return <GraduationCap size={18} className="text-purple-500 dark:text-purple-400" />;
      case 'Hackathon': return <Code size={18} className="text-pink-500 dark:text-pink-400" />;
      case 'Workshop': return <Laptop size={18} className="text-amber-500 dark:text-amber-400" />;
      default: return <Briefcase size={18} className="text-blue-500 dark:text-blue-400" />;
    }
  };

  const handleItemClick = (item: ExperienceType) => {
      if (item.image) {
          setSelectedItem(item);
      }
  };

  return (
    <section id="experience" className="py-24 bg-slate-100 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-900 to-transparent opacity-50"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 dark:via-purple-900 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
             Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">& Activities</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="space-y-12 border-l-2 border-slate-300 dark:border-slate-800 ml-3 pl-8 relative">
              {experience.map((item, index) => (
                <MotionDiv 
                  key={item.id} 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleItemClick(item)}
                  style={{ cursor: item.image ? 'pointer' : 'default' }}
                >
                  {/* Glowing Node */}
                  <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-slate-50 dark:bg-slate-950 border-4 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] z-10"></div>
                  
                  <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${
                          item.type === 'Hackathon' ? 'border-pink-500/30 text-pink-500 bg-pink-500/10' : 
                          item.type === 'Workshop' ? 'border-amber-500/30 text-amber-500 bg-amber-500/10' :
                          'border-blue-500/30 text-blue-500 bg-blue-500/10'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-mono gap-2 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                        <Calendar size={12} />
                        {item.duration}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4 text-slate-600 dark:text-slate-300">
                      {getIcon(item.type)}
                      <span className="font-semibold">{item.company}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {item.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    {item.image && (
                        <div className="mt-4 flex items-center gap-2 text-xs text-blue-500 dark:text-blue-400 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                            <FileCheck size={14} />
                            Click to view certificate/proof
                        </div>
                    )}
                  </div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>

       {/* Modal Popup */}
       <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
            <MotionDiv 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col relative shadow-2xl"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
                <button 
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10 transition-colors"
                >
                    <X size={24} />
                </button>
                <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedItem.role}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{selectedItem.company} • {selectedItem.duration}</p>
                </div>
                <div className="flex-1 overflow-auto p-4 bg-slate-100 dark:bg-black flex items-center justify-center">
                    {selectedItem.image ? (
                        <img src={selectedItem.image} alt={selectedItem.role} className="max-w-full max-h-[70vh] object-contain shadow-lg" />
                    ) : (
                        <div className="text-slate-500">Image not available</div>
                    )}
                </div>
            </MotionDiv>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;