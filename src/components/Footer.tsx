'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
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
  const currentYear = 2026;

  const footerLinks: FooterSection[] = [
    {
      title: 'Navigate',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Reach',
      links: [
        { name: 'mnahsanofficial@gmail.com', href: 'mailto:mnahsanofficial@gmail.com', icon: <FiMail /> },
        { name: 'Dhaka, Bangladesh', href: '#', icon: <FiMapPin /> },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/mnahsanofficial', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/mn-ahsan/', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-navy-950 text-cream-50/70 pt-20 pb-10 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-6"
          >
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-[10px] tracking-editorial uppercase text-gold-500">NA</span>
              <span className="font-display text-3xl text-cream-50">Nazmul Ahsan</span>
            </div>
            <span className="block w-12 h-px bg-gold-500 mb-6"></span>
            <p className="max-w-md leading-relaxed text-cream-50/65">
              Full Stack Engineer crafting production-grade web applications with quiet precision.
            </p>
            <div className="flex gap-3 mt-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-11 h-11 border border-cream-50/15 hover:border-gold-500 text-cream-50/80 hover:text-gold-400 flex items-center justify-center transition-all"
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
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <h4 className="text-[10px] tracking-editorial uppercase text-gold-500 mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-cream-50/70 hover:text-gold-300 transition-colors text-sm"
                    >
                      {link.icon && <span className="text-gold-500/80">{link.icon}</span>}
                      <span className="border-b border-transparent group-hover:border-gold-500/60 transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-cream-50/10 mb-8"></div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream-50/50"
        >
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <p className="tracking-wider">
              © {currentYear} Nazmul Ahsan · All rights reserved
            </p>
            <SimpleVisitorCounter
              projectName="nazmul-portfolio"
              variant="badge"
            />
          </div>
          <p className="tracking-wider flex items-center gap-2">
            <span>Crafted with</span>
            <span className="text-gold-500">◆</span>
            <span>Next.js · Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
