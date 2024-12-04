import React from 'react';
import { CreditCard, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Credits = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">List Credits & Billing</h2>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#2ec0cd] to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Available Credits</h3>
            <CreditCard className="w-5 h-5 opacity-75" />
          </div>
          <div className="text-3xl font-bold">2,500</div>
          <div className="text-white/80 text-sm mt-1">credits remaining</div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">Monthly Usage</h3>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-3xl font-bold text-gray-900">1,750</div>
          <div className="text-gray-500 text-sm mt-1">credits used this month</div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start mb-8">
        <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
        <div>
          <h4 className="text-sm font-semibold text-blue-800 mb-1">
            About List Credits
          </h4>
          <p className="text-sm text-blue-600">
            Credits are used when:
            <br />• Building new lead lists (1 credit per lead)
            <br />• Enhancing existing lists
            <br />• Accessing premium data fields
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center mr-4">
                <img src="https://www.svgrepo.com/show/328132/visa.svg" alt="Visa" className="h-4" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Visa ending in 4242</p>
                <p className="text-sm text-gray-500">Expires 12/24</p>
              </div>
            </div>
            <button className="text-[#2ec0cd] hover:text-[#2ec0cd]/80 text-sm font-medium">
              <Link to="/app/settings/billing">Update</Link>
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 mb-4">Purchase More Credits</h3>
        <div className="grid grid-cols-3 gap-6">
          {[
            { amount: 1000, price: 49, popular: false },
            { amount: 5000, price: 199, popular: true },
            { amount: 10000, price: 349, popular: false },
          ].map((plan) => (
            <div
              key={plan.amount}
              className={`relative rounded-lg border ${
                plan.popular
                  ? 'border-[#2ec0cd] bg-[#2ec0cd]/5'
                  : 'border-gray-200 bg-white'
              } p-6`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2ec0cd] text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              )}
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.amount.toLocaleString()} Credits
                </div>
                <div className="text-gray-500 mb-4">${plan.price}</div>
                <Link
                  to="/app/settings/billing"
                  className={`w-full py-2 rounded-lg ${
                    plan.popular
                      ? 'bg-[#2ec0cd] text-white hover:bg-[#2ec0cd]/90'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Purchase
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Credits;