import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
import { ResumeColor } from '../../utils/colors';

interface ColorSelectorProps {
  colors: ResumeColor[];
  value: ResumeColor;
  onChange: (color: ResumeColor) => void;
}

export default function ColorSelector({ colors, value, onChange }: ColorSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
        <Palette className="w-4 h-4" />
        <span>Color:</span>
      </div>
      <div className="flex gap-1">
        {colors.map((color) => (
          <motion.button
            key={color.name}
            onClick={() => onChange(color)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 h-6 rounded-full transition-all duration-200 ${
              value.name === color.name ? 'ring-2 ring-offset-2 ring-gray-400' : ''
            }`}
            style={{ backgroundColor: color.primary }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
}