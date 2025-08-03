import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Text } from "@react-three/drei";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const RotatingBox = ({ position, rotationSpeed = 0.01 }) => {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh position={position} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#FFD700"
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

const Confetti = ({ trigger }) => {
  const [confettiPieces, setConfettiPieces] = useState([]);

  useEffect(() => {
    if (trigger) {
      const pieces = Array.from({ length: 30 }, () => ({
        position: [
          Math.random() * 10 - 5,
          Math.random() * 10,
          Math.random() * 10 - 5,
        ],
        rotationSpeed: Math.random() * 0.02 + 0.01
      }));
      setConfettiPieces(pieces);
      
      const timer = setTimeout(() => setConfettiPieces([]), 3000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  return (
    <>
      {confettiPieces.map((piece, index) => (
        <RotatingBox 
          key={index} 
          position={piece.position}
          rotationSpeed={piece.rotationSpeed}
        />
      ))}
    </>
  );
};

const Discover = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "Umrah",
    travelDate: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const submitToMake = async (data) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://hook.eu2.make.com/ur5jsd5nk43p86ygg9tnykoq9uxft51c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
       travelDate: data.travelDate,
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      // Handle both JSON and text responses
      const responseText = await response.text();
      let result;
      try {
        result = responseText ? JSON.parse(responseText) : { status: 'success' };
      } catch (e) {
        result = { status: 'success', message: responseText };
      }

      console.log('Submission result:', result);
      return true;
    } catch (error) {
      console.error('Submission failed:', error);
      setError(error.message || 'Failed to submit form. Please try again later.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate phone number
    if (!/^\d{10,15}$/.test(formData.phone)) {
      setError('Please enter a valid phone number (10-15 digits)');
      return;
    }

    // Validate future date
    const selectedDate = new Date(formData.travelDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      setError('Please select a future travel date');
      return;
    }

    const success = await submitToMake(formData);
    
    if (success) {
      setSubmitted(true);
      setShowConfetti(true);
      setFormData({
        name: "",
        phone: "",
       
        travelDate: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const getTextSize = () => {
    if (typeof window === "undefined") return 0.8;
    const width = window.innerWidth;
    if (width < 640) return 0.5;
    if (width < 1024) return 0.7;
    return 0.8;
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 75 }} 
        className="absolute inset-0 z-0"
        onContextMenu={(e) => e.preventDefault()}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFD700" />
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          enablePan={false}
        />
        <Confetti trigger={showConfetti} />
        <Text
          position={[0, 2, -5]}
          color="#FFD700"
          fontSize={getTextSize()}
          maxWidth={10}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        >
          Explore Spiritual Journeys
        </Text>
      </Canvas>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black bg-opacity-90 p-8 rounded-xl shadow-2xl w-full max-w-md border border-yellow-400/30 text-center"
          >
            <div className="flex justify-center mb-4">
              <FiCheckCircle className="text-5xl text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">Thank You!</h3>
            <p className="text-gray-300 mb-6">
              Your inquiry has been submitted successfully. We'll contact you soon.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded transition"
              onClick={() => setSubmitted(false)}
            >
              Submit Another
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black bg-opacity-90 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-lg border border-yellow-400/30"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6 text-center font-serif">
              Start Your Sacred Journey
            </h2>
            
            {error && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-4 p-3 bg-red-900/50 text-red-200 rounded-lg border border-red-500"
              >
                {error}
              </motion.div>
            )}
            
            <div className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-yellow-300 mb-2 text-sm sm:text-base">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter your full name"
                  required
                  minLength={3}
                />
              </div>
              
              <div>
                <label className="block text-yellow-300 mb-2 text-sm sm:text-base">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter your phone number"
                  required
                  pattern="[0-9]{10,15}"
                  title="10-15 digit phone number"
                />
              </div>
              
            
              
              <div>
                <label className="block text-yellow-300 mb-2 text-sm sm:text-base">Travel Date *</label>
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-yellow-400/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 [&::-webkit-calendar-picker-indicator]:invert"
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : 'Submit Inquiry'}
            </motion.button>
          </motion.form>
        )}
      </div>
    </div>
  );
};

export default Discover;