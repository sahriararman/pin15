import React from 'react';
import { TrendingUp, Users, Target, Award } from 'lucide-react';
import { Location } from '../types/location';

interface HeroProps {
  location: Location;
}

export const Hero: React.FC<HeroProps> = ({ location }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-pink-50">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-pink-600/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-sm font-medium text-red-800 mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Serving {location.name}, {location.state}
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Strategic Organic Pinterest Marketing for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600"> Business Growth</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Drive traffic, increase sales, and grow your brand with our data-driven Pinterest marketing strategies. 
              Serving {location.name} businesses with proven results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Get Free Pinterest Audit
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-red-600 hover:text-red-600 transition-all duration-200">
                View Success Stories
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{location.avgGrowth}</div>
                <div className="text-sm text-gray-600">Avg Growth</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{location.clientCount}+</div>
                <div className="text-sm text-gray-600">Active Clients</div>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{location.marketSize}</div>
                <div className="text-sm text-gray-600">Market Reach</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">5+ Years</div>
                <div className="text-sm text-gray-600">Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                alt="Pinterest Marketing Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">+{location.avgGrowth}</div>
                    <div className="text-sm text-gray-600">Monthly Growth</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-pink-200 rounded-2xl transform rotate-3 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

function MapPin({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
