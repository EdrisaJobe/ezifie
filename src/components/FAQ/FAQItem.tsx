import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  delay: number;
}

export default function FAQItem({ question, answer, delay }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left"
      >
        <span className="text-xl font-semibold text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
        )}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-600">{answer}</p>
      </motion.div>
    </motion.div>
  );
}