import { motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';

interface EnhanceButtonProps {
  onClick: () => void;
  className?: string;
}

export default function EnhanceButton({ onClick, className = '' }: EnhanceButtonProps) {
  return (
    <div className="group relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        type="button"
        className={`p-1.5 bg-primary text-white rounded-md hover:bg-primary-hover transition-colors ${className}`}
        aria-label="Use AI to enhance"
      >
        <Wand2 className="w-4 h-4" />
      </motion.button>
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Use AI to enhance
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
}