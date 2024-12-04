import React from 'react';
import { X } from 'lucide-react';

interface AdvancedSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (filters: any) => void;
}

const AdvancedSearchModal = ({ isOpen, onClose, onSearch }: AdvancedSearchModalProps) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      // Add filter values here
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Advanced Search</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Search area range (within Mi.)
              </label>
              <input
                type="range"
                min="1"
                max="200"
                defaultValue="5"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>1 mi</span>
                <span>200 mi</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Region
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="USA">United States of America</option>
                <option value="CAN">Canada</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="hasReviews" className="rounded border-gray-300" />
                <label htmlFor="hasReviews">Has Reviews</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="hasWebsite" className="rounded border-gray-300" />
                <label htmlFor="hasWebsite">Has Website</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="hasPhone" className="rounded border-gray-300" />
                <label htmlFor="hasPhone">Has Phone</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="hasAddress" className="rounded border-gray-300" />
                <label htmlFor="hasAddress">Has Address</label>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Apply Filters
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdvancedSearchModal;