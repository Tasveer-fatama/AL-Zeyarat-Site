// components/FloatingContact.jsx
import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt, FaTimes, FaCommentDots } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingContact = () => {
  const [expanded, setExpanded] = useState(false);
  const [pulse, setPulse] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setExpanded(!expanded);
    setPulse(false);
  };

  const closeMenu = () => {
    setExpanded(false);
    setTimeout(() => setPulse(true), 1000);
  };

  if (!visible) return null;

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-yellow-300"
          >
            <div className="flex justify-between items-center p-3 bg-yellow-400">
              <h3 className="text-black font-medium">Contact Us</h3>
              <button 
                onClick={closeMenu}
                className="text-black hover:text-gray-800"
              >
                <FaTimes />
              </button>
            </div>
            <div className="p-4 space-y-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition border border-yellow-200"
              >
                <div className="bg-black p-2 rounded-full">
                  <FaWhatsapp className="text-yellow-400" />
                </div>
                <span className="text-gray-800">WhatsApp</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 px-4 py-2 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition border border-yellow-200"
              >
                <div className="bg-black p-2 rounded-full">
                  <FaPhoneAlt className="text-yellow-400" />
                </div>
                <span className="text-gray-800">Call Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        className={`relative p-5 rounded-full shadow-xl ${expanded ? 'bg-yellow-500' : 'bg-black'} text-yellow-400`}
      >
        <AnimatePresence>
          {pulse && !expanded && (
            <motion.span
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="absolute inset-0 border-2 border-yellow-400 rounded-full animate-ping"
            />
          )}
        </AnimatePresence>
        <FaCommentDots size={24} />
      </motion.button>
    </div>
  );
};

export default FloatingContact;