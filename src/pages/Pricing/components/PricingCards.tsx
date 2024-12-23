import { motion } from 'framer-motion';
import PricingCard from './PricingCard';

const plans = [
  {
    name: 'FREE PERSONAL',
    price: '0.00',
    description: 'For Individuals',
    color: 'teal',
    features: [
      'Access to our award-winning resume builder',
      '15+ templates to create a professional resume',
      'Get a matching cover letter in seconds',
      'Basic Assistance'
    ]
  },
  {
    name: 'FREE BUSINESS',
    price: '3.99',
    description: 'For Small Businesses',
    color: 'primary',
    features: [
      'Everything in Free Personal, plus:',
      'Unlimited downloads and edits',
      'AI-powered content suggestions',
      'Priority support'
    ],
    popular: true
  },
  {
    name: 'ANNUAL',
    price: '130.00',
    originalPrice: '250.00',
    discount: 48,
    description: 'For Large Companies',
    color: 'coral',
    features: [
      'Everything in Free Business, plus:',
      'Advanced AI features',
      'Team collaboration tools',
      'Dedicated account manager'
    ],
    billingPeriod: 'year'
  }
];

export default function PricingCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * (index + 1) }}
        >
          <PricingCard {...plan} />
        </motion.div>
      ))}
    </div>
  );
}