import { Service } from '../types/service';

export const detailedServices: Service[] = [
  {
    id: 'pinterest-strategy',
    title: 'Pinterest Strategy & Analytics',
    shortDescription: 'Data-driven Pinterest strategies that maximize reach and engagement',
    fullDescription: 'Our comprehensive Pinterest strategy service combines deep market analysis, competitor research, and performance optimization to create a roadmap for sustainable growth. We analyze your current Pinterest presence, identify opportunities, and develop a customized strategy that aligns with your business goals.',
    icon: 'BarChart3',
    features: [
      'Comprehensive Pinterest audit',
      'Competitor analysis and benchmarking',
      'Keyword research and optimization',
      'Content strategy development',
      'Performance tracking and analytics',
      'Monthly strategy reviews',
      'Growth optimization recommendations',
      'ROI measurement and reporting'
    ],
    benefits: [
      'Increase Pinterest visibility by 300%+',
      'Drive qualified traffic to your website',
      'Improve engagement rates significantly',
      'Build a sustainable Pinterest presence',
      'Generate measurable ROI from Pinterest',
      'Stay ahead of Pinterest algorithm changes'
    ],
    process: [
      {
        step: 1,
        title: 'Pinterest Audit',
        description: 'Complete analysis of your current Pinterest performance, identifying strengths and opportunities.',
        duration: '3-5 days'
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Create a comprehensive Pinterest strategy based on your goals, audience, and market analysis.',
        duration: '1 week'
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Execute the strategy with optimized content, boards, and engagement tactics.',
        duration: 'Ongoing'
      },
      {
        step: 4,
        title: 'Monitoring & Optimization',
        description: 'Continuous monitoring and optimization based on performance data and trends.',
        duration: 'Monthly'
      }
    ],
    pricing: [
      {
        name: 'Strategy Audit',
        price: '$497',
        duration: 'one-time',
        features: [
          'Complete Pinterest audit',
          'Competitor analysis',
          'Strategy recommendations',
          '30-day action plan',
          'Email support'
        ]
      },
      {
        name: 'Strategy + Management',
        price: '$1,497',
        duration: '/month',
        popular: true,
        features: [
         'Complete profile overhaul + Rich Pins setup',
         'Unlimited SEO-optimized pins (graphic/video)',
         'Weekly content strategy + calendar planning',
         'Advanced keyword, trend & competitor research',
         'Dedicated community engagement & influencer outreach',
         'Detailed weekly analytics with strategic insights',
         'Dedicated account manager + 24/7 support',
         'Quarterly strategy reviews'
        ]
      }
    ],
    faqs: [
      {
        question: 'How long does it take to see results from Pinterest strategy?',
        answer: 'Most clients see initial improvements in 30-60 days, with significant growth typically occurring within 3-6 months of consistent implementation.'
      },
      {
        question: 'Do you work with businesses in all industries?',
        answer: 'Yes, we have experience across various industries. Pinterest works particularly well for retail, food, lifestyle, home decor, fashion, and service-based businesses.'
      },
      {
        question: 'What makes your Pinterest strategy different?',
        answer: 'Our strategies are data-driven and customized for each client. We focus on sustainable growth rather than quick fixes, ensuring long-term success on the platform.'
      }
    ],
    caseStudy: {
      clientName: 'Artisan Home Decor',
      industry: 'Home & Garden',
      challenge: 'Low Pinterest visibility and minimal website traffic from the platform',
      solution: 'Implemented comprehensive Pinterest strategy with optimized boards, strategic pinning schedule, and targeted content creation',
      results: [
        '340% increase in Pinterest impressions',
        '280% growth in website traffic from Pinterest',
        '150% increase in online sales attributed to Pinterest',
        '45% improvement in engagement rate'
      ],
      testimonial: 'The Pinterest strategy completely transformed our online presence. We went from barely any Pinterest traffic to it being our second-largest traffic source.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  },
  {
    id: 'content-creation',
    title: 'Creative Content Creation',
    shortDescription: 'Eye-catching pins and boards designed to capture attention and drive clicks',
    fullDescription: 'Our creative team specializes in designing Pinterest-optimized content that stands out in feeds and drives engagement. From custom pin designs to seasonal campaigns, we create visually compelling content that represents your brand beautifully while maximizing Pinterest performance.',
    icon: 'Palette',
    features: [
      'Custom pin design and creation',
      'Brand-consistent visual identity',
      'Seasonal campaign graphics',
      'Product photography optimization',
      'Infographic and educational content',
      'Video pin creation',
      'Board cover design',
      'Pinterest-optimized formatting'
    ],
    benefits: [
      'Increase click-through rates by 200%+',
      'Build strong brand recognition',
      'Improve Pinterest engagement',
      'Drive more qualified traffic',
      'Stand out from competitors',
      'Maintain consistent brand presence'
    ],
    process: [
      {
        step: 1,
        title: 'Brand Analysis',
        description: 'Review your brand guidelines, target audience, and Pinterest goals to inform our creative direction.',
        duration: '2-3 days'
      },
      {
        step: 2,
        title: 'Content Planning',
        description: 'Develop a content calendar with themes, campaigns, and pin concepts aligned with your strategy.',
        duration: '1 week'
      },
      {
        step: 3,
        title: 'Design & Creation',
        description: 'Create high-quality, Pinterest-optimized pins and graphics using professional design tools.',
        duration: 'Ongoing'
      },
      {
        step: 4,
        title: 'Review & Optimization',
        description: 'Regular review of content performance and optimization based on engagement data.',
        duration: 'Monthly'
      }
    ],
    pricing: [
      {
        name: 'Content Package',
        price: '$797',
        duration: '/month',
        features: [
          '20 custom pin designs',
          'Brand-consistent styling',
          'Pinterest optimization',
          '2 revisions per design',
          'High-resolution files'
        ]
      },
      {
        name: 'Premium Content',
        price: '$1,497',
        duration: '/month',
        popular: true,
        features: [
          '50 custom pin designs',
          'Video pin creation',
          'Seasonal campaigns',
          'Unlimited revisions',
          'Rush delivery available',
          'Board cover designs'
        ]
      }
    ],
    faqs: [
      {
        question: 'What file formats do you provide?',
        answer: 'We provide high-resolution PNG and JPG files optimized for Pinterest, along with source files when requested.'
      },
      {
        question: 'Can you match our existing brand guidelines?',
        answer: 'Absolutely! We work closely with your brand guidelines to ensure all content maintains consistency with your overall brand identity.'
      },
      {
        question: 'How many revisions are included?',
        answer: 'Our standard package includes 2 revisions per design, while our premium package offers unlimited revisions to ensure your complete satisfaction.'
      }
    ]
  },
  {
    id: 'pinterest-ads',
    title: 'Pinterest Ads Management',
    shortDescription: 'Strategic advertising campaigns that deliver measurable results and maximize ROI',
    fullDescription: 'Our Pinterest advertising experts create and manage high-performing ad campaigns that drive qualified traffic and conversions. We handle everything from campaign setup and audience targeting to budget optimization and performance analysis, ensuring maximum return on your advertising investment.',
    icon: 'Target',
    features: [
      'Campaign strategy and setup',
      'Advanced audience targeting',
      'Creative ad development',
      'Budget optimization',
      'A/B testing and optimization',
      'Conversion tracking setup',
      'Performance monitoring',
      'Detailed reporting and analysis'
    ],
    benefits: [
      'Achieve 3-5x ROAS consistently',
      'Reach highly targeted audiences',
      'Scale successful campaigns quickly',
      'Reduce cost per acquisition',
      'Increase brand awareness',
      'Drive qualified leads and sales'
    ],
    process: [
      {
        step: 1,
        title: 'Campaign Planning',
        description: 'Define campaign objectives, target audiences, and budget allocation based on your goals.',
        duration: '3-5 days'
      },
      {
        step: 2,
        title: 'Setup & Launch',
        description: 'Create campaigns, ad groups, and tracking systems, then launch with careful monitoring.',
        duration: '1 week'
      },
      {
        step: 3,
        title: 'Optimization',
        description: 'Continuous optimization based on performance data, including bid adjustments and audience refinement.',
        duration: 'Ongoing'
      },
      {
        step: 4,
        title: 'Scaling',
        description: 'Scale successful campaigns and expand reach while maintaining performance standards.',
        duration: 'Monthly'
      }
    ],
    pricing: [
      {
        name: 'Starter Ads',
        price: '$997',
        duration: '/month',
        features: [
          'Campaign setup and management',
          'Basic audience targeting',
          'Monthly optimization',
          'Performance reporting',
          'Email support'
        ]
      },
      {
        name: 'Professional Ads',
        price: '$1,997',
        duration: '/month',
        popular: true,
        features: [
          'Advanced campaign management',
          'Custom audience creation',
          'A/B testing',
          'Weekly optimization',
          'Detailed analytics',
          'Priority support'
        ]
      }
    ],
    faqs: [
      {
        question: 'What is the minimum ad spend required?',
        answer: 'We recommend a minimum monthly ad spend of $1,000 to allow for effective testing and optimization, though we can work with smaller budgets.'
      },
      {
        question: 'How do you measure campaign success?',
        answer: 'We track key metrics including ROAS, cost per click, conversion rate, and overall campaign ROI, providing detailed monthly reports.'
      },
      {
        question: 'Can you work with our existing Pinterest Business account?',
        answer: 'Yes, we can work with your existing account or help you set up a new Pinterest Business account optimized for advertising.'
      }
    ]
  }
];