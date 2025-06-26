import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, DollarSign, Eye, ArrowRight, Star, Quote } from 'lucide-react';
import { caseStudies } from '../data/case-studies';

interface CaseStudiesProps {
  showAll?: boolean;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ showAll = false }) => {
  const featuredCase = caseStudies.find(study => study.featured) || caseStudies[0];
  const otherCases = showAll ? caseStudies.filter(study => !study.featured) : caseStudies.filter(study => !study.featured).slice(0, 2);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-green-100 rounded-full text-green-800 font-medium mb-6">
            <Star className="w-5 h-5 mr-2" />
            Real Client Success Stories
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transforming Businesses Through 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600"> Pinterest Marketing</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses across different industries achieve remarkable growth, 
            increase revenue, and build thriving Pinterest communities.
          </p>
        </div>

        {/* Featured Case Study - Clickable */}
        <div className="mb-20">
          <Link 
            to={`/case-study/${featuredCase.id}`}
            className="block bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content Side */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                    Featured Success Story
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200">
                    {featuredCase.clientName}
                  </h3>
                  <p className="text-red-600 font-semibold text-lg">{featuredCase.industry}</p>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">The Challenge</h4>
                    <p className="text-gray-600 leading-relaxed">{featuredCase.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Our Solution</h4>
                    <p className="text-gray-600 leading-relaxed">{featuredCase.solution}</p>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {featuredCase.results.map((result, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                      <result.icon className={`w-8 h-8 mx-auto mb-2 ${result.color}`} />
                      <div className={`text-2xl font-bold mb-1 ${result.color}`}>{result.value}</div>
                      <div className="text-gray-600 text-sm">{result.metric}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-500 mb-6">
                  <Quote className="w-8 h-8 text-red-400 mb-3" />
                  <p className="text-gray-700 italic mb-4 leading-relaxed">"{featuredCase.testimonial}"</p>
                  <div className="font-semibold text-gray-900">
                    {featuredCase.clientTitle}, {featuredCase.clientName}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg group-hover:shadow-xl">
                  View Full Case Study
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>

              {/* Image Side */}
              <div className="relative">
                <img 
                  src={featuredCase.image}
                  alt={featuredCase.clientName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Floating success badge */}
                <div className="absolute top-6 right-6 bg-white p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">{featuredCase.results[0].value}</div>
                    <div className="text-gray-600 text-sm">{featuredCase.results[0].metric}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Other Case Studies - Clickable Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${showAll ? 'lg:grid-cols-3' : ''} gap-8 mb-16`}>
          {otherCases.map((caseStudy, index) => (
            <Link 
              key={caseStudy.id} 
              to={`/case-study/${caseStudy.id}`}
              className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer"
            >
              <div className="relative">
                <img 
                  src={caseStudy.image}
                  alt={caseStudy.clientName}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold group-hover:text-yellow-300 transition-colors duration-200">
                    {caseStudy.clientName}
                  </h3>
                  <p className="text-gray-200">{caseStudy.industry}</p>
                </div>
                
                {/* Hover overlay with "Click to view" */}
                <div className="absolute inset-0 bg-red-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <ArrowRight className="w-12 h-12 mx-auto mb-2" />
                    <div className="font-semibold">Click to View Full Story</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Results */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {caseStudy.results.slice(0, 2).map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center p-3 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors duration-200">
                      <result.icon className={`w-6 h-6 mx-auto mb-1 ${result.color} group-hover:scale-110 transition-transform duration-200`} />
                      <div className={`text-lg font-bold ${result.color}`}>{result.value}</div>
                      <div className="text-gray-600 text-xs">{result.metric}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial Preview */}
                <div className="mb-4">
                  <Quote className="w-6 h-6 text-red-400 mb-2" />
                  <p className="text-gray-600 text-sm italic leading-relaxed line-clamp-3">
                    "{caseStudy.testimonial.substring(0, 120)}..."
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                      {caseStudy.clientTitle}
                    </div>
                    <div className="text-gray-500">{caseStudy.clientName}</div>
                  </div>
                  <div className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform duration-200">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Show more button for home page */}
        {!showAll && (
          <div className="text-center mb-16">
            <Link
              to="/testimonials"
              className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              View All Success Stories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        )}

        {/* Bottom Stats */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Proven Results Across All Industries</h3>
            <p className="text-red-100 max-w-2xl mx-auto">
              These success stories represent just a fraction of the businesses we've helped transform through strategic Pinterest marketing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-red-100 text-sm">Successful Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">300%</div>
              <div className="text-red-100 text-sm">Average Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">$2M+</div>
              <div className="text-red-100 text-sm">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">98%</div>
              <div className="text-red-100 text-sm">Client Satisfaction</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Your Success Story Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};