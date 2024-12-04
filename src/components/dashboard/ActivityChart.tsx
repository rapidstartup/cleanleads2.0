import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { date: 'Jan', searches: 65, lists: 28, leads: 2100 },
  { date: 'Feb', searches: 59, lists: 32, leads: 2400 },
  { date: 'Mar', searches: 80, lists: 41, leads: 2900 },
  { date: 'Apr', searches: 81, lists: 34, leads: 2600 },
  { date: 'May', searches: 56, lists: 28, leads: 2300 },
  { date: 'Jun', searches: 55, lists: 35, leads: 2800 },
  { date: 'Jul', searches: 40, lists: 32, leads: 2400 },
];

const ActivityChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Activity Overview</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorSearches" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorLists" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fill: '#6B7280' }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fill: '#6B7280' }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="searches"
              stroke="#6366F1"
              fillOpacity={1}
              fill="url(#colorSearches)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="lists"
              stroke="#8B5CF6"
              fillOpacity={1}
              fill="url(#colorLists)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityChart;