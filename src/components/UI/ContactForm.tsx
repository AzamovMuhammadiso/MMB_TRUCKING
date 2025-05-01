import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-md p-6 md:p-8"
    >
      <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Thank you for your message! We'll get back to you shortly.
        </div>
      ) : null}

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={() => setSubmitted(true)}
      >
        {/* Required hidden input to register with Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        {/* Honeypot field for spam protection */}
        <input type="hidden" name="bot-field" />

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Your full name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="(555) 123-4567"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn-primary w-full flex items-center justify-center"
        >
          <span className='text-white'>Send Message</span>
          <Send size={18} className="ml-2 text-white" />
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
