'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  getVisitorCounterBadge, 
  getVisitorCounterHTML,
  getVisitorCounterMarkdown,
  getVisitorCounterReact
} from 'website-visitor-counter';
import { FaEye, FaCopy, FaCheck, FaPalette } from 'react-icons/fa';

interface BadgeConfig {
  project: string;
  label: string;
  color: string;
  style: 'flat' | 'for-the-badge' | 'plastic' | 'flat-square' | 'pixel';
  logo: string;
  base?: number;
}

export default function VisitorCounterDemo() {
  const [badgeConfig, setBadgeConfig] = useState<BadgeConfig>({
    project: 'nazmul-portfolio',
    label: 'visitors',
    color: '00d4aa',
    style: 'for-the-badge',
    logo: '👁️',
    base: 0
  });
  
  const [generatedBadge, setGeneratedBadge] = useState<string>('');
  const [generatedHTML, setGeneratedHTML] = useState<string>('');
  const [generatedMarkdown, setGeneratedMarkdown] = useState<string>('');
  const [generatedReact, setGeneratedReact] = useState<string>('');
  const [copied, setCopied] = useState<string | null>(null);

  const colorOptions = [
    { name: 'Blue', value: '0e75b6' },
    { name: 'Green', value: '00d4aa' },
    { name: 'Purple', value: '6c5ce7' },
    { name: 'Red', value: 'ff6b6b' },
    { name: 'Orange', value: 'fd79a8' },
    { name: 'Yellow', value: 'fdcb6e' }
  ];

  const styleOptions = [
    { name: 'Flat', value: 'flat' },
    { name: 'Plastic', value: 'plastic' },
    { name: 'For The Badge', value: 'for-the-badge' },
    { name: 'Flat Square', value: 'flat-square' },
    { name: 'Pixel (Invisible)', value: 'pixel' }
  ];

  const logoOptions = ['👁️', '👥', '📊', '🚀', '💻', '🌟', '🔥', '✨'];

  const generateAllFormats = useCallback(async () => {
    try {
      // Generate badge URL
      const badge = await getVisitorCounterBadge(badgeConfig);
      setGeneratedBadge(badge);

      // Generate HTML
      const html = await getVisitorCounterHTML(badgeConfig);
      setGeneratedHTML(html);

      // Generate Markdown
      const markdown = await getVisitorCounterMarkdown(badgeConfig);
      setGeneratedMarkdown(markdown);

      // Generate React component
      const react = await getVisitorCounterReact(badgeConfig);
      setGeneratedReact(react);
    } catch (err) {
      console.error('Error generating formats:', err);
    }
  }, [badgeConfig]);

  useEffect(() => {
    generateAllFormats();
  }, [generateAllFormats]);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Visitor Counter Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore all the features and customization options of the website-visitor-counter package
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6 max-w-2xl mx-auto">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-lg font-semibold text-green-800">New in v2.1.1: Real Visitor Counting!</span>
            </div>
            <p className="text-green-700">
              This package now provides <strong>real visitor counting</strong> with privacy-focused IP hashing, 
              just like komarev.com! No duplicate counting from the same IP address.
            </p>
          </div>
        </motion.div>

        {/* Configuration Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaPalette className="mr-3 text-blue-600" />
            Customize Your Badge
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Project Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Name
              </label>
              <input
                type="text"
                value={badgeConfig.project}
                onChange={(e) => setBadgeConfig(prev => ({ ...prev, project: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="my-project"
              />
            </div>

            {/* Label */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Label
              </label>
              <input
                type="text"
                value={badgeConfig.label}
                onChange={(e) => setBadgeConfig(prev => ({ ...prev, label: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="visitors"
              />
            </div>

            {/* Color */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color
              </label>
              <select
                value={badgeConfig.color}
                onChange={(e) => setBadgeConfig(prev => ({ ...prev, color: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {colorOptions.map((color) => (
                  <option key={color.value} value={color.value}>
                    {color.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Style */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Style
              </label>
              <select
                value={badgeConfig.style}
                onChange={(e) => setBadgeConfig(prev => ({ ...prev, style: e.target.value as 'flat' | 'for-the-badge' | 'plastic' | 'flat-square' | 'pixel' }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {styleOptions.map((style) => (
                  <option key={style.value} value={style.value}>
                    {style.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Base Count */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Base Count (for migration from other services)
            </label>
            <input
              type="number"
              value={badgeConfig.base || 0}
              onChange={(e) => setBadgeConfig(prev => ({ ...prev, base: parseInt(e.target.value) || 0 }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0"
              min="0"
            />
            <p className="text-xs text-gray-500 mt-1">
              Set this if you&apos;re migrating from another visitor counter service
            </p>
          </div>

          {/* Logo Selection */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Logo
            </label>
            <div className="flex flex-wrap gap-2">
              {logoOptions.map((logo) => (
                <button
                  key={logo}
                  onClick={() => setBadgeConfig(prev => ({ ...prev, logo }))}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    badgeConfig.logo === logo
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-2xl">{logo}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Live Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaEye className="mr-3 text-green-600" />
            Live Preview
          </h2>
          
          <div className="text-center">
            {generatedBadge && (
              <div className="mb-4">
                <img 
                  src={generatedBadge} 
                  alt="visitor counter badge" 
                  className="mx-auto"
                />
              </div>
            )}
            
            <div className="text-sm text-gray-600">
              <p>Project: <span className="font-medium">{badgeConfig.project}</span></p>
              <p>Label: <span className="font-medium">{badgeConfig.label}</span></p>
              <p>Style: <span className="font-medium">{badgeConfig.style}</span></p>
            </div>
          </div>
        </motion.div>

        {/* Generated Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-6"
        >
          {/* HTML Output */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">HTML Output</h3>
              <button
                onClick={() => copyToClipboard(generatedHTML, 'html')}
                className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                {copied === 'html' ? <FaCheck /> : <FaCopy />}
                <span>{copied === 'html' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{generatedHTML}</code>
            </pre>
          </div>

          {/* Markdown Output */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">Markdown Output</h3>
              <button
                onClick={() => copyToClipboard(generatedMarkdown, 'markdown')}
                className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                {copied === 'markdown' ? <FaCheck /> : <FaCopy />}
                <span>{copied === 'markdown' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{generatedMarkdown}</code>
            </pre>
          </div>

          {/* React Component */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">React Component</h3>
              <button
                onClick={() => copyToClipboard(generatedReact, 'react')}
                className="flex items-center space-x-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
              >
                {copied === 'react' ? <FaCheck /> : <FaCopy />}
                <span>{copied === 'react' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{generatedReact}</code>
            </pre>
          </div>

          {/* Direct URL */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">Direct Badge URL</h3>
              <button
                onClick={() => copyToClipboard(generatedBadge, 'url')}
                className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                {copied === 'url' ? <FaCheck /> : <FaCopy />}
                <span>{copied === 'url' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <code className="text-sm break-all">{generatedBadge}</code>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
