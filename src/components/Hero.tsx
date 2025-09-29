import React from 'react';

interface HeroProps {
  onGetEarlyAccess: () => void;
}

const Hero = ({ onGetEarlyAccess }: HeroProps) => {
  return (
    <section className="pt-24 pb-16 bg-[#FAFAFA] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Centered Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C2D5A] leading-tight">
             Run Your <span>Creator Business</span> Like a Real Business
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              The first business management platform for creators. Track deals, manage and plan content, send professional invoices - all in one dashboard.
            </p>
            <button
              onClick={onGetEarlyAccess}
              className="bg-[#EC4899] hover:bg-[#DB2777] text-white px-12 py-6 rounded-lg font-bold text-xl transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Get Early Access
            </button>
            
            {/* Promotional Bubbles */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <div className="bg-pink-50 border border-pink-200 text-[#1C2D5A] px-3 py-1.5 rounded-full text-xs font-medium">
                Built by a creator for creators
              </div>
            </div>
          </div>

          {/* Centered Dashboard Screenshot */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative">
              <img
                src="/heroshot.png"
                alt="AIEVE Dashboard Screenshot"
                className="w-full h-auto"
              />
              {/* Bright pink glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#EC4899] to-[#DB2777] rounded-3xl blur-xl opacity-90 -z-10"></div>
            </div>
            {/* Larger decorative gradient behind */}
            <div className="absolute -inset-12 bg-gradient-to-r from-[#EC4899]/30 to-[#DB2777]/30 rounded-3xl blur-2xl -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;