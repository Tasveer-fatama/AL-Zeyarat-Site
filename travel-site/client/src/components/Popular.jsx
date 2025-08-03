import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlane, FaCalendarAlt, FaHotel, FaRupeeSign, FaPhoneAlt } from "react-icons/fa";

const UmrahPackages = () => {
  const [activeTab, setActiveTab] = useState("deluxe");

 const packages = {
  deluxe: [
    {
      id: 1,
      departure: "04-Aug-25",
      arrival: "20-Aug-25",
      days: "17 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"    },
    {
      id: 2,
      departure: "10-Aug-25",
      arrival: "25-Aug-25",
      days: "16 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"    },
    {
      id: 3,
      departure: "13-Aug-25",
      arrival: "30-Aug-25",
      days: "17 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"    },
    {
      id: 4,
      departure: "19-Aug-25",
      arrival: "03-Sep-25",
      days: "17 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"    },
    {
      id: 5,
      departure: "25-Aug-25",
      arrival: "10-Sep-25",
      days: "17 Days",
      price: "₹1,15,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"    },
    {
      id: 6,
      departure: "29-Aug-25",
      arrival: "14-Sep-25",
      days: "17 Days",
      price: "₹1,15,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"    },
    {
      id: 7,
      departure: "04-Sep-25",
      arrival: "20-Sep-25",
      days: "17 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
      image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"
    },
    {
      id: 8,
      departure: "08-Sep-25",
      arrival: "24-Sep-25",
      days: "17 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"    },
    {
      id: 9,
      departure: "14-Sep-25",
      arrival: "29-Sep-25",
      days: "16 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"    },
    {
      id: 10,
      departure: "18-Sep-25",
      arrival: "04-Oct-25",
      days: "17 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"    },
    {
      id: 11,
      departure: "22-Sep-25",
      arrival: "08-Oct-25",
      days: "17 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"    },
    {
      id: 12,
      departure: "28-Sep-25",
      arrival: "13-Oct-25",
      days: "17 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"    },
    {
      id: 13,
      departure: "03-Oct-25",
      arrival: "19-Oct-25",
      days: "17 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"    },
    {
      id: 14,
      departure: "09-Oct-25",
      arrival: "25-Oct-25",
      days: "17 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"    },
    {
      id: 15,
      departure: "13-Oct-25",
      arrival: "29-Oct-25",
      days: "17 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"    },
    {
      id: 16,
      departure: "19-Oct-25",
      arrival: "03-Nov-25",
      days: "16 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"    },
    {
      id: 17,
      departure: "23-Oct-25",
      arrival: "08-Nov-25",
      days: "17 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
      image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"
    },
    {
      id: 18,
      departure: "27-Oct-25",
      arrival: "12-Nov-25",
      days: "17 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
     image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"
    },
    {
      id: 19,
      departure: "04-Nov-25",
      arrival: "17-Nov-25",
      days: "14 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
     image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"
    },
    {
      id: 20,
      departure: "06-Nov-25",
      arrival: "21-Nov-25",
      days: "16 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
      image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"
    },
    {
      id: 21,
      departure: "13-Nov-25",
      arrival: "29-Nov-25",
      days: "17 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
     image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"
    },
    {
      id: 22,
      departure: "17-Nov-25",
      arrival: "03-Dec-25",
      days: "17 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
     image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"
    },
    {
      id: 23,
      departure: "23-Nov-25",
      arrival: "08-Dec-25",
      days: "16 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
      image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"
    },
    {
      id: 24,
      departure: "01-Dec-25",
      arrival: "16-Dec-25",
      days: "16 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
      image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"
    },
    {
      id: 25,
      departure: "07-Dec-25",
      arrival: "22-Dec-25",
      days: "16 Days",
      price: "₹1,10,000",
      status: "Available",
      flight: "Direct Flight",
      hotel: "5-Star (550m from Haram)",
     image: "https://t3.ftcdn.net/jpg/09/30/47/86/360_F_930478659_ANNV5161gWZfYybGkc7FJFJ5O3VdP1Tt.jpg"
    }
  ],
 rabi: [
  {
    id: 3,
    departure: "24-Aug-25",
    arrival: "08-Sep-25",
    days: "16 Days",
    price: "₹1,15,000",
    status: "Available",
    flight: "Direct Flight",
    hotel: "5-Star (1200m from Haram)",
    image: "https://c4.wallpaperflare.com/wallpaper/858/910/402/mosques-great-mosque-of-mecca-arabia-kaaba-wallpaper-preview.jpg"
  },
  {
    id: 4,
    departure: "29-Aug-25",
    arrival: "13-Sep-25",
    days: "16 Days",
    price: "₹1,15,000",
    status: "Available",
    flight: "Direct Flight",
    hotel: "5-Star (1200m from Haram)",
    image: "https://c4.wallpaperflare.com/wallpaper/858/910/402/mosques-great-mosque-of-mecca-arabia-kaaba-wallpaper-preview.jpg"
  },
  {
    id: 5,
    departure: "01-Sep-25",
    arrival: "17-Sep-25",
    days: "17 Days",
    price: "₹1,15,000",
    status: "Sold",
    flight: "Direct Flight",
    hotel: "5-Star (1200m from Haram)",
    image: "https://c4.wallpaperflare.com/wallpaper/858/910/402/mosques-great-mosque-of-mecca-arabia-kaaba-wallpaper-preview.jpg"
  },
  {
    id: 6,
    departure: "07-Sep-25",
    arrival: "22-Sep-25",
    days: "16 Days",
    price: "₹1,10,000",
    status: "Available",
    flight: "Direct Flight",
    hotel: "5-Star (1200m from Haram)",
    image: "https://c4.wallpaperflare.com/wallpaper/858/910/402/mosques-great-mosque-of-mecca-arabia-kaaba-wallpaper-preview.jpg"
  },
  {
    id: 7,
    departure: "15-Sep-25",
    arrival: "01-Oct-25",
    days: "17 Days",
    price: "₹1,10,000",
    status: "Available",
    flight: "Direct Flight",
    hotel: "5-Star (1200m from Haram)",
    image: "https://c4.wallpaperflare.com/wallpaper/858/910/402/mosques-great-mosque-of-mecca-arabia-kaaba-wallpaper-preview.jpg"
  },
  {
    id: 8,
    departure: "23-Sep-25",
    arrival: "08-Oct-25",
    days: "16 Days",
    price: "₹1,10,000",
    status: "Available",
    flight: "Direct Flight",
    hotel: "5-Star (1200m from Haram)",
    image: "https://c4.wallpaperflare.com/wallpaper/858/910/402/mosques-great-mosque-of-mecca-arabia-kaaba-wallpaper-preview.jpg"
  },
  {
    id: 9,
    departure: "30-Sep-25",
    arrival: "15-Oct-25",
    days: "16 Days",
    price: "₹1,10,000",
    status: "Available",
    flight: "Direct Flight",
    hotel: "5-Star (1200m from Haram)",
    image: "https://c4.wallpaperflare.com/wallpaper/858/910/402/mosques-great-mosque-of-mecca-arabia-kaaba-wallpaper-preview.jpg"
  },
  {
    id: 10,
    departure: "06-Oct-25",
    arrival: "22-Oct-25",
    days: "17 Days",
    price: "₹1,10,000",
    status: "Available",
    flight: "Direct Flight",
    hotel: "5-Star (1200m from Haram)",
    image: "https://c4.wallpaperflare.com/wallpaper/858/910/402/mosques-great-mosque-of-mecca-arabia-kaaba-wallpaper-preview.jpg"
  },
  {
    id: 11,
    departure: "13-Oct-25",
    arrival: "29-Oct-25",
    days: "17 Days",
    price: "₹1,10,000",
    status: "Available",
    flight: "Direct Flight",
    hotel: "5-Star (1200m from Haram)",
    image: "https://c4.wallpaperflare.com/wallpaper/858/910/402/mosques-great-mosque-of-mecca-arabia-kaaba-wallpaper-preview.jpg"
  },
  {
    id: 12,
    departure: "20-Oct-25",
    arrival: "05-Nov-25",
    days: "17 Days",
    price: "₹1,10,000",
    status: "Available",
    flight: "Direct Flight",
    hotel: "5-Star (1200m from Haram)",
    image: "https://c4.wallpaperflare.com/wallpaper/858/910/402/mosques-great-mosque-of-mecca-arabia-kaaba-wallpaper-preview.jpg"
  },
  {
    id: 13,
    departure: "27-Oct-25",
    arrival: "12-Nov-25",
    days: "17 Days",
    price: "₹1,10,000",
    status: "Available",
    flight: "Direct Flight",
    hotel: "5-Star (1200m from Haram)",
    image: "https://c4.wallpaperflare.com/wallpaper/858/910/402/mosques-great-mosque-of-mecca-arabia-kaaba-wallpaper-preview.jpg"
  },
  {
    id: 14,
    departure: "03-Nov-25",
    arrival: "19-Nov-25",
    days: "17 Days",
    price: "₹1,10,000",
    status: "Available",
    flight: "Direct Flight",
    hotel: "5-Star (1200m from Haram)",
    image: "https://c4.wallpaperflare.com/wallpaper/858/910/402/mosques-great-mosque-of-mecca-arabia-kaaba-wallpaper-preview.jpg"
  },
  {
    id: 15,
    departure: "09-Nov-25",
    arrival: "24-Nov-25",
    days: "16 Days",
    price: "₹1,10,000",
    status: "Available",
    flight: "Direct Flight",
    hotel: "5-Star (1200m from Haram)",
    image: "https://c4.wallpaperflare.com/wallpaper/858/910/402/mosques-great-mosque-of-mecca-arabia-kaaba-wallpaper-preview.jpg"
  },
  {
    id: 16,
    departure: "17-Nov-25",
    arrival: "03-Dec-25",
    days: "17 Days",
    price: "₹1,10,000",
    status: "Available",
    flight: "Direct Flight",
    hotel: "5-Star (1200m from Haram)",
    image: "https://c4.wallpaperflare.com/wallpaper/858/910/402/mosques-great-mosque-of-mecca-arabia-kaaba-wallpaper-preview.jpg"
  },
  {
    id: 17,
    departure: "23-Nov-25",
    arrival: "08-Dec-25",
    days: "16 Days",
    price: "₹1,10,000",
    status: "Available",
    flight: "Direct Flight",
    hotel: "5-Star (1200m from Haram)",
    image: "https://c4.wallpaperflare.com/wallpaper/858/910/402/mosques-great-mosque-of-mecca-arabia-kaaba-wallpaper-preview.jpg"
  }
]


};

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            <span className="text-yellow-400">AL-ZIYARAT</span> HAJJ & UMRAH SERVICES
          </h1>
          <h2 className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-4">
            2025 UMRAH PACKAGES
          </h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Package Tabs */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex rounded-md shadow-lg">
            <button
              onClick={() => setActiveTab("deluxe")}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === "deluxe"
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              } transition-colors`}
            >
              Deluxe Umrah Package
            </button>
            <button
              onClick={() => setActiveTab("rabi")}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === "rabi"
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              } transition-colors`}
            >
              Rabi-ul-Awwal Package
            </button>
          </div>
        </motion.div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages[activeTab].map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl"
            >
              {/* Package Image */}
              <motion.div 
                className="h-48 overflow-hidden relative"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{pkg.departure} - {pkg.arrival}</h3>
                </div>
              </motion.div>

              <div className="p-6">
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    pkg.status === "Sold" ? "bg-red-900 text-red-100" : "bg-yellow-900 text-yellow-100"
                  }`}>
                    {pkg.status}
                  </span>
                  <span className="text-xl font-bold text-yellow-400 flex items-center">
                    <FaRupeeSign className="mr-1" />
                    {pkg.price}
                  </span>
                </div>

                {/* Package Details */}
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center">
                    <FaPlane className="text-yellow-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Flight</p>
                      <p className="font-medium">{pkg.flight}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-yellow-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-400">Departure</p>
                        <p className="font-medium">{pkg.departure}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-yellow-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-400">Arrival</p>
                        <p className="font-medium">{pkg.arrival}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <FaCalendarAlt className="text-yellow-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Duration</p>
                      <p className="font-medium">{pkg.days}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <FaHotel className="text-yellow-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Hotel</p>
                      <p className="font-medium">{pkg.hotel}</p>
                    </div>
                  </div>
                </div>

                {/* Package Inclusions */}
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <h4 className="font-semibold text-white mb-2">Package Includes:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Return flights (LKO-JED-LKO)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Visa processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>5-Star hotel accommodation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Buffet meals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Ziyarat tours</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.div 
                  className="mt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button 
                    className={`w-full font-medium py-3 px-4 rounded-lg ${
                      pkg.status === "Sold"
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-yellow-500 hover:bg-yellow-400 text-black"
                    } transition-colors`}
                    disabled={pkg.status === "Sold"}
                  >
                    {pkg.status === "Sold" ? "Sold Out" : "Book Now"}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div 
          className="mt-12 bg-gray-900 rounded-xl shadow-lg p-8 text-center border border-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Contact Us for More Information</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="flex items-center text-yellow-400">
              <FaPhoneAlt className="mr-2" />
              <span>+91-7897786820</span>
            </div>
            <p className="text-gray-400">
              UGF-3 Royal Grand Complex, Near Khurram Nagar Chauraha, Lucknow-226022
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UmrahPackages;