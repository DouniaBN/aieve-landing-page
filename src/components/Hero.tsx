import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onGetEarlyAccess: () => void;
}

const Hero = ({ onGetEarlyAccess }: HeroProps) => {
  return (
    <section className="pt-20 md:pt-24 pb-16 bg-[#FAFAFA] md:bg-[#FAFAFA] bg-gradient-to-b from-white to-pink-50/30 md:bg-none overflow-x-hidden relative">
      {/* Mobile Decorative Sparkles */}
      <div className="md:hidden">
        <Sparkles className="absolute top-35 right-2 w-4 h-4 text-pink-400 opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-14 md:space-y-12">
          {/* Centered Content */}
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 relative">
            <Sparkles className="absolute left-2 top-10 w-4 h-4 text-purple-400 opacity-20 md:hidden" />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1C2D5A] leading-normal md:leading-tight">
             Your Creator Business,<br />Finally Organized.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Track deals, plan content, send invoices—all in one dashboard. The admin platform built specifically for content creators.
            </p>
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={onGetEarlyAccess}
                className="bg-gradient-to-r from-pink-500 to-pink-600 md:bg-gradient-to-r md:from-[#EC4899] md:to-[#DB2777] hover:bg-[#DB2777] text-white px-16 py-4 md:py-6 rounded-lg font-bold text-xl transition-all transform hover:scale-[1.02] md:hover:scale-105 hover:shadow-lg shadow-lg shadow-pink-500/30 md:shadow-lg md:shadow-black/10 inline-flex items-center justify-center gap-2"
              >
                Get Early Access
                <ArrowRight className="w-5 h-5 md:hidden" />
              </button>
              <p className="text-xs text-[#1C2D5A]">join 80+ creators</p>
            </div>
            
            {/* Promotional Bubbles */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-1">
              <div className="bg-white border border-pink-200 text-[#1C2D5A] px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3 text-pink-400" />
                Built by a creator for creators
              </div>
            </div>
          </div>

          {/* Centered Dashboard Screenshot */}
          <div className="relative max-w-none mx-auto px-6 md:px-4">
            <div className="bg-white rounded-lg md:rounded-2xl shadow-2xl overflow-hidden relative transform scale-125 md:scale-100 mx-auto w-[95%] md:w-full">
              <img
                src="/dashboard_hero.png"
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