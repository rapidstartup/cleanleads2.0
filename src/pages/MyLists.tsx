import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';

const MyLists = () => {
  const lists = [
    {
      id: 1,
      name: 'HVAC Las Vegas',
      type: 'Business Type',
      location: 'Las Vegas, NV, USA',
      records: 5,
      createdAt: '11/14/2024 11:04:25 PM',
    },
    {
      id: 2,
      name: 'Metal Works Austin',
      type: 'Business Type',
      location: 'Austin',
      records: 5,
      createdAt: '11/1/2024 5:30:54 AM',
    },
  ];

  return (
    <div>
      <div className="flex justify-end mb-6">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors">
          Build New List
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-4 text-sm font-semibold text-gray-600">Name</th>
              <th className="text-left p-4 text-sm font-semibold text-gray-600">Type</th>
              <th className="text-left p-4 text-sm font-semibold text-gray-600">Location</th>
              <th className="text-left p-4 text-sm font-semibold text-gray-600">Records</th>
              <th className="text-left p-4 text-sm font-semibold text-gray-600">Created At</th>
              <th className="text-left p-4 text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((list) => (
              <tr key={list.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4">
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 text-gray-400 mr-2" />
                    {list.name}
                  </div>
                </td>
                <td className="p-4">{list.type}</td>
                <td className="p-4">{list.location}</td>
                <td className="p-4">{list.records} places</td>
                <td className="p-4">{list.createdAt}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <Download className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLists;