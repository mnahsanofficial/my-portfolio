'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { fadeIn, staggerContainer, defaultViewport } from '../lib/animations';

interface Project {
  title: string;
  problem: string;
  description: string;
  tags: string[];
  images: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [activeImageIndices, setActiveImageIndices] = useState<Record<number, number>>({});

  const projects: Project[] = [
    {
      title: 'EINO — Knowledge Management Platform',
      problem: 'Organizations losing institutional knowledge at scale.',
      description: 'Enterprise knowledge management system designed to make organizational knowledge secure and easily retrievable. Features include AI-powered search, video content processing, and collaborative tools.',
      tags: ['Angular', 'Python-Django', 'PostgreSQL'],
      images: [
        '/assets/images/EINO/eino-1.png',
        '/assets/images/EINO/eino-2.png',
        '/assets/images/EINO/eino-3.png',
        '/assets/images/EINO/eino-4.png',
        '/assets/images/EINO/eino-5.png',
        '/assets/images/EINO/eino-6.png',
        '/assets/images/EINO/eino-7.png',
        '/assets/images/EINO/eino-8.png',
        '/assets/images/EINO/eino-9.png',
      ],
      links: {
        github: 'https://github.com/mnahsanofficial',
        live: 'https://app.eino.world'
      }
    },
    {
      title: 'Recruitr.AI',
      problem: 'Manual hiring is slow, biased, and expensive.',
      description: 'An AI-powered virtual HR assistant that automates the full hiring lifecycle — from generating bias-free job descriptions to shortlisting candidates, running AI interviews, and scoring cultural fit. Built to make enterprise-grade recruitment intelligence accessible to any organization.',
      tags: ['LLM Integration', 'AI Interviews', 'Bias Detection', 'Full Stack'],
      images: [
        '/assets/images/Recruitr/recruitr-1.png',
        '/assets/images/Recruitr/recruitr-2.png',
      ],
      links: {
        github: 'https://github.com/mnahsanofficial',
        live: 'https://next-hire-frontend-eight.vercel.app/'
      }
    },
    {
      title: 'Website Visitor Counter (npm)',
      problem: 'Adding visitor tracking requires a backend — until now.',
      description: 'Published open-source npm package for real-time website visitor tracking with zero backend dependencies. A lightweight, privacy-conscious drop-in solution for any frontend project.',
      tags: ['JavaScript', 'npm', 'Open Source'],
      images: [
        '/assets/images/EINO/eino-2.png'
      ],
      links: {
        live: 'https://www.npmjs.com/',
        github: 'https://github.com/mnahsanofficial'
      }
    },
    {
      title: 'Flat FindBD',
      problem: 'Property discovery was fragmented and broker-dependent.',
      description: 'A real estate platform designed to facilitate direct communication between property owners and potential renters or buyers, eliminating intermediaries. Users can list properties, search availability, and interact through a built-in messaging system.',
      tags: ['Next.js', 'React', 'Django', 'PostgreSQL'],
      images: [
        '/assets/images/Flat FindBD/flat-findBD-1.png',
      ]
    },
    {
      title: 'X — Clone',
      problem: 'Needed a practical social platform architecture exercise.',
      description: 'A web application showing user murmurs (=tweets), similar to Twitter — including timeline, profiles, messaging, and post lifecycle management.',
      tags: ['NestJS', 'React', 'MySQL', 'TypeScript'],
      images: [
        '/assets/images/X Clone/loginpage.png',
        '/assets/images/X Clone/timeline.png',
        '/assets/images/X Clone/ownprofile.png',
        '/assets/images/X Clone/createmurmur.png',
        '/assets/images/X Clone/userprofile.png',
        '/assets/images/X Clone/murmurdetails.png',
        '/assets/images/X Clone/deletemurmur.png',
      ]
    }
  ];

