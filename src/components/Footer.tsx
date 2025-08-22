'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { ReactElement } from 'react';
import SimpleVisitorCounter from './SimpleVisitorCounter';

interface FooterLink {
  name: string;
  href: string;
  icon?: ReactElement;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks: FooterSection[] = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'mnahsanofficial@gmail.com', href: 'mailto:mnahsanofficial@gmail.com', icon: <FiMail /> },
        { name: '(+88) 01815532283', href: 'tel:+8801815532283', icon: <FiPhone /> },
        { name: 'Dhaka, Bangladesh', href: '#', icon: <FiMapPin /> },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/mnahsanofficial', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/mn-ahsan/', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Nazmul Ahsan</h3>
            <p className="mb-4">
              Full Stack Developer specializing in modern web technologies and creating exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="flex items-center hover:text-white transition-colors"
                    >
                      {link.icon && <span className="mr-2">{link.icon}</span>}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-center"
        >
          <div className="flex flex-col items-center space-y-2 mb-4 md:mb-0">
            <p>
              &copy; {currentYear} Nazmul Ahsan. All rights reserved.
            </p>
            <SimpleVisitorCounter 
              projectName="nazmul-portfolio"
              variant="badge"
              className="mt-2"
            />
          </div>
          <p className="text-sm">
            Crafted with <span className="text-red-400">♥</span> using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;