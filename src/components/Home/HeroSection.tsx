import { Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackgroundImg from "../../assets/cms.jpeg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-primary bg-opacity-40 backdrop-blur-sm p-8 rounded-lg inline-block max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <Truck size={64} className="text-accent" />
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Driven to Deliver.
            <br />
            <span className="text-accent">Powered by Precision.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Your trusted partner in nationwide transportation and logistics
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/services"
              className="btn-outline text-white border-white text-lg"
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
