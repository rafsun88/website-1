
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 md:pt-36 pb-16 md:pb-24 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Build Stunning Websites with Ease
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Create beautiful, responsive websites in minutes with our intuitive tools and pre-designed components.
            </p>
            <div>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={scrollToContact}
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg blur-xl opacity-50"></div>
            <div className="relative bg-white p-6 rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Website dashboard preview"
                className="w-full h-auto rounded-md shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
