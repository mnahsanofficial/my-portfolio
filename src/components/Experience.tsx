'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { FiLinkedin, FiArrowUpRight } from 'react-icons/fi';
import { fadeIn, staggerContainer, staggerItem, defaultViewport } from '../lib/animations';

interface ExperienceItem {
  role: string;
  company: string;
  companyLogo: string;
  companyLinkedIn: string;
  logoBg?: 'light' | 'dark';
  duration: string;
  location: string;
  employmentType: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      role: 'Software Engineer & Technical Recruiter',
      company: 'Talvette',
      companyLogo: '/assets/images/companies/talvette.svg',
      companyLinkedIn: 'https://www.linkedin.com/company/talvette/',
      logoBg: 'light',
      duration: 'Aug 2025 — Present',
      location: 'Remote',
      employmentType: 'Full-time',
      summary: 'Driving product engineering and technical hiring operations across a fast-moving SaaS platform.',
      responsibilities: [
        'Shipped core platform modules — Articles, Job Board, Contact System, and Preview — with end-to-end error handling across the Talvette application.',
        'Built automated end-to-end testing pipelines running daily health checks, strengthening overall platform reliability.',
        'Sourced 500+ candidates, ran 200+ phone screenings, and led 100+ ORC calls to keep hiring pipelines consistently full.',
        'Placed 30+ hires across senior roles including CBO, Vue.js Developer, and Blockchain Engineer.',
        'Acted as the connective tissue between engineering and clients — aligning hiring strategy with product and business priorities.',
        'Designed structured technical screening frameworks that sharpened candidate evaluation and shortened time-to-decision.',
      ],
      skills: ['Vue.js', 'NestJS', 'PostgreSQL', 'CI/CD', 'Manatal', 'ATS'],
    },
    {
      role: 'Software Developer — Full Stack',
      company: 'BaryTech Technologies',
      companyLogo: '/assets/images/companies/barytech.png',
      companyLinkedIn: 'https://www.linkedin.com/company/barytech/',
      logoBg: 'light',
      duration: 'Jun 2023 — Apr 2026',
      location: 'Remote',
      employmentType: 'Full-time',
      summary: 'Led full-stack delivery of the EINO enterprise knowledge platform across Angular and Python-Django.',
      responsibilities: [
        'Spearheaded development of the scalable EINO application — Angular on the frontend, Python-Django on the backend.',
        'Designed and optimized RESTful APIs handling 15,000+ daily requests, improving performance by 25%.',
        'Engineered video-processing capabilities including screen recording and video trimming, lifting team productivity by 30%.',
        'Led migration from Angular 13 to Angular 18, resolved 150+ critical bugs, and improved maintainability by 40%.',
        'Closed 50+ additional production issues and raised overall system stability by 15%.',
        'Integrated real-time chat, increasing user engagement by 40%.',
        'Built and maintained modules across team management, calendar, maintenance, translation, and media systems.',
        'Delivered secure API integrations with PostgreSQL and pgAdmin, tuning query performance throughout.',
        'Contributed in Agile teams across feature planning, code reviews, and production deployments.',
      ],
      skills: ['Angular', 'Python-Django', 'PostgreSQL', 'REST APIs', 'pgAdmin', 'CI/CD'],
    },
    {
      role: 'Software Engineer — eqUIP Program (Media & IT)',
      company: 'Commonwealth Games Federation · BOA',
      companyLogo: '/assets/images/companies/commonwealth.svg',
      companyLinkedIn: 'https://www.linkedin.com/company/commonwealthgamesfederation/',
      logoBg: 'light',
      duration: 'Apr 2024 — Mar 2025',
      location: 'Dhaka, Bangladesh',
      employmentType: 'Onsite',
      summary: 'Digital transformation engineer for the Bangladesh Olympic Association under the Commonwealth eqUIP initiative.',
      responsibilities: [
        'Led development of the new CGA-Bangladesh website, increasing the federation’s digital visibility by 60%.',
        'Architected a centralized athlete database designed to manage 10,000+ national athlete profiles.',
        'Coordinated esports initiatives with national federations and international stakeholders including the Global Esports Federation.',
        'Streamlined data workflows, cutting processing time by 20%.',
        'Worked with cross-functional teams to digitize sports data infrastructure across multiple disciplines.',
      ],
      skills: ['Next.js', 'React', 'MongoDB', 'Stakeholder Management', 'Project Coordination'],
    },
    {
      role: 'Junior Software Engineer — QA Focus',
      company: 'bongoDev',
      companyLogo: '/assets/images/companies/bongodev.png',
      companyLinkedIn: 'https://www.linkedin.com/company/bongodev/',
      logoBg: 'light',
      duration: 'Jan 2022 — May 2023',
      location: 'Remote',
      employmentType: 'Full-time',
      summary: 'Built and tested production web applications while sharpening QA automation and engineering documentation practices.',
      responsibilities: [
        'Built the bongoDev application using React, Next.js, NestJS, and TypeScript.',
        'Automated QA pipelines, reducing manual testing effort by 40%.',
        'Refactored legacy systems, improving maintainability by 20%.',
        'Authored technical documentation that reduced onboarding time for new engineers by 50%.',
        'Participated in Agile cycles spanning sprint planning, code reviews, and release coordination.',
      ],
      skills: ['React', 'Next.js', 'NestJS', 'TypeScript', 'Jest', 'Agile'],
    },
  ];

  return (
    <section id="experience" className="py-28 bg-paper relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/5 blur-[100px] z-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 z-10">
        <motion.div
          variants={fadeIn('up', 0, 0.6)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="mb-20 max-w-3xl"
        >
          <span className="editorial-eyebrow mb-6">03 — Experience</span>
          <h2 className="font-display text-5xl md:text-6xl text-navy-900 leading-[1.05] mt-6 mb-6">
            A working <span className="italic text-gold-600">history</span>.
          </h2>
          <span className="gold-rule"></span>
          <p className="mt-6 text-base text-ink-600 leading-relaxed">
            Roles, milestones, and contributions across the last five years — engineering products and the teams that build them.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.2, 0.15)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              variants={fadeIn('up', 0, 0.6)}
              className="group relative bg-cream-50 border border-navy-900/10 hover:border-gold-500/60 hover:shadow-[0_30px_60px_-30px_rgba(10,22,40,0.18)] transition-all duration-500"
            >
              {/* Gold left rule (animated on hover) */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-500 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"></div>

              {/* Index marker */}
              <div className="absolute top-6 right-6 lg:top-8 lg:right-8 font-mono text-[10px] tracking-editorial text-gold-600/80">
                {String(index + 1).padStart(2, '0')} / 04
              </div>

              <div className="p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left rail: logo + meta */}
                <div className="lg:col-span-3 flex lg:flex-col gap-6 lg:gap-8 items-start">
                  {/* Logo tile */}
                  <a
                    href={exp.companyLinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${exp.company} on LinkedIn`}
                    className="relative w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0 bg-white border border-navy-900/10 hover:border-gold-500 transition-colors flex items-center justify-center p-3 overflow-hidden"
                  >
                    <Image
                      src={exp.companyLogo}
                      alt={`${exp.company} logo`}
                      width={96}
                      height={96}
                      className="object-contain max-w-full max-h-full"
                    />
                  </a>

                  {/* Meta */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-ink-700">
                      <FaCalendarAlt className="text-gold-500 text-xs flex-shrink-0" />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-ink-600">
                      <FaMapMarkerAlt className="text-gold-500 text-xs flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                    <span className="inline-block text-[10px] tracking-editorial uppercase text-gold-600 font-semibold border border-gold-500/40 px-2.5 py-1">
                      {exp.employmentType}
                    </span>
                  </div>
                </div>

                {/* Right: content */}
                <div className="lg:col-span-9 lg:pl-2">
                  {/* Company + LinkedIn */}
                  <div className="flex items-center gap-3 mb-2">
                    <a
                      href={exp.companyLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/co inline-flex items-center gap-2 text-gold-600 font-display italic text-lg hover:text-gold-500 transition-colors"
                    >
                      {exp.company}
                      <FiArrowUpRight className="text-sm opacity-0 -translate-x-1 group-hover/co:opacity-100 group-hover/co:translate-x-0 transition-all" />
                    </a>
                    <span className="block flex-1 h-px bg-navy-900/10"></span>
                    <a
                      href={exp.companyLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${exp.company} on LinkedIn`}
                      className="w-8 h-8 border border-navy-900/15 hover:border-gold-500 hover:bg-white text-navy-700 hover:text-gold-600 flex items-center justify-center transition-all"
                    >
                      <FiLinkedin className="text-sm" />
                    </a>
                  </div>

                  {/* Role title */}
                  <h3 className="font-display text-2xl md:text-3xl text-navy-900 leading-tight">
                    {exp.role}
                  </h3>

                  {/* Summary */}
                  <p className="mt-4 text-ink-700 leading-relaxed text-[15px]">
                    {exp.summary}
                  </p>

                  {/* Responsibilities */}
                  <motion.ul
                    variants={staggerContainer(0.05)}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={defaultViewport}
                    className="mt-6 space-y-2.5"
                  >
                    {exp.responsibilities.map((item, i) => (
                      <motion.li
                        variants={staggerItem}
                        key={i}
                        className="flex gap-3 text-ink-700 text-[15px] leading-relaxed"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold-500 mt-2.5"></span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Stack */}
                  <div className="mt-8 pt-6 border-t border-navy-900/10">
                    <p className="text-[10px] tracking-editorial uppercase text-gold-600 mb-3 font-semibold">Stack</p>
                    <motion.div
                      variants={staggerContainer(0.04)}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={defaultViewport}
                      className="flex flex-wrap gap-2"
                    >
                      {exp.skills.map((skill, i) => (
                        <motion.span key={i} variants={staggerItem} className="chip">
                          <span className="chip-dot"></span>
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
