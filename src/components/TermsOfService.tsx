import React, { useEffect } from 'react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#1C2D5A] mb-4">Terms of Service</h1>
        <p className="text-lg text-gray-600 mb-8">Last Updated: 23/09/2025</p>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">Welcome to AIEVE</h2>
            <p>By using our service, you agree to these terms. Please read them carefully.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">What AIEVE Is</h2>
            <p>AIEVE is a business management platform for content creators. We help you track brand partnerships, manage content planning, and send professional invoices.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">Your Account</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate information when signing up</li>
              <li>You're responsible for keeping your account secure</li>
              <li>You must be 18 or older to use AIEVE</li>
              <li>One account per person</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">Acceptable Use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use AIEVE for legitimate business purposes only</li>
              <li>Don't spam, harass, or abuse other users or the platform</li>
              <li>Don't attempt to hack, reverse engineer, or break our service</li>
              <li>Don't upload illegal content or use the service for illegal activities</li>
              <li>We reserve the right to suspend accounts for violations of these terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">Your Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You own your content and data</li>
              <li>We need permission to store and process your data to provide the service</li>
              <li>We process your data in compliance with UK data protection laws</li>
              <li>We won't sell your data to third parties</li>
              <li>You can export or delete your data at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Free tier available with limited features</li>
              <li>Paid plans billed monthly or annually in advance</li>
              <li>Refunds considered on a case-by-case basis</li>
              <li>Prices may change with 30 days advance notice</li>
              <li>You can cancel your subscription at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">Service Availability</h2>
            <p>We strive for 99.9% uptime but cannot guarantee the service will always be available. We're not liable for temporary downtime, data loss, or service interruptions beyond our reasonable control.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>AIEVE and our platform are our intellectual property</li>
              <li>You grant us permission to use your data solely to provide and improve our services</li>
              <li>You retain all rights to your content and business data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">Changes to Terms</h2>
            <p>We may update these terms occasionally. We'll notify you of significant changes via email or in-app notification. Continued use constitutes acceptance of updated terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">Account Termination</h2>
            <p>Either party can terminate this agreement at any time. Upon termination:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>You'll lose access to the service immediately</li>
              <li>Your data will be retained for 30 days for potential recovery</li>
              <li>After 30 days, your data may be permanently deleted</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">Limitation of Liability</h2>
            <p>AIEVE's total liability is limited to the amount you paid for the service in the past 12 months. We're not liable for indirect, consequential, or punitive damages.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">Governing Law</h2>
            <p>These terms are governed by the laws of England and Wales. Any disputes will be resolved in UK courts.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C2D5A] mb-4">Contact Us</h2>
            <p>Questions about these terms? Email us at <a href="mailto:team@aieve.co.uk" className="text-[#EC4899] hover:underline">team@aieve.co.uk</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;