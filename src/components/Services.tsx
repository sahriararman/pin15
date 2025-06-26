import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Palette, Target, MessageSquare, Settings, TrendingUp } from 'lucide-react';
import { Location } from '../types/location';

interface ServicesProps {
  location: Location;
}

const services = [
  {
    icon: BarChart3,
    title: 'Pinterest Analytics & Strategy',
    description: 'Comprehensive analysis of your Pinterest performance with data-driven strategies to maximize reach and engagement for (Location) businesses.',
    features: ['Performance audits', 'Competitor analysis in (Location)', 'Growth strategy', 'KPI tracking']
  },
  {
    icon: Palette,
    title: 'Creative Content Creation',
    description: 'Eye-catching pins and boards designed to capture attention and drive clicks to your website, tailored for the (Location) market.',
    features: ['Custom pin designs', 'Board optimization', 'Seasonal campaigns for (Location)', 'Brand consistency']
  },
  {
    icon: Target,
    title: 'Pinterest Ads Management',
    description: 'Strategic advertising campaigns that deliver measurable results and maximize your return on investment in the (Location) market.',
    features: ['Campaign setup', 'Audience targeting in (Location)', 'Budget optimization', 'A/B testing']
  },
{
  icon: MessageSquare,
  title: 'Pinterest Affiliate Marketing',
  description: 'Boost earnings with Pinterest affiliate marketing for Amazon using SEO-optimized pins that drive clicks and sales.',
  features: [
    'Affiliate pin creation',
    'Niche product targeting',
    'SEO-rich descriptions',
    'Click-through optimization'
  ]
},

  {
    icon: Settings,
    title: 'Account Optimization',
    description: 'Complete Pinterest profile and board optimization to improve discoverability and performance for (Location) searches.',
    features: ['Profile setup', 'Rich Pins', 'SEO optimization for (Location)', 'Board strategy']
  },
  {
    icon: TrendingUp,
    title: 'Performance Reporting',
    description: 'Detailed monthly reports showing growth metrics, ROI, and actionable insights for continued success in the (Location) market.',
    features: ['Monthly reports', 'ROI tracking', 'Growth metrics for (Location)', 'Strategic insights']
  }
];

const replaceLocationPlaceholder = (text: string, location: Location): string => {
  return text.replace(/\(Location\)/g, `${location.name}, ${location.state}`);
};

export const Services: React.FC<ServicesProps> = ({ location }) => {
  return (
    <section id="services" className="py-1 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Pinterest Marketing Solutions for {location.name}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy development to content creation and advertising management, 
            we provide everything {location.name}, {location.state} businesses need to succeed on Pinterest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">
                {replaceLocationPlaceholder(service.description, location)}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    {replaceLocationPlaceholder(feature, location)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-5 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Schedule a Call with {location.name} Pinterest Marketing Manager
          </Link>
        </div>
      </div>
    </section>
  );
};