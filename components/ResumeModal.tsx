import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';

const MotionDiv = motion.div as any;

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, resumeUrl }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8">
        <MotionDiv
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white dark:bg-slate-900 w-full h-full max-w-6xl rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            <div className="flex items-center gap-2">
              <FileText className="text-blue-600 dark:text-blue-400" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Resume Preview</h2>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href={resumeUrl} 
                download="Jayaprakash_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                <Download size={16} />
                Download
              </a>
              <button 
                type="button"
                onClick={onClose}
                aria-label="Close resume modal"
                className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-500 dark:text-slate-400"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 bg-slate-100 dark:bg-black p-4 overflow-hidden">
            {resumeUrl ? (
              <iframe 
                src={resumeUrl} 
                className="w-full h-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white"
                title="Resume PDF"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-slate-500 dark:text-slate-400">
                <FileText size={48} className="mb-4 opacity-50" />
                <p>No resume uploaded yet.</p>
              </div>
            )}
          </div>
        </MotionDiv>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;