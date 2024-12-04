import React from 'react';
import { Copy, RefreshCw } from 'lucide-react';

const Integrations = () => {
  const apiKey = "8ba05bd239faa48a52019d26493db67df80c7c9cb1f7ae2c06110ff2ce55f1";

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">API Integrations</h2>

      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Your API Key</h3>
        <div className="flex gap-2">
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 font-mono text-sm text-gray-600">
            {apiKey}
          </div>
          <button
            onClick={handleCopyKey}
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <Copy className="w-4 h-4 text-gray-600" />
          </button>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            <RefreshCw className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Use this key to authenticate your API requests
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">API Documentation</h3>
        <div className="bg-gray-50 rounded-lg p-6 font-mono text-sm">
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Authentication</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`curl -X GET "https://api.cleanleads.ai/v1/leads" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
            </pre>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Example Response</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`{
  "data": [
    {
      "id": "lead_123",
      "name": "Acme Corp",
      "email": "contact@acme.com",
      "phone": "+1234567890",
      "address": {
        "street": "123 Main St",
        "city": "San Francisco",
        "state": "CA",
        "zip": "94105"
      }
    }
  ],
  "meta": {
    "total": 1,
    "page": 1,
    "per_page": 10
  }
}`}
            </pre>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="font-medium text-gray-900">Available Integrations</h3>
        
        <div className="grid grid-cols-2 gap-6">
          {[
            { name: 'Salesforce', connected: true },
            { name: 'HubSpot', connected: false },
            { name: 'Pipedrive', connected: false },
            { name: 'Zoho CRM', connected: false },
          ].map((integration) => (
            <div
              key={integration.name}
              className="border border-gray-200 rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <h4 className="font-medium text-gray-900">{integration.name}</h4>
                <p className="text-sm text-gray-500">
                  {integration.connected ? 'Connected' : 'Not connected'}
                </p>
              </div>
              <button
                className={`px-4 py-2 rounded-lg ${
                  integration.connected
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    : 'bg-[#2ec0cd] text-white hover:bg-[#2ec0cd]/90'
                }`}
              >
                {integration.connected ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integrations;