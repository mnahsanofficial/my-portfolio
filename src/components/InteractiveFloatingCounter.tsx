'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSimpleVisitorBadge, getVisitorCount, getBackendHealth, getBackendStats } from 'website-visitor-counter';
import { FaEye, FaTimes, FaExpand, FaCopy, FaCheck, FaChartBar } from 'react-icons/fa';

interface InteractiveFloatingCounterProps {
  projectName?: string;
}

export default function InteractiveFloatingCounter({ 
  projectName = 'nazmul-portfolio'
}: InteractiveFloatingCounterProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [badgeUrl, setBadgeUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [backendHealth, setBackendHealth] = useState<{ status: string; timestamp: string } | null>(null);
  const [backendStats, setBackendStats] = useState<{ totalProjects: number; projects: Record<string, unknown> } | null>(null);


  useEffect(() => {
    const initializeCounter = async () => {
      try {
        setIsLoading(true);
        
        // Get the simple badge URL with real visitor counting
        const badge = await getSimpleVisitorBadge(projectName);
        setBadgeUrl(badge);
        
        // Get the real visitor count using the package's dedicated function
        const realCount = await getVisitorCount(projectName);
        setVisitorCount(realCount);
        
        // Get backend health and stats (new in v2.2.0)
        try {
          const health = await getBackendHealth();
          setBackendHealth(health);
          
          const stats = await getBackendStats();
          setBackendStats(stats);
        } catch {
          console.log('Backend health check failed, but visitor counting still works');
        }
        
      } catch (err) {
        console.error('Error initializing visitor counter:', err);
        setVisitorCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    initializeCounter();
  }, [projectName]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };



  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 w-80 max-w-[90vw]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Visitor Counter</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  title="Minimize"
                >
                  <FaExpand className="text-sm" />
                </button>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  title="Close"
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>
            </div>
            
            {/* Visitor Count Display */}
            <div className="text-center mb-6">
              {isLoading ? (
                <div className="text-3xl font-bold text-gray-300">...</div>
              ) : (
                <motion.div
                  key={visitorCount}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                >
                  {visitorCount?.toLocaleString()}
                </motion.div>
              )}
              <p className="text-sm text-gray-500 mt-1">Total Visitors</p>
              
              {/* Refresh Button */}
              {/* <button
                onClick={refreshVisitorCount}
                disabled={isRefreshing}
                className="mt-3 px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isRefreshing ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Refreshing...</span>
                  </div>
                ) : (
                  '🔄 Refresh Count'
                )}
              </button> */}
            </div>
            
            {/* Badge Display */}
            {badgeUrl && (
              <div className="space-y-4">
                <div className="text-center">
                  <img 
                    src={badgeUrl} 
                    alt="visitor count badge" 
                    className="mx-auto"
                  />
                </div>
                
                {/* Copy Options */}
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Badge URL:</p>
                    <div className="flex items-center space-x-2">
                      <code className="flex-1 text-xs bg-gray-100 px-3 py-2 rounded break-all font-mono">
                        {badgeUrl}
                      </code>
                      <button
                        onClick={() => copyToClipboard(badgeUrl)}
                        className="text-blue-600 hover:text-blue-800 p-2 transition-colors"
                        title="Copy URL"
                      >
                        {copied ? <FaCheck className="text-green-600" /> : <FaCopy />}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Markdown:</p>
                    <div className="flex items-center space-x-2">
                      <code className="flex-1 text-xs bg-gray-100 px-3 py-2 rounded break-all font-mono">
                        ![visitors count for {projectName}]({badgeUrl})
                      </code>
                      <button
                        onClick={() => copyToClipboard(`![visitors count for ${projectName}](${badgeUrl})`)}
                        className="text-blue-600 hover:text-blue-800 p-2 transition-colors"
                        title="Copy Markdown"
                      >
                        {copied ? <FaCheck className="text-green-600" /> : <FaCopy />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Backend Health & Stats */}
            {backendHealth && backendStats && (
              <div className="mt-4 space-y-3">
                {/* <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <FaServer className="text-green-600" />
                    <span className="text-sm font-medium text-green-800">Backend Status</span>
                  </div>
                  <div className="text-xs text-green-700 space-y-1">
                    <p>Status: <span className="font-medium">{backendHealth.status}</span></p>
                    <p>Last Check: {new Date(backendHealth.timestamp).toLocaleTimeString()}</p>
                    <p>Total Projects: <span className="font-medium">{backendStats.totalProjects}</span></p>
                  </div>
                </div> */}
                
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <FaChartBar className="text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Railway Backend</span>
                  </div>
                  <p className="text-xs text-blue-700">
                    Powered by Railway with 99.9% uptime and cross-device accuracy
                  </p>
                </div>
              </div>
            )}
            
            {/* Info */}
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-700 text-center">
                Real visitor counting with privacy-focused IP hashing
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsExpanded(true)}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 group"
          >
            <div className="flex items-center space-x-3">
              <FaEye className="text-xl group-hover:scale-110 transition-transform" />
              <div className="text-left flex items-center space-x-1">
                <div className="text-sm font-medium">
                  {isLoading ? '...' : visitorCount?.toLocaleString() || '0'}
                </div>
                <div className="text-xs opacity-80">visitors</div>
                
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
