'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { fadeIn, staggerContainer, defaultViewport } from '../lib/animations';

interface Project {
  title: string;
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
      title: 'EINO - Knowledge Management Platform',
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
        live: 'https://app.eino.world'
      }
    },
    {
      title: 'AI Chat App with Next.js & NestJS ',
      description: 'I built an AI-powered chat application using Next.js for the frontend and NestJS for the backend. The app integrates OpenAI\'s GPT-4 to generate responses while implementing rate limiting (5 requests/day per user) to prevent abuse.',
      tags: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL'],
      images: [
        '/assets/images/Chatbot/chatbot-1.png',
        '/assets/images/Chatbot/chatbot-2.png',
        '/assets/images/Chatbot/chatbot-3.png',
        '/assets/images/Chatbot/chatbot-4.png',
        '/assets/images/Chatbot/chatbot-5.png',
      ],
      links: {
        github: 'https://github.com/mnahsanofficial/NEXTjs-JWT-Authentication',
        live: 'https://www.youtube.com/watch?v=zWjNSByDoRA'
      }
    },
    {
      title: 'Red July Live - Memorial Platform',
      description: 'Interactive web platform honoring activists of Bangladesh\'s Quota Reform Movement. Features include timeline visualization, multimedia content, and user contributions system.',
      tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB'],
      images: [
        '/assets/images/Red July/red-july-1.png',
        '/assets/images/Red July/red-july-2.png',
        '/assets/images/Red July/red-july-.3.png',
        '/assets/images/Red July/red-july-4.png',
        '/assets/images/Red July/red-july-5.png',
        '/assets/images/Red July/red-july-6.png',
      ],
      links: {
        live: 'https://redjuly.live'
      }
    },
    
    {
      title: 'Flat FindBD',
      description: 'Flat FindBD is a real estate platform designed to facilitate direct communication between property owners and potential renters or buyers, eliminating the need for intermediaries. Users can list properties, search for available properties, and interact through a built-in messaging system.',
      tags: ['Next.js', 'React', 'Django', 'PostgreSQL'],
      images: [
        '/assets/images/Flat FindBD/flat-findBD-1.png',
      ]
    },
    {
      title: 'X- Clone',
      description: 'A web application which is able to show murmur(=tweet) by user. (this application is similar to Twitter)',
      tags: ['NestJS', 'React', 'MySQL', 'Typescript'],
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

  // Initialize active image indices
  useState(() => {
    const initialIndices = projects.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {} as Record<number, number>);
    setActiveImageIndices(initialIndices);
  });

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

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
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeIn('up', 0, 0.5)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work and contributions
          </p>
        </motion.div>

                          {/* Project Slider */}
         <div className="relative max-w-4xl mx-auto">
           {/* Navigation Buttons - Outside Project Card */}
           <button
             onClick={prevProject}
             className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-4 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 -translate-x-1/2"
             aria-label="Previous project"
           >
             <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
             </svg>
           </button>
           
           <button
             onClick={nextProject}
             className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-4 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 translate-x-1/2"
             aria-label="Next project"
           >
             <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
             </svg>
           </button>

           {/* Current Project */}
           <motion.div
             key={currentProjectIndex}
             initial={{ opacity: 0, x: 100 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: -100 }}
             transition={{ duration: 0.5 }}
             className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
           >
            {/* Image Carousel */}
            <motion.div
              variants={fadeIn('none', 0.1, 0.6)}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.2 }}
              className="relative h-64 bg-gray-100 overflow-hidden"
            >
              {currentProject.images.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`absolute inset-0 transition-opacity duration-500 ${
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
              
              {/* Image Navigation Arrows */}
              {currentProject.images.length > 1 && (
                <>
                  <button
                    onClick={() => prevImage(currentProjectIndex)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition z-10"
                    aria-label="Previous image"
                  >
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => nextImage(currentProjectIndex)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition z-10"
                    aria-label="Next image"
                  >
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              
              {/* Image Indicators */}
              {currentProject.images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {currentProject.images.map((_, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={() => setActiveImageIndices(prev => ({
                        ...prev,
                        [currentProjectIndex]: imgIndex
                      }))}
                      aria-label={`Go to image ${imgIndex + 1} for ${currentProject.title}`}
                      aria-current={imgIndex === activeImageIndices[currentProjectIndex] ? "true" : undefined}
                      className={`w-2 h-2 rounded-full transition-all ${
                        imgIndex === activeImageIndices[currentProjectIndex] 
                          ? 'bg-white w-4' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
            
            <motion.div
              variants={staggerContainer(0.1, 0.1)}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.1 }}
              className="p-8"
            >
              <motion.h3 variants={fadeIn('down', 0, 0.4)} className="text-3xl font-bold text-gray-800 mb-4">{currentProject.title}</motion.h3>
              <motion.p variants={fadeIn('up', 0.1, 0.4)} className="text-gray-600 mb-6 text-lg leading-relaxed">{currentProject.description}</motion.p>
              
              <motion.div variants={staggerContainer(0.05, 0.15)} className="flex flex-wrap gap-3 mb-8">
                {currentProject.tags.map((tag, i) => {
                  const colors = [
                    'bg-blue-100 text-blue-800',
                    'bg-indigo-100 text-indigo-800',
                    'bg-purple-100 text-purple-800',
                    'bg-amber-100 text-amber-800',
                    'bg-emerald-100 text-emerald-800'
                  ];
                  const color = colors[i % colors.length];
                  
                  return (
                    <motion.span
                      key={i}
                      variants={fadeIn('up', 0, 0.3)}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${color}`}
                    >
                      {tag}
                    </motion.span>
                  );
                })}
              </motion.div>
              
              <motion.div variants={fadeIn('up', 0.2, 0.4)} className="flex gap-6">
                {currentProject.links?.github && (
                  <a
                    href={currentProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition px-4 py-2 rounded-lg hover:bg-gray-50"
                  >
                    <FiGithub className="text-xl" />
                    <span className="font-medium">View Code</span>
                  </a>
                )}
                {currentProject.links?.live && (
                  <a
                    href={currentProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition px-4 py-2 rounded-lg hover:bg-gray-50"
                  >
                    <FiExternalLink className="text-xl" />
                    <span className="font-medium">Live Demo</span>
                  </a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Project Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProjectIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProjectIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;