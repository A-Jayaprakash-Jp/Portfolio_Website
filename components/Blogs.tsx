import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Blog, BlogCategory } from '../types';

const MotionDiv = motion.div as any;

interface BlogsProps {
  blogs: Blog[];
}

const Blogs: React.FC<BlogsProps> = ({ blogs }) => {
  const [filter, setFilter] = useState<BlogCategory>('All');

  const categories: BlogCategory[] = ['All', 'Hackathon', 'Workshop', 'Presentation'];
  
  const filteredBlogs = blogs.filter(blog => 
    filter === 'All' ? true : blog.category === filter
  );

  return (
    <section id="blogs" className="py-24 bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Journey</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
        </MotionDiv>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                filter === cat 
                  ? 'text-white bg-blue-600' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
                {filteredBlogs.map((blog, index) => (
                    <MotionDiv
                        layout
                        key={blog.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="group relative rounded-2xl overflow-hidden h-80 shadow-lg cursor-pointer"
                    >
                        <img 
                            src={blog.image} 
                            alt={blog.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">{blog.category} • {blog.date}</span>
                            <h3 className="text-white text-xl font-bold mb-2">{blog.title}</h3>
                            <p className="text-slate-300 text-sm line-clamp-4 leading-relaxed">
                                {blog.description}
                            </p>
                        </div>
                    </MotionDiv>
                ))}
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Blogs;