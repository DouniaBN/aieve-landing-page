import React from 'react';
import { Target, Calendar, DollarSign } from 'lucide-react';

const Solution = () => {
  const benefits = [
    {
      icon: Target,
      title: "Professional Deal Management",
      description: "Pipeline tracking like real businesses use"
    },
    {
      icon: Calendar,
      title: "Grow With a Plan",
      description: "All algorithms reward consistency, plan your posts across platforms and grow faster"
    },
    {
      icon: DollarSign,
      title: "Business-Grade Invoicing",
      description: "Get paid faster with professional invoices"
    }
  ];

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C2D5A] mb-4">
            Finally, A Tool Made For Creators.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#EC4899]/10 rounded-lg flex items-center justify-center mb-6">
                <benefit.icon size={24} className="text-[#EC4899]" />
              </div>
              <h3 className="text-xl font-bold text-[#1C2D5A] mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;