import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';

const MotionDiv = motion.div as any;

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const getGradient = (index: number) => {
    const gradients = [
      "from-blue-500/10 to-cyan-500/10 border-blue-500/20 hover:border-blue-500",
      "from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:border-purple-500",
      "from-amber-500/10 to-orange-500/10 border-amber-500/20 hover:border-amber-500",
      "from-green-500/10 to-emerald-500/10 border-green-500/20 hover:border-green-500"
    ];
    return gradients[index % gradients.length];
  };

  const getIconColor = (index: number) => {
    const colors = [
      "text-blue-600 dark:text-blue-400",
      "text-purple-600 dark:text-purple-400",
      "text-amber-600 dark:text-amber-400",
      "text-green-600 dark:text-green-400"
    ];
    return colors[index % colors.length];
  };

  const getBarColor = (index: number) => {
    const colors = [
      "bg-blue-500",
      "bg-purple-500",
      "bg-amber-500",
      "bg-green-500"
    ];
    return colors[index % colors.length];
  }

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My technical toolkit encompasses a wide range of languages, frameworks, and tools specialized for AI and Software Development.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, index) => {
            const Icon = category.icon;
            const gradientClass = getGradient(index);
            const iconColorClass = getIconColor(index);
            const barColor = getBarColor(index);
            
            return (
              <MotionDiv
                key={category.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-8 rounded-2xl border transition-all duration-300 backdrop-blur-sm bg-gradient-to-br ${gradientClass} shadow-lg hover:shadow-xl`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-white dark:bg-slate-800 shadow-md ${iconColorClass}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                                className={`h-2.5 rounded-full ${barColor}`} 
                            />
                        </div>
                    </div>
                  ))}
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;