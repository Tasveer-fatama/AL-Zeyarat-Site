import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaKaaba, FaMosque } from 'react-icons/fa';

const SimpleUmrahHero = () => {
  const videoRef = useRef(null);

  // Faster animation variants
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
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
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

      {/* Content - positioned at bottom with padding-bottom */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative z-10 h-full flex flex-col justify-end items-center text-center pb-16 px-4"
      >
        <motion.div variants={item} className="mb-4 flex gap-3">
          <FaKaaba className="text-yellow-400 text-2xl" />
          <FaMosque className="text-yellow-400 text-2xl" />
        </motion.div>

        <motion.h1 
          variants={item}
          className="text-3xl md:text-4xl font-bold text-white mb-3"
        >
          <span className="text-yellow-400">Al-Ziyarat</span> Hajj & Umrah
        </motion.h1>

        <motion.p 
          variants={item}
          className="text-gray-200 max-w-md mb-6"
        >
          Spiritual journeys to Makkah & Madinah with premium accommodations
        </motion.p>

        <motion.div variants={item} className="mb-8">
          <motion.button 
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-2 px-6 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SimpleUmrahHero;