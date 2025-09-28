import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import SignupModal from './SignupModal';

const EarlyAccess = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    // Show modal immediately for better UX while database saves
    const userEmail = email.toLowerCase().trim();
    setSubmittedEmail(userEmail);
    setShowModal(true);
    setEmail('');

    try {
      console.log('🔄 Attempting to save email:', userEmail);

      const { data, error } = await supabase
        .from('early_access_signups')
        .insert([
          { email: userEmail }
        ])
        .select();

      if (error) {
        console.error('❌ Email signup error:', error);
        if (error.code === '23505') { // Unique constraint violation
          setStatus('error');
          setMessage("You're already on our waitlist!");
          setShowModal(false); // Close modal on error
        } else {
          setShowModal(false); // Close modal on error
          throw error;
        }
      } else {
        console.log('✅ Email signup successful:', data);
        setStatus('success');
        // Modal already opened above for instant UX
        console.log('🎯 Modal already open for:', userEmail);
      }
    } catch (error) {
      console.error('❌ Unexpected error saving email:', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      setShowModal(false); // Close modal on error
    }

    // Reset status after 5 seconds (only for error states)
    if (status === 'error') {
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <section id="early-access" className="pt-0 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C2D5A] mb-4">
          Get Early Access
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Be the first to try AIEVE and help shape the future of creator tools.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC4899] focus:border-transparent outline-none"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-[#EC4899] hover:bg-[#DB2777] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
            >
              {status === 'loading' ? 'Joining...' : 'Get Early Access'}
            </button>
          </div>
          
          {message && status === 'error' && (
            <p className="mt-4 text-sm text-red-600">
              {message}
            </p>
          )}
          
          <p className="text-sm text-gray-500 mt-4">
            Join the waitlist for exclusive early access.
          </p>
        </form>

        <SignupModal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setStatus('idle');
          }}
          email={submittedEmail}
        />
      </div>
    </section>
  );
};

export default EarlyAccess;