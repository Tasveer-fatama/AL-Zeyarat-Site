import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "Hajj Pilgrim 2023",
    content: "Al-Ziyarat made my Hajj journey seamless. Their scholarly guides helped me understand every ritual deeply. The hotels were just minutes from Haram!",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbevz7wzhLLHsqhLE2b-jvCSAd0IGkeaf8g&s" // Indian-looking male
  },
  {
    id: 2,
    name: "Fatima Ahmed",
    role: "Umrah Pilgrim 2024",
    content: "As a solo female traveler, I felt completely safe with Al-Ziyarat. Their female mutawwif was knowledgeable and supportive throughout my spiritual journey.",
    rating: 5,
    image: "data:image/jpeg;base64,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" // Indian-looking female
  },
  {
    id: 3,
    name: "Yusuf Abdullah",
    role: "Family Group Leader",
    content: "We traveled with elderly parents and young children. Al-Ziyarat accommodated all our special needs with patience and professionalism. Truly exceptional service!",
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7yEGVr0WDqJTtcLbXpUXmUSwwzlHDtF1XA&s" // Another Indian male
  },
  {
    id: 4,
    name: "Aisha Rahman",
    role: "Repeat Pilgrim",
    content: "This was my third Umrah with Al-Ziyarat. Each experience gets better! Their attention to spiritual growth sets them apart from other agencies.",
    rating: 5,
    image: "https://i.pinimg.com/474x/47/84/e9/4784e97d99d60fbbc4723864e3f57281.jpg" // Indian-ish female
  }
];


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const threeContainer = useRef(null);
  const animationFrameId = useRef(null);

  // Three.js setup
  useEffect(() => {
    if (!threeContainer.current) return;

    let scene, camera, renderer, orbitControls, particlesMesh, kaaba;
    const currentContainer = threeContainer.current;

    // Initialize Three.js
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, currentContainer.clientWidth / currentContainer.clientHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentContainer.clientWidth, currentContainer.clientHeight);
    currentContainer.appendChild(renderer.domElement);

    // Create floating Kaaba
    const geometry = new THREE.BoxGeometry(1, 1.5, 1);
    const material = new THREE.MeshPhongMaterial({ 
      color: 0xcca300,
      emissive: 0xcca300,
      emissiveIntensity: 0.2,
      shininess: 100
    });
    kaaba = new THREE.Mesh(geometry, material);
    scene.add(kaaba);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xcca300, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Add floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xcca300,
      transparent: true,
      opacity: 0.8
    });
    particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;
    orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableZoom = false;
    orbitControls.enablePan = false;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 0.5;

    const handleResize = () => {
      camera.aspect = currentContainer.clientWidth / currentContainer.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentContainer.clientWidth, currentContainer.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      kaaba.rotation.y += 0.005;
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.001;
      orbitControls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('resize', handleResize);
      currentContainer.removeChild(renderer.domElement);
      renderer.dispose();
      orbitControls.dispose();
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = async () => {
    await controls.start({ opacity: 0, x: 50, transition: { duration: 0.5 } });
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    controls.start({ opacity: 1, x: 0, transition: { duration: 0.5 } });
  };

  const handlePrev = async () => {
    await controls.start({ opacity: 0, x: -50, transition: { duration: 0.5 } });
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    controls.start({ opacity: 1, x: 0, transition: { duration: 0.5 } });
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Three.js Background */}
      <div 
        ref={threeContainer} 
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-yellow-500/10 text-yellow-500 rounded-full text-sm font-semibold tracking-wider mb-4">
            PILGRIM VOICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experiences That <span className="text-yellow-500">Inspire</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Hear from those who've journeyed with Al-Ziyarat and returned transformed.
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="relative h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              className="absolute inset-0 flex flex-col items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative z-10 max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
                <div className="p-8 sm:p-10 lg:p-12">
                  <div className="flex items-center justify-center mb-6">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-center text-white font-light leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  <div className="mt-8 flex items-center justify-center">
                    <div className="relative">
                      <motion.div
                        className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-500"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <img 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </motion.div>
                      <motion.div 
                        className="absolute -bottom-2 -right-2 bg-yellow-500 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                      >
                        {testimonials[currentIndex].rating}
                      </motion.div>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-semibold text-white">{testimonials[currentIndex].name}</p>
                      <p className="text-yellow-500">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 ml-4"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 mr-4"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-yellow-500 w-6' : 'bg-gray-700'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating decorative elements */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <p className="text-2xl font-arabic text-yellow-500">
          وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ
        </p>
      </motion.div>
    </section>
  );
};

export default Testimonials;