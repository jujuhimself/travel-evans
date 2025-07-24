import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Plane } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accent text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="gradient-sky p-2 rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold">Travel + Evans</span>
            </div>
            <p className="text-white/90 mb-4 max-w-md">
              Premium travel services from Tanzania for all your journey needs. 
              We make visa applications and flight bookings simple and reliable.
            </p>
            <p className="text-white/80 font-medium italic">
              "Travel + Evans — proudly based in Tanzania"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/visa-booking" className="text-white/90 hover:text-white transition-smooth">
                  Book a Visa
                </Link>
              </li>
              <li>
                <Link to="/flight-booking" className="text-white/90 hover:text-white transition-smooth">
                  Book a Flight
                </Link>
              </li>
              <li>
                <Link to="/bookings" className="text-white/90 hover:text-white transition-smooth">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-white/90 hover:text-white transition-smooth">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-white/80" />
                <span className="text-white/90">+255 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white/80" />
                <span className="text-white/90">info@travelevans.co.tz</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-white/80" />
                <span className="text-white/90">Dar es Salaam, Tanzania</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-smooth cursor-pointer">
                <Facebook className="h-4 w-4" />
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-smooth cursor-pointer">
                <Twitter className="h-4 w-4" />
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-smooth cursor-pointer">
                <Instagram className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © 2024 Travel + Evans. All rights reserved. Proudly serving Tanzania and beyond.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;