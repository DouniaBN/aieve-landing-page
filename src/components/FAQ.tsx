import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Does this replace all my other tools?",
      answer: "Yes. AIEVE replaces scattered spreadsheets, Canva invoices, Trello boards and Notion docs with an all in one tool."
    },
    {
      question: "What if I'm just starting out?",
      answer: "Perfect! AIEVE gives you streamlined systems from day one so you can tackle bigger projects as your platforms grow."
    },
    {
      question: "Is this free?",
      answer: "Yes! AIEVE is free while we build and refine the tool. Get early access now!"
    },
    {
      question: "Is this just another scheduling app?",
      answer: "No. AIEVE isn't a scheduling tool. It's a planning tool that keeps your deals, projects, and invoices in one place."
    },
    {
      question: "Is AIEVE for UGC creators too?",
      answer: "Yes, AIEVE is for all kinds of content creators"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C2D5A] text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#1C2D5A]">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-[#EC4899]" />
                ) : (
                  <ChevronDown size={20} className="text-[#EC4899]" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;