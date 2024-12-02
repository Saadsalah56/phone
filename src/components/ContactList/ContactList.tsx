import React from 'react';
import { Contact } from '../../types/contact';
import ContactRow from './ContactRow';

interface ContactListProps {
  contacts: Contact[];
  onRequestAccess: (contactId: number) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onRequestAccess }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white/90 rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-12 bg-[#7A0000] text-white p-4 font-semibold">
        <div className="col-span-1">Profile</div>
        <div className="col-span-3">Name</div>
        <div className="col-span-3">Email</div>
        <div className="col-span-3">Phone Number</div>
        <div className="col-span-2 text-right">Actions</div>
      </div>
      
      <div className="max-h-[60vh] overflow-y-auto">
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            onRequestAccess={() => onRequestAccess(contact.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;