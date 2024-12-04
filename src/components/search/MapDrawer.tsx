import React from 'react';
import { MapPin, X } from 'lucide-react';

interface MapDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  results: any[];
}

const MapDrawer = ({ isOpen, onClose, results }: MapDrawerProps) => {
  return (
    <div
      className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-[600px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Mock Map */}
      <div className="relative h-full">
        <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-md p-4">
          <h3 className="font-medium text-gray-900 mb-2">Lead Locations</h3>
          <p className="text-sm text-gray-600">
            Showing {results.length} locations on the map
          </p>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Mock Map Background */}
        <div className="h-full w-full bg-blue-50">
          <div className="h-full w-full relative" style={{ background: 'url(https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-115.1398,36.1699,10/600x800?access_token=placeholder) center/cover' }}>
            {/* Mock Markers */}
            {results.map((result, index) => (
              <div
                key={result.id}
                className="absolute"
                style={{
                  top: `${30 + (index * 15)}%`,
                  left: `${20 + (index * 20)}%`,
                }}
              >
                <div className="relative group">
                  <MapPin className="w-6 h-6 text-blue-600 -mt-6 -ml-3" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                    <div className="bg-white rounded-lg shadow-lg p-2 text-sm whitespace-nowrap">
                      <p className="font-medium">{result.name}</p>
                      <p className="text-gray-600 text-xs">{result.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapDrawer;