'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getVisitorCounterBadge, getVisitorCount } from 'website-visitor-counter';

interface SimpleVisitorCounterProps {
  projectName?: string;
  className?: string;
  variant?: 'minimal' | 'badge' | 'number';
}

export default function SimpleVisitorCounter({ 
  projectName = 'nazmul-portfolio',
  className = '',
  variant = 'minimal'
}: SimpleVisitorCounterProps) {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [badgeUrl, setBadgeUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeCounter = async () => {
      try {
        setIsLoading(true);
        
        // Get the visitor counter badge URL with real visitor counting
        const badge = await getVisitorCounterBadge(projectName, {
          label: 'visitors',
          color: '00d4aa',
          style: 'for-the-badge'
        });
        setBadgeUrl(badge);
        
        // Get the real visitor count using the package's dedicated function
        const realCount = await getVisitorCount(projectName);
        setVisitorCount(realCount);
        
      } catch (err) {
        console.error('Error initializing visitor counter:', err);
        setVisitorCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    initializeCounter();
  }, [projectName]);

  if (variant === 'badge') {
    return (
      <div className={className}>
        {badgeUrl ? (
          <img 
            src={badgeUrl} 
            alt="visitor count badge" 
            className="inline-block"
            onError={(e) => {
              console.error('Footer badge failed to load:', badgeUrl);
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="inline-block bg-gray-200 rounded px-3 py-1 text-xs text-gray-500">
            Loading badge...
          </div>
        )}
      </div>
    );
  }

  if (variant === 'number') {
    return (
      <div className={className}>
        {isLoading ? (
          <span className="text-gray-400">...</span>
        ) : (
          <span className="font-mono">
            {visitorCount?.toLocaleString() || '0'}
          </span>
        )}
      </div>
    );
  }

  // Default minimal variant
  return (
    <div className={`inline-flex items-center space-x-2 ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-2"
      >
        <span className="text-sm text-gray-500">👁️</span>
        {isLoading ? (
          <span className="text-gray-400">...</span>
        ) : (
          <span className="font-medium text-gray-700">
            {visitorCount?.toLocaleString() || '0'} visitors
          </span>
        )}
      </motion.div>
    </div>
  );
}
