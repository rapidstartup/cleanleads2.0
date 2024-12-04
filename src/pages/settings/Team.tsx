import React, { useState } from 'react';
import { User, Lock, Trash2 } from 'lucide-react';

const Team = () => {
  const [email, setEmail] = useState('');

  const teamMembers = [
    {
      email: 'john@example.com',
      status: 'Active',
      role: 'Admin',
      invited: '2024-01-15',
    },
    {
      email: 'sarah@example.com',
      status: 'Pending',
      role: 'Member',
      invited: '2024-02-20',
    },
  ];

  const handleInvite = (e) => {
    e.preventDefault();
    // Handle invite logic
    console.log('Inviting:', email);
    setEmail('');
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Team Management</h2>

      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Invite Team Member</h3>
        <form onSubmit={handleInvite} className="flex gap-2">
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ec0cd] focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#2ec0cd] text-white rounded-lg hover:bg-[#2ec0cd]/90"
          >
            Send Invite
          </button>
        </form>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left p-4 text-sm font-medium text-gray-600">User</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Status</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Role</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Invited</th>
              <th className="text-right p-4 text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member) => (
              <tr key={member.email} className="border-b border-gray-200">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#2ec0cd]/10 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-[#2ec0cd]" />
                    </div>
                    <span className="text-gray-900">{member.email}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      member.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {member.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1 text-gray-700">
                    <Lock className="w-4 h-4" />
                    <span>{member.role}</span>
                  </div>
                </td>
                <td className="p-4 text-gray-500">
                  {new Date(member.invited).toLocaleDateString()}
                </td>
                <td className="p-4">
                  <div className="flex justify-end">
                    <button className="p-2 text-gray-400 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
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

export default Team;