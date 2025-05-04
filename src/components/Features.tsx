
import React from "react";
import { Calendar, Globe, Search, Settings } from "lucide-react";

const features = [
  {
    icon: <Globe className="w-10 h-10 text-blue-600" />,
    title: "Responsive Design",
    description: "Our templates look great on any device, no matter the screen size or platform."
  },
  {
    icon: <Settings className="w-10 h-10 text-blue-600" />,
    title: "Easy Customization",
    description: "Customize every aspect of your site with our intuitive drag and drop interface."
  },
  {
    icon: <Calendar className="w-10 h-10 text-blue-600" />,
    title: "Regular Updates",
    description: "Get access to new features and improvements with our regular updates."
  },
  {
    icon: <Search className="w-10 h-10 text-blue-600" />,
    title: "SEO Optimized",
    description: "Built with best practices to help your website rank higher in search results."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to create stunning websites that convert visitors into customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
