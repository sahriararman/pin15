import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Users, ArrowRight } from 'lucide-react';
import { locations } from '../data/locations';

export const LocationsOverview: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Serving Major Markets Nationwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide localized Pinterest marketing services across multiple major markets, 
            with dedicated teams and market-specific expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Link
              key={location.id}
              to={`/${location.id}`}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group block"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                  <p className="text-gray-600">{location.state}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>{location.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-3" />
                  <span>{location.marketSize} market reach</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{location.avgGrowth}</div>
                  <div className="text-sm text-gray-600">Avg Growth</div>
                </div>
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{location.clientCount}+</div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
              </div>

              <div className="flex items-center justify-between w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 group-hover:scale-105">
                <span>Learn More About {location.name}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Don't see your city? We're expanding rapidly and may already serve your area.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-200"
          >
            Contact Us About Your Location
          </Link>
        </div>
      </div>
    </section>
  );
};
