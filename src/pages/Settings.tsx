import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { User, CreditCard, Link as LinkIcon, Users, Shield, CreditCard as BillingIcon } from 'lucide-react';

const Settings = () => {
  const navItems = [
    { icon: User, label: 'Profile', path: '/app/settings' },
    { icon: CreditCard, label: 'List Credits', path: '/app/settings/credits' },
    { icon: BillingIcon, label: 'Billing', path: '/app/settings/billing' },
    { icon: Shield, label: 'Security', path: '/app/settings/security' },
    { icon: LinkIcon, label: 'Integrations', path: '/app/settings/integrations' },
    { icon: Users, label: 'Team Members', path: '/app/settings/team' },
  ];

  return (
    <div>
      <div className="flex gap-6">
        <nav className="w-64 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-fit">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/app/settings'}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 ${
                    isActive ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''
                  }`
                }
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;