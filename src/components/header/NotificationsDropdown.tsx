import React from 'react';
import { Bell } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: 'List import complete',
    message: 'Your list "HVAC Leads" has been imported successfully',
    time: '2 hours ago',
    read: false,
  },
  {
    id: 2,
    title: 'New leads available',
    message: 'We found 150 new leads matching your search criteria',
    time: '5 hours ago',
    read: false,
  },
  {
    id: 3,
    title: 'Credits running low',
    message: 'You have 100 credits remaining. Consider upgrading your plan.',
    time: '1 day ago',
    read: true,
  },
];

const NotificationsDropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          <span className="text-sm text-[#2ec0cd]">Mark all as read</span>
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${
              !notification.read ? 'bg-blue-50/50' : ''
            }`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Bell className={`w-5 h-5 ${!notification.read ? 'text-[#2ec0cd]' : 'text-gray-400'}`} />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200">
        <button className="w-full text-center text-sm text-[#2ec0cd] hover:text-[#2ec0cd]/80">
          View all notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationsDropdown;