import React from 'react';
import { MainHero } from '../components/MainHero';
import { GeneralServices } from '../components/GeneralServices';
import { ServicesOverview } from '../components/ServicesOverview';
import { ServiceVideoSection } from '../components/ServiceVideoSection';
import { CaseStudies } from '../components/CaseStudies';
import { BlogSection } from '../components/BlogSection';
import { Packages } from '../components/Packages';
import { Testimonials } from '../components/Testimonials';
import { GeneralContact } from '../components/GeneralContact';
import { testimonials } from '../data/testimonials';

export const HomePage: React.FC = () => {
  // Updated package data for home page
  const managementPackages = [
    {
      name: 'Starter Growth',
      price: '$250',
      duration: '/month',
      description: 'Perfect for small businesses starting their Pinterest journey',
      features: [
        'Profile setup and optimization',
        '60 custom, SEO-optimized pins/month',
        'Foundational keyword & hashtag research',
        'Content calendar planning',
        'Monthly performance summary'
      ],
      popular: false
    },
    {
      name: 'Professional Growth',
      price: '$350',
      duration: '/month',
      description: 'Comprehensive Pinterest management for growing businesses',
      features: [
         'Full profile & board optimization',
         '100 custom pins with SEO & scheduling',
         'Strategic content calendar with seasonal topics',
         'In-depth keyword & trend research',
         'Engagement tactics for audience growth',
         'Monthly analytics and reporting',
         'Bi-weekly check-ins & priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Growth',
      price: '$500',
      duration: '/month',
      description: 'Full-service Pinterest management for established brands',
      features: [
         'Complete profile overhaul + Rich Pins setup',
         'Unlimited SEO-optimized pins (graphic/video)',
         'Weekly content strategy + calendar planning',
         'Advanced keyword, trend & competitor research',
         'Dedicated community engagement & influencer outreach',
         'Detailed weekly analytics with strategic insights',
         'Dedicated account manager + 24/7 support',
         'Quarterly strategy reviews'
      ],
      popular: false
    }
  ];

  return (
    <div>
      <MainHero />
      
      {/* Adjusted padding for the video section */}
      <ServiceVideoSection 
        videoType="youtube"
        youtubeVideoId="O0zX_2TYMrc"
        className="pt-4 pb-6"  // Reduced top and bottom padding
      />
      
      <ServicesOverview />
      <GeneralServices />

      {/* Adjusted padding for the Case Studies section */}
      <CaseStudies showAll={false} className="pt-4 pb-6"  // Adjust padding here too
      />
      
      {/* Adjusted padding for Packages section */}
      <Packages 
        packages={managementPackages} 
        className="pt-4 pb-6"  // Reduced top and bottom padding
      />

      <Testimonials testimonials={testimonials} />
      <BlogSection />
      <GeneralContact />
    </div>
  );
};
