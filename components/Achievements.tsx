import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X } from 'lucide-react';
import { Achievement } from '../types';

const MotionDiv = motion.div as any;

interface AchievementsProps {
  achievements: Achievement[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const handleAchievementClick = (item: Achievement) => {
    if (item.image) {
        setSelectedAchievement(item);
    }
  };

  return (
    <section id="achievements" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4">
            Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-accent">Achievements</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-accent mx-auto rounded-full"></div>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, index) => {
                const Icon = item.icon; 
                return (
                    <MotionDiv
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleAchievementClick(item)}
                        style={{ cursor: item.image ? 'pointer' : 'default' }}
                        className="bg-white dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 group shadow-md dark:shadow-none"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                                <Award size={24} /> 
                            </div>
                            {item.highlight && (
                                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full border border-accent/20">
                                    {item.highlight}
                                </span>
                            )}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            {item.description}
                        </p>
                        {item.image && (
                            <div className="mt-4 text-xs text-blue-500 dark:text-blue-400 font-medium">
                                Click to view certificate
                            </div>
                        )}
                    </MotionDiv>
                );
            })}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedAchievement && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedAchievement(null)}>
            <MotionDiv 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col relative shadow-2xl"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={() => setSelectedAchievement(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10 transition-colors"
                    aria-label="Close certificate modal"
                    title="Close certificate modal"
                >
                    <X size={24} />
                </button>
                <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedAchievement.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{selectedAchievement.description}</p>
                </div>
                <div className="flex-1 overflow-auto p-4 bg-slate-100 dark:bg-black flex items-center justify-center">
                    {selectedAchievement.image ? (
                        <img src={selectedAchievement.image} alt={selectedAchievement.title} className="max-w-full max-h-[70vh] object-contain shadow-lg" />
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

export default Achievements;