import React from 'react';
import { TrendingUp, AlertTriangle, Egg, Bird, DollarSign, Users } from 'lucide-react';
import StatsCard from './StatsCard';
import RecentActivity from './RecentActivity';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Chickens',
      value: '1,247',
      change: '+12%',
      changeType: 'increase' as const,
      icon: Bird,
      color: 'emerald'
    },
    {
      title: 'Eggs Today',
      value: '892',
      change: '+5%',
      changeType: 'increase' as const,
      icon: Egg,
      color: 'amber'
    },
    {
      title: 'Revenue',
      value: '$3,240',
      change: '+18%',
      changeType: 'increase' as const,
      icon: DollarSign,
      color: 'blue'
    },
    {
      title: 'Active Customers',
      value: '156',
      change: '+7%',
      changeType: 'increase' as const,
      icon: Users,
      color: 'purple'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Farm Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening on your farm today.</p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 mb-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Your Farm is Thriving!</h2>
            <p className="text-emerald-100 mb-4">All systems are running smoothly. Keep up the great work!</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span className="text-sm">All Coops Healthy</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span className="text-sm">Production Normal</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.pexels.com/photos/1300375/pexels-photo-1300375.jpeg" 
              alt="Chickens on farm" 
              className="w-64 h-40 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Alerts */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Alerts & Notifications</h3>
            <AlertTriangle className="w-5 h-5 text-amber-500" />
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-amber-800">Feed levels low</p>
                  <p className="text-xs text-amber-600">Coop A needs restocking</p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-blue-800">Vaccination due</p>
                  <p className="text-xs text-blue-600">Schedule for next week</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-200 group">
            <Bird className="w-8 h-8 text-gray-400 group-hover:text-emerald-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600 group-hover:text-emerald-600">Add New Chicken</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-amber-400 hover:bg-amber-50 transition-all duration-200 group">
            <Egg className="w-8 h-8 text-gray-400 group-hover:text-amber-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600 group-hover:text-amber-600">Record Egg Collection</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 group">
            <TrendingUp className="w-8 h-8 text-gray-400 group-hover:text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600 group-hover:text-blue-600">View Sales Report</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;