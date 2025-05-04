
import React from "react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          Join thousands of satisfied customers who are building amazing websites with our platform.
        </p>
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50"
            onClick={scrollToContact}
          >
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
