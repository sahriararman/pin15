import React from 'react';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, Users, Award, MapPin, Star } from 'lucide-react';
import { Location } from '../types/location';

interface LocationMarketingProps {
  location: Location;
}

export const LocationMarketing: React.FC<LocationMarketingProps> = ({ location }) => {
  const replaceLocationPlaceholder = (text: string): string => {
    return text.replace(/\(Location\)/g, `${location.name}`);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with location badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-red-100 rounded-full text-red-800 font-medium mb-6">
            <MapPin className="w-5 h-5 mr-2" />
            {location.name} Pinterest Marketing Specialists
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Boost Your Brand's Visibility with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
              {location.name} Pinterest Marketing Experts
            </span>
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left column - Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Looking to increase brand awareness, drive traffic, and boost sales? Our{' '}
                  <span className="font-semibold text-red-600">{location.name} Pinterest Marketing Experts</span>{' '}
                  and experienced{' '}
                  <span className="font-semibold text-red-600">{location.name} Pinterest Marketing Manager</span>{' '}
                  specialize in powerful, results-driven Pinterest marketing services for businesses of all sizes.
                </p>
                
                <p>
                  We offer end-to-end solutions including Pinterest account management, Pinterest SEO, pin design, 
                  Pinterest advertising campaigns, and audience targeting strategies tailored to your niche.
                </p>
                
                <p>
                  With in-depth knowledge of Pinterest's algorithm and visual trends, we help your content reach 
                  the right audience at the right time. From optimized pin creation to content scheduling, 
                  analytics tracking, and ROI-focused strategy, our team ensures your brand performs at its best.
                </p>
                
                <p>
                  Whether you're an eCommerce store, lifestyle brand, or local business, our{' '}
                  <span className="font-semibold text-red-600">{location.name} Pinterest management services</span>{' '}
                  are designed to convert pins into profits. Trust our{' '}
                  <span className="font-semibold text-red-600">{location.name} Pinterest experts</span>{' '}
                  to grow your online presence and turn Pinterest into a powerful traffic and sales channel.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Get Your Free Pinterest Audit
                </Link>
                <Link
                  to="/testimonials"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-red-600 hover:text-red-600 transition-all duration-200"
                >
                  View Client Success Stories
                </Link>
              </div>
            </div>
          </div>

          {/* Right column - Stats and highlights */}
          <div className="space-y-6">
            {/* Location stats card */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <Star className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                <div className="text-3xl font-bold mb-2">{location.clientCount}+</div>
                <div className="text-red-100 mb-4">Active {location.name} Clients</div>
                <div className="border-t border-red-400 pt-4">
                  <div className="text-2xl font-bold text-yellow-300">{location.avgGrowth}</div>
                  <div className="text-red-100 text-sm">Average Growth Rate</div>
                </div>
              </div>
            </div>

            {/* Market reach card */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{location.marketSize}</div>
                <div className="text-gray-600 text-sm">Pinterest Users in {location.name}</div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-green-800 mb-1">Trusted by {location.name} Businesses</div>
                <div className="text-green-600 text-sm">5+ Years of Local Expertise</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Targeted Campaigns</h3>
            <p className="text-gray-600 text-sm">Reach your ideal {location.name} audience with precision targeting and local market insights</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Proven Growth</h3>
            <p className="text-gray-600 text-sm">Average {location.avgGrowth} increase in Pinterest traffic and engagement rates</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Local Expertise</h3>
            <p className="text-gray-600 text-sm">Deep understanding of the {location.name} market and consumer behavior patterns</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Results Guaranteed</h3>
            <p className="text-gray-600 text-sm">ROI-focused strategies that deliver measurable results and sustainable growth</p>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="mt-16 text-center bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Dominate Pinterest in {location.name}?
          </h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Join {location.clientCount}+ successful businesses in {location.name} who trust our Pinterest marketing expertise 
            to drive traffic, increase sales, and grow their brand presence.
          </p>
          <Link
            to="/contact"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Start Your {location.name} Pinterest Success Story
          </Link>
        </div>
      </div>
    </section>
  );
};