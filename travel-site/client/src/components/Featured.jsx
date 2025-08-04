import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaPassport, FaHotel, FaPlane, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

const AboutSection = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const features = [
    {
      icon: <FaCheck className="text-xl" />,
      title: "Certified Packages",
      description: "Government-approved Hajj & Umrah packages with expert guidance."
    },
    {
      icon: <FaHotel className="text-xl" />,
      title: "Premium Stays",
      description: "Hotels within walking distance of Haram in Makkah & Madinah."
    },
    {
      icon: <FaPlane className="text-xl" />,
      title: "Seamless Travel",
      description: "Flights, visas, transport - we handle everything."
    },
    {
      icon: <FaPassport className="text-xl" />,
      title: "Document Help",
      description: "Assistance with passports, photos, and required documents."
    }
  ];

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <motion.section 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Header with animated underline */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-yellow-400">AL ZIYARAT</span> Hajj & Umrah  Services<br />
            <span className="text-xl md:text-2xl text-yellow-400">Lucknow, Uttar Pradesh</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-yellow-400 mx-auto mb-8"
          />
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeUp}
          >
            Your trusted partner for sacred journeys to Makkah and Madinah with Saudi Airlines flights
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeLeft}
                custom={index}
                whileHover={{ y: -5 }}
                className="flex items-start bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all"
              >
                <motion.div 
                  className="flex-shrink-0 bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mr-6 text-black"
                  whileHover={{ rotate: 15 }}
                >
                  {feature.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated Image */}
          <motion.div 
            variants={fadeRight}
            className="relative rounded-xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/kaba2.jpg"
              alt="Al Ziyarat Services"
              className="w-full h-auto"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-white text-2xl font-bold mb-2">Sacred Journey Experience</h3>
              <p className="text-yellow-300">With our expert guidance and support</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Requirements Section */}
        <motion.div 
          variants={scaleUp}
          className="mt-20 bg-gray-900 border border-yellow-400 rounded-xl p-8 shadow-lg"
          whileHover={{ y: -5 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-6 flex items-center"
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring" }}
          >
            <FaPassport className="mr-3 text-yellow-400" />
            DOCUMENTS REQUIRED
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeLeft}
            >
              <h4 className="font-bold text-yellow-400 mb-3">ESSENTIAL DOCUMENTS</h4>
              <ul className="space-y-3">
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <FaCheck className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Valid Passport (6+ months validity)</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <FaCheck className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">PAN Card copy</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <FaCheck className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">2 passport photos (white background)</span>
                </motion.li>
              </ul>
            </motion.div>
            
            <motion.div
              variants={fadeRight}
            >
              <h4 className="font-bold text-yellow-400 mb-3">ADDITIONAL REQUIREMENTS</h4>
              <ul className="space-y-3">
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <FaCheck className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Confirmed flight tickets</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <FaCheck className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Travel insurance</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          variants={fadeUp}
          className="mt-20 bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 border border-gray-800 shadow-xl"
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">CONTACT US</h3>
              <div className="space-y-3">
                <p className="flex items-center text-gray-300">
                  <FaPhoneAlt className="mr-3 text-yellow-400" />
                  +91-7897786820
                </p>
                <p className="flex items-center text-gray-300">
                  <FaEnvelope className="mr-3 text-yellow-400" />
                  alziyarat0786@gmail.com
                </p>
                <p className="flex items-start text-gray-300">
                  <FaMapMarkerAlt className="mr-3 mt-1 text-yellow-400 flex-shrink-0" />
                  UGF-3, Royal Grand Complex, Near Khurram Nagar Chauraha, Lucknow - 226022
                </p>
                <p className="flex items-center text-gray-300">
                  <FaGlobe className="mr-3 text-yellow-400" />
                  <a href="https://alziyarat.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                    https://alziyarat.com
                  </a>
                </p>
              </div>
            </motion.div>
            
            <motion.button 
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-8 rounded-full whitespace-nowrap shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(234, 179, 8, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              GET YOUR PACKAGE NOW
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutSection;