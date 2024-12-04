import React from 'react';
import { Globe, Phone, MapPin, Star, ExternalLink } from 'lucide-react';

interface SearchResult {
  id: string;
  name: string;
  category: string;
  phone: string;
  address: string;
  rating: number;
  reviews: number;
  website: string;
  socials: string[];
}

interface SearchResultsProps {
  results: SearchResult[];
}

const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <div className="space-y-4">
      {results.map((result) => (
        <div
          key={result.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{result.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{result.category}</p>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-700">{result.rating}</span>
              <span className="text-sm text-gray-500">({result.reviews} reviews)</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm">{result.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{result.address}</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href={result.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">Website</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <button className="px-4 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Add to List
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;