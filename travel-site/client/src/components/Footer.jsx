import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "/logo.jpeg";
import footer1 from "/kaba2.jpg";
import footer2 from "/kaba2.jpg";
import footer3 from "/kaba2.jpg";
import footer4 from "/kaba2.jpg";
import footer5 from "/kaba2.jpg";
import footer6 from "/kaba2.jpg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <img src={logo} alt="Al Zeyarat Logo" className="mb-4 w-32" />
            <p className="text-gray-300">
              Have questions or need assistance? Our support team is here to help you plan a smooth and spiritual journey with Al Zeyarat.
            </p>
            <h5 className="text-lg font-bold text-yellow-400 mt-6 mb-2">
              Follow us on:
            </h5>
            <div className="flex space-x-4 mt-2 text-white">
              <a href="#" className="hover:text-yellow-400 transition duration-300"><FaFacebookSquare size={24} /></a>
              <a href="#" className="hover:text-yellow-400 transition duration-300"><FaTwitterSquare size={24} /></a>
              <a href="#" className="hover:text-yellow-400 transition duration-300"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-yellow-400 transition duration-300"><FaYoutube size={24} /></a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h5 className="text-lg font-bold text-yellow-400 mb-4">Services</h5>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-yellow-500"><a href="#">Hajj Packages</a></li>
              <li className="hover:text-yellow-500"><a href="#">Umrah Services</a></li>
              <li className="hover:text-yellow-500"><a href="#">Visa Assistance</a></li>
              <li className="hover:text-yellow-500"><a href="#">Hotel Booking</a></li>
              <li className="hover:text-yellow-500"><a href="#">Flight Booking</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h5 className="text-lg font-bold text-yellow-400 mb-4">Contact Info</h5>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center"><FaPhone className="mr-3 text-yellow-400" /> <span>+91 9123456789</span></li>
              <li className="flex items-center"><FaClock className="mr-3 text-yellow-400" /> <span>Mon-Sat 9:00-19:00</span></li>
              <li className="flex items-center"><FaMapMarkerAlt className="mr-3 text-yellow-400" /> <span>Lucknow, Uttar Pradesh</span></li>
            </ul>
          </div>

          {/* Gallery Section */}
          <div>
            <h5 className="text-lg font-bold text-yellow-400 mb-4">Gallery</h5>
            <div className="grid grid-cols-3 gap-2">
              {[footer1, footer2, footer3, footer4, footer5, footer6].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-20 object-cover rounded-sm transform hover:scale-105 transition duration-300"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Al Zeyarat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
