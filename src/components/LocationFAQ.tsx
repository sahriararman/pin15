import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Location } from '../types/location';

interface LocationFAQProps {
  location: Location;
}

export const LocationFAQ: React.FC<LocationFAQProps> = ({ location }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0); // First question open by default

  const replaceLocationPlaceholder = (text: string): string => {
    return text.replace(/\(Location\)/g, location.name);
  };

  const faqs = [
    {
      question: `What services do you offer as a Pinterest Marketing Manager in ${location.name}?`,
      answer: `As your dedicated Pinterest Marketing Manager in ${location.name}, I provide a full suite of services to elevate your brand's visibility on Pinterest. This includes setting up and optimizing your Pinterest account with Pinterest SEO strategies, creating and scheduling engaging pins optimized with relevant keywords, monitoring performance metrics to refine SEO tactics, and managing targeted ad campaigns to drive traffic and conversions — allowing you to focus on growing your business.`
    },
    {
      question: `Do you offer Pinterest marketing services only in ${location.name}?`,
      answer: `While I'm based in ${location.name}, my Pinterest marketing services are available to clients worldwide. I offer complete services including account setup and optimization, keyword-rich pin design, Pinterest SEO, content scheduling, performance tracking, and ad campaign management — all tailored to your brand's goals, regardless of location.`
    },
    {
      question: 'Do you offer custom pin design services?',
      answer: `Yes! We create eye-catching, branded pin graphics designed to boost engagement, drive clicks, and convert viewers into customers — all tailored to the visual identity of your ${location.name}-based business.`
    },
    {
      question: `Can you manage Pinterest scheduling for businesses in ${location.name}?`,
      answer: 'Absolutely. We plan, create, and schedule Pinterest content using strategic timing and industry tools to maximize reach and keep your brand consistently active on the platform.'
    },
    {
      question: `Do you provide Pinterest SEO services in ${location.name}?`,
      answer: 'Yes, we offer Pinterest SEO to improve your visibility through keyword-rich titles, descriptions, hashtags, and organized boards — helping your content rank higher on both Pinterest and Google.'
    },
    {
      question: `Are Pinterest ads effective for businesses in ${location.name}?`,
      answer: `Pinterest ads are a powerful way to reach your ideal audience. We create and manage targeted ad campaigns tailored to ${location.name}-based businesses, designed to increase traffic, engagement, and conversions.`
    },
    {
      question: `What types of businesses in ${location.name} benefit most from Pinterest marketing?`,
      answer: `We serve eCommerce stores, lifestyle bloggers, coaches, interior design brands, wellness professionals, and service-based businesses in ${location.name} — especially those with visual content and female-oriented audiences.`
    },
    {
      question: 'How often should I post on Pinterest to grow my brand?',
      answer: 'Consistency matters. We recommend posting 5 to 15 pins per day. We create a custom content calendar and handle scheduling to ensure steady Pinterest growth for your brand.'
    },
    {
      question: 'What does your monthly Pinterest management service include?',
      answer: 'My monthly Pinterest management service covers everything you need to grow your brand. I provide a customized strategy, create and schedule keyword-optimized pins, apply Pinterest SEO techniques, monitor performance with detailed analytics, and deliver monthly reports to keep your account thriving and aligned with your goals.'
    },
    {
      question: 'How long does it take to see Pinterest marketing results?',
      answer: 'Pinterest is a long-term platform. Most clients begin seeing increased traffic and engagement within 4–6 weeks, with stronger results developing over time as content gains visibility and trust.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-red-100 rounded-full text-red-800 font-medium mb-6">
            <HelpCircle className="w-5 h-5 mr-2" />
            📌 {location.name} Pinterest Marketing FAQs
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
              {location.name} Pinterest Marketing Experts
            </span>{' '}
            Answer the Top FAQs Every Business Owner Should Know
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get expert answers to the most common Pinterest marketing questions from our {location.name} specialists.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-start hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 text-lg leading-relaxed pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {expandedFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-red-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </div>
              </button>
              
              {expandedFaq === index && (
                <div className="px-8 pb-6">
                  <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions About Pinterest Marketing in {location.name}?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our {location.name} Pinterest marketing experts are here to help. Get personalized answers 
            and a custom strategy for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Schedule Free Consultation
            </Link>
            <Link
              to="/contact"
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-200"
            >
              Get Your Free Pinterest Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};