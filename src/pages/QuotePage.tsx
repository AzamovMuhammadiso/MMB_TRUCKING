import { useEffect } from 'react';
import { motion } from 'framer-motion';
import QuoteForm from '../components/UI/QuoteForm';
import { CheckCircle } from 'lucide-react';

const QuotePage = () => {
  useEffect(() => {
    document.title = 'Get a Quote | MMB Trucking LLC';
  }, []);

  return (
    <div className="pt-24 md:pt-28 pb-16">
      <div className="bg-primary text-white py-12 md:py-16 mb-12">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6"
          >
            Request a Quote
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            Fill out the form below to get a custom quote for your transportation needs.
          </motion.p>
        </div>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-light-gray rounded-lg p-6 md:p-8 sticky top-28"
            >
              <h3 className="text-2xl font-semibold mb-6">Why Choose Us</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Competitive Rates:</span> We offer transparent, competitive pricing with no hidden fees.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Fast Quotes:</span> Receive your quote within 24 hours of submission.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Nationwide Coverage:</span> Our extensive network covers all 48 contiguous states.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Reliable Service:</span> We maintain a 98% on-time delivery rate.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Experienced Team:</span> Our logistics experts provide personalized solutions.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Flexible Scheduling:</span> Options for rush deliveries and custom timelines.
                  </p>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-300">
                <p className="font-medium text-center mb-2">Need immediate assistance?</p>
                <p className="text-center text-gray-700">Call us at <span className="text-accent font-semibold">(555) 123-4567</span></p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;