import React from 'react';
import { X } from 'lucide-react';

const Problem = () => {
  const painPoints = [
    "Juggling Notion, Trello, Gmail, Canva, and spreadsheets just to stay organized",
    "Missed brand deal deadlines buried in DMs and email chains",
    "Lost track of deliverables and what you promised when",
    "Wasting hours each month creating invoices",
    "Leaving money on the table because you can't keep up with opportunities"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C2D5A] mb-12">
          Sound Familiar?
        </h2>
        <div className="space-y-6">
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-start space-x-4 text-left max-w-2xl mx-auto">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                <X size={16} className="text-red-600" />
              </div>
              <p className="text-lg text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;