'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext'; // Adjust path if necessary

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
     { name: 'Blog', href: '#blog' },
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
      className={`fixed w-full z-50 ${
        scrolled ? 'bg-white/90 dark:bg-slate-800/80 backdrop-blur-md shadow-sm dark:shadow-md border-b border-transparent dark:border-slate-700/50' : 'bg-white dark:bg-slate-800'
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link 
              href="#home" 
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              onClick={() => setIsOpen(false)}
            >
              Nazmul Ahsan
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className="text-gray-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}

            {/* Social Icons */}
            <div className="flex items-center space-x-4 ml-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={index === 0 ? "GitHub" : "LinkedIn"}
                >
                  {link.icon}
                </motion.a>
              ))}
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ml-2"
              >
                {theme === 'light' ? (
                  <FiMoon className="text-gray-700 dark:text-gray-300 text-xl" />
                ) : (
                  <FiSun className="text-yellow-500 dark:text-yellow-400 text-xl" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
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
            className="md:hidden bg-white dark:bg-slate-800 overflow-hidden"
            id="mobile-menu-content"
          >
            <div className="px-6 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="block py-2 text-gray-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <div className="flex space-x-4 pt-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
                    onClick={() => setIsOpen(false)}
                    aria-label={index === 0 ? "GitHub (mobile)" : "LinkedIn (mobile)"}
                  >
                    {link.icon}
                  </motion.a>
                ))}
                {/* Theme toggle button for mobile - styling assumed to be mostly handled by icon color and hover:bg by parent, specific text colors for icons are already set */}
                <motion.button
                  onClick={() => {
                    toggleTheme();
                    setIsOpen(false);
                  }}
                  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {theme === 'light' ? (
                    <FiMoon className="text-gray-700 dark:text-gray-300 text-xl" />
                  ) : (
                    <FiSun className="text-yellow-500 dark:text-yellow-400 text-xl" />
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;