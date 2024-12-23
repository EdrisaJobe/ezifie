import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Font } from '../../types';
import { fonts } from '../../utils/fonts';
import FontOption from './FontOption';

interface FontSelectorProps {
  value: Font;
  onChange: (font: Font) => void;
}

export default function FontSelector({ value, onChange }: FontSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-primary transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-sm font-medium text-gray-700">Font Style:</span>
        <span style={{ fontFamily: value.family }} className="text-sm">
          {value.name}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute z-50 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200"
        >
          <div className="py-1">
            {fonts.map((font) => (
              <button
                key={font.name}
                onClick={() => {
                  onChange(font);
                  setIsOpen(false);
                }}
                className="block w-full px-4 text-left hover:bg-primary-light transition-colors"
              >
                <FontOption font={font} />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}