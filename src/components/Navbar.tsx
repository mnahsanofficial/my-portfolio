'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Writing', href: '#writing' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/mnahsanofficial' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/mn-ahsan/' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-gold-500/15'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="#home"
            className="group flex items-baseline gap-2"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-[11px] font-semibold tracking-editorial uppercase text-gold-500">
              NA
            </span>
            <span className="font-display text-xl text-cream-50 group-hover:text-gold-300 transition-colors">
              Nazmul Ahsan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-sm tracking-wide text-cream-50/80 hover:text-gold-300 transition-colors"
              >
                <span className="font-mono text-[10px] text-gold-500/70 mr-1.5">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <div className="flex items-center gap-4 pl-4 ml-2 border-l border-cream-50/20">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="text-cream-50/70 hover:text-gold-400 transition-colors"
                  aria-label={index === 0 ? "GitHub" : "LinkedIn"}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-editorial uppercase font-semibold text-navy-900 bg-gold-500 hover:bg-gold-400 px-5 py-2.5 transition-colors"
            >
              Resume / CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cream-50 hover:text-gold-400 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu-content"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-navy-900 border-t border-gold-500/15 overflow-hidden"
            id="mobile-menu-content"
          >
            <div className="px-6 pt-4 pb-8 space-y-1">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-baseline gap-3 py-3 text-cream-50/80 hover:text-gold-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-mono text-[10px] text-gold-500/70">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-base">{link.name}</span>
                  </Link>
                </motion.div>
              ))}

              <div className="flex items-center gap-3 pt-6 mt-4 border-t border-cream-50/10">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream-50/70 hover:text-gold-400 transition-colors p-2"
                    onClick={() => setIsOpen(false)}
                    aria-label={index === 0 ? "GitHub (mobile)" : "LinkedIn (mobile)"}
                  >
                    {link.icon}
                  </a>
                ))}
                <a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-[11px] tracking-editorial uppercase font-semibold text-navy-900 bg-gold-500 hover:bg-gold-400 px-5 py-2.5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Resume / CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
