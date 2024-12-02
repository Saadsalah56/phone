import React from 'react';
import { Contact } from '../types/contact';
import { Lock } from 'lucide-react';

interface ContactListProps {
  contacts: Contact[];
  onRequestAccess: () => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onRequestAccess }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white/90 rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-12 bg-[#7A0000] text-white p-4 font-semibold">
        <div className="col-span-1">Profile</div>
        <div className="col-span-3">Name</div>
        <div className="col-span-4">Email</div>
        <div className="col-span-4">Phone Number</div>
      </div>
      
      <div className="max-h-[60vh] overflow-y-auto">
        {contacts.map((contact) => (
          <div key={contact.id} className="grid grid-cols-12 p-4 border-b hover:bg-gray-50">
            <div className="col-span-1">
              <img
                src={contact.profile}
                alt={contact.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
            <div className="col-span-3 flex items-center">{contact.name}</div>
            <div className="col-span-4 flex items-center">
              {contact.isVerified ? (
                contact.email
              ) : (
                <button
                  onClick={onRequestAccess}
                  className="flex items-center text-[#7A0000] hover:text-[#900000]"
                >
                  <Lock className="h-4 w-4 mr-1" />
                  Verify to view
                </button>
              )}
            </div>
            <div className="col-span-4 flex items-center">
              {contact.isVerified ? (
                contact.phone
              ) : (
                <button
                  onClick={onRequestAccess}
                  className="flex items-center text-[#7A0000] hover:text-[#900000]"
                >
                  <Lock className="h-4 w-4 mr-1" />
                  Verify to view
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;