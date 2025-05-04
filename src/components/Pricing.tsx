
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$9",
    period: "per month",
    description: "Perfect for small personal websites",
    features: [
      "1 website",
      "5 pages",
      "Basic templates",
      "24/7 support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$29",
    period: "per month",
    description: "Ideal for businesses and professionals",
    features: [
      "5 websites",
      "Unlimited pages",
      "Premium templates",
      "Priority support",
      "Custom domain",
      "Analytics"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For large teams and organizations",
    features: [
      "20 websites",
      "Unlimited pages",
      "All templates",
      "Dedicated support",
      "Custom domains",
      "Advanced analytics",
      "Team collaboration"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your needs. No hidden fees or surprises.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl border ${
                plan.popular ? 'border-blue-500 shadow-lg shadow-blue-100' : 'border-gray-200'
              } overflow-hidden`}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500"> {plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </div>
              <div className="bg-gray-50 p-6 md:p-8">
                <p className="font-medium text-gray-900 mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
