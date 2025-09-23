import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1C2D5A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img 
              src="/13970D26-B6B0-4C20-8A4A-C633E603EE6F_4_5005_c-removebg-preview.png" 
              alt="AIEVE Logo" 
             className="h-16 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300">
              The first business management platform built specifically for content creators and UGC creators.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AIEVE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;