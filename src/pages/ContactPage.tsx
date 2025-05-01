import { useEffect } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/UI/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us | MMB Trucking LLC";
  }, []);

  return (
    <div className="pt-24 md:pt-28 pb-16">
      <div
        className="bg-cover bg-center py-20 relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg')",
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-center max-w-3xl mx-auto mb-8"
          >
            Have questions or need more information? We're here to help.
          </motion.p>
        </div>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-light-gray rounded-lg p-6 md:p-8 mb-8"
            >
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin
                    size={24}
                    className="text-accent mr-4 mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-gray-700">
                      458 BELL ROAD
                      <br />
                      NASHVILLE, TN 32217
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone
                    size={24}
                    className="text-accent mr-4 mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-700">+1 (423) 670-6644</p>
                    <p className="text-sm text-gray-500">
                      Mon-Fri, 8am-6pm CST
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail
                    size={24}
                    className="text-accent mr-4 mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-700">infommbtrucking@gmail.com</p>
                    <p className="text-sm text-gray-500">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock
                    size={24}
                    className="text-accent mr-4 mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-medium mb-1">Hours of Operation</h4>
                    <p className="text-gray-700">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-light-gray rounded-lg overflow-hidden h-80"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.258583851472!2d-86.63754862430298!3d36.072389908387876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646dba33891a99%3A0x47938a5f479c449f!2s458%20Bell%20Rd%2C%20Antioch%2C%20TN%2037013%2C%20USA!5e1!3m2!1sen!2s!4v1746125670343!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MMB Trucking Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;