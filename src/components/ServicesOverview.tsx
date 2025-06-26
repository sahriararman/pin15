import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Palette, Target, ArrowRight, MessageSquare, Settings, TrendingUp } from 'lucide-react';

const featuredServices = [
  {
    icon: BarChart3,
    title: 'Pinterest organic growth',
    description: 'Grow your Pinterest organically with smart SEO strategies, keyword-optimized content, and clear insights that boost long-term results.',
    href: '/services/pinterest-organic-growth'
  },
  {
    icon: Palette,
    title: 'SEO-Optimized Pinterest Pin Design',
    description: 'Custom-designed pins that grab attention and rank higher with keyword-rich titles and descriptions.',
    href: '/services/pinterest-pin-design'
  },
  {
    icon: Target,
    title: 'Pinterest Ads Management',
    description: 'Strategic advertising campaigns that deliver measurable results and maximize your ROI.',
    href: '/services/pinterest-seo-ecommerce'
  },
  {
    icon: MessageSquare,
    title: 'Pinterest SEO for eCommerce',
    description: 'Get more clicks and conversions with eCommerce-focused Pinterest SEO—optimized pins, boards, and product descriptions.',
    href: '/services/pinterest-seo-ecommerce'
  },
  {
    icon: Settings,
    title: 'Pinterest Account Optimization',
    description: 'Complete Pinterest profile and board optimization to improve discoverability and performance in search results.',
    href: '/services/pinterest-organic-growth'
  },
  {
    icon: TrendingUp,
    title: 'Performance Reporting',
    description: 'Detailed monthly reports showing growth metrics, ROI, and actionable insights for continued success and optimization.',
    href: '/services/pinterest-organic-growth'
  }
];

export const ServicesOverview: React.FC = () => {
  return (
    <section className="pt-20 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Pinterest Marketing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Pinterest marketing solutions designed to grow your business and drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <Link
                to={service.href}
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors duration-200 group-hover:translate-x-1"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};