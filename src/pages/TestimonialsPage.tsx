import React from 'react';
import { Link } from 'react-router-dom';
import { CaseStudies } from '../components/CaseStudies';
import { Testimonials } from '../components/Testimonials';
import { testimonials } from '../data/testimonials';

export const TestimonialsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Case Studies Section with reduced top padding */}
      <div className="-mt-10">
        <CaseStudies showAll={true} />
      </div>

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Track Record Speaks for Itself
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Consistent results across all our client partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">300%</div>
              <div className="text-gray-600">Average Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their Pinterest presence with our help.
          </p>
          <Link
            to="/contact"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Start Your Success Story
          </Link>
        </div>
      </section>
    </div>
  );
};
