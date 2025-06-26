export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: ProcessStep[];
  pricing: PricingTier[];
  faqs: FAQ[];
  caseStudy?: CaseStudy;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export interface PricingTier {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CaseStudy {
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  image: string;
}