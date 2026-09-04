'use client';

import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { fadeIn, staggerContainer, defaultViewport } from '../lib/animations';

const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 editorial-grid opacity-30 z-0"></div>
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gold-500/10 blur-[120px] z-0"></div>
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-gold-500/5 blur-[100px] z-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 z-10">
        <motion.div
          variants={fadeIn('up', 0, 0.6)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="mb-20 max-w-3xl"
        >
          <span className="editorial-eyebrow mb-6">Contact</span>
          <h2 className="font-display text-5xl md:text-6xl text-cream-50 leading-[1.05] mt-6 mb-6">
            Let&apos;s build something <span className="italic text-gold-400">together</span>.
          </h2>
          <span className="gold-rule"></span>
          <p className="mt-6 text-base text-cream-50/70 leading-relaxed">
            Have a project in mind or a role to discuss? I usually reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <motion.div
            variants={staggerContainer(0.12, 0.2)}
            initial="initial"
            whileInView="whileInView"
            viewport={defaultViewport}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <motion.h3 variants={fadeIn('left', 0, 0.5)} className="text-[10px] tracking-editorial uppercase text-gold-500 mb-6">
                Direct
              </motion.h3>
              <div className="space-y-5">
                <motion.a
                  variants={fadeIn('left', 0, 0.5)}
                  href="mailto:mnahsanofficial@gmail.com"
                  className="group flex items-start gap-4 p-5 border border-cream-50/15 hover:border-gold-500/60 hover:bg-cream-50/5 transition-all"
                >
                  <FiMail className="text-xl text-gold-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-[10px] tracking-editorial uppercase text-cream-50/50 mb-1">Email</p>
                    <p className="font-display text-lg text-cream-50 group-hover:text-gold-300 transition-colors break-all">
                      mnahsanofficial@gmail.com
                    </p>
                  </div>
                  <FiArrowUpRight className="text-cream-50/40 group-hover:text-gold-500 group-hover:rotate-12 transition-all" />
                </motion.a>

                <motion.div
                  variants={fadeIn('left', 0, 0.5)}
                  className="flex items-start gap-4 p-5 border border-cream-50/15"
                >
                  <FiMapPin className="text-xl text-gold-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] tracking-editorial uppercase text-cream-50/50 mb-1">Location</p>
                    <p className="font-display text-lg text-cream-50">Dhaka, Bangladesh</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <motion.h3 variants={fadeIn('left', 0, 0.5)} className="text-[10px] tracking-editorial uppercase text-gold-500 mb-6">
                Elsewhere
              </motion.h3>
              <motion.div variants={staggerContainer(0.08)} className="flex gap-3">
                <motion.a
                  variants={fadeIn('up', 0, 0.4)}
                  whileHover={{ y: -3 }}
                  href="https://www.linkedin.com/in/mn-ahsan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-cream-50/20 hover:border-gold-500 text-cream-50/80 hover:text-gold-400 flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="text-lg" />
                </motion.a>
                <motion.a
                  variants={fadeIn('up', 0, 0.4)}
                  whileHover={{ y: -3 }}
                  href="https://github.com/mnahsanofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-cream-50/20 hover:border-gold-500 text-cream-50/80 hover:text-gold-400 flex items-center justify-center transition-all"
                  aria-label="GitHub"
                >
                  <FiGithub className="text-lg" />
                </motion.a>
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn('left', 0, 0.5)}
              className="border-l-2 border-gold-500 pl-6 py-2"
            >
              <p className="text-[10px] tracking-editorial uppercase text-gold-400 mb-3">Currently Available For</p>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-3 text-cream-50/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                  Full-time opportunities
                </li>
                <li className="flex items-center gap-3 text-cream-50/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                  Freelance projects
                </li>
                <li className="flex items-center gap-3 text-cream-50/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                  Technical consultations
                </li>
              </ul>
            </motion.div>

            <motion.a
              variants={fadeIn('left', 0, 0.5)}
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-fit"
            >
              <span className="text-[11px] tracking-editorial uppercase">Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeIn('right', 0.2, 0.6)}
            initial="initial"
            whileInView="whileInView"
            viewport={defaultViewport}
            className="lg:col-span-7"
          >
            <div className="bg-cream-50 p-8 lg:p-12 border border-gold-500/30">
              <span className="text-[10px] tracking-editorial uppercase text-gold-600">Form</span>
              <h3 className="font-display text-3xl md:text-4xl text-navy-900 mt-3 mb-3 leading-tight">
                Send a <span className="italic text-gold-600">message</span>.
              </h3>
              <span className="block w-12 h-px bg-gold-500 mb-6"></span>
              <p className="text-ink-600 mb-8 text-[15px]">Tell me about the project, the role, or just say hello.</p>

              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label className="text-[10px] tracking-editorial uppercase text-ink-600 mb-2 block">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Smith"
                    className="w-full bg-transparent border-0 border-b border-navy-900/20 px-0 py-3 text-navy-900 placeholder:text-ink-500/60 focus:border-gold-500 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-editorial uppercase text-ink-600 mb-2 block">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full bg-transparent border-0 border-b border-navy-900/20 px-0 py-3 text-navy-900 placeholder:text-ink-500/60 focus:border-gold-500 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-editorial uppercase text-ink-600 mb-2 block">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or role..."
                    className="w-full bg-transparent border-0 border-b border-navy-900/20 px-0 py-3 text-navy-900 placeholder:text-ink-500/60 focus:border-gold-500 focus:outline-none transition resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold mt-2 w-full sm:w-fit">
                  <span className="text-[11px] tracking-editorial uppercase">Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
