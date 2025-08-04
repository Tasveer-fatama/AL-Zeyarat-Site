import React from "react";
import {
  FaBusAlt,
  FaHotel,
  FaHandsHelping,
  FaUserFriends,
  FaCalendarCheck,
  FaPrayingHands,
  FaQuran,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    title: "Luxury Ziyarat Transport",
    icon: <FaBusAlt className="w-5 h-5" />,
    description: "Premium air-conditioned coaches with experienced drivers.",
  },
  {
    title: "Premium Hotels Near Haram",
    icon: <FaHotel className="w-5 h-5" />,
    description: "Exclusive accommodations near Masjid al-Haram and Nabawi.",
  },
  {
    title: "Scholarly Guided Tours",
    icon: <FaQuran className="w-5 h-5" />,
    description: "Ulama-led programs with spiritual insights.",
  },
  {
    title: "Family Specialists",
    icon: <FaUserFriends className="w-5 h-5" />,
    description: "Custom packages for families and special needs.",
  },
  {
    title: "24/7 Mutawwif Help",
    icon: <FaHandsHelping className="w-5 h-5" />,
    description: "Dedicated guides available round-the-clock.",
  },
  {
    title: "Flexible Planning",
    icon: <FaCalendarCheck className="w-5 h-5" />,
    description: "Tailored schedules for your spiritual journey.",
  },
  {
    title: "Ritual Guidance",
    icon: <FaPrayingHands className="w-5 h-5" />,
    description: "Step-by-step instruction from qualified scholars.",
  },
  {
    title: "Exclusive Itineraries",
    icon: <FaMapMarkedAlt className="w-5 h-5" />,
    description: "Curated visits to historical Islamic sites.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const ZeyaratFeatures = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-yellow-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-500 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-yellow-500 bg-yellow-500/10 rounded-full mb-3">
            AL-ZIYARAT EXCELLENCE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Elevate Your <span className="text-yellow-500">Spiritual Journey</span>
          </h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Our 25 years of expertise ensures every ritual is performed with ease and every moment is filled with barakah.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-yellow-500/30 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-10 h-10 mb-4 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ZeyaratFeatures;
