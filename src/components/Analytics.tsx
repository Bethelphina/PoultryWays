import React, { useState } from 'react';
import { BarChart3, TrendingUp, TrendingDown, DollarSign, Egg, Bird, Calendar } from 'lucide-react';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('week');

  const salesData = [
    { period: 'Mon', eggs: 120, chickens: 8, revenue: 580 },
    { period: 'Tue', eggs: 135, chickens: 6, revenue: 640 },
    { period: 'Wed', eggs: 145, chickens: 10, revenue: 720 },
    { period: 'Thu', eggs: 130, chickens: 5, revenue: 595 },
    { period: 'Fri', eggs: 165, chickens: 12, revenue: 850 },
    { period: 'Sat', eggs: 180, chickens: 15, revenue: 980 },
    { period: 'Sun', eggs: 155, chickens: 9, revenue: 760 }
  ];

  const metrics = [
    {
      title: 'Total Revenue',
      value: '$5,125',
      change: '+12.5%',
      changeType: 'increase' as const,
      icon: DollarSign,
      color: 'emerald'
    },
    {
      title: 'Eggs Sold',
      value: '1,030',
      change: '+8.3%',
      changeType: 'increase' as const,
      icon: Egg,
      color: 'amber'
    },
    {
      title: 'Chickens Sold',
      value: '65',
      change: '+15.2%',
      changeType: 'increase' as const,
      icon: Bird,
      color: 'blue'
    },
    {
      title: 'Avg Order Value',
      value: '$24.50',
      change: '+3.1%',
      changeType: 'increase' as const,
      icon: TrendingUp,
      color: 'purple'
    }
  ];

  const topProducts = [
    { name: 'Fresh Free-Range Eggs', sales: 485, revenue: 3155, change: 12.3 },
    { name: 'Rhode Island Red Hen', sales: 25, revenue: 625, change: 8.7 },
    { name: 'Organic Brown Eggs', sales: 180, revenue: 1440, change: -2.1 },
    { name: 'White Leghorn Hen', sales: 18, revenue: 396, change: 15.8 }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-100 text-emerald-600';
      case 'amber':
        return 'bg-amber-100 text-amber-600';
      case 'blue':
        return 'bg-blue-100 text-blue-600';
      case 'purple':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600">Track your farm's performance and sales metrics.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(metric.color)}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.changeType === 'increase' ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  {metric.change}
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
                <p className="text-sm text-gray-600">{metric.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Sales Chart */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Weekly Sales Overview</h3>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-end space-x-2">
            {salesData.map((data, index) => {
              const maxRevenue = Math.max(...salesData.map(d => d.revenue));
              const height = (data.revenue / maxRevenue) * 200;
              return (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-gray-100 rounded-t-lg flex flex-col justify-end" style={{ height: '200px' }}>
                    <div 
                      className="w-full bg-emerald-500 rounded-t-lg transition-all duration-300 hover:bg-emerald-600"
                      style={{ height: `${height}px` }}
                      title={`Revenue: $${data.revenue}`}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 font-medium">{data.period}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Production Chart */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Production Trends</h3>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-end space-x-2">
            {salesData.map((data, index) => {
              const maxEggs = Math.max(...salesData.map(d => d.eggs));
              const height = (data.eggs / maxEggs) * 200;
              return (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-gray-100 rounded-t-lg flex flex-col justify-end" style={{ height: '200px' }}>
                    <div 
                      className="w-full bg-amber-500 rounded-t-lg transition-all duration-300 hover:bg-amber-600"
                      style={{ height: `${height}px` }}
                      title={`Eggs: ${data.eggs}`}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 font-medium">{data.period}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Products</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Product</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Units Sold</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Revenue</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Change</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-600">{product.sales}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-medium text-gray-900">${product.revenue}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className={`flex items-center ${
                      product.change > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {product.change > 0 ? (
                        <TrendingUp className="w-4 h-4 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 mr-1" />
                      )}
                      <span className="font-medium">{Math.abs(product.change)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;