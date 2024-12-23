import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import type { TemplateStyle } from '../types';

interface TemplateFilterProps {
  selectedStyle: TemplateStyle | 'All';
  onStyleChange: (style: TemplateStyle | 'All') => void;
}

export default function TemplateFilter({ selectedStyle, onStyleChange }: TemplateFilterProps) {
  const styles: (TemplateStyle | 'All')[] = ['All', 'Simple', 'Abstract', 'Modern'];

  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="flex items-center gap-2 text-gray-600">
        <Filter className="w-5 h-5" />
        <span>Filter by style:</span>
      </div>
      <div className="flex gap-2">
        {styles.map((style) => (
          <motion.button
            key={style}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onStyleChange(style)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedStyle === style
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {style}
          </motion.button>
        ))}
      </div>
    </div>
  );
}