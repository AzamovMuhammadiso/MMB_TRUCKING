import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Route, Warehouse, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: <Truck size={48} className="text-accent" />,
    title: 'Freight Transport',
    description: 'Reliable and efficient transportation of goods across the nation with our modern fleet of trucks.',
  },
  {
    icon: <Route size={48} className="text-accent" />,
    title: 'Long Haul / Short Haul',
    description: 'Flexible solutions for both long-distance transportation and local delivery needs.',
  },
  {
    icon: <Warehouse size={48} className="text-accent" />,
    title: 'Dedicated Trucking',
    description: 'Exclusive fleet services tailored to your specific business requirements and schedules.',
  },
  {
    icon: <BarChart3 size={48} className="text-accent" />,
    title: 'Logistics Coordination',
    description: 'Comprehensive logistics planning and coordination to optimize your supply chain.',
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="section bg-white" id="services">
      <div className="container-custom">
        <h2 className="section-title">Our Services</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12">
          MMB Trucking provides comprehensive transportation solutions designed to meet your specific needs.
          Our range of services ensures we can handle any shipping requirement efficiently.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-light-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link to="/services" className="btn-primary text-white">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;