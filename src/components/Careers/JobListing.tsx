import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface JobListingProps {
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const JobListing: React.FC<JobListingProps> = ({
  title,
  location,
  type,
  description,
  requirements,
  benefits,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden mb-6"
    >
      <div 
        className="p-6 cursor-pointer flex justify-between items-center"
        onClick={toggleExpand}
      >
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex flex-wrap mt-2">
            <span className="text-sm bg-light-gray px-3 py-1 rounded-full mr-2 mb-2">
              {location}
            </span>
            <span className="text-sm bg-light-gray px-3 py-1 rounded-full mb-2">
              {type}
            </span>
          </div>
        </div>
        <div>
          {isExpanded ? (
            <ChevronUp className="text-accent" size={24} />
          ) : (
            <ChevronDown className="text-accent" size={24} />
          )}
        </div>
      </div>
      
      {isExpanded && (
        <div className="px-6 pb-6">
          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-semibold mb-2">Job Description</h4>
            <p className="text-gray-700 mb-4">{description}</p>
            
            <h4 className="font-semibold mb-2">Requirements</h4>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            
            <h4 className="font-semibold mb-2">Benefits</h4>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            
            <button className="btn-primary mt-2">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default JobListing;