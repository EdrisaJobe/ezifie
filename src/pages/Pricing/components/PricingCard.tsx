import { motion } from 'framer-motion';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  color: 'teal' | 'primary' | 'coral';
  features: string[];
  popular?: boolean;
  originalPrice?: string;
  discount?: number;
  billingPeriod?: 'month' | 'year';
}

const colorClasses = {
  teal: {
    bg: 'bg-teal-500',
    hover: 'hover:bg-teal-600',
    border: 'border-teal-200',
    shadow: 'shadow-teal-200/20'
  },
  primary: {
    bg: 'bg-primary',
    hover: 'hover:bg-primary-hover',
    border: 'border-primary/20',
    shadow: 'shadow-primary/20'
  },
  coral: {
    bg: 'bg-coral-500',
    hover: 'hover:bg-coral-600',
    border: 'border-coral-200',
    shadow: 'shadow-coral-200/20'
  }
};

export default function PricingCard({ 
  name, 
  price, 
  description, 
  color, 
  features,
  popular,
  originalPrice,
  discount,
  billingPeriod = 'month'
}: PricingCardProps) {
  const colors = colorClasses[color];

  return (
    <div className={`relative rounded-2xl bg-white p-8 shadow-lg ${
      popular ? 'border-2 border-primary' : 'border border-gray-200'
    }`}>
      {popular && (
        <div className="absolute -top-5 left-0 right-0 flex justify-center">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <div className="mt-4 flex items-baseline justify-center">
          {originalPrice && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="line-through text-2xl text-gray-400 mr-2"
            >
              ${originalPrice}
            </motion.span>
          )}
          <span className="text-5xl font-bold tracking-tight text-gray-900">
            ${price}
          </span>
          <span className="ml-1 text-xl font-semibold text-gray-500">
            /{billingPeriod}
          </span>
        </div>
        {discount && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3
            }}
            className="mt-2"
          >
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
                color: ['#10B981', '#059669', '#10B981']
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="inline-block px-2 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full"
            >
              Save {discount}%
            </motion.span>
          </motion.div>
        )}
        <p className="mt-2 text-gray-500">{description}</p>
      </div>

      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <svg
              className={`h-5 w-5 ${color === 'primary' ? 'text-primary' : `text-${color}-500`}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-3 text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`mt-8 w-full rounded-lg ${colors.bg} ${colors.hover} px-4 py-3 text-white shadow-lg ${colors.shadow} transition-all duration-200`}
      >
        Get Started
      </motion.button>
    </div>
  );
}