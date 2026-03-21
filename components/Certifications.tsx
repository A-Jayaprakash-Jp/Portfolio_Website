import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Certification } from '../types';
import { Award, X, FileCheck, Scale } from 'lucide-react';

const MotionDiv = motion.div as any;

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  const [selectedCert, setSelectedCert] = useState<{ url: string; title: string; issuer: string } | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleCertClick = (cert: Certification) => {
    const sourceUrl = cert.pdf || cert.image || cert.url;
    if (sourceUrl) {
      setSelectedCert({ url: String(sourceUrl), title: cert.title || 'Certificate', issuer: cert.issuer });
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-accent">Certifications</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <MotionDiv
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="h-full"
            >
              <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/10 group h-full flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <Award className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={24} />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {cert.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-slate-700 dark:text-slate-300 font-semibold mb-2 text-sm">{cert.issuer}</p>
                
                {cert.date && (
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-mono mb-3">
                    {cert.date}
                  </p>
                )}
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                  {cert.description || "Professional certification demonstrating proficiency in key technical areas."}
                </p>

                <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  {(cert.pdf || cert.image || cert.url) && (
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
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedCert(null)}>
            <MotionDiv 
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 w-full h-full m-0 overflow-hidden flex flex-col relative"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-3 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{selectedCert.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">{selectedCert.issuer}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (modalRef.current?.requestFullscreen) {
                        modalRef.current.requestFullscreen();
                      }
                    }}
                    className="px-3 py-1 rounded-md bg-blue-600 text-white text-xs hover:bg-blue-700 transition"
                  >
                    Fullscreen
                  </button>
                  <button 
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="px-3 py-1 rounded-md bg-black/50 hover:bg-black/70 text-white text-xs transition"
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-hidden bg-slate-100 dark:bg-black">
                {selectedCert ? (
                  <iframe
                    src={selectedCert.url}
                    title={selectedCert.title}
                    className="w-full h-full"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-slate-500">PDF not available</div>
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