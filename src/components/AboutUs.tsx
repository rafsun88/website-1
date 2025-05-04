
import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Us</h2>
        <div className="space-y-6 text-gray-700">
          <p className="text-lg">
            At SkyBrand, we're dedicated to helping businesses of all sizes establish a strong online presence. 
            Founded in 2020, our team of experienced designers and developers has been creating beautiful, 
            functional websites that drive results.
          </p>
          <p className="text-lg">
            Our mission is to make professional web design accessible and affordable. We combine cutting-edge 
            technology with thoughtful design to create websites that not only look great but also deliver 
            exceptional user experiences.
          </p>
          <p className="text-lg">
            Whether you're a small business looking to establish your first online presence or a growing 
            company ready to revamp your digital strategy, we have the expertise and tools to help you succeed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
