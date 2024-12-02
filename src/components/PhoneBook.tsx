import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import SearchBar from './SearchBar';
import ContactList from './ContactList/ContactList';
import VerificationModal from './VerificationModal';
import { sampleContacts } from '../data/contacts';
import { Contact } from '../types/contact';
import toast from 'react-hot-toast';

const PhoneBook = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [contacts, setContacts] = useState<Contact[]>(sampleContacts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState<number | null>(null);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (contact.isVerified && (
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm)
    ))
  );

  const handleRequestAccess = (contactId: number) => {
    setSelectedContactId(contactId);
    setIsModalOpen(true);
  };

  const handleVerification = (email: string) => {
    if (!selectedContactId) return;

    // Simulate sending verification email
    toast.success(`Verification email sent to ${email}. Please check your inbox.`);
    setIsModalOpen(false);
    
    // Simulate verification (in real app, this would happen after email confirmation)
    setTimeout(() => {
      setContacts(contacts.map(contact => ({
        ...contact,
        isVerified: contact.id === selectedContactId ? true : contact.isVerified
      })));
      toast.success('Email verified successfully! You can now view contact details.');
      setSelectedContactId(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-16">
      <Toaster position="top-right" />
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(/primary.jpg)',
          opacity: 0.5
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">Phone Book</h2>
        
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <ContactList 
          contacts={filteredContacts}
          onRequestAccess={handleRequestAccess}
        />
      </div>

      <VerificationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedContactId(null);
        }}
        onVerify={handleVerification}
      />
    </div>
  );
};

export default PhoneBook;