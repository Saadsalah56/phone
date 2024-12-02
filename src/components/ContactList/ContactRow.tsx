import React from 'react';
import { Contact } from '../../types/contact';
import { Lock } from 'lucide-react';

interface ContactRowProps {
  contact: Contact;
  onRequestAccess: () => void;
}

const ContactRow: React.FC<ContactRowProps> = ({ contact, onRequestAccess }) => {
  return (
    <div className="grid grid-cols-12 p-4 border-b hover:bg-gray-50 transition-colors duration-200">
      <div className="col-span-1">
        <img
          src={contact.profile}
          alt={contact.name}
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
      <div className="col-span-3 flex items-center">{contact.name}</div>
      <div className="col-span-3 flex items-center">
        {contact.isVerified ? contact.email : (
          <span className="text-gray-400">Hidden</span>
        )}
      </div>
      <div className="col-span-3 flex items-center">
        {contact.isVerified ? contact.phone : (
          <span className="text-gray-400">Hidden</span>
        )}
      </div>
      <div className="col-span-2 flex items-center justify-end">
        {!contact.isVerified && (
          <button
            onClick={onRequestAccess}
            className="flex items-center text-[#7A0000] hover:text-[#900000] transition-colors duration-200"
          >
            <Lock className="h-4 w-4 mr-1" />
            Request Access
          </button>
        )}
      </div>
    </div>
  );
};

export default ContactRow;