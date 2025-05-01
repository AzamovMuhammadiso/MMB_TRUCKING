import { motion } from 'framer-motion';

interface ServiceDetailProps {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  reverse?: boolean;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  description,
  imageUrl,
  features,
  reverse = false,
}) => {
  return (
    <div className="py-12 border-b border-gray-200 last:border-b-0">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col justify-center ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
          <p className="text-gray-700 mb-6">{description}</p>
          
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-accent h-6 w-6 rounded-full flex items-center justify-center text-white font-bold text-sm mt-0.5 mr-3 flex-shrink-0">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: reverse ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <div className="rounded-lg overflow-hidden shadow-md h-full">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;