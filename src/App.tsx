import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
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

const HomePage = () => {
  const scrollToEarlyAccess = () => {
    const element = document.getElementById('early-access');
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
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
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="font-['Inter',sans-serif] antialiased">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;