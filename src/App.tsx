import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import FoundingStory from './components/FoundingStory';
import Features from './components/Features';
import EarlyAccess from './components/EarlyAccess';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const scrollToEarlyAccess = () => {
    const element = document.getElementById('early-access');
    if (element) {
      const yOffset = -100; // Offset to show the heading properly
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (currentPath === '/privacy-policy') {
    return <PrivacyPolicy />;
  }

  if (currentPath === '/terms-of-service') {
    return <TermsOfService />;
  }

  return (
    <div className="font-['Inter',sans-serif] antialiased">
      <Header />
      <Hero onGetEarlyAccess={scrollToEarlyAccess} />
      <Problem />
      <Solution />
      <FoundingStory />
      <section className="pt-8 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={scrollToEarlyAccess}
            className="bg-[#EC4899] hover:bg-[#DB2777] text-white px-12 py-6 rounded-lg font-bold text-xl transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Get Early Access
          </button>
        </div>
      </section>
      <Features />
      <section className="py-16 bg-white">
      </section>
      <EarlyAccess />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;