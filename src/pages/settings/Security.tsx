import React, { useState } from 'react';
import { Shield } from 'lucide-react';

const Security = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Security Settings</h2>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-500 mt-1">
                Add an extra layer of security to your account
              </p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  twoFactorEnabled ? 'bg-[#2ec0cd]' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    twoFactorEnabled ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Login History</h3>
          <div className="space-y-4">
            {[
              { device: 'Chrome on MacOS', location: 'San Francisco, CA', time: '2 hours ago' },
              { device: 'Firefox on Windows', location: 'Las Vegas, NV', time: '1 day ago' },
              { device: 'Safari on iPhone', location: 'New York, NY', time: '3 days ago' },
            ].map((session, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="font-medium text-gray-900">{session.device}</p>
                  <p className="text-sm text-gray-500">{session.location} • {session.time}</p>
                </div>
                {index === 0 ? (
                  <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                    Current Session
                  </span>
                ) : (
                  <button className="text-sm text-red-600 hover:text-red-700">
                    Revoke Access
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">API Access</h3>
          <p className="text-sm text-gray-500 mb-4">
            Manage your API keys and access tokens
          </p>
          <button className="text-[#2ec0cd] hover:text-[#2ec0cd]/80 text-sm font-medium">
            View API Settings →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;