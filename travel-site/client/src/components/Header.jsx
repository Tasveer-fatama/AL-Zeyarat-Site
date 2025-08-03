// components/Header.jsx
import React, { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaHome,
  FaMosque,
  FaHotel,
  FaInfoCircle,
  FaEnvelope,
  FaBookOpen,
  FaKaaba,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { icon: <FaHome className="text-yellow-400" />, label: "Home", href: "/" },
   
    { 
      icon: <FaKaaba className="text-yellow-400" />, 
      label: "Umrah Packages", 
      href: "/umrah-packages",
     
    },
   
   
    { 
      icon: <FaInfoCircle className="text-yellow-400" />, 
      label: "About Us", 
      href: "/about-us" 
    },
    { 
      icon: <FaEnvelope className="text-yellow-400" />, 
      label: "Contact Us", 
      href: "/contact-us" 
    },
  
  ];

  return (
    <>
      <header className="w-full fixed top-0 z-50">
        {/* Top Bar */}
        <div className={`bg-black text-white transition-all duration-300 ${scrolled ? "py-1" : "py-2"}`}>
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between items-center">
            {/* Logo */}
            <Link to="/" className="mb-2 md:mb-0 transform hover:scale-105 transition-transform duration-200 flex items-center justify-center">
              <img
                src="/logo.jpeg"
                alt="Classic Tour & Travels Logo"
                className="w-28 h-20 object-contain"
                style={{ marginTop: "-12px", marginBottom: "-12px" }}
              />
            </Link>

            {/* Contact Numbers */}
            <div className="flex gap-4 md:gap-6 text-sm md:text-base">
              <a
                href="tel:+919920974825"
                className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors duration-200"
              >
                <div className="p-2 bg-gray-800 rounded-full">
                  <FaPhoneAlt className="text-sm text-yellow-400" />
                </div>
                <span>+91 9920974825</span>
              </a>
              <a
                href="https://wa.me/919920975825"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors duration-200"
              >
                <div className="p-2 bg-gray-800 rounded-full">
                  <FaWhatsapp className="text-sm text-yellow-400" />
                </div>
                <span>+91 9920975825</span>
              </a>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className={`bg-white shadow-lg transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}>
          <div className="max-w-7xl mx-auto px-4">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center space-x-1">
              {navLinks.map((link, index) => (
                <div key={index} className="relative group">
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:text-black font-medium text-sm rounded-lg transition-colors duration-200 group-hover:bg-yellow-50"
                    onMouseEnter={() => link.submenu && setActiveSubmenu(index)}
                  >
                    {link.icon}
                    <span className="font-semibold">{link.label}</span>
                    {link.submenu && <FaChevronDown className="text-xs ml-1 opacity-70" />}
                  </Link>

                  {link.submenu && activeSubmenu === index && (
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-56 bg-white rounded-lg shadow-xl z-50 border border-gray-200"
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      {link.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-yellow-50 hover:text-black border-b border-gray-100 last:border-0 transition-colors duration-150"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Header */}
            <div className="md:hidden flex items-center justify-between">
              <div className="w-8"></div>
              <div className="text-center">
                <h1 className="text-lg font-bold text-black">CLASSIC TRAVELS</h1>
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black text-xl p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-xl rounded-b-lg overflow-hidden animate-fadeIn">
              {navLinks.map((link, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0">
                  <Link
                    to={link.href}
                    className="flex items-center justify-between px-6 py-3 text-gray-800 hover:bg-yellow-50 transition-colors duration-150"
                    onClick={(e) => {
                      if (link.submenu) {
                        e.preventDefault();
                        setActiveSubmenu(activeSubmenu === index ? null : index);
                      } else {
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {link.icon}
                      <span className="font-medium">{link.label}</span>
                    </div>
                    {link.submenu && (
                      <FaChevronDown
                        className={`text-xs transition-transform duration-200 ${
                          activeSubmenu === index ? "transform rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {link.submenu && activeSubmenu === index && (
                    <div className="bg-gray-50 pl-14 pr-4">
                      {link.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-2 text-sm text-gray-600 hover:text-black hover:bg-yellow-50 border-t border-gray-200 first:border-0 transition-colors duration-150"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="p-4 bg-gray-50 flex justify-center">
                <Link 
                  to="/contact-us" 
                  className="w-full max-w-xs bg-black text-yellow-400 px-6 py-3 rounded-full text-sm font-medium shadow-md hover:bg-gray-900 hover:shadow-lg transition-all duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Spacer to prevent content hiding behind fixed header */}
      <div className="h-[calc(80px+56px)]"></div>
    </>
  );
};

export default Header;