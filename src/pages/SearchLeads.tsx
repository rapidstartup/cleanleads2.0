import React, { useState } from 'react';
import { Search, Sliders } from 'lucide-react';
import AdvancedSearchModal from '../components/search/AdvancedSearchModal';
import SearchResults from '../components/search/SearchResults';
import MapDrawer from '../components/search/MapDrawer';
import MapToggle from '../components/search/MapToggle';

const SearchLeads = () => {
  const [businessType, setBusinessType] = useState('');
  const [location, setLocation] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [showMap, setShowMap] = useState(false);

  // Dummy search results
  const dummyResults = [
    {
      id: '1',
      name: 'Desert West Services Inc',
      category: 'HVAC contractor',
      phone: '+17024056146',
      address: '7224 W Rome Blvd, Las Vegas, NV 89131',
      rating: 4.8,
      reviews: 594,
      website: 'https://example.com',
      socials: ['facebook', 'twitter', 'instagram']
    },
    {
      id: '2',
      name: 'Bulldog Air Conditioning & Heating',
      category: 'HVAC contractor',
      phone: '+17025095005',
      address: '3110 Polaris Ave #16, Las Vegas, NV 89102',
      rating: 4.9,
      reviews: 231,
      website: 'https://example.com',
      socials: ['facebook', 'instagram']
    }
  ];

  const handleSearch = () => {
    setHasSearched(true);
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business Type
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ec0cd] focus:border-transparent"
                placeholder="e.g., HVAC, Restaurant, Retail"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ec0cd] focus:border-transparent"
                placeholder="City, State, or ZIP"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowAdvanced(true)}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <Sliders className="w-4 h-4 mr-2" />
            Advanced Filters
          </button>
          <button
            onClick={handleSearch}
            className="bg-gradient-to-r from-[#2ec0cd] to-purple-600 text-white px-6 py-2 rounded-lg hover:from-[#2ec0cd]/90 hover:to-purple-600/90 transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      {hasSearched && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Search Results
            </h2>
            <span className="text-sm text-gray-600">
              Showing {dummyResults.length} results
            </span>
          </div>
          <SearchResults results={dummyResults} />
        </div>
      )}

      <AdvancedSearchModal
        isOpen={showAdvanced}
        onClose={() => setShowAdvanced(false)}
        onSearch={() => {
          setShowAdvanced(false);
          setHasSearched(true);
        }}
      />

      <MapToggle onClick={() => setShowMap(!showMap)} isOpen={showMap} />
      <MapDrawer
        isOpen={showMap}
        onClose={() => setShowMap(false)}
        results={dummyResults}
      />
    </div>
  );
};

export default SearchLeads;