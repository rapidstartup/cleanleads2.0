import React, { useState } from 'react';
import { Phone, Mail, MapPin, Upload, AlertCircle } from 'lucide-react';
import CleaningTool from '../components/tools/CleaningTool';

const Tools = () => {
  const [activeTab, setActiveTab] = useState('phones');

  const tools = [
    {
      id: 'phones',
      name: 'Clean Phone Numbers',
      icon: Phone,
      description: 'Standardize and validate phone numbers across different formats',
      placeholder: 'Paste phone numbers or upload a CSV/Excel file',
      examples: ['(555) 123-4567', '555.123.4567', '5551234567'],
    },
    {
      id: 'emails',
      name: 'Clean Email Addresses',
      icon: Mail,
      description: 'Verify and format email addresses, remove invalid ones',
      placeholder: 'Paste email addresses or upload a CSV/Excel file',
      examples: ['user@example.com', 'invalid@@email.com', 'test.email@domain.co.uk'],
    },
    {
      id: 'addresses',
      name: 'Clean Addresses',
      icon: MapPin,
      description: 'Standardize addresses and add missing information',
      placeholder: 'Paste addresses or upload a CSV/Excel file',
      examples: ['123 Main St, City, State 12345', '456 Park Avenue South, NY 10016'],
    },
  ];

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveTab(tool.id)}
                className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 ${
                  activeTab === tool.id
                    ? 'border-[#2ec0cd] text-[#2ec0cd]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tool.icon className="w-4 h-4 mr-2" />
                {tool.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {tools.map((tool) => (
            <div key={tool.id} className={activeTab === tool.id ? 'block' : 'hidden'}>
              <CleaningTool {...tool} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start">
        <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
        <div>
          <h4 className="text-sm font-semibold text-blue-800 mb-1">
            About our cleaning tools
          </h4>
          <p className="text-sm text-blue-600">
            Our specialized cleaning tools help you:
            <br />• Remove duplicates and invalid entries
            <br />• Standardize formatting across your data
            <br />• Validate against our global database
            <br />• Export clean data in your preferred format
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tools;