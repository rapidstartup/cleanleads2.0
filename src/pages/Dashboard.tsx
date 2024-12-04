import React from 'react';
import { Search, List, Upload, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatsGrid from '../components/dashboard/StatsGrid';
import ActivityChart from '../components/dashboard/ActivityChart';
import LeadsChart from '../components/dashboard/LeadsChart';

const DashboardCard = ({ icon: Icon, title, description, link, linkText }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-[#2ec0cd]" />
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link
      to={link}
      className="inline-flex items-center text-[#2ec0cd] hover:text-[#2ec0cd]/80 font-medium"
    >
      {linkText}
      <ArrowRight className="w-4 h-4 ml-1" />
    </Link>
  </div>
);

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <DashboardCard
          icon={Search}
          title="Search Leads"
          description="Search and build lists from our database of 65M+ businesses globally."
          link="/search"
          linkText="Start searching"
        />
        <DashboardCard
          icon={List}
          title="My Lists"
          description="View and manage your previously created and imported lists."
          link="/lists"
          linkText="View lists"
        />
        <DashboardCard
          icon={Upload}
          title="Import & Clean"
          description="Import and clean your existing lists with our AI-powered tools."
          link="/import"
          linkText="Import now"
        />
      </div>

      <StatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityChart />
        <LeadsChart />
      </div>
    </div>
  );
};

export default Dashboard;