import React from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, CreditCard, LogOut } from 'lucide-react';

const UserDropdown = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-[#2ec0cd]/10 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-[#2ec0cd]" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </div>
      </div>
      <div className="py-2">
        <Link
          to="/app/settings"
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          onClick={onClose}
        >
          <Settings className="w-4 h-4 mr-3" />
          Settings
        </Link>
        <Link
          to="/app/settings/credits"
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          onClick={onClose}
        >
          <CreditCard className="w-4 h-4 mr-3" />
          Billing & Credits
        </Link>
        <button
          onClick={onLogout}
          className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
        >
          <LogOut className="w-4 h-4 mr-3" />
          Sign out
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;