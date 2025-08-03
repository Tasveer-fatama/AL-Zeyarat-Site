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
import FloatingContact from "./components/FloatingContact"; // <-- added

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <section className="py-12">
        <div className="container mx-auto">
          <Featured />
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <Popular />
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <Discover />
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <Blog />
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <Gallery />
        </div>
      </section>
     
   
    
      <FloatingContact /> {/* <-- added here */}
      <Footer />
    </div>
  );
}

export default App;
