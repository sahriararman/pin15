import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, MapPin, Menu, X, ChevronUp } from 'lucide-react';
import { Location } from '../types/location';

interface HeaderProps {
  locations: Location[];
  selectedLocation: Location;
  onLocationChange: (location: Location) => void;
}

export const Header: React.FC<HeaderProps> = ({ locations, selectedLocation, onLocationChange }) => {
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Success Stories', href: '/testimonials' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const serviceLinks = [
    { name: 'Pinterest Organic Growth', href: '/services/pinterest-organic-growth' },
    { name: 'Pinterest Pin Design', href: '/services/pinterest-pin-design' },
    { name: 'Pinterest SEO for eCommerce', href: '/services/pinterest-seo-ecommerce' },
    { name: 'Pinterest Ads', href: '/services/pinterest-ads' },
    { name: 'Social Media Marketing', href: '/services/social-media-marketing' }
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section - Fixed width on mobile */}
          <Link to="/" className="flex items-center min-w-0 flex-1 lg:flex-initial">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div className="min-w-0 flex-1 lg:flex-initial">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900 truncate">PinClimb</h1>
              <p className="text-xs sm:text-sm text-gray-600 truncate">Grow with Pinterest</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`text-gray-700 hover:text-red-600 transition-colors duration-200 ${
                    location.pathname === item.href ? 'text-red-600 font-medium' : ''
                  }`}
                >
                  {item.name}
                </Link>
                {item.name === 'Services' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-3">Our Services</h3>
                      <div className="space-y-2">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block text-gray-600 hover:text-red-600 transition-colors duration-200 py-1"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* Location Selector - Hidden on mobile */}
            <div className="relative hidden lg:flex">
              <button
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <MapPin className="w-4 h-4 text-red-600" />
                <span className="font-medium">Locations</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isLocationDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border z-10">
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Select Your Location</h3>
                    <div className="space-y-2">
                      {locations.map((loc) => (
                        <Link
                          key={loc.id}
                          to={`/${loc.id}`}
                          onClick={() => {
                            onLocationChange(loc);
                            setIsLocationDropdownOpen(false);
                          }}
                          className={`w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 block ${
                            selectedLocation.id === loc.id ? 'bg-red-50 border border-red-200' : ''
                          }`}
                        >
                          <div className="font-medium text-gray-900">{loc.name}, {loc.state}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button - Always visible */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex-shrink-0 w-10 h-10 flex items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.name === 'Services' ? (
                    <div>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      >
                        <span>Services</span>
                        {isMobileServicesOpen ? (
                          <ChevronUp className="w-6 h-6" />
                        ) : (
                          <ChevronDown className="w-6 h-6" />
                        )}
                      </button>
                      {isMobileServicesOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              onClick={closeMobileMenu}
                              className="block px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={closeMobileMenu}
                      className={`block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 ${
                        location.pathname === item.href ? 'text-red-600 bg-red-50' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
