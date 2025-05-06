// src/components/SearchScreen.js
import React, { useState, useEffect } from 'react';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [ripple, setRipple] = useState({ x: 0, y: 0, show: false });

  // Mock suggestions
  const mockSuggestions = [
    "सर्च रिजल्ट १",
    "सर्च टिप्स",
    "लोकप्रिय खोजें",
    "नया अपडेट"
  ];

  const handleSearch = () => {
    setIsLoading(true);
    console.log("Searching for:", searchQuery);
    
    // Mock API call
    setTimeout(() => {
      setIsLoading(false);
      setSuggestions(mockSuggestions);
    }, 1500);
  };

  // Ripple effect handler
  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      show: true
    });
    
    setTimeout(() => setRipple(prev => ({...prev, show: false})), 600);
  };

  return (
    <div className="p-4">
      <div className="flex mt-28 relative">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="खोजें..."
            className={`w-full border rounded-lg px-4 py-2 pr-12 focus:outline-none transition-all duration-300 
              ${searchQuery ? 'shadow-lg' : 'shadow-md'} hover:shadow-lg focus:ring-2 focus:ring-blue-500
              animate-pulse-on-load`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          
          {/* Search icon animation */}
          <svg 
            className={`absolute right-4 top-3 h-6 w-6 transition-all duration-300 
              ${isLoading ? 'opacity-0' : 'opacity-50'} ${searchQuery ? 'animate-bounce' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Animated Search Button */}
        <button 
          onClick={(e) => { handleSearch(); createRipple(e); }}
          className="ml-2 bg-blue-600 text-white px-6 py-2 rounded-lg relative overflow-hidden
            hover:bg-blue-700 transition-all duration-300 active:scale-95 shadow-lg"
          disabled={isLoading}
        >
          {/* Ripple Effect */}
          {ripple.show && (
            <div 
              className="absolute w-4 h-4 bg-white/30 rounded-full animate-ripple"
              style={{
                left: ripple.x - 8,
                top: ripple.y - 8,
              }}
            />
          )}
          
          {/* Loading Animation */}
          {isLoading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            </div>
          ) : (
            'खोजें'
          )}
        </button>
      </div>

      {/* Suggestions Animation */}
      {suggestions.length > 0 && (
        <div className="mt-4 space-y-2 animate-fade-in-up">
          {suggestions.map((item, index) => (
            <div 
              key={index}
              className="p-3 bg-white rounded-lg shadow-md hover:bg-gray-50 cursor-pointer transition-all
                opacity-0 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {/* Custom Animations CSS */}
      <style jsx>{`
        @keyframes ripple {
          to { transform: scale(4); opacity: 0; }
        }
        .animate-ripple {
          animation: ripple 0.6s linear;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease forwards;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default SearchScreen;