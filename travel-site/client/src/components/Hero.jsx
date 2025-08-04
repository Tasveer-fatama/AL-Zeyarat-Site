import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaKaaba, FaMosque, FaWhatsapp } from 'react-icons/fa';

const SimpleUmrahHero = () => {
  const videoRef = useRef(null);
  const phoneNumber = "917897786820"; // Your WhatsApp number without '+'

  const handleBookNow = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative z-10 h-full flex flex-col justify-end items-center text-center pb-12 md:pb-16 lg:pb-20 px-4"
      >
        <motion.div variants={item} className="mb-4 flex gap-3">
          <FaKaaba className="text-yellow-400 text-2xl md:text-3xl" />
          <FaMosque className="text-yellow-400 text-2xl md:text-3xl" />
        </motion.div>

        <motion.h1 
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4"
        >
          <span className="text-yellow-400">Al-Ziyarat</span> Hajj & Umrah 
        </motion.h1>

        <motion.p 
          variants={item}
          className="text-gray-200 max-w-md md:max-w-lg text-sm sm:text-base md:text-lg mb-2"
        >
          Lucknow, Uttar Pradesh, India
        </motion.p>

        <motion.p 
          variants={item}
          className="text-gray-200 max-w-md md:max-w-lg text-sm sm:text-base md:text-lg mb-6 md:mb-8"
        >
          Spiritual journeys to Makkah & Madinah with premium accommodations and Saudi Airlines flights
        </motion.p>

        <motion.div variants={item} className="mb-6 md:mb-8">
          <motion.button 
            onClick={handleBookNow}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-2 px-6 rounded-full flex items-center gap-2 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="text-lg" />
            Book Now
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SimpleUmrahHero;