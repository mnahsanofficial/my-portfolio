'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset 
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    alert('Message sent successfully!');
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to connect? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500">Email</h4>
                    <a href="mailto:nmahsanofficial@gmail.com" className="text-gray-800 hover:text-blue-600 transition">
                      nmahsanofficial@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4 text-indigo-600">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500">Phone</h4>
                    <a href="tel:+8801815532283" className="text-gray-800 hover:text-blue-600 transition">
                      (+88) 01815532283
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-600">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500">Location</h4>
                    <p className="text-gray-800">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://www.linkedin.com/in/mn-ahsan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 p-4 rounded-full text-blue-600 hover:bg-blue-200 transition"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="text-xl" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://github.com/mnahsanofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-4 rounded-full text-gray-600 hover:bg-gray-200 transition"
                  aria-label="GitHub"
                >
                  <FiGithub className="text-xl" />
                </motion.a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-2">Current Availability</h4>
              <p className="text-blue-700 mb-3">I&apos;m currently available for:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Full-time opportunities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Freelance projects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Technical consultations
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      {...register('name', { required: 'Please enter your name' })}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.name ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      {...register('email', { 
                        required: 'Please enter your email',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address'
                        }
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message', { required: 'Please enter your message' })}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.message ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                      }`}
                      placeholder="Hello, I'd like to talk about..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white ${
                    isSubmitting ? 'bg-blue-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                  } transition-all`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;