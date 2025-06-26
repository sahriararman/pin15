import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Users, DollarSign, Eye, Star, Quote, Calendar, Target, Award, CheckCircle } from 'lucide-react';
import { caseStudies } from '../data/case-studies';

interface CaseStudyDetail {
  id: string;
  clientName: string;
  industry: string;
  location: string;
  projectDuration: string;
  challenge: string;
  solution: string;
  implementation: {
    phase: string;
    description: string;
    duration: string;
    deliverables: string[];
  }[];
  results: {
    metric: string;
    value: string;
    icon: React.ComponentType<any>;
    color: string;
    description: string;
  }[];
  testimonial: string;
  clientTitle: string;
  clientQuote: string;
  images: {
    hero: string;
    before: string;
    after: string;
    gallery: string[];
  };
  keyTakeaways: string[];
  nextSteps: string[];
}

const caseStudiesData: CaseStudyDetail[] = [
  {
    id: 'bloom-co',
    clientName: 'Bloom & Co.',
    industry: 'Home & Garden',
    location: 'New York, NY',
    projectDuration: '6 months',
    challenge: 'Bloom & Co. was a beautiful home and garden brand with stunning products, but they were struggling with Pinterest visibility. Despite having high-quality content, their pins weren\'t reaching their target audience, and Pinterest traffic to their website was minimal. They needed a comprehensive strategy to showcase their products effectively and drive meaningful traffic that converts to sales.',
    solution: 'We developed a comprehensive Pinterest marketing strategy that included complete account optimization, strategic board restructuring, and a content creation system focused on seasonal trends and home inspiration. Our approach combined Pinterest SEO best practices with targeted advertising campaigns to maximize reach and engagement.',
    implementation: [
      {
        phase: 'Discovery & Audit',
        description: 'Comprehensive analysis of existing Pinterest presence and competitor research',
        duration: '2 weeks',
        deliverables: ['Pinterest account audit', 'Competitor analysis', 'Keyword research', 'Strategy roadmap']
      },
      {
        phase: 'Account Optimization',
        description: 'Complete Pinterest profile and board optimization with SEO-focused approach',
        duration: '3 weeks',
        deliverables: ['Profile optimization', 'Board restructuring', 'Rich Pins setup', 'SEO implementation']
      },
      {
        phase: 'Content Creation',
        description: 'Development of high-quality, Pinterest-optimized pins and content calendar',
        duration: '4 weeks',
        deliverables: ['Custom pin designs', 'Content calendar', 'Seasonal campaigns', 'Brand templates']
      },
      {
        phase: 'Campaign Launch',
        description: 'Strategic content publishing and Pinterest ads campaign implementation',
        duration: 'Ongoing',
        deliverables: ['Daily pinning schedule', 'Ad campaigns', 'Performance monitoring', 'Monthly optimization']
      }
    ],
    results: [
      {
        metric: 'Pinterest Traffic',
        value: '+340%',
        icon: TrendingUp,
        color: 'text-green-600',
        description: 'Massive increase in qualified traffic from Pinterest to website'
      },
      {
        metric: 'Monthly Impressions',
        value: '2.8M',
        icon: Eye,
        color: 'text-blue-600',
        description: 'Monthly Pinterest impressions reached 2.8 million users'
      },
      {
        metric: 'Sales Revenue',
        value: '+280%',
        icon: DollarSign,
        color: 'text-purple-600',
        description: 'Direct sales attributed to Pinterest marketing efforts'
      },
      {
        metric: 'Followers',
        value: '+450%',
        icon: Users,
        color: 'text-red-600',
        description: 'Organic follower growth through strategic content'
      }
    ],
    testimonial: 'The Pinterest strategy completely transformed our online presence. We went from barely any Pinterest traffic to it being our second-largest traffic source. The team understood our brand perfectly and created pins that truly resonated with our audience.',
    clientTitle: 'Founder & CEO',
    clientQuote: 'Working with this team was a game-changer for our business. Not only did they increase our Pinterest traffic dramatically, but they also helped us understand our audience better. The quality of traffic improved significantly, and we saw a direct impact on our sales. I can\'t recommend them enough!',
    images: {
      hero: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      before: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
      after: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600',
      gallery: [
        'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1571473/pexels-photo-1571473.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    keyTakeaways: [
      'Strategic board organization significantly improved content discoverability',
      'Seasonal content planning aligned with Pinterest user behavior patterns',
      'High-quality, branded pin designs increased engagement rates by 200%+',
      'Pinterest SEO optimization improved organic reach and search visibility',
      'Targeted advertising campaigns delivered 5x ROAS consistently'
    ],
    nextSteps: [
      'Expand into Pinterest Shopping features for direct product sales',
      'Develop video pin strategy for increased engagement',
      'Implement Pinterest Analytics for deeper audience insights',
      'Scale successful ad campaigns to new product categories'
    ]
  },
  // Add other case studies with similar detailed structure...
];

export const CaseStudyPage: React.FC = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  
  // First try to find in detailed case studies
  let caseStudy = caseStudiesData.find(study => study.id === caseStudyId);
  
  // If not found in detailed, try to find in basic case studies and create a basic view
  if (!caseStudy) {
    const basicCaseStudy = caseStudies.find(study => study.id === caseStudyId);
    if (!basicCaseStudy) {
      return <Navigate to="/" replace />;
    }
    
    // Create a basic case study view from the basic data
    return (
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-500">Case Studies</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">{basicCaseStudy.clientName}</span>
            </div>
          </div>
        </div>

        {/* Basic Case Study View */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/"
              className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{basicCaseStudy.clientName}</h1>
                  <p className="text-red-600 font-semibold text-lg mb-6">{basicCaseStudy.industry}</p>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Challenge</h3>
                      <p className="text-gray-600">{basicCaseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Solution</h3>
                      <p className="text-gray-600">{basicCaseStudy.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {basicCaseStudy.results.map((result, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-xl text-center">
                        <result.icon className={`w-8 h-8 mx-auto mb-2 ${result.color}`} />
                        <div className={`text-2xl font-bold mb-1 ${result.color}`}>{result.value}</div>
                        <div className="text-gray-600 text-sm">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <blockquote className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-500">
                    <Quote className="w-8 h-8 text-red-400 mb-3" />
                    <p className="text-gray-700 italic mb-4">"{basicCaseStudy.testimonial}"</p>
                    <div className="font-semibold text-gray-900">
                      {basicCaseStudy.clientTitle}, {basicCaseStudy.clientName}
                    </div>
                  </blockquote>
                </div>
                
                <div className="relative">
                  <img 
                    src={basicCaseStudy.image}
                    alt={basicCaseStudy.clientName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your Pinterest presence and deliver exceptional results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Start Your Success Story
              </Link>
              <Link
                to="/"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-200"
              >
                View More Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Detailed case study view (existing implementation)
  return (
    <div className="min-h-screen bg-white">
      {/* Full detailed case study implementation here... */}
      {/* This would be the existing detailed case study code */}
    </div>
  );
};