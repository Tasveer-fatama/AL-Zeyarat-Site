import React from "react";
import {
  FaPhone,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <img src={logo} alt="Al Ziyarat Logo" className="mb-4 w-32" />
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">AL ZIYARAT</h2>
            <h3 className="text-lg text-white mb-4">HAJJ & UMRAH SERVICES LUCKNOW UTTAR PRADESH</h3>
            <p className="text-gray-300 mb-4">
              Providing spiritual journeys to Makkah & Madinah with premium Saudi Airlines flights.
            </p>
            
            <div className="flex space-x-4 mt-2 text-white">
           
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h5 className="text-lg font-bold text-yellow-400 mb-4">Our Services</h5>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-yellow-500"><a href="#">Hajj Packages</a></li>
              <li className="hover:text-yellow-500"><a href="#">Umrah Tours</a></li>
              <li className="hover:text-yellow-500"><a href="#">Ziyarat Tours</a></li>
              <li className="hover:text-yellow-500"><a href="#">Travel Services</a></li>
              <li className="hover:text-yellow-500"><a href="#">Visa Processing</a></li>
            </ul>
            
            <h5 className="text-lg font-bold text-yellow-400 mt-6 mb-2">Documents Required</h5>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Valid Passport</li>
              <li>• Pan Card</li>
              <li>• 2 Passport Photos</li>
            </ul>
          </div>

          {/* Terms & Conditions */}
          <div>
            <h5 className="text-lg font-bold text-yellow-400 mb-4">Terms & Conditions</h5>
            <p className="text-gray-300 text-sm mb-4">
              The above mentioned package is non-refundable & Non-Cancellable. Cancellation condition only applicable with Govt norms or any natural calamities.
            </p>
            
            <h5 className="text-lg font-bold text-yellow-400 mt-6 mb-2">Package Includes</h5>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Ticket & Visa</li>
              <li>• Quality Food</li>
              <li>• Hotel Accommodation</li>
              <li>• Transportation</li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h5 className="text-lg font-bold text-yellow-400 mb-4">Contact Info</h5>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <FaPhone className="mr-3 text-yellow-400" /> 
                <a href="tel:+91789786820" className="hover:text-yellow-400">+91-7897786820</a>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-3 text-yellow-400" /> 
                <span>Mon-Sun 9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-yellow-400" /> 
                <span>
                  UGF-3, Royal Grand Complex<br />
                  Near Khurram Nagar Chauraha<br />
                  Lucknow - 226022
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} AL ZIYARAT Hajj & Umrah Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;