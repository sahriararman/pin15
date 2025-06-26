import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Location } from '../types/location';

interface FooterProps {
  locations: Location[];
}

export const Footer: React.FC<FooterProps> = ({ locations }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">PinClimb</h3>
                <p className="text-gray-400 text-sm">Climb with Pinterest</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              We help businesses grow their online presence and drive sales through strategic Pinterest marketing.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/services/pinterest-organic-growth" className="hover:text-white transition-colors duration-200">Pinterest Organic Growth</a></li>
              <li><a href="/services/pinterest-pin-design" className="hover:text-white transition-colors duration-200">Pinterest Pin Design</a></li>
              <li><a href="/services/pinterest-ads" className="hover:text-white transition-colors duration-200">Pinterest Ads</a></li>
              <li><a href="/services/pinterest-seo-ecommerce" className="hover:text-white transition-colors duration-200">Pinterest SEO for eCommerce</a></li>
              <li><a href="/services/social-media-marketing" className="hover:text-white transition-colors duration-200">Social Media Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="/testimonials" className="hover:text-white transition-colors duration-200">Success Stories</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="/services" className="hover:text-white transition-colors duration-200">Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Locations</h4>
            <div className="space-y-4">
              {locations.slice(0, 3).map((location) => (
                <div key={location.id} className="text-gray-400">
                  <div className="font-medium text-white">{location.name}, {location.state}</div>
                  <div className="text-sm flex items-center mt-1">
                    <Phone className="w-3 h-3 mr-2" />
                    <a 
                      href={`tel:${location.phone.replace(/\D/g, '')}`}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>
              ))}
              <a href="/services" className="text-red-400 hover:text-red-300 text-sm transition-colors duration-200">
                View all locations →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 PinClimb. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};