import React from 'react';
import RequestButton from './RequestButton';

interface ContactInfoProps {
  value: string;
  isVerified: boolean;
  onRequestAccess: () => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ value, isVerified, onRequestAccess }) => {
  return (
    <div className="flex items-center">
      {isVerified ? value : <RequestButton onClick={onRequestAccess} />}
    </div>
  );
};

export default ContactInfo;