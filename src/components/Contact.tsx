import React, { useState } from 'react';
import { Mail, Send, Linkedin, Github, Twitter, MessageSquare, User, ArrowRight } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { motion } from 'framer-motion';

interface ContactProps {
  email: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

const Contact: React.FC<ContactProps> = ({ email, linkedin, github, twitter }) => {
  const isDark = useThemeStore((state) => state.isDark);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section
      className={`section-card py-12 px-6 sm:px-10 transition-colors ${
        isDark ? 'bg-gray-900 text-gray-100' : 'bg-white/95 text-gray-900'
      }`}
      id="contact"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2
            className={`text-4xl font-bold mb-4 pb-2 border-b ${
              isDark ? 'text-indigo-300 border-gray-700' : 'text-gradient border-gradient'
            }`}
          >
            Let's Connect
          </h2>
          <p
            className={`text-xl max-w-2xl ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact methods */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {[
              {
                Icon: Mail,
                title: 'Email',
                subtitle: email,
                href: `mailto:${email}`,
                color: 'bg-gradient-to-br from-blue-500 to-blue-600'
              },
              linkedin && {
                Icon: Linkedin,
                title: 'LinkedIn',
                subtitle: 'Connect with me',
                href: linkedin,
                color: 'bg-gradient-to-br from-blue-600 to-blue-700'
              },
              github && {
                Icon: Github,
                title: 'GitHub',
                subtitle: 'Check out my code',
                href: github,
                color: 'bg-gradient-to-br from-purple-600 to-indigo-700'
              },
              twitter && {
                Icon: Twitter,
                title: 'Twitter',
                subtitle: 'Follow me',
                href: twitter,
                color: 'bg-gradient-to-br from-sky-500 to-blue-600'
              },
            ]
              .filter(Boolean)
              .map(({ Icon, title, subtitle, href, color }, i) => (
                <motion.a
                  key={i}
                  variants={item}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`flex items-center gap-4 p-5 rounded-xl transition-all duration-300 group shadow-sm ${
                    isDark
                      ? 'bg-gray-800 hover:bg-gray-700'
                      : 'bg-white hover:bg-gray-50 border border-gray-100'
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl transition-all duration-300 group-hover:rotate-6 ${color} text-white`}
                  >
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-medium text-lg mb-1 ${
                        isDark ? 'text-gray-100' : 'text-gray-900'
                      }`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`font-normal ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {subtitle}
                    </p>
                  </div>
                  <ArrowRight
                    size={20}
                    className={`transition-all duration-300 group-hover:translate-x-1 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  />
                </motion.a>
              ))}
          </motion.div>

          {/* Right: Contact form or confirmation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`rounded-2xl p-8 text-center border transition-colors shadow-sm ${
                  isDark
                    ? 'bg-green-900/30 border-green-800/50'
                    : 'bg-green-50 border-green-100'
                }`}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 0.8 }}
                  className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                    isDark ? 'bg-green-800/50' : 'bg-green-100'
                  }`}
                >
                  <svg
                    className={`w-10 h-10 ${
                      isDark ? 'text-green-400' : 'text-green-600'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    isDark ? 'text-green-400' : 'text-green-600'
                  }`}
                >
                  Message Sent!
                </h3>
                <p
                  className={`mb-6 text-lg ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSubmitted(false)}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    isDark
                      ? 'bg-green-800 hover:bg-green-700 text-green-100'
                      : 'bg-green-100 hover:bg-green-200 text-green-700'
                  }`}
                >
                  Send another message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className={`space-y-6 p-6 rounded-2xl ${
                  isDark ? 'bg-gray-800/50' : 'bg-white border border-gray-100'
                }`}
              >
                <div>
                  <label
                    htmlFor="name"
                    className={`flex items-center gap-2 text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-700'
                    }`}
                  >
                    <User size={16} />
                    <span>Your Name</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-lg transition-all border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      isDark
                        ? 'bg-gray-700/50 text-gray-100 border-gray-600 placeholder-gray-400'
                        : 'bg-white text-gray-900 border-gray-200 placeholder-gray-500'
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`flex items-center gap-2 text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-700'
                    }`}
                  >
                    <Mail size={16} />
                    <span>Email Address</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-lg transition-all border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      isDark
                        ? 'bg-gray-700/50 text-gray-100 border-gray-600 placeholder-gray-400'
                        : 'bg-white text-gray-900 border-gray-200 placeholder-gray-500'
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`flex items-center gap-2 text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-700'
                    }`}
                  >
                    <MessageSquare size={16} />
                    <span>Your Message</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Hello! I'd like to talk about..."
                    className={`w-full px-4 py-3 rounded-lg transition-all border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      isDark
                        ? 'bg-gray-700/50 text-gray-100 border-gray-600 placeholder-gray-400'
                        : 'bg-white text-gray-900 border-gray-200 placeholder-gray-500'
                    }`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-medium transition-all ${
                    isSubmitting
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 opacity-80 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-md'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="block w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;