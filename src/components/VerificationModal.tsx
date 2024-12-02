import React, { useState } from 'react';
import toast from 'react-hot-toast';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (email: string) => void;
}

const VerificationModal: React.FC<VerificationModalProps> = ({ isOpen, onClose, onVerify }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    onVerify(email);
    setEmail('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Verify Your Email</h3>
        <p className="text-gray-600 mb-4">
          To access contact details, please verify your email address. We'll send you a verification link.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded border border-gray-300 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#7A0000] text-white rounded hover:bg-[#900000]"
            >
              Send Verification
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerificationModal;