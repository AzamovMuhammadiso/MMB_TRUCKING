import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-light-gray flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 md:p-12 rounded-lg shadow-md text-center max-w-2xl"
      >
        <Truck size={80} className="text-accent mx-auto mb-6" />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
        
        <p className="text-lg mb-8 text-gray-600">
          Oops! The page you're looking for has taken a detour. 
          Let's get you back on the right route.
        </p>
        
        <Link to="/" className="btn-primary flex items-center justify-center mx-auto w-full md:w-auto md:px-8">
          <Home size={18} className="mr-2" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;