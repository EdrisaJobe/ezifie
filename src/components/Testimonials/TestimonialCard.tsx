import { motion } from 'framer-motion';
import type { Testimonial } from './testimonialData';

interface TestimonialCardProps extends Testimonial {
  index: number;
}

export default function TestimonialCard({ image, name, role, company, companyLogo, quote, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-4 h-full flex flex-col"
    >
      <div className="flex items-start gap-3 mb-3">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900 text-sm">{name}</h3>
          <p className="text-xs text-gray-600">{role}</p>
        </div>
      </div>
      
      <blockquote className="text-gray-700 text-sm mb-4 flex-grow">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center justify-between mt-auto">
        <p className="text-xs text-gray-500">Joined {company}</p>
        <img
          src={companyLogo}
          alt={company}
          className="h-5 object-contain"
        />
      </div>
    </motion.div>
  );
}