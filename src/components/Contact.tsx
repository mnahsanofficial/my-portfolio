'use client';

import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import { fadeIn, staggerContainer, defaultViewport } from '../lib/animations';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeIn('up', 0, 0.5)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600" style={{color: '#2563eb'}}>Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to connect? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={staggerContainer(0.15, 0.2)}
            initial="initial"
            whileInView="whileInView"
            viewport={defaultViewport}
            className="space-y-8"
          >
            <div>
              <motion.h3 variants={fadeIn('left', 0, 0.5)} className="text-2xl font-bold text-gray-800 mb-6">Contact Information</motion.h3>
              
              <div className="space-y-6">
                <motion.div variants={fadeIn('left', 0, 0.5)} className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500">Email</h4>
                    <a href="mailto:mnahsanofficial@gmail.com" className="text-gray-800 hover:text-blue-600 transition">
                      mnahsanofficial@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn('left', 0, 0.5)} className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-600">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500">Location</h4>
                    <p className="text-gray-800">Dhaka, Bangladesh</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <motion.h3 variants={fadeIn('left', 0, 0.5)} className="text-2xl font-bold text-gray-800 mb-6">Connect With Me</motion.h3>
              <motion.div variants={staggerContainer(0.1)} className="flex space-x-4">
                <motion.a
                  variants={fadeIn('up', 0, 0.4)}
                  whileHover={{ y: -3 }}
                  href="https://www.linkedin.com/in/mn-ahsan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 p-4 rounded-full text-blue-600 hover:bg-blue-200 transition"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="text-xl" />
                </motion.a>
                <motion.a
                  variants={fadeIn('up', 0, 0.4)}
                  whileHover={{ y: -3 }}
                  href="https://github.com/mnahsanofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-4 rounded-full text-gray-600 hover:bg-gray-200 transition"
                  aria-label="GitHub"
                >
                  <FiGithub className="text-xl" />
                </motion.a>
              </motion.div>
            </div>

            {/* Availability */}
            <motion.div
              variants={fadeIn('left', 0, 0.5)}
              className="bg-blue-50 p-6 rounded-xl border border-blue-100"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                variants={staggerContainer(0.1, 0.2)}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h4 variants={fadeIn('down', 0, 0.4)} className="font-bold text-gray-900 mb-2">Current Availability</motion.h4>
                <motion.p variants={fadeIn('down', 0, 0.4)} className="text-gray-700 mb-3">I&apos;m currently available for:</motion.p>
                <motion.ul
                  variants={staggerContainer(0.1)}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, amount: 0.2 }}
                  className="space-y-2"
                >
                  <motion.li variants={fadeIn('up', 0, 0.3)} className="flex items-center text-gray-800">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Full-time opportunities
                  </motion.li>
                  <motion.li variants={fadeIn('up', 0, 0.3)} className="flex items-center text-gray-800">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Freelance projects
                  </motion.li>
                  <motion.li variants={fadeIn('up', 0, 0.3)} className="flex items-center text-gray-800">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Technical consultations
                  </motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>
            <motion.a
              variants={fadeIn('left', 0, 0.5)}
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Contact Form - Single Card */}
          <motion.div
            variants={fadeIn('right', 0.4, 0.6)}
            initial="initial"
            whileInView="whileInView"
            viewport={defaultViewport}
          >
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Send a Message</h3>
              <p className="text-gray-600 mb-6">Use the form below or email me directly. I usually reply within 24 hours.</p>
              <form
                // TODO: Replace YOUR_FORM_ID with your actual Formspree form ID.
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="space-y-4"
              >
                <input type="text" name="name" required placeholder="Your name" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none" />
                <input type="email" name="email" required placeholder="Your email" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none" />
                <textarea name="message" required rows={6} placeholder="Tell me about your project or role..." className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none" />
                <button type="submit" className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Send Message
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