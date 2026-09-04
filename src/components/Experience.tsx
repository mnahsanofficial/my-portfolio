'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { FiLinkedin, FiArrowUpRight } from 'react-icons/fi';
import { fadeIn, staggerContainer, staggerItem, defaultViewport, listViewport } from '../lib/animations';

interface Role {
  title: string;
  duration: string;
  employmentType: string;
  /** Marks a step up within the same company, so the progression reads at a glance. */
  promoted?: boolean;
  summary: string;
  responsibilities: string[];
  skills: string[];
}

interface ExperienceItem {
  company: string;
  companyLogo: string;
  companyLinkedIn: string;
  location: string;
  /** Combined tenure, shown only when a company has more than one role. */
  totalDuration?: string;
  /** Newest role first. */
  roles: Role[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'Kpler (augmented via ZeuZ)',
      companyLogo: '/assets/images/companies/kpler.jpg',
      companyLinkedIn: 'https://www.linkedin.com/company/kpler/',
      location: 'Remote',
      roles: [
        {
          title: 'Software Engineer — Container Intelligence',
          duration: 'Apr 2026 — Present',
          employmentType: 'Contract',
          summary: 'Building micro frontends on the Container Intelligence product, writing every test case that ships with them.',
          responsibilities: [
            'Build micro frontends with Vue.js, React, and Next.js, backed by PHP and GraphQL services, on the Container Intelligence product.',
            'Build every feature with TDD, writing the test cases myself and testing each feature before handoff.',
            'Hand each feature to the product manager, CSM, marketing, and engineering manager for cross-checking, tracked in JIRA and Slack.',
            'Work with AI in the loop, using Claude and Cursor for writing code, reviewing it, and generating test cases.',
            'Built Selenium and Playwright test actions for qa.zeuz.ai, the ZeuZ in-house QA product, using Next.js and Python during the first two months on the internal team.',
          ],
          skills: ['Vue.js', 'React', 'Next.js', 'PHP', 'GraphQL', 'TDD', 'Playwright', 'Selenium'],
        },
      ],
    },
    {
      company: 'Talvette',
      companyLogo: '/assets/images/companies/talvette.svg',
      companyLinkedIn: 'https://www.linkedin.com/company/talvette/',
      location: 'Remote',
      roles: [
        {
          title: 'Software Engineer & Technical Recruiter',
          duration: 'Aug 2025 — Present',
          employmentType: 'Full-time',
          summary: 'Shipping platform features with TDD while running technical hiring end to end — both sides of the table.',
          responsibilities: [
            'Gathered product requirements and delivered core features on the Talvette platform with TDD: Article, Job Board, Contact System, Preview modules, and error handling.',
            'Wrote every test case myself and built end-to-end QA automation in Cypress, running daily health checks so each feature keeps working.',
            'Cut my own recruiting workload by 80% with AI assistants, then trained my teammates in a session I ran called “AI in Recruitment: Smarter Hiring with Practical AI Tools”.',
            'Placed 30+ engineers including a Staff Software Engineer, Senior Full Stack Engineers, a Go-to-Market Engineer, a Senior iOS Developer, and a UI/UX Engineer.',
            'Sourced 10,000+ candidates, ran 200+ phone screens and 100+ ORC calls with hiring managers to pin down what each role needed.',
            'Designed structured technical screening frameworks to make candidate evaluation faster and more consistent.',
          ],
          skills: ['TDD', 'Cypress', 'QA Automation', 'Manatal', 'ATS', 'Technical Screening'],
        },
      ],
    },
    {
      company: 'BaryTech Technologies',
      companyLogo: '/assets/images/companies/barytech.png',
      companyLinkedIn: 'https://www.linkedin.com/company/barytech/',
      location: 'Remote',
      totalDuration: 'Jun 2023 — Apr 2026 · 2 yrs 11 mos',
      roles: [
        {
          title: 'Software Developer — Full Stack',
          duration: 'Dec 2023 — Apr 2026',
          employmentType: 'Full-time',
          promoted: true,
          summary: 'Owned full-stack delivery of the EINO enterprise knowledge platform across Angular and Python-Django.',
          responsibilities: [
            'Built and scaled the EINO application with Angular on the frontend and Python-Django on the backend.',
            'Cut API response times by 30% with targeted query optimization and caching across a 15,000+ line codebase.',
            'Refactored 15,000+ lines and closed 150+ critical bugs, improving code maintainability by 40%.',
            'Raised critical tickets the QA team had missed, then trained that team on JIRA and later Azure DevOps.',
            'Upgraded the codebase from Angular 13 to Angular 18, handling the rebase and refactor without breaking the REST API layer.',
            'Shipped video features including screen recording and trimming, lifting user productivity by 30%.',
            'Integrated real-time chat with a cross-functional team, raising user engagement by 40%.',
          ],
          skills: ['Angular', 'Python-Django', 'PostgreSQL', 'REST APIs', 'Azure DevOps', 'JIRA'],
        },
        {
          title: 'Jr. Software Developer — Full Stack',
          duration: 'Jun 2023 — Nov 2023',
          employmentType: 'Full-time',
          summary: 'First six months at BaryTech — core module delivery and API integration ahead of promotion.',
          responsibilities: [
            'Closed 50+ critical bugs and improved code maintainability by 15%.',
            'Built core modules for team management, calendar, maintenance, translation, and media with cross-functional teams.',
            'Developed and integrated REST APIs with secure data handling using PostgreSQL and pgAdmin.',
          ],
          skills: ['Angular', 'Python-Django', 'PostgreSQL', 'pgAdmin', 'REST APIs'],
        },
      ],
    },
    {
      company: 'Commonwealth Sport (CGA) · Bangladesh Olympic Association',
      companyLogo: '/assets/images/companies/commonwealth.svg',
      companyLinkedIn: 'https://www.linkedin.com/company/commonwealthgamesfederation/',
      location: 'Dhaka, Bangladesh',
      roles: [
        {
          title: 'Project Manager & Product Manager — eqUIP Program (Media & IT)',
          duration: 'Apr 2024 — Mar 2025',
          employmentType: 'Onsite',
          summary: 'Ran the requirements-to-testing loop for the Bangladesh Olympic Association under the Commonwealth eqUIP initiative.',
          responsibilities: [
            'Ran the full requirements-to-testing loop: collected requirements from stakeholders, briefed developers, tested the delivered work, and raised the issues, all tracked in Google Sheets.',
            'Led development of the CGA-Bangladesh website, raising digital visibility by 70%.',
            'Planned a centralized national athlete database covering 10,000+ athlete profiles.',
            'Coordinated esports initiatives with the Sports Minister, the Global Esports Federation, and the Bangladesh Olympic Association.',
            'Streamlined data workflows, cutting processing time by 20%.',
          ],
          skills: ['Requirements Gathering', 'Stakeholder Management', 'QA Testing', 'Google Sheets', 'Project Management'],
        },
      ],
    },
    {
      company: 'bongoDev',
      companyLogo: '/assets/images/companies/bongodev.png',
      companyLinkedIn: 'https://www.linkedin.com/company/bongodev/',
      location: 'Remote',
      totalDuration: 'Jun 2021 — May 2023 · 2 yrs',
      roles: [
        {
          title: 'Junior Software Engineer — QA Focus',
          duration: 'Jan 2022 — May 2023',
          employmentType: 'Full-time',
          promoted: true,
          summary: 'Built and tested production web applications while sharpening QA automation and engineering documentation practices.',
          responsibilities: [
            'Built the bongoDev application with React, Next.js, NestJS, and TypeScript.',
            'Tested my own work and other developers’ work, logging every bug in Google Sheets.',
            'Automated QA pipelines, cutting manual testing effort by 40%.',
            'Refactored legacy systems, closing 60+ bugs and improving maintainability by 20%.',
            'Wrote internal documentation and project wikis, cutting new developer onboarding time by 50%.',
            'Worked in Agile cycles including sprint planning, stand-ups, and code reviews.',
          ],
          skills: ['React', 'Next.js', 'NestJS', 'TypeScript', 'QA Automation', 'Agile'],
        },
        {
          title: 'Software Engineer Intern — QA Automation',
          duration: 'Jun 2021 — Dec 2021',
          employmentType: 'Internship',
          summary: 'Where it started — manual testing, bug triage, and backend work across live client projects.',
          responsibilities: [
            'Reported 100+ bugs through manual testing, tracked and triaged in JIRA.',
            'Added analytics tracking for usage metrics across 3 major client projects.',
            'Built backend services and admin panels with Node.js and MySQL.',
            'Improved sprint delivery by running daily stand-ups and Agile sprint planning with the team.',
          ],
          skills: ['JavaScript', 'Node.js', 'MySQL', 'JIRA', 'Manual Testing'],
        },
      ],
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
          <span className="editorial-eyebrow mb-6">Experience</span>
          <h2 className="font-display text-5xl md:text-6xl text-navy-900 leading-[1.05] mt-6 mb-6">
            A working <span className="italic text-gold-600">history</span>.
          </h2>
          <span className="gold-rule"></span>
          <p className="mt-6 text-base text-ink-600 leading-relaxed">
            Roles, milestones, and contributions since 2021 — engineering products, testing them, and hiring the people who build the rest.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.2, 0.15)}
          initial="initial"
          whileInView="whileInView"
          viewport={listViewport}
          className="space-y-8"
        >
          {/* Each card reveals on its own as it scrolls in — inheriting the parent's
              trigger would tie every card to one very tall container, whose 20%
              threshold can never be met once the list outgrows the viewport. */}
          {experiences.map((exp, index) => {
            const multiRole = exp.roles.length > 1;

            return (
              <motion.article
                key={exp.company}
                variants={fadeIn('up', 0, 0.6)}
                initial="initial"
                whileInView="whileInView"
                viewport={defaultViewport}
                className="group relative bg-cream-50 border border-navy-900/10 hover:border-gold-500/60 hover:shadow-[0_30px_60px_-30px_rgba(10,22,40,0.18)] transition-all duration-500"
              >
                {/* Gold left rule (animated on hover) */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-500 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"></div>

                {/* Index marker */}
                <div className="absolute top-6 right-6 lg:top-8 lg:right-8 font-mono text-[10px] tracking-editorial text-gold-600/80">
                  {String(index + 1).padStart(2, '0')} / {String(experiences.length).padStart(2, '0')}
                </div>

                <div className="p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left rail: logo + company-level meta */}
                  <div className="lg:col-span-3 flex lg:flex-col gap-6 lg:gap-8 items-start">
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

                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2 text-ink-700">
                        <FaCalendarAlt className="text-gold-500 text-xs flex-shrink-0 mt-1" />
                        <span className="font-medium">{exp.totalDuration ?? exp.roles[0].duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-ink-600">
                        <FaMapMarkerAlt className="text-gold-500 text-xs flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                      {multiRole ? (
                        <span className="inline-block text-[10px] tracking-editorial uppercase text-gold-600 font-semibold border border-gold-500/40 px-2.5 py-1">
                          {exp.roles.length} Roles
                        </span>
                      ) : (
                        <span className="inline-block text-[10px] tracking-editorial uppercase text-gold-600 font-semibold border border-gold-500/40 px-2.5 py-1">
                          {exp.roles[0].employmentType}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right: company + role progression */}
                  <div className="lg:col-span-9 lg:pl-2">
                    <div className="flex items-center gap-3 mb-6">
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
                        className="w-8 h-8 border border-navy-900/15 hover:border-gold-500 hover:bg-white text-navy-700 hover:text-gold-600 flex items-center justify-center transition-all flex-shrink-0"
                      >
                        <FiLinkedin className="text-sm" />
                      </a>
                    </div>

                    {/* When a company has more than one role, a gold rail links them
                        so the progression reads as one tenure, not two jobs. */}
                    <div className={multiRole ? 'relative pl-7 space-y-10' : ''}>
                      {multiRole && (
                        <span className="absolute left-[5px] top-2 bottom-2 w-px bg-gold-500/30" aria-hidden="true"></span>
                      )}

                      {exp.roles.map((role) => (
                        <div key={role.title} className="relative">
                          {multiRole && (
                            <span className="absolute -left-7 top-2 w-[11px] h-[11px] rounded-full bg-gold-500 ring-4 ring-cream-50" aria-hidden="true"></span>
                          )}

                          <h3 className={`font-display text-navy-900 leading-tight ${multiRole ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'}`}>
                            {role.title}
                          </h3>

                          {/* Per-role dates only matter when a card holds several */}
                          {multiRole && (
                            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
                              <span className="text-sm text-ink-600 font-medium">{role.duration}</span>
                              <span className="w-1 h-1 rounded-full bg-navy-900/20"></span>
                              <span className="text-[10px] tracking-editorial uppercase text-ink-600">
                                {role.employmentType}
                              </span>
                              {role.promoted && (
                                <span className="text-[10px] tracking-editorial uppercase text-gold-700 font-semibold bg-gold-500/15 border border-gold-500/40 px-2 py-0.5">
                                  Promoted
                                </span>
                              )}
                            </div>
                          )}

                          <p className="mt-4 text-ink-700 leading-relaxed text-[15px]">
                            {role.summary}
                          </p>

                          <motion.ul
                            variants={staggerContainer(0.05)}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={defaultViewport}
                            className="mt-5 space-y-2.5"
                          >
                            {role.responsibilities.map((item, i) => (
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

                          <div className="mt-6 pt-5 border-t border-navy-900/10">
                            <p className="text-[10px] tracking-editorial uppercase text-gold-600 mb-3 font-semibold">Stack</p>
                            <div className="flex flex-wrap gap-2">
                              {role.skills.map((skill, i) => (
                                <span key={i} className="chip">
                                  <span className="chip-dot"></span>
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
