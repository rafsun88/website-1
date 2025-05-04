
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import MobileMenu from "@/components/MobileMenu";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar toggleMobileMenu={toggleMobileMenu} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      
      <main>
        <Hero />
        <AboutUs />
        
        <section id="contact" className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-12">
              Have questions? Need a quote? Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <div className="bg-white rounded-lg p-6 md:p-10 shadow-xl">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
