import { TrendingUp, Eye, DollarSign, Users } from 'lucide-react';

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    icon: React.ComponentType<any>;
    color: string;
  }[];
  testimonial: string;
  clientTitle: string;
  image: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'bloom-co',
    clientName: 'Bloom & Co.',
    industry: 'Home & Garden',
    challenge: 'Low Pinterest visibility and minimal website traffic from the platform despite having beautiful products',
    solution: 'Implemented comprehensive Pinterest strategy with optimized boards, strategic pinning schedule, and targeted content creation',
    results: [
      { metric: 'Pinterest Traffic', value: '+340%', icon: TrendingUp, color: 'text-green-600' },
      { metric: 'Monthly Impressions', value: '2.8M', icon: Eye, color: 'text-blue-600' },
      { metric: 'Sales Revenue', value: '+280%', icon: DollarSign, color: 'text-purple-600' },
      { metric: 'Followers', value: '+450%', icon: Users, color: 'text-red-600' }
    ],
    testimonial: 'The Pinterest strategy completely transformed our online presence. We went from barely any Pinterest traffic to it being our second-largest traffic source. The team understood our brand perfectly and created pins that truly resonated with our audience.',
    clientTitle: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: 'artisan-kitchen',
    clientName: 'Artisan Kitchen',
    industry: 'Food & Lifestyle',
    challenge: 'Struggling to reach food enthusiasts and convert Pinterest viewers into customers',
    solution: 'Created mouth-watering recipe pins, optimized for Pinterest SEO, and launched targeted ad campaigns',
    results: [
      { metric: 'Recipe Saves', value: '+520%', icon: TrendingUp, color: 'text-green-600' },
      { metric: 'Website Clicks', value: '+380%', icon: Eye, color: 'text-blue-600' },
      { metric: 'Product Sales', value: '+195%', icon: DollarSign, color: 'text-purple-600' },
      { metric: 'Email Signups', value: '+290%', icon: Users, color: 'text-red-600' }
    ],
    testimonial: 'Our Pinterest ads strategy generated over $50K in revenue in the first quarter. The ROI exceeded all our expectations, and we finally found our ideal customers who love our artisan products.',
    clientTitle: 'Marketing Director',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'sunset-wellness',
    clientName: 'Sunset Wellness',
    industry: 'Health & Wellness',
    challenge: 'Difficulty reaching wellness-focused audience and building trust in competitive market',
    solution: 'Developed educational content strategy with wellness tips, infographics, and community engagement',
    results: [
      { metric: 'Engagement Rate', value: '+425%', icon: TrendingUp, color: 'text-green-600' },
      { metric: 'Brand Awareness', value: '+310%', icon: Eye, color: 'text-blue-600' },
      { metric: 'Course Sales', value: '+240%', icon: DollarSign, color: 'text-purple-600' },
      { metric: 'Community Growth', value: '+380%', icon: Users, color: 'text-red-600' }
    ],
    testimonial: 'The Pinterest marketing campaign drove 85% of our new customer acquisitions. Their expertise in our wellness niche was invaluable, and they helped us build a thriving community of engaged followers.',
    clientTitle: 'Wellness Coach & Founder',
    image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'urban-fashion',
    clientName: 'Urban Fashion Co.',
    industry: 'Fashion & Style',
    challenge: 'Struggling to showcase fashion collections effectively and drive e-commerce sales through Pinterest',
    solution: 'Created stunning fashion lookbooks, style guides, and seasonal collections with strategic Pinterest Shopping integration',
    results: [
      { metric: 'Fashion Saves', value: '+480%', icon: TrendingUp, color: 'text-green-600' },
      { metric: 'Product Views', value: '+390%', icon: Eye, color: 'text-blue-600' },
      { metric: 'Online Sales', value: '+320%', icon: DollarSign, color: 'text-purple-600' },
      { metric: 'Brand Followers', value: '+410%', icon: Users, color: 'text-red-600' }
    ],
    testimonial: 'Pinterest became our top traffic source for fashion inspiration. The visual storytelling approach helped customers discover our collections and increased our online sales dramatically.',
    clientTitle: 'Creative Director',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'tech-startup',
    clientName: 'InnovateTech',
    industry: 'Technology & SaaS',
    challenge: 'Difficulty explaining complex tech solutions visually and reaching decision-makers on Pinterest',
    solution: 'Developed infographic-heavy strategy with tech tutorials, productivity tips, and business solution showcases',
    results: [
      { metric: 'Lead Generation', value: '+275%', icon: TrendingUp, color: 'text-green-600' },
      { metric: 'Content Engagement', value: '+350%', icon: Eye, color: 'text-blue-600' },
      { metric: 'Demo Requests', value: '+180%', icon: DollarSign, color: 'text-purple-600' },
      { metric: 'Professional Network', value: '+220%', icon: Users, color: 'text-red-600' }
    ],
    testimonial: 'We never thought Pinterest could work for B2B tech, but the team proved us wrong. The infographic approach made our complex solutions accessible and generated quality leads.',
    clientTitle: 'Head of Marketing',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'luxury-travel',
    clientName: 'Elite Escapes',
    industry: 'Travel & Hospitality',
    challenge: 'Competing in saturated travel market and showcasing luxury experiences to affluent travelers',
    solution: 'Created aspirational travel content with destination guides, luxury experience showcases, and travel planning resources',
    results: [
      { metric: 'Travel Inspiration', value: '+560%', icon: TrendingUp, color: 'text-green-600' },
      { metric: 'Destination Saves', value: '+420%', icon: Eye, color: 'text-blue-600' },
      { metric: 'Booking Inquiries', value: '+290%', icon: DollarSign, color: 'text-purple-600' },
      { metric: 'Luxury Audience', value: '+380%', icon: Users, color: 'text-red-600' }
    ],
    testimonial: 'Pinterest transformed how we showcase luxury travel experiences. The visual platform perfectly captured the aspirational nature of our destinations and attracted high-value clients.',
    clientTitle: 'Luxury Travel Consultant',
    image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];