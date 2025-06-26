import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LocationHero } from '../components/LocationHero';
import { LocationMarketing } from '../components/LocationMarketing';
import { ServicesOverview } from '../components/ServicesOverview';
import { Services } from '../components/Services';
import { CaseStudies } from '../components/CaseStudies';
import { LocationFAQ } from '../components/LocationFAQ';
import { Packages } from '../components/Packages';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { locations } from '../data/locations';
import { testimonials } from '../data/testimonials';

export const LocationPage: React.FC = () => {
  const { locationId } = useParams<{ locationId: string }>();
  
  const location = locations.find(loc => loc.id === locationId);
  
  if (!location) {
    return <Navigate to="/" replace />;
  }

  // Updated package data for location pages - same as home page
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
      <LocationHero location={location} />
      <ServicesOverview />
      <Services location={location} />
      <LocationMarketing location={location} />
      <CaseStudies />
      <LocationFAQ location={location} />
      <Packages packages={managementPackages} />
      <Testimonials testimonials={testimonials} />
      <Contact location={location} />
    </div>
  );
};