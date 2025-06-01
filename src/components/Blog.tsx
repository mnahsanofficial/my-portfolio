'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

interface BlogPost {
  title: string;
  url: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const Blog = () => {
  const [showAll, setShowAll] = useState(false);

  const blogPosts: BlogPost[] = [
    {
      title: 'Become a GitHub Boss',
      url: 'https://medium.com/@mnahsanofficial/become-a-github-boss-7b11930daa48',
      excerpt: 'Master GitHub workflows and collaboration techniques to boost your development productivity and team collaboration.',
      date: 'Jun 2023',
      readTime: '5 min read'
    },
    {
      title: 'Become a JavaScript Boss (Part-1)',
      url: 'https://medium.com/@mnahsanofficial/become-a-javascript-boss-part-1-eb50e2aea731',
      excerpt: 'Deep dive into advanced JavaScript concepts that will elevate your coding skills to the next level.',
      date: 'May 2023',
      readTime: '8 min read'
    },
    // Add more blog posts here when needed
    {
      title: 'Mastering React Hooks',
      url: '#',
      excerpt: 'Comprehensive guide to React Hooks and modern React development patterns.',
      date: 'Apr 2023',
      readTime: '6 min read'
    },
    {
      title: 'TypeScript Best Practices',
      url: '#',
      excerpt: 'Learn how to use TypeScript effectively in large-scale applications.',
      date: 'Mar 2023',
      readTime: '7 min read'
    }
  ];

  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 2);

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Blog</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {visiblePosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      aria-label={`Read ${post.title}`}
                    >
                      <FiExternalLink className="text-xl" />
                    </a>
                  </div>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {blogPosts.length > 2 && (
          <div className="text-center">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition"
            >
              {showAll ? 'Show Less' : `Show More (${blogPosts.length - 2})`}
              <svg 
                className={`ml-2 w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;