import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Truck, Weight } from 'lucide-react';

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  pickupLocation: string;
  deliveryLocation: string;
  pickupDate: string;
  weight: string;
  dimensions: string;
  cargoType: string;
  additionalInfo: string;
}

const QuoteForm = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    pickupLocation: '',
    deliveryLocation: '',
    pickupDate: '',
    weight: '',
    dimensions: '',
    cargoType: '',
    additionalInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        pickupLocation: '',
        deliveryLocation: '',
        pickupDate: '',
        weight: '',
        dimensions: '',
        cargoType: '',
        additionalInfo: '',
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded mb-6"
        >
          <h3 className="font-bold text-lg mb-2">Quote Request Submitted!</h3>
          <p>Thank you for requesting a quote. Our team will review your information and get back to you within 1 business day.</p>
        </motion.div>
      ) : null}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Shipment Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <MapPin className="text-accent mt-3 mr-2" size={18} />
              <div className="flex-1">
                <label htmlFor="pickupLocation" className="block text-gray-700 font-medium mb-2">Pickup Location *</label>
                <input
                  type="text"
                  id="pickupLocation"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="City, State, Zip"
                />
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="text-accent mt-3 mr-2" size={18} />
              <div className="flex-1">
                <label htmlFor="deliveryLocation" className="block text-gray-700 font-medium mb-2">Delivery Location *</label>
                <input
                  type="text"
                  id="deliveryLocation"
                  name="deliveryLocation"
                  value={formData.deliveryLocation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="City, State, Zip"
                />
              </div>
            </div>
            <div className="flex items-start">
              <Calendar className="text-accent mt-3 mr-2" size={18} />
              <div className="flex-1">
                <label htmlFor="pickupDate" className="block text-gray-700 font-medium mb-2">Requested Pickup Date *</label>
                <input
                  type="date"
                  id="pickupDate"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
            <div className="flex items-start">
              <Truck className="text-accent mt-3 mr-2" size={18} />
              <div className="flex-1">
                <label htmlFor="cargoType" className="block text-gray-700 font-medium mb-2">Cargo Type *</label>
                <select
                  id="cargoType"
                  name="cargoType"
                  value={formData.cargoType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select cargo type</option>
                  <option value="General">General Freight</option>
                  <option value="Hazardous">Hazardous Materials</option>
                  <option value="Refrigerated">Refrigerated</option>
                  <option value="Oversized">Oversized Load</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex items-start">
              <Weight className="text-accent mt-3 mr-2" size={18} />
              <div className="flex-1">
                <label htmlFor="weight" className="block text-gray-700 font-medium mb-2">Approximate Weight</label>
                <input
                  type="text"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Weight in lbs"
                />
              </div>
            </div>
            <div>
              <label htmlFor="dimensions" className="block text-gray-700 font-medium mb-2">Dimensions (optional)</label>
              <input
                type="text"
                id="dimensions"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="L x W x H in feet"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <label htmlFor="additionalInfo" className="block text-gray-700 font-medium mb-2">Additional Information</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Any special requirements or instructions?"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn-primary w-full md:w-auto md:px-8 py-3 text-lg ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Request Quote'}
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;