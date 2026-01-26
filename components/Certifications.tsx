import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Certification } from '../types';
import { Award, X, FileCheck, Calendar } from 'lucide-react';

const MotionDiv = motion.div as any;

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const handleCertClick = (cert: Certification) => {
      if (cert.image) {
          setSelectedCert(cert);
      }
  };

  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-accent">Certifications</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </MotionDiv>

        <div className="max-w-3xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="space-y-12 border-l-2 border-slate-300 dark:border-slate-800 ml-3 pl-8 relative">
                {certifications.map((cert, index) => (
                    <MotionDiv
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="relative"
                    >
                         {/* Glowing Node */}
                        <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-slate-50 dark:bg-slate-950 border-4 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)] z-10"></div>

                        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/10 group">
                             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    <Award className="text-purple-600 dark:text-purple-400" size={20} />
                                    {cert.title}
                                </h3>
                                {cert.date && (
                                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm font-mono gap-2 mt-2 sm:mt-0">
                                        <Calendar size={14} />
                                        {cert.date}
                                    </div>
                                )}
                             </div>
                             
                             <p className="text-slate-700 dark:text-slate-300 font-semibold mb-3">{cert.issuer}</p>
                             
                             <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                {cert.description || "Professional certification demonstrating proficiency in key technical areas."}
                             </p>

                             <div className="flex gap-4">
                                {cert.image && (
                                    <button 
                                        onClick={() => handleCertClick(cert)}
                                        className="flex items-center gap-2 text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                                    >
                                        <FileCheck size={14} />
                                        View Certificate
                                    </button>
                                )}
                             </div>
                        </div>
                    </MotionDiv>
                ))}
             </div>
          </MotionDiv>
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedCert(null)}>
            <MotionDiv 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col relative shadow-2xl"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
                <button 
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10 transition-colors"
                >
                    <X size={24} />
                </button>
                <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedCert.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{selectedCert.issuer}</p>
                </div>
                <div className="flex-1 overflow-auto p-4 bg-slate-100 dark:bg-black flex items-center justify-center">
                    {selectedCert.image ? (
                        <img src={selectedCert.image} alt={selectedCert.title} className="max-w-full max-h-[70vh] object-contain shadow-lg" />
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

export default Certifications;