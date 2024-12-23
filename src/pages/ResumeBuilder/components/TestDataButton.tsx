import { motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';
import { generateTestData } from '../utils/testData';
import { ResumeData } from '../types';

interface TestDataButtonProps {
  onGenerate: (data: Partial<ResumeData>) => void;
}

export default function TestDataButton({ onGenerate }: TestDataButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onGenerate(generateTestData())}
      className="px-4 py-2 bg-primary-light text-primary rounded-lg hover:bg-primary-light/80 transition-colors flex items-center gap-2"
    >
      <Wand2 className="w-4 h-4" />
      <span>Generate Test Data</span>
    </motion.button>
  );
}