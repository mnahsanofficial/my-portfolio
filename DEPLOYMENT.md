# Deployment Guide - Nazmul Ahsan Portfolio

## Overview
This portfolio is configured for static export and can be deployed to various platforms. The build process generates static files that can be served from any web server.

## Build Process
The project uses Next.js with static export configuration:
- `output: "export"` in `next.config.ts`
- `images: { unoptimized: true }` for static hosting compatibility
- All pages are pre-rendered at build time

## Deployment Options

### 1. GitHub Pages (Recommended)
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Set source to "GitHub Actions"
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build project
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

### 2. Vercel (Alternative)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. No additional configuration needed

### 3. Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Deploy

### 4. Manual Deployment
1. Run `npm run build`
2. Upload the contents of the `out` directory to your web server
3. Configure your server to serve static files

## Environment Variables
No environment variables are required for this static portfolio.

## Performance Optimizations
- Images are optimized and served as static assets
- CSS is minified and bundled
- JavaScript is code-split and optimized
- All animations use CSS transforms for better performance

## SEO Configuration
- Meta tags are properly configured for social sharing
- Open Graph and Twitter Card tags are included
- Sitemap is generated automatically
- Robots.txt is included

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement for older browsers

## Troubleshooting

### Build Issues
- Ensure Node.js version 18+ is installed
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run lint`

### Deployment Issues
- Verify the `out` directory contains all static files
- Check that your hosting platform supports static file serving
- Ensure all image paths are correct

### Performance Issues
- Use browser dev tools to check for large bundle sizes
- Optimize images if needed
- Consider lazy loading for non-critical components

## Maintenance
- Regularly update dependencies: `npm update`
- Check for security vulnerabilities: `npm audit`
- Monitor performance metrics
- Update content and projects as needed 