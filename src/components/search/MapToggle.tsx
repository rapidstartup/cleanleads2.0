import React from 'react';
import { Map } from 'lucide-react';

interface MapToggleProps {
  onClick: () => void;
  isOpen: boolean;
}

const MapToggle = ({ onClick, isOpen }: MapToggleProps) => {
  return (
    <button
      onClick={onClick}
      className={`fixed right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-l-lg p-3 transition-transform ${
        isOpen ? 'translate-x-[600px]' : ''
      }`}
    >
      <Map className="w-5 h-5 text-gray-600" />
    </button>
  );
};

export default MapToggle;