import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ServiceDetail from '../components/Services/ServiceDetail';
import BGService from "../assets/Article_162850_860_575.jpg"

const servicesData = [
  {
    title: 'Freight Transport',
    description: 'Our core service is the safe and efficient transportation of goods across the nation. With our modern, well-maintained fleet and experienced drivers, we ensure your freight arrives on time and in perfect condition.',
    imageUrl: 'https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg',
    features: [
      'Nationwide coverage with extensive network',
      'Real-time shipment tracking',
      'Flexible scheduling options',
      'Experienced and certified drivers',
      'Modern fleet with regular maintenance',
    ],
  },
  {
    title: 'Long Haul / Short Haul',
    description: 'Whether you need goods transported across the country or within a local region, MMB Trucking has you covered. Our long and short haul services provide flexible solutions for all your transportation needs.',
    imageUrl: 'https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg',
    features: [
      'Long-distance interstate transportation',
      'Local and regional deliveries',
      'Customized routes for efficiency',
      'Regular and expedited options',
      'Competitive pricing structure',
    ],
    reverse: true,
  },
  {
    title: 'Dedicated Trucking',
    description: 'Our dedicated trucking service provides you with exclusive use of trucks and drivers for your specific business needs. This service ensures consistent capacity, reliable schedules, and specialized equipment when required.',
    imageUrl: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg',
    features: [
      'Exclusive fleet allocation',
      'Consistent driver assignments',
      'Customized transportation plans',
      'Dedicated dispatch support',
      'Specialized equipment options',
    ],
  },
  {
    title: 'Logistics Coordination',
    description: 'Beyond transportation, we offer comprehensive logistics coordination to optimize your supply chain. Our expert team can manage the entire process from planning to execution, ensuring efficient and cost-effective operations.',
    imageUrl: 'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg',
    features: [
      'End-to-end supply chain management',
      'Route optimization and planning',
      'Inventory management solutions',
      'Cross-docking capabilities',
      'Integrated technology systems',
    ],
    reverse: true,
  },
];

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Our Services | MMB Trucking LLC';
  }, []);

  return (
    <div className="pt-24 md:pt-28 pb-16">
      <div className=" bg-fixed bg-cover bg-bottom"
      style={{ backgroundImage: `url(${BGService})` }}>
        <div className="bg-black bg-opacity-60 py-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-white"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-center max-w-3xl mx-auto text-white"
          >
            MMB Trucking provides comprehensive transportation and logistics solutions 
            tailored to meet your specific business needs.
          </motion.p>
        </div>
      </div>

      <div className="container-custom">
        {servicesData.map((service, index) => (
          <ServiceDetail
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            features={service.features}
            reverse={service.reverse}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;