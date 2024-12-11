import React from 'react';
import { Search, List, Upload, Home, Wrench } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };
  
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/app' },
    { icon: Search, label: 'Search Leads', path: '/app/search' },
    { icon: List, label: 'My Lists', path: '/app/lists' },
    { icon: Upload, label: 'Import & Clean', path: '/app/import' },
    { icon: Wrench, label: 'Tools', path: '/app/tools' },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold" style={{ color: '#2ec0cd' }}>cleanLeads</h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-[#2ec0cd]/5 transition-colors ${
                isActive ? 'bg-[#2ec0cd]/10 text-[#2ec0cd] border-r-4 border-[#2ec0cd]' : ''
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
        <button
          onClick={handleLogout}
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 transition-colors mt-auto"
        >
          <i className="fas fa-sign-out-alt w-5 h-5 mr-3" />
          <span className="font-medium">Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;