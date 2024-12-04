import React from 'react';
import { Bell, User, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import CreditsTracker from '../common/CreditsTracker';
import NotificationsDropdown from '../header/NotificationsDropdown';
import UserDropdown from '../header/UserDropdown';

const Header = () => {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = React.useState(false);
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const notificationsRef = React.useRef(null);
  const userMenuRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login';
  };
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: 'Welcome back!',
          subtitle: "Here's what's happening with your leads"
        };
      case '/search':
        return {
          title: 'Search Leads',
          subtitle: 'Search our database of 65M+ businesses to build your perfect lead list'
        };
      case '/lists':
        return {
          title: 'My Lists',
          subtitle: 'View and manage your lead lists'
        };
      case '/import':
        return {
          title: 'Import & Clean',
          subtitle: 'Import and clean your existing lists with our AI-powered tools'
        };
      case '/tools':
        return {
          title: 'Data Cleaning Tools',
          subtitle: 'Clean and standardize your data with our AI-powered tools'
        };
      default:
        return {
          title: '',
          subtitle: ''
        };
    }
  };

  const renderCreditsTracker = () => {
    switch (location.pathname) {
      case '/search':
        return <CreditsTracker listCredits={432} />;
      case '/import':
        return <CreditsTracker listCredits={423} enhanceCredits={233} />;
      case '/tools':
        return <CreditsTracker listCredits={423} />;
      default:
        return null;
    }
  };

  const { title, subtitle } = getPageTitle();

  return (
    <header className="fixed top-0 right-0 left-64 z-10">
      <div className="bg-gradient-to-r from-[#2ec0cd] to-purple-600 px-6 py-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
            <p className="text-white/80">{subtitle}</p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="flex items-center gap-4">
              <div className="relative" ref={notificationsRef}>
                <button
                  className="p-2 hover:bg-white/10 rounded-full"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                <Bell className="w-5 h-5 text-white" />
                </button>
                <NotificationsDropdown
                  isOpen={showNotifications}
                  onClose={() => setShowNotifications(false)}
                />
              </div>
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2"
                >
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                </button>
                <UserDropdown
                  isOpen={showUserMenu}
                  onClose={() => setShowUserMenu(false)}
                  onLogout={handleLogout}
                />
              </div>
            </div>
            {renderCreditsTracker()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;