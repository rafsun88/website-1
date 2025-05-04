
import React from "react";

const testimonials = [
  {
    quote: "This platform completely transformed our online presence. The templates are beautiful and so easy to customize.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechSolutions Inc."
  },
  {
    quote: "I was able to launch our company website in just a few days. The support team was incredibly helpful throughout the process.",
    author: "Michael Chen",
    role: "Founder",
    company: "NovaTech Startups"
  },
  {
    quote: "The ease of use and professional design options have made creating our website a breeze. Highly recommended!",
    author: "Emma Rodriguez",
    role: "Creative Director",
    company: "Design Studios"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
