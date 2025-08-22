'use client';

import { useEffect, useRef, useState } from 'react';

const EnhancedContactForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFormReady, setIsFormReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formContainer, setFormContainer] = useState<HTMLDivElement | null>(null);
  const formInstanceRef = useRef<{ destroy: () => void } | null>(null);

  // Create a separate container for the external form
  useEffect(() => {
    if (!containerRef.current) return;

    // Create a completely isolated container
    const isolatedContainer = document.createElement('div');
    isolatedContainer.id = 'contact-form-isolated';
    isolatedContainer.style.width = '100%';
    isolatedContainer.style.minHeight = '400px';
    
    // Insert the isolated container into our React container
    containerRef.current.appendChild(isolatedContainer);
    setFormContainer(isolatedContainer);

    return () => {
      // Clean up the isolated container
      if (isolatedContainer && isolatedContainer.parentNode) {
        isolatedContainer.parentNode.removeChild(isolatedContainer);
      }
    };
  }, []);

  // Initialize the external form in the isolated container
  useEffect(() => {
    if (!formContainer) return;

    let mounted = true;
    let retryCount = 0;
    const maxRetries = 3;

    const initializeForm = async () => {
      if (!formContainer || formInstanceRef.current) return;

      try {
        setIsLoading(true);
        
        // Wait a bit more to ensure DOM is fully ready
        await new Promise(resolve => setTimeout(resolve, 200));
        
        if (!mounted || !formContainer) return;

        // Dynamically import the contact form
        const { createContactForm } = await import('website-contact-form');
        
        // Try to import CSS, but don't fail if it's not available
        try {
          await import('website-contact-form/dist/style.css');
        } catch (cssError) {
          console.warn('CSS import failed, using default styles:', cssError);
        }

        if (!mounted || !formContainer) return;

        // Create the form in the isolated container
        const form = await createContactForm({
          target: formContainer,
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
          formInstanceRef.current = form;
          setIsFormReady(true);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Failed to initialize contact form:', error);
        
        // Retry logic for initialization failures
        if (mounted && retryCount < maxRetries) {
          retryCount++;
          console.log(`Retrying form initialization (attempt ${retryCount}/${maxRetries})...`);
          setTimeout(initializeForm, 500 * retryCount);
          return;
        }
        
        if (mounted) {
          setMessage('Form failed to load after multiple attempts. Please try refreshing the page.');
          setIsLoading(false);
        }
      }
    };

    // Start initialization with a delay
    const timer = setTimeout(initializeForm, 100);

    return () => {
      mounted = false;
      clearTimeout(timer);
      
      // Clean up the form instance
      if (formInstanceRef.current) {
        try {
          formInstanceRef.current.destroy();
        } catch (error) {
          console.warn('Error destroying form:', error);
        }
        formInstanceRef.current = null;
      }
    };
  }, [formContainer]);

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
