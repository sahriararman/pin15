import React from 'react';
import { Phone, Mail, Clock, MapPin, ArrowRight, MessageCircle } from 'lucide-react';

export const GeneralContact: React.FC = () => {
  const handleContactClick = () => {
    // You can customize this action - email, phone, or external form
    window.location.href = 'mailto:contact@hello.pinclimb.com?subject=Pinterest Marketing Inquiry';
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Grow Your Pinterest Presence?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for a free consultation and Pinterest audit. 
            We'll connect you with the right local expert for your market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info Section */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MessageCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">WhatsApp</div>
                  <a 
                    href="https://wa.me/8801976927587"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-500 transition-colors duration-200"
                  >
                    +8801976927587
                  </a>
                  <div className="text-sm text-gray-500">Available 24/7</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <a 
                    href="mailto:contact@hello.pinclimb.com"
                    className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                  >
                    contact@hello.pinclimb.com
                  </a>
                  <div className="text-sm text-gray-500">We respond within 2 hours</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">Locations</div>
                  <div className="text-gray-600">New York, Los Angeles, Chicago, Miami, Austin, Seattle</div>
                  <div className="text-sm text-gray-500">And expanding nationwide</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">Business Hours</div>
                  <div className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</div>
                  <div className="text-gray-600">Saturday: 10:00 AM - 2:00 PM EST</div>
                  <div className="text-gray-600">Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white p-8 rounded-2xl shadow-xl order-1 lg:order-2">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Let's Start Your Pinterest Journey
              </h3>
              
              <p className="text-gray-600 mb-8">
                Ready to transform your Pinterest marketing? Click below to get started with your free consultation and Pinterest audit.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center group"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <a
                  href="https://wa.me/8801976927587?text=Hi! I'd like to start my Pinterest marketing journey. Can you help me get started?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white py-4 px-6 rounded-full font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center group"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
              
              <div className="mt-6 p-4 bg-red-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Free Pinterest Audit Included</h4>
                <p className="text-gray-600 text-sm">
                  Get a comprehensive analysis of your current Pinterest performance and actionable recommendations for improvement.
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};
