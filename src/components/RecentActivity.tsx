import React from 'react';
import { Clock, Egg, Bird, DollarSign, Package } from 'lucide-react';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'collection',
      title: 'Egg collection completed',
      description: '127 eggs collected from Coop B',
      time: '2 hours ago',
      icon: Egg,
      color: 'amber'
    },
    {
      id: 2,
      type: 'sale',
      title: 'Order #1245 completed',
      description: '24 eggs sold to Green Valley Market',
      time: '4 hours ago',
      icon: DollarSign,
      color: 'green'
    },
    {
      id: 3,
      type: 'health',
      title: 'Health check scheduled',
      description: 'Veterinary visit for Coop A',
      time: '6 hours ago',
      icon: Bird,
      color: 'blue'
    },
    {
      id: 4,
      type: 'inventory',
      title: 'Feed delivery received',
      description: '500kg premium chicken feed',
      time: '1 day ago',
      icon: Package,
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'amber':
        return 'bg-amber-100 text-amber-600';
      case 'green':
        return 'bg-green-100 text-green-600';
      case 'blue':
        return 'bg-blue-100 text-blue-600';
      case 'purple':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <Clock className="w-5 h-5 text-gray-400" />
      </div>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${getColorClasses(activity.color)}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;