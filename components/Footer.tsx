import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black py-12 border-t border-slate-800 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">JAYAPRAKASH A</h3>
            <p className="text-slate-400 text-sm">
              AI & Data Science Engineer
            </p>
          </div>
          
          <div className="flex gap-4">
             {SOCIAL_LINKS.map((link) => {
                 const Icon = link.icon;
                 return (
                    <a 
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1"
                        aria-label={link.platform}
                    >
                        <Icon size={20} />
                    </a>
                 )
             })}
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Designed by <span className="text-slate-300 font-medium">Jayaprakash A</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;