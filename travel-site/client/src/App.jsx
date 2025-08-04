import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Popular from "./components/Popular";
import Discover from "./components/Discover";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Home Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* Featured Tours Section */}
      <section id="featured" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Featured />
        </div>
      </section>
      
      {/* Popular Packages Section */}
      <section id="packages" className="py-12">
        <div className="container mx-auto px-4">
          <Popular />
        </div>
      </section>
      
      {/* Discover/Contact Section */}
      <section id="discover" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Discover />
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Blog />
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Gallery />
        </div>
      </section>
      
      <FloatingContact />
      <Footer />
    </div>
  );
}

export default App;