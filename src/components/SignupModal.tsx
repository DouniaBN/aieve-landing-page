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

  if (!isOpen) return null;

  const partnershipOptions = ['0-1', '2-5', '6-15', '15+'];
  const creatorTypeOptions = ['Content Creator', 'Influencer', 'Business Owner', 'Agency/Manager'];
  const challengeOptions = ['Deal organisation and deadlines', 'Creating invoices', 'Tracking payments', 'Content planning', 'Managing affiliate links/code', 'Other'];

  const handlePartnershipSelect = (option: string) => {
    setSelectedPartnerships(option);
  };

  const handleCreatorTypeSelect = (option: string) => {
    setSelectedCreatorType(option);
  };

  const handleChallengeSelect = (option: string) => {
    setSelectedChallenge(option);
    if (option !== 'Other') {
      setOtherChallengeText('');
    }
  };

  const handleNext = () => {
    if (currentStep === 1 && selectedPartnerships) {
      setCurrentStep(2);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('early_access_signups')
        .update({
          brand_partnerships: selectedPartnerships,
          creator_type: selectedCreatorType,
          biggest_challenge: selectedChallenge === 'Other' ? otherChallengeText : selectedChallenge,
          desired_feature: desiredFeature
        })
        .eq('email', email.toLowerCase().trim());

      if (error) {
        console.error('Error saving survey data:', error);
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    } finally {
      setIsSubmitting(false);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-8 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          {currentStep === 1 ? (
            <>
              <div className="mx-auto flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-[#1C2D5A] mb-2">
                Thank you!
              </h3>

              <p className="text-gray-700 mb-4">
                You're on the list! We'll be in touch soon.
              </p>

              <div className="bg-gray-50 rounded-lg p-2 mb-5">
                <p className="text-xs text-gray-600">
                  Confirmation sent to:
                </p>
                <p className="font-medium text-[#1C2D5A] text-xs mt-0.5">
                  {email}
                </p>
              </div>
            </>
          ) : (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#1C2D5A] mb-2">
                Help us build AIEVE for you
              </h3>
              <p className="text-gray-700">
                Your answers will shape our features and priorities.
              </p>
            </div>
          )}

          {/* Multi-step onboarding questions */}
          <div className="border-t border-gray-200 pt-6">
            {currentStep === 1 ? (
              <>
                <p className="text-sm text-gray-500 mb-4">
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
                <p className="text-sm text-gray-500 mb-4">
                  Almost done! Just 2 more questions:
                </p>
                <div className="text-left space-y-6">
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

          <div className="mt-8 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 text-gray-500 hover:text-gray-700 px-6 py-3 rounded-lg font-medium text-sm transition-colors hover:bg-gray-50"
            >
              Skip for now
            </button>
            {currentStep === 1 ? (
              <button
                onClick={selectedPartnerships ? handleNext : onClose}
                className="flex-1 bg-[#EC4899] hover:bg-[#DB2777] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 bg-[#EC4899] hover:bg-[#DB2777] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;