import React, { useState } from 'react';
import { ShoppingCart, Star, Filter, Search, MapPin, Clock } from 'lucide-react';
import ProductCard from './ProductCard';

const Marketplace: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: 'Fresh Free-Range Eggs',
      category: 'eggs',
      price: 6.50,
      unit: 'dozen',
      image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
      rating: 4.9,
      reviews: 24,
      description: 'Farm-fresh eggs from our free-range chickens',
      inStock: true,
      quantity: 48
    },
    {
      id: 2,
      name: 'Organic Brown Eggs',
      category: 'eggs',
      price: 8.00,
      unit: 'dozen',
      image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg',
      rating: 4.8,
      reviews: 18,
      description: 'Premium organic brown eggs, certified organic',
      inStock: true,
      quantity: 36
    },
    {
      id: 3,
      name: 'Rhode Island Red Hen',
      category: 'chickens',
      price: 25.00,
      unit: 'each',
      image: 'https://images.pexels.com/photos/1300375/pexels-photo-1300375.jpeg',
      rating: 4.7,
      reviews: 12,
      description: 'Healthy laying hen, 8 months old',
      inStock: true,
      quantity: 8
    },
    {
      id: 4,
      name: 'White Leghorn Hen',
      category: 'chickens',
      price: 22.00,
      unit: 'each',
      image: 'https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg',
      rating: 4.6,
      reviews: 15,
      description: 'Excellent egg layer, very friendly',
      inStock: true,
      quantity: 12
    },
    {
      id: 5,
      name: 'Bantam Rooster',
      category: 'chickens',
      price: 35.00,
      unit: 'each',
      image: 'https://images.pexels.com/photos/1300375/pexels-photo-1300375.jpeg',
      rating: 4.5,
      reviews: 8,
      description: 'Beautiful ornamental rooster, great for breeding',
      inStock: true,
      quantity: 3
    },
    {
      id: 6,
      name: 'Duck Eggs',
      category: 'eggs',
      price: 12.00,
      unit: 'dozen',
      image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
      rating: 4.8,
      reviews: 9,
      description: 'Rich and creamy duck eggs, perfect for baking',
      inStock: false,
      quantity: 0
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filters = [
    { id: 'all', label: 'All Products' },
    { id: 'eggs', label: 'Eggs' },
    { id: 'chickens', label: 'Live Chickens' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Marketplace</h1>
        <p className="text-gray-600">Browse and sell farm-fresh products from your poultry farm.</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <div className="flex space-x-2">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-emerald-100 text-emerald-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sales Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm">Today's Sales</p>
              <p className="text-2xl font-bold">$247.50</p>
              <p className="text-emerald-200 text-xs">12 orders</p>
            </div>
            <ShoppingCart className="w-8 h-8 text-emerald-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-100 text-sm">Active Listings</p>
              <p className="text-2xl font-bold">6</p>
              <p className="text-amber-200 text-xs">2 categories</p>
            </div>
            <Star className="w-8 h-8 text-amber-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Avg Rating</p>
              <p className="text-2xl font-bold">4.7</p>
              <p className="text-blue-200 text-xs">86 reviews</p>
            </div>
            <Star className="w-8 h-8 text-blue-200 fill-current" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-600 font-medium">No products found</p>
          <p className="text-gray-500 text-sm">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Add Product Button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all duration-200 flex items-center justify-center">
          <span className="text-2xl font-light">+</span>
        </button>
      </div>
    </div>
  );
};

export default Marketplace;