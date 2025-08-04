import React, { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaHome,
  FaKaaba,
  FaInfoCircle,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { icon: <FaHome className="text-yellow-400" />, label: "Home", href: "#home" },
    { icon: <FaKaaba className="text-yellow-400" />, label: "Umrah Packages", href: "#packages" },
    { icon: <FaInfoCircle className="text-yellow-400" />, label: "About Us", href: "#featured" },
    { icon: <FaEnvelope className="text-yellow-400" />, label: "Contact Us", href: "#discover" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL without reload
      window.history.pushState(null, null, href);
    }
  };

  return (
    <>
      <header className="w-full fixed top-0 z-50">
        {/* Top Bar */}
        <div className={`bg-black text-white transition-all duration-300 ${scrolled ? "py-1" : "py-2"}`}>
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between items-center">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="mb-2 md:mb-0 flex items-center hover:scale-105 transition-transform duration-200"
            >
              <img
                src="/logo.jpeg"
                alt="Al-Ziyarat Logo"
                className="w-28 h-20 object-contain"
                style={{ marginTop: "-12px", marginBottom: "-12px" }}
              />
            </a>

            {/* Contact Info */}
            <div className="flex gap-4 md:gap-6 text-sm md:text-base">
              <a
                href="tel:+917897786820"
                className="flex items-center gap-2 text-white hover:text-yellow-400"
              >
                <div className="p-2 bg-gray-800 rounded-full">
                  <FaPhoneAlt className="text-yellow-400" />
                </div>
                <span>+91-7897786820</span>
              </a>
              <a
                href="https://wa.me/917897786820"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-yellow-400"
              >
                <div className="p-2 bg-gray-800 rounded-full">
                  <FaWhatsapp className="text-yellow-400" />
                </div>
                <span>+91-7897786820</span>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className={`bg-white shadow-lg transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}>
          <div className="max-w-7xl mx-auto px-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center space-x-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:text-black text-sm font-medium rounded-lg transition-colors duration-200"
                >
                  {link.icon}
                  <span className="font-semibold">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between">
              <div className="w-8" />
              <h1 className="text-lg font-bold text-black text-center">AL-ZIYARAT</h1>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black text-xl p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-xl rounded-b-lg animate-fadeIn">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center px-6 py-3 text-gray-800 hover:bg-yellow-50 transition-colors duration-150"
                >
                  <div className="flex items-center gap-3">
                    {link.icon}
                    <span className="font-medium">{link.label}</span>
                  </div>
                </a>
              ))}
              <div className="p-4 bg-gray-50 text-center">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#discover')}
                  className="inline-block bg-black text-yellow-400 px-6 py-3 rounded-full text-sm font-medium shadow hover:bg-gray-900 transition"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Spacer for Fixed Header */}
      <div className="h-[calc(80px+56px)]"></div>
    </>
  );
};

export default Header;