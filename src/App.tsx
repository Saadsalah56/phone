import React from 'react';
import Header from './components/Header';
import PhoneBook from './components/PhoneBook';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <PhoneBook />
    </div>
  );
}

export default App;