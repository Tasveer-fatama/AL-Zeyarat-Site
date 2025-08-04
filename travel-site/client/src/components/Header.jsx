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
      window.history.pushState(null, null, href);
    }
  };

  return (
    <>
      <header className="w-full fixed top-0 z-50 bg-black">
        {/* Top Section */}
        <div className={`max-w-7xl mx-auto px-4 flex items-center justify-between ${scrolled ? "py-1" : "py-2"}`}>
          {/* Left Logo */}
          <div className="w-12 h-12 overflow-hidden rounded-full shadow-lg">
            <img
              src="/logo.jpeg"
              alt="Al-Ziyarat Logo"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Center Content */}
          <div className="flex-1 flex flex-col items-center px-2">
            <h2 className="text-yellow-400 text-sm md:text-base font-bold tracking-wide whitespace-nowrap">
              بِسْمِ ٱللّٰهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
            </h2>
            <p className="text-white text-[9px] md:text-[11px] tracking-tight whitespace-nowrap">
              Premium Quality Umrah services provider in Lucknow
            </p>
            <div className="flex items-center gap-1 mt-1">
              <a
                href="tel:+917897786820"
                className="text-white text-[10px] md:text-[12px] hover:text-yellow-400 flex items-center gap-1"
              >
                <FaPhoneAlt className="text-yellow-400 text-xs" />
                +91-7897786820
              </a>
              <span className="text-white text-[10px] md:text-[12px]">|</span>
              <a
                href="https://wa.me/917897786820"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[10px] md:text-[12px] hover:text-yellow-400 flex items-center gap-1"
              >
                <FaWhatsapp className="text-green-500 text-xs" />
                +91-7897786820
              </a>
            </div>
          </div>

          {/* Right Logo */}
          <div className="w-12 h-12 overflow-hidden rounded-full shadow-lg">
            <img
              src="/logo2.jpeg"
              alt="Right Icon"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className={`bg-white shadow-md ${scrolled ? "py-1" : "py-1"}`}>
          <div className="max-w-7xl mx-auto px-4">
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center justify-center space-x-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center gap-1 px-2 py-1 text-gray-800 hover:text-black text-xs font-medium rounded transition-colors duration-200"
                >
                  {link.icon}
                  <span className="font-semibold">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between py-1">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black text-sm p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
              <h1 className="text-xs font-bold text-black text-center mx-2">
                AL-ZIYARAT HAJJ & UMRAH SERVICES
              </h1>
              <div className="w-6" />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-xl rounded-b-lg">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center px-3 py-1.5 text-gray-800 hover:bg-yellow-50 transition-colors duration-150"
                >
                  <div className="flex items-center gap-2">
                    {link.icon}
                    <span className="text-sm font-medium">{link.label}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Header Spacer */}
      <div className="h-[90px] md:h-[85px]" />
    </>
  );
};

export default Header;
