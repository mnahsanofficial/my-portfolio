# Nazmul Ahsan - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing my skills, projects, and professional experience.

## Features

✨ **Modern UI Components**
- Animated hero section with floating tech badges
- Interactive project cards with image carousels
- Responsive timeline for experience/education
- Dynamic skills visualization
- **Enhanced contact form** with rich text editing and real email delivery
- Website visitor counter with interactive analytics

🚀 **Tech Stack**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Icons
- CKEditor 5 (rich text editing)
- EmailJS (email delivery)
- website-contact-form package
- website-visitor-counter package

## Live Demo

Check out the live deployment: [mnahsanofficial.github.io/portfolio/](https://mnahsanofficial.github.io/portfolio/)

## 📧 Enhanced Contact Form

### Features
- **Rich Text Editor**: CKEditor 5 with full formatting capabilities (bold, italic, lists, links, tables)
- **Real Email Delivery**: EmailJS integration for reliable message delivery
- **Professional UI**: Modern, responsive design with loading states and validation
- **Anti-Spam Protection**: Honeypot fields and rate limiting
- **Mobile Optimized**: Touch-friendly interface for all devices

### Email Configuration
The contact form uses EmailJS for email delivery. Environment variables are configured in `.env.local`:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Technologies Used
- **website-contact-form** v1.1.1: Latest enhanced contact form package with all fixes
- **CKEditor 5**: Rich text editing capabilities
- **EmailJS**: Reliable email delivery service

## 📊 Visitor Counter

### Features
- **Real-time Counting**: Tracks unique visitors to your portfolio
- **Interactive UI**: Floating counter with analytics and badge generation
- **Multi-platform Backend**: Railway-hosted backend with health monitoring
- **Badge Generation**: Create custom visitor count badges for GitHub and other platforms

### Technologies Used
- **website-visitor-counter** v3.1.0: Visitor tracking and analytics
- **Railway Backend**: Cloud-hosted visitor counting service

## Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mnahsanofficial/portfolio.git
   cd portfolio
