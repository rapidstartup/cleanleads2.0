import React from 'react';
import { ListChecks, Users, Search, Zap } from 'lucide-react';

const stats = [
  {
    name: 'Total Lists',
    value: '156',
    change: '+12%',
    changeType: 'increase',
    icon: ListChecks,
    color: 'blue',
  },
  {
    name: 'Total Leads',
    value: '24,521',
    change: '+25%',
    changeType: 'increase',
    icon: Users,
    color: 'purple',
  },
  {
    name: 'Searches',
    value: '892',
    change: '+18%',
    changeType: 'increase',
    icon: Search,
    color: 'indigo',
  },
  {
    name: 'Credits Used',
    value: '15,234',
    change: '-5%',
    changeType: 'decrease',
    icon: Zap,
    color: 'pink',
  },
];

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.name}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                <Icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  stat.changeType === 'increase'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-500">{stat.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsGrid;