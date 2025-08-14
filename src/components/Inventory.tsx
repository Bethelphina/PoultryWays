import React, { useState } from 'react';
import { Package, Plus, Edit, Trash2, AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react';

const Inventory: React.FC = () => {
  const [activeTab, setActiveTab] = useState('eggs');

  const inventoryData = {
    eggs: [
      { id: 1, type: 'White Eggs - Large', quantity: 240, unit: 'dozens', reorderLevel: 50, lastUpdated: '2 hours ago', trend: 'down' },
      { id: 2, type: 'Brown Eggs - Large', quantity: 180, unit: 'dozens', reorderLevel: 40, lastUpdated: '2 hours ago', trend: 'up' },
      { id: 3, type: 'Free Range - Medium', quantity: 96, unit: 'dozens', reorderLevel: 30, lastUpdated: '3 hours ago', trend: 'up' },
      { id: 4, type: 'Duck Eggs', quantity: 24, unit: 'dozens', reorderLevel: 20, lastUpdated: '1 day ago', trend: 'down' }
    ],
    chickens: [
      { id: 1, type: 'Rhode Island Red', quantity: 45, unit: 'birds', reorderLevel: 10, lastUpdated: '1 hour ago', trend: 'down' },
      { id: 2, type: 'White Leghorn', quantity: 38, unit: 'birds', reorderLevel: 15, lastUpdated: '1 hour ago', trend: 'up' },
      { id: 3, type: 'Sussex', quantity: 22, unit: 'birds', reorderLevel: 8, lastUpdated: '4 hours ago', trend: 'up' },
      { id: 4, type: 'Bantam Mixed', quantity: 15, unit: 'birds', reorderLevel: 5, lastUpdated: '6 hours ago', trend: 'down' }
    ],
    supplies: [
      { id: 1, type: 'Layer Feed', quantity: 850, unit: 'kg', reorderLevel: 200, lastUpdated: '1 day ago', trend: 'down' },
      { id: 2, type: 'Starter Feed', quantity: 120, unit: 'kg', reorderLevel: 50, lastUpdated: '2 days ago', trend: 'up' },
      { id: 3, type: 'Calcium Supplements', quantity: 45, unit: 'kg', reorderLevel: 15, lastUpdated: '3 days ago', trend: 'down' },
      { id: 4, type: 'Bedding Straw', quantity: 180, unit: 'bales', reorderLevel: 40, lastUpdated: '1 week ago', trend: 'down' }
    ]
  };

  const tabs = [
    { id: 'eggs', label: 'Eggs', count: inventoryData.eggs.length },
    { id: 'chickens', label: 'Live Chickens', count: inventoryData.chickens.length },
    { id: 'supplies', label: 'Supplies', count: inventoryData.supplies.length }
  ];

  const currentData = inventoryData[activeTab as keyof typeof inventoryData];

  const getLowStockItems = () => {
    const allItems = [...inventoryData.eggs, ...inventoryData.chickens, ...inventoryData.supplies];
    return allItems.filter(item => item.quantity <= item.reorderLevel);
  };

  const lowStockItems = getLowStockItems();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Inventory Management</h1>
        <p className="text-gray-600">Track and manage your farm's inventory levels and supplies.</p>
      </div>

      {/* Inventory Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm">Total Items</p>
              <p className="text-2xl font-bold">12</p>
              <p className="text-emerald-200 text-xs">Active products</p>
            </div>
            <Package className="w-8 h-8 text-emerald-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Value</p>
              <p className="text-2xl font-bold">$8,420</p>
              <p className="text-blue-200 text-xs">Current inventory</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-100 text-sm">Low Stock</p>
              <p className="text-2xl font-bold">{lowStockItems.length}</p>
              <p className="text-amber-200 text-xs">Items need reorder</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-amber-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Categories</p>
              <p className="text-2xl font-bold">3</p>
              <p className="text-purple-200 text-xs">Product types</p>
            </div>
            <Package className="w-8 h-8 text-purple-200" />
          </div>
        </div>
      </div>

      {/* Low Stock Alerts */}
      {lowStockItems.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Low Stock Alert</h3>
              <p className="text-amber-700 mb-3">The following items are running low and may need reordering:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {lowStockItems.map((item) => (
                  <div key={`${item.id}-alert`} className="bg-white rounded-lg p-3 border border-amber-200">
                    <p className="font-medium text-amber-800">{item.type}</p>
                    <p className="text-sm text-amber-600">
                      {item.quantity} {item.unit} remaining (reorder at {item.reorderLevel})
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inventory Tabs */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden mb-8">
        <div className="border-b border-gray-200">
          <div className="flex space-x-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-emerald-500 text-emerald-600 bg-emerald-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              {tabs.find(tab => tab.id === activeTab)?.label} Inventory
            </h3>
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Item</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Item</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Quantity</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Reorder Level</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Last Updated</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-900">{item.type}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900">{item.quantity} {item.unit}</span>
                        {item.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-600">{item.reorderLevel} {item.unit}</span>
                    </td>
                    <td className="py-4 px-4">
                      {item.quantity <= item.reorderLevel ? (
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                          Low Stock
                        </span>
                      ) : item.quantity <= item.reorderLevel * 2 ? (
                        <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                          Medium
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          In Stock
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-500">{item.lastUpdated}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 transition-colors duration-200">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;