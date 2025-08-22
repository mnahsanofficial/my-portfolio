'use client';

import { useEffect, useRef, useState } from 'react';

const EnhancedContactForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFormReady, setIsFormReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const isolatedContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let mounted = true;
    let retryCount = 0;
    const maxRetries = 3;

    const initializeForm = async () => {
      if (!containerRef.current || !mounted) return;

      try {
        setIsLoading(true);

        // Create a completely isolated container outside React's control
        const isolatedContainer = document.createElement('div');
        isolatedContainer.id = 'contact-form-isolated';
        isolatedContainer.style.width = '100%';
        isolatedContainer.style.minHeight = '400px';
        isolatedContainer.style.position = 'relative';
        isolatedContainer.style.zIndex = '1';

        // Store reference to the isolated container
        isolatedContainerRef.current = isolatedContainer;

        // Wait for DOM to be fully ready
        await new Promise(resolve => setTimeout(resolve, 500));

        if (!mounted || !containerRef.current) return;

        // Append the isolated container to our React container
        containerRef.current.appendChild(isolatedContainer);

        // Wait a bit more to ensure the isolated container is properly mounted
        await new Promise(resolve => setTimeout(resolve, 200));

        if (!mounted || !isolatedContainer.parentNode) return;

        // Dynamically import the contact form
        const { createContactForm } = await import('website-contact-form');

        // Try to import CSS
        try {
          await import('website-contact-form/dist/style.css');
        } catch (cssError) {
          console.warn('CSS import failed, using default styles:', cssError);
        }

        if (!mounted || !isolatedContainer.parentNode) return;

        // Create the form in the isolated container
        await createContactForm({
          target: isolatedContainer,
          theme: 'light',
          labels: {
            title: 'Get In Touch',
            name: 'Your Name',
            email: 'Email Address',
            message: 'Your Message'
          },
          placeholders: {
            name: 'Enter your full name',
            email: 'Enter your email address',
            message: 'Tell me about your project or inquiry...'
          },
          buttonText: 'Send Message',
          emailJS: {
            serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_jlo0f38',
            templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_9ztqqzj',
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'v13IDQZ15rZFPmCeJ'
          },
          onSubmit: async (data: { name: string; email: string; messageText: string; messageHtml: string }) => {
            console.log('Form submitted:', data);
            setMessage('Message sent successfully! Thank you for reaching out.');
          },
          onSuccessMessage: '✅ Thank you! Your message has been sent successfully.',
          onErrorMessage: '❌ Failed to send message. Please try again.',
          accentGradient: 'linear-gradient(90deg, #2563eb, #7c3aed)'
        });

        if (mounted) {
          setIsFormReady(true);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Failed to initialize contact form:', error);

        // Retry logic for initialization failures
        if (mounted && retryCount < maxRetries) {
          retryCount++;
          console.log(`Retrying form initialization (attempt ${retryCount}/${maxRetries})...`);
          setTimeout(initializeForm, 1000 * retryCount);
          return;
        }

        if (mounted) {
          setMessage('Form failed to load after multiple attempts. Please try refreshing the page.');
          setIsLoading(false);
        }
      }
    };

    // Start initialization with a delay to ensure DOM is ready
    const timer = setTimeout(initializeForm, 200);

    return () => {
      mounted = false;
      clearTimeout(timer);

      // Clean up the isolated container
      if (isolatedContainerRef.current && isolatedContainerRef.current.parentNode) {
        try {
          isolatedContainerRef.current.parentNode.removeChild(isolatedContainerRef.current);
        } catch (error) {
          console.warn('Error removing isolated container:', error);
        }
        isolatedContainerRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* Enhanced Contact Form Container */}
      <div
        ref={containerRef}
        className="min-h-[400px]"
      >
        {isLoading && (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading contact form...</p>
            </div>
          </div>
        )}

        {!isLoading && !isFormReady && !message && (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <p className="text-gray-600">Initializing contact form...</p>
            </div>
          </div>
        )}

        {message && (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <p className="text-gray-600">{message}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedContactForm;
