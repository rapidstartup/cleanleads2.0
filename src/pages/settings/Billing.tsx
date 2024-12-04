import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';

const Billing = () => {
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle billing update
    console.log('Updating billing details:', cardDetails);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Billing Settings</h2>

      <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Current Plan</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">Professional Plan</p>
            <p className="text-sm text-gray-500">$99/month</p>
          </div>
          <button className="text-[#2ec0cd] hover:text-[#2ec0cd]/80 text-sm font-medium">
            Change Plan
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ec0cd] focus:border-transparent"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ec0cd] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVC
              </label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ec0cd] focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cardholder Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ec0cd] focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-[#2ec0cd] text-white rounded-lg hover:bg-[#2ec0cd]/90"
          >
            Update Payment Method
          </button>
        </form>
      </div>
    </div>
  );
};

export default Billing;