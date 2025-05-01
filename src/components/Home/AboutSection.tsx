import { motion } from "framer-motion";
import { ShieldCheck, Package, TrendingUp } from "lucide-react";
import Fleet from "../../assets/fleet.jpg";

const AboutSection = () => {
  return (
    <section className="section bg-light-gray" id="about">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About MMB Trucking</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                Founded with a commitment to excellence, MMB Trucking has
                established itself as a leader in the transportation industry.
                We combine cutting-edge technology with experienced
                professionals to ensure your freight arrives safely and on time.
              </p>
              <p className="text-lg mb-8">
                Our fleet of modern trucks and team of certified drivers allow
                us to provide reliable service across the nation. We take pride
                in our safety record and customer satisfaction.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                  <ShieldCheck size={36} className="text-accent mb-3" />
                  <h3 className="font-semibold text-lg mb-1">Safety First</h3>
                  <p className="text-sm">Top safety ratings and protocols</p>
                </div>

                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                  <Package size={36} className="text-accent mb-3" />
                  <h3 className="font-semibold text-lg mb-1">Reliability</h3>
                  <p className="text-sm">On-time delivery performance</p>
                </div>

                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                  <TrendingUp size={36} className="text-accent mb-3" />
                  <h3 className="font-semibold text-lg mb-1">Experience</h3>
                  <p className="text-sm">Years of industry expertise</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={Fleet}
                alt="MMB Trucking fleet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
