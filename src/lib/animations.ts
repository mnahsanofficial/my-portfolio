import { Variants } from 'framer-motion';

// Default viewport settings for whileInView
export const defaultViewport = { once: true, amount: 0.2 }; // Trigger when 20% of element is in view

// Fade In
export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'none', delay: number = 0, duration: number = 0.5): Variants => {
  return {
    initial: {
      opacity: 0,
      x: direction === 'left' ? -20 : direction === 'right' ? 20 : 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

// Scale Up
export const scaleUp = (delay: number = 0, duration: number = 0.5): Variants => {
  return {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

// Stagger Container
export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0): Variants => {
  return {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

// Stagger Item (simple fade in up)
export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Example of a more specific text animation variant
// Animate words of a sentence one by one
export const sentenceVariant: Variants = {
  initial: { opacity: 1 },
  whileInView: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08, // Time difference between each word
    },
  },
};

export const letterVariant: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // Duration for each letter to animate
      ease: 'easeOut',
    },
  },
};


// You can add more specific variants here as needed, for example:
// - slideIn(direction, delay, duration)
// - zoomIn(delay, duration)
// - rotateIn(delay, duration)
