import { motion } from 'framer-motion';
import { 
  Clock, Shield, MapPin, Award, Users, HeadphonesIcon
} from 'lucide-react';

const features = [
  {
    icon: <Clock size={36} className="text-accent" />,
    title: '24/7 Dispatch',
    description: 'Round-the-clock dispatch services to ensure your shipments are always monitored and managed.',
  },
  {
    icon: <Shield size={36} className="text-accent" />,
    title: 'Safety-First Fleet',
    description: 'Rigorous safety protocols and regular maintenance to keep our fleet in top condition.',
  },
  {
    icon: <MapPin size={36} className="text-accent" />,
    title: 'GPS-Enabled Tracking',
    description: 'Real-time tracking technology for complete visibility of your shipments at all times.',
  },
  {
    icon: <Award size={36} className="text-accent" />,
    title: 'Certified Drivers',
    description: 'Professional, experienced drivers with all required certifications and safety training.',
  },
  {
    icon: <Users size={36} className="text-accent" />,
    title: 'Dedicated Team',
    description: 'A committed team of professionals focused on providing exceptional service.',
  },
  {
    icon: <HeadphonesIcon size={36} className="text-accent" />,
    title: 'Customer Support',
    description: 'Responsive customer service to address all your questions and concerns promptly.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section bg-primary text-white" id="why-choose-us">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Why Choose MMB Trucking</h2>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-gray-300">
            With years of experience in the transportation industry, we've built our reputation on reliability,
            safety, and exceptional service. Here's what sets us apart:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-dark-gray p-6 rounded-lg"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;