import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const EarlyAccess = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

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

    try {
      const { error } = await supabase
        .from('early_access_signups')
        .insert([
          { email: email.toLowerCase().trim() }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          setStatus('error');
          setMessage("You're already on our waitlist!");
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setMessage("You're on the list! We'll be in touch soon.");
        setEmail('');
      }
    } catch (error) {
      console.error('Error saving email:', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
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
          
          {message && (
            <p className={`mt-4 text-sm ${
              status === 'error' ? 'text-red-600' : 'text-green-600'
            }`}>
              {message}
            </p>
          )}
          
          <p className="text-sm text-gray-500 mt-4">
            Join the waitlist for exclusive early access.
          </p>
        </form>
      </div>
    </section>
  );
};

export default EarlyAccess;