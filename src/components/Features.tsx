import React from 'react';
import { Check } from 'lucide-react';

const Features = () => {
  const features = [
    "Brand deal pipeline & tracking",
    "Multi-platform content calendar",
    "Invoice generation & payment tracking",
    "Project timelines & deliverables",
    "Intuitive dashboard to see your whole business at a glance",
    "Grow your platforms with a plan that keeps you consistent"
  ];

  return (
    <section id="features" className="pt-20 pb-12 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C2D5A] mb-4">
            Everything You Need to Run Your Creator Business.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <Check size={16} className="text-green-600" />
              </div>
              <p className="text-lg text-[#1C2D5A] font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;