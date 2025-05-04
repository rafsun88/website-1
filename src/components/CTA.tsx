
import React from "react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          Join thousands of satisfied customers who are building amazing websites with our platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Start Your Free Trial
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
