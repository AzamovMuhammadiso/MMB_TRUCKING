import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Truck,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Truck size={28} className="text-accent" />
              <span className="text-xl font-bold font-montserrat">
                MMB Trucking
              </span>
            </div>
            <p className="mb-4 text-gray-300">
              Driven to deliver. Powered by precision. Your trusted partner in
              transportation and logistics.
            </p>
            <div className="flex space-x-4">
              <a
                target="_blank"
                href="https://www.instagram.com/mmb.trucking/"
                aria-label="Facebook"
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/mmb.trucking/"
                aria-label="Instagram"
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/mmb.trucking/"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/quote"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Freight Transport</li>
              <li className="text-gray-300">Long Haul / Short Haul</li>
              <li className="text-gray-300">Dedicated Trucking</li>
              <li className="text-gray-300">Logistics Coordination</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Trucking Lane, Logistics City, TX 75001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <span className="text-gray-300">+1 (423) 670-6644</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:infommbtrucking@gmail.com"
                  className="text-gray-300 hover:underline"
                >
                  infommbtrucking@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} MMB Trucking LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
