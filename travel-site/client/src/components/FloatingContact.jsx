import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [pulse, setPulse] = useState(true);
  const phoneNumber = "917897786820"; // WhatsApp number without '+'

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <motion.a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative block"
      >
        {/* 3D Effect Base */}
        <motion.div
          animate={{
            rotate: isHovered ? [0, 5, -5, 0] : 0,
            transition: { duration: 0.5 }
          }}
          className="relative"
        >
          {/* Main Button with 3D shadow effect */}
          <div className="relative">
            {/* Floating shadow */}
            <motion.div
              animate={{
                scale: isHovered ? 1.2 : 1,
                opacity: isHovered ? 0.8 : 0.6
              }}
              className="absolute inset-0 bg-yellow-600 rounded-full blur-md"
              style={{ zIndex: -1 }}
            />
            
            {/* Main button - Yellow gradient with dark icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:shadow-xl border-2 border-yellow-300">
              <FaWhatsapp className="text-gray-900 text-3xl" />
            </div>
          </div>

          {/* Animated rings - Yellow theme */}
          <AnimatePresence>
            {pulse && (
              <>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1.3, opacity: 0.4 }}
                  exit={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 border-4 border-yellow-300 rounded-full"
                  style={{ top: -4, left: -4, right: -4, bottom: -4 }}
                />
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1.6, opacity: 0.2 }}
                  exit={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="absolute inset-0 border-4 border-yellow-200 rounded-full"
                  style={{ top: -8, left: -8, right: -8, bottom: -8 }}
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Tooltip - Yellow themed */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-gray-900 font-medium text-sm px-3 py-1 rounded whitespace-nowrap shadow-md"
          >
            Chat with us!
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-yellow-500 rotate-45"></div>
          </motion.div>
        )}
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;