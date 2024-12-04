import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

interface CleaningToolProps {
  name: string;
  description: string;
  placeholder: string;
  examples: string[];
}

const CleaningTool: React.FC<CleaningToolProps> = ({
  name,
  description,
  placeholder,
  examples,
}) => {
  const [input, setInput] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file drop
  };

  const handleClean = () => {
    setIsProcessing(true);
    // Simulate cleaning process
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div>
      <div className="max-w-2xl">
        <p className="text-gray-600 mb-6">{description}</p>
      </div>

      <div
        className={`border-2 border-dashed rounded-lg p-6 mb-6 ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="w-full h-32 p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
              <Upload className="w-4 h-4 mr-2" />
              Upload File
            </button>
            <span className="text-sm text-gray-500">or drag and drop</span>
          </div>
          <button
            onClick={handleClean}
            disabled={!input && isProcessing}
            className={`px-6 py-2 text-white rounded-lg ${
              isProcessing
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isProcessing ? 'Processing...' : 'Clean Data'}
          </button>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Examples:</h3>
        <div className="space-y-2">
          {examples.map((example, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-white rounded border border-gray-200"
            >
              <code className="text-sm text-gray-600">{example}</code>
              <button
                onClick={() => setInput(example)}
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                Try
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CleaningTool;