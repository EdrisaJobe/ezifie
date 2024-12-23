import { motion } from 'framer-motion';

export default function PricingHeader() {
  return (
    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-primary font-semibold mb-4"
      >
        PRICING
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
      >
        Reasonable & Flexible{' '}
        <span className="text-primary">Plans.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 max-w-2xl mx-auto"
      >
        Choose the perfect plan for your needs. Whether you're an individual job seeker
        or a large company, we have you covered with our flexible pricing options.
      </motion.p>
    </div>
  );
}