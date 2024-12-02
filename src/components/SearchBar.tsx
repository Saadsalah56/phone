import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search contacts..."
          className="w-full px-4 py-2 pl-10 rounded-lg bg-white/90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7A0000]"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;