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
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Fatima Ahmed",
    role: "Umrah Pilgrim 2024",
    content: "As a solo female traveler, I felt completely safe with Al-Ziyarat. Their female mutawwif was knowledgeable and supportive throughout my spiritual journey.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Yusuf Abdullah",
    role: "Family Group Leader",
    content: "We traveled with elderly parents and young children. Al-Ziyarat accommodated all our special needs with patience and professionalism. Truly exceptional service!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    id: 4,
    name: "Aisha Rahman",
    role: "Repeat Pilgrim",
    content: "This was my third Umrah with Al-Ziyarat. Each experience gets better! Their attention to spiritual growth sets them apart from other agencies.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/63.jpg"
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