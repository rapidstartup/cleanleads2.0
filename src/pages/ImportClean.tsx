import React, { useState } from 'react';
import { Upload, AlertCircle } from 'lucide-react';

const ImportClean = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrag}
        >
          <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Upload className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Drop your file here
          </h3>
          <p className="text-gray-600 mb-4">
            or click to select a file from your computer
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors">
            Select File
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Supported formats: CSV, XLSX (max 100MB)
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start">
        <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
        <div>
          <h4 className="text-sm font-semibold text-blue-800 mb-1">
            About our cleaning process
          </h4>
          <p className="text-sm text-blue-600">
            Our AI-powered cleaning process will automatically:
            <br />• Remove duplicates and invalid entries
            <br />• Standardize formatting
            <br />• Verify contact information
            <br />• Enrich data with additional business information
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImportClean;