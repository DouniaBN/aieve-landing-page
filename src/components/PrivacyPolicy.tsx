import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#1C2D5A] mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600 mb-8">Last Updated: 23/09/2025</p>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">What We Collect</h2>
            <p>When you sign up for our waitlist, we collect your email address and any name you choose to provide.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">What We Do With It</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Send you updates when AIEVE launches</li>
              <li>Send you product updates and early access information</li>
              <li>Respond if you contact us with questions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can unsubscribe anytime by clicking unsubscribe in our emails</li>
              <li>You can ask us to delete your data by emailing us</li>
              <li>You can ask for a copy of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">We Don't</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sell your email to anyone</li>
              <li>Spam you with daily emails</li>
              <li>Share your info except with our email service provider (to send you emails)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">Security</h2>
            <p>We keep your information secure and only store it as long as you're subscribed to updates.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">UK Law</h2>
            <p>This complies with UK data protection laws. You're giving consent for us to email you about AIEVE by signing up.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">Questions?</h2>
            <p>Email us at <a href="mailto:team@aieve.co.uk" className="text-[#EC4899] hover:underline">team@aieve.co.uk</a></p>
            <p className="mt-2">If you have complaints about data handling, you can contact the ICO at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#EC4899] hover:underline">ico.org.uk</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;