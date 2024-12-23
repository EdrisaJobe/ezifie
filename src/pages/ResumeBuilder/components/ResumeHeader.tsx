import { motion } from 'framer-motion';
import { Share2 } from 'lucide-react';
import DownloadButton from '../../../components/shared/DownloadButton';
import TestDataButton from './TestDataButton';
import { ResumeData } from '../types';

interface ResumeHeaderProps {
  onTestData: (data: Partial<ResumeData>) => void;
  data: ResumeData;
}

export default function ResumeHeader({ onTestData, data }: ResumeHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Resume Builder</h1>
            <p className="text-sm text-gray-600">Create your professional resume</p>
          </div>
          <div className="flex items-center space-x-4">
            <TestDataButton onGenerate={onTestData} />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </motion.button>
            <DownloadButton data={data} />
          </div>
        </div>
      </div>
    </header>
  );
}