import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackgroundImg from "../../assets/BG.jpg";

const CallToAction = () => {
  return (
    <section
      className="bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <div className="bg-black bg-opacity-60 py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Moving with MMB?
            </h2>
            <p className="text-lg mb-8 text-white max-w-2xl mx-auto">
              Get in touch today for a free quote. Our team is ready to provide 
              the transportation solutions your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
             
              <Link 
                to="/contact" 
                className="btn bg-white text-primary hover:bg-white/90"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
