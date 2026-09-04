'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

interface BlogPost {
  title: string;
  url: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const Blog = () => {
  const [showAll, setShowAll] = useState(false);

  // Newest first: only the first two are shown before "show all", so the most
  // recent post has to lead or the section reads as three years stale.
  const blogPosts: BlogPost[] = [
    {
      title: 'Building an AI-Powered Chat Application with Next.js and NestJS',
      url: 'https://medium.com/@mnahsanofficial/building-an-ai-powered-chat-application-with-next-js-and-nestjs-c658c85df78d',
      excerpt: 'How I built an AI-powered chat application using Next.js for the front end and NestJS for the back end.',
      date: 'June 2025',
      readTime: '3 min read'
    },
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
  ];

  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 2);

  return (
    <section id="writing" className="py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <span className="editorial-eyebrow mb-6">Writing</span>
          <h2 className="font-display text-5xl md:text-6xl text-navy-900 leading-[1.05] mt-6 mb-6">
            Notes from the <span className="italic text-gold-600">desk</span>.
          </h2>
          <span className="gold-rule"></span>
          <p className="mt-6 text-base text-ink-600 leading-relaxed">
            Tutorials, practical insights, and reflections from real projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {visiblePosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-paper border border-navy-900/10 hover:border-gold-500 hover:bg-white transition-all duration-300 p-8 lg:p-10 block"
            >
              <div className="flex items-baseline gap-3 mb-6 text-[10px] tracking-editorial uppercase text-gold-600">
                <span className="font-mono">{String(index + 1).padStart(2, '0')}</span>
                <span className="block w-8 h-px bg-gold-500"></span>
                <span>Essay</span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-navy-900 leading-tight group-hover:text-gold-600 transition-colors">
                {post.title}
              </h3>

              <p className="mt-4 text-ink-600 leading-relaxed">{post.excerpt}</p>

              <div className="mt-8 pt-6 border-t border-navy-900/10 flex justify-between items-center text-xs tracking-wider uppercase text-ink-500">
                <span>{post.date}</span>
                <span className="flex items-center gap-1.5">
                  {post.readTime}
                </span>
              </div>

              <FiArrowUpRight className="absolute top-8 right-8 text-2xl text-navy-900/40 group-hover:text-gold-500 group-hover:rotate-12 transition-all" />
            </motion.a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {blogPosts.length > 2 && (
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ y: -2 }}
              className="btn-outline-dark"
            >
              <span className="text-[11px] tracking-editorial uppercase">
                {showAll ? 'Show Less' : `Show ${blogPosts.length - 2} More`}
              </span>
            </motion.button>
          )}

          <a
            href="https://medium.com/@mnahsanofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-navy-900 border-b border-gold-500 hover:text-gold-600 transition-colors pb-1"
          >
            <span className="text-[11px] tracking-editorial uppercase font-semibold">Read on Medium</span>
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
