import React from 'react';
import { Thermometer, Droplets, Wind, Heart, AlertCircle, CheckCircle } from 'lucide-react';

const Monitoring: React.FC = () => {
  const coops = [
    {
      id: 'A',
      name: 'Coop Alpha',
      chickens: 150,
      temperature: 22,
      humidity: 65,
      airQuality: 'Good',
      healthStatus: 'Excellent',
      lastCheck: '30 minutes ago',
      alerts: []
    },
    {
      id: 'B',
      name: 'Coop Beta',
      chickens: 180,
      temperature: 24,
      humidity: 70,
      airQuality: 'Good',
      healthStatus: 'Good',
      lastCheck: '45 minutes ago',
      alerts: ['Feed levels low']
    },
    {
      id: 'C',
      name: 'Coop Charlie',
      chickens: 120,
      temperature: 21,
      humidity: 60,
      airQuality: 'Excellent',
      healthStatus: 'Excellent',
      lastCheck: '1 hour ago',
      alerts: []
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'excellent':
        return 'text-green-600 bg-green-100';
      case 'good':
        return 'text-blue-600 bg-blue-100';
      case 'warning':
        return 'text-amber-600 bg-amber-100';
      case 'critical':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Poultry Monitoring</h1>
        <p className="text-gray-600">Real-time monitoring of your poultry health and environment.</p>
      </div>

      {/* Live Status Overview */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Live Farm Status</h2>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Live monitoring active</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="w-8 h-8 text-emerald-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">98.5%</p>
            <p className="text-sm text-gray-600">Overall Health</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Thermometer className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">22°C</p>
            <p className="text-sm text-gray-600">Avg Temperature</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Droplets className="w-8 h-8 text-cyan-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">65%</p>
            <p className="text-sm text-gray-600">Avg Humidity</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Wind className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">Good</p>
            <p className="text-sm text-gray-600">Air Quality</p>
          </div>
        </div>
      </div>

      {/* Coop Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {coops.map((coop) => (
          <div key={coop.id} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{coop.name}</h3>
                  <p className="text-sm text-gray-600">{coop.chickens} chickens</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(coop.healthStatus)}`}>
                  {coop.healthStatus}
                </div>
              </div>

              <div className="space-y-4">
                {/* Environmental Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-gray-600">Temperature</span>
                    <span className="text-sm font-medium text-gray-900 ml-auto">{coop.temperature}°C</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Droplets className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-600">Humidity</span>
                    <span className="text-sm font-medium text-gray-900 ml-auto">{coop.humidity}%</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Wind className="w-4 h-4 text-purple-500" />
                  <span className="text-sm text-gray-600">Air Quality</span>
                  <span className="text-sm font-medium text-gray-900 ml-auto">{coop.airQuality}</span>
                </div>

                {/* Alerts */}
                {coop.alerts.length > 0 && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-amber-800">Alerts</p>
                        {coop.alerts.map((alert, index) => (
                          <p key={index} className="text-xs text-amber-700">{alert}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {coop.alerts.length === 0 && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">All systems normal</span>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">Last check: {coop.lastCheck}</p>
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-gray-50 border-t">
              <button className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 text-sm font-medium">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Monitoring Chart Placeholder */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">24-Hour Trends</h3>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
              <Thermometer className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-600 font-medium">Environmental Trends Chart</p>
            <p className="text-sm text-gray-500">Temperature, humidity, and air quality over time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;