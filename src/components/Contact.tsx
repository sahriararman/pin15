import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Location } from '../types/location';

interface ContactProps {
  location: Location;
}

export const Contact: React.FC<ContactProps> = ({ location }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    honeypot: '', // Hidden field for spam protection
  });
  const [status, setStatus] = useState(''); // Add state for feedback

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    // Check honeypot field - if filled, it's likely a bot
    if (formData.honeypot) {
      setStatus('Potential spam detected.');
      console.log('Potential spam detected - honeypot field was filled');
      return;
    }

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        }),
      });

      const result = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', company: '', message: '', honeypot: '' });
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus('Error: Failed to send message.');
      console.error('Submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Grow Your Pinterest Presence?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our {location.name} team for a free consultation and Pinterest audit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-red-600 mr-4 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <a 
                    href={`tel:${location.phone.replace(/\D/g, '')}`}
                    className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                  >
                    {location.phone}
                  </a>
                  <div className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-red-600 mr-4 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <a 
                    href={`mailto:${location.email}`}
                    className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                  >
                    {location.email}
                  </a>
                  <div className="text-sm text-gray-500">We respond within 2 hours</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-red-600 mr-4 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Office</div>
                  <div className="text-gray-600">{location.address}</div>
                  <div className="text-sm text-gray-500">By appointment only</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-red-600 mr-4 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Business Hours</div>
                  <div className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</div>
                  <div className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</div>
                  <div className="text-gray-600">Sunday: Closed</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-red-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Free Pinterest Audit</h4>
              <p className="text-gray-600 text-sm">
                Get a comprehensive analysis of your current Pinterest performance and actionable recommendations for improvement.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your Pinterest marketing goals..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </div>
              {status && <p className="mt-4 text-center text-gray-600">{status}</p>} {/* Display status */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
