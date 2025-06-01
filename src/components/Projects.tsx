'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

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
  const [visibleProjects, setVisibleProjects] = useState(2);
  
  
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
      description: 'I built an AI-powered chat application using Next.js for the frontend and NestJS for the backend. The app integrates OpenAI’s GPT-4 to generate responses while implementing rate limiting (5 requests/day per user) to prevent abuse.',
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
        '/assets/images/projectss/redjuly-1.jpg',
        '/assets/images/projectss/redjuly-2.jpg',
        '/assets/images/projectss/redjuly-3.jpg'
      ],
      links: {
        github: 'https://github.com/username/redjuly',
        live: 'https://redjuly.live'
      }
    },
    
    {
      title: 'Esports Tournament Platform',
      description: 'Platform for organizing and streaming esports tournaments with real-time leaderboards and payment integration.',
      tags: ['React', 'Firebase', 'Stripe API', 'WebSockets'],
      images: [
        '/assets/images/projectss/esports-1.jpg',
        '/assets/images/projectss/esports-2.jpg'
      ]
    },
    {
      title: 'BongoDev CMS',
      description: 'Custom content management system for managing multiple client websites from a single dashboard.',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
      images: [
        '/assets/images/projectss/cms-1.jpg'
      ]
    }
  ];

  const [activeImageIndices, setActiveImageIndices] = useState(
    projects.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {})
  );

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

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
            >
              {/* Image Carousel */}
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                {project.images.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      imgIndex === activeImageIndices[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${imgIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                
                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => prevImage(index)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition z-10"
                    >
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => nextImage(index)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition z-10"
                    >
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
                
                {/* Image Indicators */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {project.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => setActiveImageIndices(prev => ({
                          ...prev,
                          [index]: imgIndex
                        }))}
                        className={`w-2 h-2 rounded-full transition-all ${
                          imgIndex === activeImageIndices[index] 
                            ? 'bg-white w-4' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => {
                    const colors = [
                      'bg-blue-100 text-blue-800',
                      'bg-indigo-100 text-indigo-800',
                      'bg-purple-100 text-purple-800',
                      'bg-amber-100 text-amber-800',
                      'bg-emerald-100 text-emerald-800'
                    ];
                    const color = colors[i % colors.length];
                    
                    return (
                      <span 
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
                
                <div className="flex gap-4">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                    >
                      <FiGithub className="text-lg" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                    >
                      <FiExternalLink className="text-lg" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="text-center">
            <button
              onClick={() => setVisibleProjects(projects.length)}
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition"
            >
              View All Projects ({projects.length - visibleProjects} more)
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;