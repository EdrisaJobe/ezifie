import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const features = {
  'What\'s Included': [
    {
      name: 'Resume Builder',
      description: 'Access to our award-winning resume builder',
      basic: true,
      pro: true,
      annual: true
    },
    {
      name: 'Resume Templates',
      description: '15+ templates to create a professional resume',
      basic: true,
      pro: true,
      annual: true
    },
    {
      name: 'Download in Multiple Formats',
      description: 'PDF, Word and TXT',
      basic: 'TXT format only',
      pro: 'PDF, Word, and TXT',
      annual: 'PDF, Word, and TXT'
    },
    {
      name: 'Unlimited Downloads, Prints and edits',
      description: 'Customize and edit your resume for different jobs',
      basic: false,
      pro: true,
      annual: true
    }
  ],
  'Advanced Features': [
    {
      name: 'Resume Check',
      description: 'Tools that can identify 30+ issues',
      basic: false,
      pro: true,
      annual: true
    },
    {
      name: 'Instant Job Matches',
      description: 'Recommended jobs matched to your resume',
      basic: false,
      pro: true,
      annual: true
    }
  ],
  'AI-Powered Tools': [
    {
      name: 'AI Resume Review',
      description: 'Get instant feedback on your resume',
      basic: false,
      pro: true,
      annual: true
    },
    {
      name: 'Interview Preparation',
      description: 'Access to interview questions and answers',
      basic: false,
      pro: true,
      annual: true
    }
  ]
};

export default function PricingComparison() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          Compare Plan Features
        </h2>
        <p className="mt-4 text-gray-600">
          Find the perfect plan that matches your needs
        </p>
      </motion.div>

      <div className="mt-8 relative">
        {/* Header */}
        <div className="grid grid-cols-4 gap-4 pb-4 border-b">
          <div className="text-sm font-medium text-gray-500">Features</div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900">Basic Package</div>
            <div className="text-sm text-gray-500">FREE</div>
            <div className="text-xs text-gray-500">Start for free. When you're ready, we have more.</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900">Personal Package</div>
            <div className="text-sm text-gray-500">$3.99</div>
            <div className="text-xs text-gray-500">With a 14-day trial for free</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900">Annual Package</div>
            <div className="text-sm text-gray-500">$130/year</div>
            <div className="text-xs text-gray-500">Pay $71.40 at once, save 79%</div>
          </div>
        </div>

        {/* Features */}
        {Object.entries(features).map(([category, items]) => (
          <div key={category}>
            <div className="py-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
            </div>
            {items.map((feature) => (
              <div key={feature.name} className="grid grid-cols-4 gap-4 py-4 border-b">
                <div>
                  <div className="text-sm font-medium text-gray-900">{feature.name}</div>
                  <div className="text-sm text-gray-500">{feature.description}</div>
                </div>
                <div className="flex justify-center items-center">
                  {typeof feature.basic === 'string' ? (
                    <span className="text-sm text-gray-500">{feature.basic}</span>
                  ) : feature.basic ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    <X className="w-5 h-5 text-gray-300" />
                  )}
                </div>
                <div className="flex justify-center items-center">
                  {typeof feature.pro === 'string' ? (
                    <span className="text-sm text-gray-500">{feature.pro}</span>
                  ) : feature.pro ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    <X className="w-5 h-5 text-gray-300" />
                  )}
                </div>
                <div className="flex justify-center items-center">
                  {typeof feature.annual === 'string' ? (
                    <span className="text-sm text-gray-500">{feature.annual}</span>
                  ) : feature.annual ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    <X className="w-5 h-5 text-gray-300" />
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}