import React, { useState } from 'react';
import { Menu, X, User, Home, HelpCircle, Bot, Users, Info } from 'lucide-react';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Homepage', icon: <Home size={20} />, href: '/' },
    { name: 'FAQ', icon: <HelpCircle size={20} />, href: '/faq' },
    { name: 'YukkthiBot', icon: <Bot size={20} />, href: '/bot' },
    { name: 'Forum', icon: <Users size={20} />, href: '/forum' },
    { name: 'About Us', icon: <Info size={20} />, href: '/about' },
  ];

  return (
    <header className="bg-[#7A0000] text-white fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8" />
            <span className="text-xl font-bold">YUKKTHIYA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-gray-300">
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <button className="p-2 hover:bg-[#900000] rounded-full">
              <User className="h-6 w-6" />
            </button>
            <button
              className="md:hidden ml-2 p-2 hover:bg-[#900000] rounded-full"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden">
          <div className="fixed right-0 top-0 h-full w-64 bg-[#7A0000] p-4">
            <div className="flex justify-end">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 hover:bg-[#900000] rounded-full"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-8 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 hover:bg-[#900000] p-2 rounded"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;