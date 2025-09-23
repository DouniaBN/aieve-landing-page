import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; // Offset to show the heading properly
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/13970D26-B6B0-4C20-8A4A-C633E603EE6F_4_5005_c-removebg-preview.png" 
              alt="AIEVE Logo" 
             className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-[#1C2D5A] hover:text-[#EC4899] transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-[#1C2D5A] hover:text-[#EC4899] transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('early-access')}
              className="bg-[#EC4899] hover:bg-[#DB2777] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Early Access
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#1C2D5A]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-[#1C2D5A] hover:text-[#EC4899] transition-colors font-medium text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-[#1C2D5A] hover:text-[#EC4899] transition-colors font-medium text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('early-access')}
                className="bg-[#EC4899] hover:bg-[#DB2777] text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Early Access
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;