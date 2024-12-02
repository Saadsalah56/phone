import React from 'react';
import { Lock } from 'lucide-react';

interface RequestButtonProps {
  onClick: () => void;
}

const RequestButton: React.FC<RequestButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-[#7A0000] hover:text-[#900000] transition-colors duration-200"
    >
      <Lock className="h-4 w-4 mr-1" />
      Request Access
    </button>
  );
};

export default RequestButton;