  useState(() => {
    const initialIndices = projects.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {} as Record<number, number>);
    setActiveImageIndices(initialIndices);
  });

  const nextProject = () => setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const nextImage = (projectIndex: number) => {
    setActiveImageIndices(prev => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] + 1) % projects[projectIndex].images.length
    }));
  };

  const prevImage = (projectIndex: number) => {
    setActiveImageIndices(prev => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] - 1 + projects[projectIndex].images.length) %
        projects[projectIndex].images.length
    }));
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <section id="projects" className="py-28 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 editorial-grid opacity-30 z-0"></div>
      <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-gold-500/5 blur-[120px] z-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 z-10">
        <motion.div
          variants={fadeIn('up', 0, 0.6)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="mb-20 max-w-3xl"
        >
          <span className="editorial-eyebrow mb-6">04 — Selected Work</span>
          <h2 className="font-display text-5xl md:text-6xl text-cream-50 leading-[1.05] mt-6 mb-6">
            A curated <span className="italic text-gold-400">portfolio</span>.
          </h2>
          <span className="gold-rule"></span>
          <p className="mt-6 text-base text-cream-50/70 leading-relaxed">
            Recent projects spanning enterprise SaaS, AI products, open-source tooling, and consumer platforms.
          </p>
        </motion.div>

        <div className="relative">
          {/* Project counter */}
          <div className="absolute -top-12 right-0 hidden md:flex items-baseline gap-3 font-mono text-xs text-cream-50/60 tracking-wider">
            <span className="font-display text-2xl text-gold-400">
              {String(currentProjectIndex + 1).padStart(2, '0')}
            </span>
            <span>/</span>
            <span>{String(projects.length).padStart(2, '0')}</span>
          </div>

          <motion.article
            key={currentProjectIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-cream-50/10 border border-cream-50/10"
          >
            {/* Image gallery */}
            <div className="lg:col-span-7 relative bg-navy-800 aspect-[16/10] overflow-hidden">
              {currentProject.images.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    imgIndex === activeImageIndices[currentProjectIndex] ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${currentProject.title} screenshot ${imgIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent pointer-events-none"></div>

              {currentProject.images.length > 1 && (
                <>
                  <button
                    onClick={() => prevImage(currentProjectIndex)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-cream-50/30 bg-navy-900/60 backdrop-blur text-cream-50 hover:border-gold-500 hover:text-gold-400 transition z-10 flex items-center justify-center"
                    aria-label="Previous image"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => nextImage(currentProjectIndex)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-cream-50/30 bg-navy-900/60 backdrop-blur text-cream-50 hover:border-gold-500 hover:text-gold-400 transition z-10 flex items-center justify-center"
                    aria-label="Next image"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
                    {currentProject.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => setActiveImageIndices(prev => ({ ...prev, [currentProjectIndex]: imgIndex }))}
                        aria-label={`Go to image ${imgIndex + 1}`}
                        className={`h-px transition-all ${
                          imgIndex === activeImageIndices[currentProjectIndex]
                            ? 'bg-gold-500 w-8 h-0.5'
                            : 'bg-cream-50/40 w-6 hover:bg-cream-50/70'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content panel */}
            <motion.div
              variants={staggerContainer(0.08, 0.1)}
              initial="initial"
              animate="whileInView"
              className="lg:col-span-5 bg-navy-800 p-8 lg:p-10 flex flex-col"
            >
              <motion.span variants={fadeIn('up', 0, 0.4)} className="text-[10px] tracking-editorial uppercase text-gold-500 mb-4">
                Project · {String(currentProjectIndex + 1).padStart(2, '0')}
              </motion.span>

              <motion.h3 variants={fadeIn('up', 0, 0.4)} className="font-display text-3xl md:text-4xl text-cream-50 leading-tight">
                {currentProject.title}
              </motion.h3>

              <motion.div variants={fadeIn('up', 0.1, 0.4)} className="mt-5 flex items-start gap-3">
                <span className="block w-6 h-px bg-gold-500 mt-2.5 flex-shrink-0"></span>
                <p className="text-sm italic text-gold-300 leading-relaxed">{currentProject.problem}</p>
              </motion.div>

              <motion.p variants={fadeIn('up', 0.15, 0.4)} className="mt-5 text-cream-50/75 text-[15px] leading-relaxed flex-1">
                {currentProject.description}
              </motion.p>

              <motion.div variants={staggerContainer(0.04, 0.15)} className="mt-6 flex flex-wrap gap-2">
                {currentProject.tags.map((tag, i) => (
                  <motion.span key={i} variants={fadeIn('up', 0, 0.3)} className="chip-dark">
                    <span className="chip-dot"></span>
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div variants={fadeIn('up', 0.2, 0.4)} className="mt-8 flex gap-3">
                {currentProject.links?.github && (
                  <a
                    href={currentProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-cream-50/30 text-cream-50/80 hover:border-gold-500 hover:text-gold-400 px-4 py-2.5 transition text-sm"
                  >
                    <FiGithub />
                    <span className="text-[11px] tracking-editorial uppercase font-semibold">GitHub</span>
                  </a>
                )}
                {currentProject.links?.live && (
                  <a
                    href={currentProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 px-4 py-2.5 transition text-sm"
                  >
                    <FiExternalLink />
                    <span className="text-[11px] tracking-editorial uppercase font-semibold">Live</span>
                  </a>
                )}
              </motion.div>
            </motion.div>
          </motion.article>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-between">
            <button
              onClick={prevProject}
              className="group inline-flex items-center gap-3 text-cream-50/70 hover:text-gold-400 transition-colors text-sm tracking-wider"
              aria-label="Previous project"
            >
              <span className="w-10 h-10 border border-cream-50/30 group-hover:border-gold-500 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </span>
              <span className="text-[11px] tracking-editorial uppercase hidden sm:inline">Previous</span>
            </button>

            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`h-px transition-all ${
                    index === currentProjectIndex
                      ? 'bg-gold-500 w-10 h-0.5'
                      : 'bg-cream-50/30 w-6 hover:bg-cream-50/60'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="group inline-flex items-center gap-3 text-cream-50/70 hover:text-gold-400 transition-colors text-sm tracking-wider"
              aria-label="Next project"
            >
              <span className="text-[11px] tracking-editorial uppercase hidden sm:inline">Next</span>
              <span className="w-10 h-10 border border-cream-50/30 group-hover:border-gold-500 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
