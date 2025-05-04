
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import MobileMenu from "@/components/MobileMenu";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
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
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
