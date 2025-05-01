import { useEffect } from 'react';
import { motion } from 'framer-motion';
import JobListing from '../components/Careers/JobListing';
import { Briefcase, ShieldCheck, DollarSign, Heart, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const jobListings = [
  {
    title: 'CDL Class A Driver',
    location: 'Dallas, TX',
    type: 'Full-time',
    description: 'We\'re looking for experienced CDL Class A Drivers to join our growing team. As a driver with MMB Trucking, you\'ll be responsible for safely transporting freight throughout the region while representing our company with professionalism and reliability.',
    requirements: [
      'Valid Class A CDL with clean driving record',
      'Minimum 2 years of verifiable driving experience',
      'Ability to pass DOT physical and drug screening',
      'Knowledge of DOT regulations and HOS rules',
      'Strong customer service and communication skills',
    ],
    benefits: [
      'Competitive pay with weekly settlements',
      'Comprehensive medical, dental, and vision insurance',
      'Paid time off and holiday pay',
      'Modern equipment with regular maintenance',
      '401(k) with company match',
      'Home weekly schedule options',
    ],
  },
  {
    title: 'Logistics Coordinator',
    location: 'Dallas, TX',
    type: 'Full-time',
    description: 'The Logistics Coordinator will be responsible for coordinating freight movement, managing driver assignments, and ensuring on-time pickups and deliveries. This role requires strong organizational skills and the ability to solve problems quickly in a fast-paced environment.',
    requirements: [
      'Bachelor\'s degree in logistics, supply chain, or related field (or equivalent experience)',
      'Minimum 1-2 years of experience in transportation logistics',
      'Strong communication and customer service skills',
      'Proficiency in logistics software and Microsoft Office Suite',
      'Ability to work well under pressure and manage multiple priorities',
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Comprehensive benefits package',
      'Paid time off and holidays',
      'Professional development opportunities',
      '401(k) with company match',
      'Modern office environment',
    ],
  },
  {
    title: 'Fleet Maintenance Technician',
    location: 'Dallas, TX',
    type: 'Full-time',
    description: 'We are seeking an experienced Fleet Maintenance Technician to perform preventive maintenance and repairs on our trucks and trailers. The ideal candidate will have strong diagnostic skills and the ability to efficiently complete repairs to keep our fleet running safely and reliably.',
    requirements: [
      'Associate degree in diesel technology or equivalent experience',
      'Minimum 3 years of experience in diesel truck maintenance and repair',
      'Valid driver\'s license and CDL preferred',
      'Ability to perform inspections according to DOT regulations',
      'Experience with electronic diagnostic tools and software',
      'Available for rotating on-call shifts',
    ],
    benefits: [
      'Competitive hourly rate with overtime opportunities',
      'Comprehensive benefits package',
      'Paid training and certifications',
      'Tool allowance',
      '401(k) with company match',
      'Stable work environment with established company',
    ],
  },
];

const CareersPage = () => {
  useEffect(() => {
    document.title = 'Careers | MMB Trucking LLC';
  }, []);

  const benefitsList = [
    {
      icon: <DollarSign className="text-accent" size={28} />,
      title: 'Competitive Compensation',
      description: 'Above industry-average pay with performance bonuses and regular raises.',
    },
    {
      icon: <Heart className="text-accent" size={28} />,
      title: 'Health Benefits',
      description: 'Comprehensive medical, dental, and vision insurance for you and your family.',
    },
    {
      icon: <Award className="text-accent" size={28} />,
      title: 'Career Growth',
      description: 'Professional development, advancement opportunities, and skills training.',
    },
    {
      icon: <Clock className="text-accent" size={28} />,
      title: 'Work-Life Balance',
      description: 'Flexible scheduling options, paid time off, and family-friendly policies.',
    },
    {
      icon: <ShieldCheck className="text-accent" size={28} />,
      title: 'Safety Culture',
      description: 'A strong commitment to safety, with modern equipment and regular training.',
    },
    {
      icon: <Briefcase className="text-accent" size={28} />,
      title: 'Stability',
      description: 'Join a growing company with a proven record of success and stability.',
    },
  ];

  return (
    <div className="pt-24 md:pt-28 pb-16">
      <div 
        className="bg-cover bg-center py-20 relative"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg')" 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container-custom relative z-10 text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6"
          >
            Drive Your Career Forward
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-center max-w-3xl mx-auto mb-8"
          >
            Join our team of professionals and grow with a company that values safety, 
            reliability, and excellence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center"
          >
            <a 
              href="#openings" 
              className="btn-primary text-white text-lg"
            >
              View Current Openings
            </a>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <h2 className="section-title mb-12">Why Work With Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsList.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" id="openings">
        <div className="container-custom">
          <h2 className="section-title mb-12">Current Openings</h2>
          
          {jobListings.map((job, index) => (
            <JobListing
              key={index}
              title={job.title}
              location={job.location}
              type={job.type}
              description={job.description}
              requirements={job.requirements}
              benefits={job.benefits}
            />
          ))}
          
          <div className="text-center mt-12">
            <p className="text-lg mb-4">Don't see a position that matches your skills?</p>
            <p className="mb-6">We're always looking for talented individuals to join our team.</p>
            <a href="/contact" className="btn-primary text-white">
              Submit General Application
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;