import React from 'react';
import { Contact } from '../components/Contact';
import { locations } from '../data/locations';

interface ContactPageProps {
  selectedLocation: any;
}

export const ContactPage: React.FC<ContactPageProps> = ({ selectedLocation }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-pink-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-0">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">Touch</span>
            </h1>
          </div>
        </div>
      </section>

      <Contact location={selectedLocation} />
    </div>
  );
};
