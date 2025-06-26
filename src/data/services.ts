import { ServicePackage } from '../types/location';

export const servicePackages: ServicePackage[] = [
  {
    name: 'Starter',
    price: '$1,297',
    duration: '/month',
    features: [
      'Pinterest account optimization',
      'Up to 50 pins per month',
      'Basic board strategy',
      'Monthly performance report',
      'Email support'
    ]
  },
  {
    name: 'Professional',
    price: '$2,497',
    duration: '/month',
    popular: true,
    features: [
      'Everything in Starter',
      'Up to 150 pins per month',
      'Pinterest Ads management',
      'Rich Pins setup',
      'Bi-weekly strategy calls',
      'Priority support',
      'Custom graphics creation'
    ]
  },
  {
    name: 'Enterprise',
    price: '$4,997',
    duration: '/month',
    features: [
      'Everything in Professional',
      'Unlimited pins',
      'Multi-account management',
      'Advanced analytics & reporting',
      'Weekly strategy sessions',
      'Dedicated account manager',
      'Custom Pinterest strategy',
      '24/7 priority support'
    ]
  }
];