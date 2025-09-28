import React, { useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose, email }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPartnerships, setSelectedPartnerships] = useState<string>('');
  const [selectedCreatorType, setSelectedCreatorType] = useState<string>('');
  const [selectedChallenge, setSelectedChallenge] = useState<string>('');
  const [otherChallengeText, setOtherChallengeText] = useState<string>('');
  const [desiredFeature, setDesiredFeature] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  // Reset all state when modal opens - use immediate state update
  React.useEffect(() => {
    if (isOpen) {
      console.log('🔄 Resetting modal state to step 1');
      // Batch state updates for better performance
      const resetState = () => {
        setCurrentStep(1);
        setSelectedPartnerships('');
        setSelectedCreatorType('');
        setSelectedChallenge('');
        setOtherChallengeText('');
        setDesiredFeature('');
        setIsSubmitting(false);
        setSubmitSuccess(false);
        setShowError(false);
      };

      // Use timeout 0 to ensure it runs after modal is visible
      setTimeout(resetState, 0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const partnershipOptions = ['0-1', '2-5', '6-15', '15+'];
  const creatorTypeOptions = ['Content Creator', 'Influencer', 'Business Owner', 'Agency/Manager'];
  const challengeOptions = ['Deal organisation and deadlines', 'Creating invoices', 'Tracking payments', 'Content planning', 'Managing affiliate links/code', 'Other'];

  const handlePartnershipSelect = (option: string) => {
    setSelectedPartnerships(option);
    setShowError(false); // Clear error when user makes a selection
  };

  const handleCreatorTypeSelect = (option: string) => {
    setSelectedCreatorType(option);
  };

  const handleChallengeSelect = (option: string) => {
    setSelectedChallenge(option);
    setShowError(false); // Clear error when user makes a selection
    if (option !== 'Other') {
      setOtherChallengeText('');
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (selectedPartnerships) {
        console.log('➡️ Moving from step 1 to step 2');
        setShowError(false);
        setCurrentStep(2);
      } else {
        console.log('❌ No partnership selected, showing error');
        setShowError(true);
      }
    }
  };

  const handleSubmit = async () => {
    // Validate that the required question is answered
    if (!selectedChallenge) {
      console.log('❌ Admin challenge not selected, showing error');
      setShowError(true);
      return;
    }

    setIsSubmitting(true);
    setShowError(false);

    const updateData = {
      brand_partnerships: selectedPartnerships,
      biggest_challenge: selectedChallenge === 'Other' ? otherChallengeText : selectedChallenge,
      desired_feature: desiredFeature
    };

    console.log('🔍 Starting update process...');
    console.log('📧 Email to find:', email.toLowerCase().trim());
    console.log('📝 Data to update:', updateData);

    try {
      // Add a small delay to ensure the email signup completed
      await new Promise(resolve => setTimeout(resolve, 500));

      // First, check if the user exists
      const { data: existingUsers, error: selectError } = await supabase
        .from('early_access_signups')
        .select('*')
        .eq('email', email.toLowerCase().trim());

      if (selectError) {
        console.error('❌ Error searching for user:', selectError);
        return;
      }

      if (!existingUsers || existingUsers.length === 0) {
        console.error('❌ No user found with email:', email.toLowerCase().trim());
        console.log('💡 This might be a timing issue. The email signup may not have completed yet.');
        return;
      }

      console.log('✅ Found user:', existingUsers[0]);

      // Now update
      const { data, error } = await supabase
        .from('early_access_signups')
        .update(updateData)
        .eq('email', email.toLowerCase().trim())
        .select();

      if (error) {
        console.error('❌ Supabase update error:', error);
        setIsSubmitting(false);
        setShowError(true);
      } else {
        console.log('✅ Update successful:', data);
        setSubmitSuccess(true);
        setTimeout(() => {
          onClose();
        }, 1500); // Show success state for 1.5 seconds before closing
      }
    } catch (error) {
      console.error('❌ Unexpected error:', error);
      setIsSubmitting(false);
      setShowError(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          {(() => {
            console.log('🎯 Rendering modal - Current step:', currentStep);
            return null;
          })()}
          {currentStep === 1 ? (
            <>
              <div className="mx-auto flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mb-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-[#1C2D5A] mb-2">
                Thank you!
              </h3>

              <p className="text-gray-700 mb-3">
                You're on the list! We'll be in touch soon.
              </p>

              <div className="bg-gray-50 rounded-lg p-2 mb-4">
                <p className="text-xs text-gray-600">
                  Confirmation sent to:
                </p>
                <p className="font-medium text-[#1C2D5A] text-xs mt-0.5">
                  {email}
                </p>
              </div>
            </>
          ) : (
            <div className="mb-4">
              <h3 className="text-lg font-bold text-[#1C2D5A] mb-2">
                Help us build AIEVE for you
              </h3>
              <p className="text-gray-700">
                Your answers will shape our features.
              </p>
            </div>
          )}

          {/* Multi-step onboarding questions */}
          <div className="border-t border-gray-200 pt-4">
            {currentStep === 1 ? (
              <>
                {showError && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">
                      Please fill out the question below to continue
                    </p>
                  </div>
                )}
                <p className="text-sm text-gray-500 mb-3">
                  Got 30 seconds? Your input will help build AIEVE:
                </p>
                <div className="text-left">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-[#1C2D5A] mb-3">Number of monthly brand partnerships:</p>
                    <div className="space-y-2">
                      {partnershipOptions.map((option) => (
                        <div
                          key={option}
                          className="flex items-center cursor-pointer hover:bg-gray-100 p-1 rounded"
                          onClick={() => handlePartnershipSelect(option)}
                        >
                          <div className={`w-4 h-4 border-2 rounded-full mr-3 flex items-center justify-center ${
                            selectedPartnerships === option
                              ? 'border-[#EC4899] bg-[#EC4899]'
                              : 'border-gray-400 hover:border-[#EC4899]'
                          }`}>
                            {selectedPartnerships === option && (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </div>
                          <span className="text-sm text-gray-700">{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {showError && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">
                      Please answer the required question below to continue
                    </p>
                  </div>
                )}
                <div className="text-left space-y-4">
                  {/* Question 1: Biggest Creator Admin Challenge */}
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-[#1C2D5A] mb-3">Your biggest creator admin challenge:</p>
                    <div className="space-y-2">
                      {challengeOptions.map((option) => (
                        <div key={option}>
                          <div
                            className="flex items-center cursor-pointer hover:bg-gray-100 p-1 rounded"
                            onClick={() => handleChallengeSelect(option)}
                          >
                            <div className={`w-4 h-4 border-2 rounded-full mr-3 flex items-center justify-center ${
                              selectedChallenge === option
                                ? 'border-[#EC4899] bg-[#EC4899]'
                                : 'border-gray-400 hover:border-[#EC4899]'
                            }`}>
                              {selectedChallenge === option && (
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              )}
                            </div>
                            <span className="text-sm text-gray-700">{option}</span>
                          </div>
                          {option === 'Other' && selectedChallenge === 'Other' && (
                            <div className="ml-7 mt-2">
                              <input
                                type="text"
                                placeholder="Please specify..."
                                value={otherChallengeText}
                                onChange={(e) => setOtherChallengeText(e.target.value)}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC4899] focus:border-transparent outline-none"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Question 2: Desired Feature */}
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-[#1C2D5A] mb-3">What feature would you like to see? <span className="text-gray-400 font-normal">(optional)</span></p>
                    <textarea
                      placeholder="Describe a feature you'd find valuable..."
                      value={desiredFeature}
                      onChange={(e) => setDesiredFeature(e.target.value)}
                      className="w-full px-3 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC4899] focus:border-transparent outline-none resize-none"
                      rows={3}
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {currentStep === 1 ? (
            <div className="mt-6 flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 text-gray-500 hover:text-gray-700 px-6 py-3 rounded-lg font-medium text-sm transition-colors hover:bg-gray-50"
              >
                Skip for now
              </button>
              <button
                onClick={handleNext}
                className="flex-1 bg-[#EC4899] hover:bg-[#DB2777] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Next
              </button>
            </div>
          ) : (
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || submitSuccess}
                className={`px-12 py-3 rounded-lg font-semibold transition-colors ${
                  submitSuccess
                    ? 'bg-green-500 hover:bg-green-500 text-white cursor-default'
                    : isSubmitting
                    ? 'bg-[#EC4899] text-white cursor-wait'
                    : 'bg-[#EC4899] hover:bg-[#DB2777] text-white'
                }`}
              >
                {submitSuccess ? '✓ Submitted!' : isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupModal;