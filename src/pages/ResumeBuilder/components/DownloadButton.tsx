import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';
import { downloadAsPDF, downloadAsDocx } from '../../../utils/downloadUtils';
import { ResumeData } from '../types';

interface DownloadButtonProps {
  elementId?: string;
  filename?: string;
  data?: ResumeData;
}

export default function DownloadButton({ 
  elementId = 'resume-preview',
  filename = 'resume',
  data 
}: DownloadButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<'pdf' | 'docx'>('pdf');

  const handleDownload = async () => {
    if (!data && selectedFormat === 'docx') {
      console.error('Resume data is required for DOCX download');
      return;
    }

    setIsDownloading(true);
    try {
      if (selectedFormat === 'pdf') {
        await downloadAsPDF(elementId, filename);
      } else {
        downloadAsDocx(data!, filename);
      }
    } catch (error) {
      console.error('Error downloading file:', error);
    }
    setIsDownloading(false);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors flex items-center gap-2"
      >
        <Download className="w-4 h-4" />
        {isDownloading ? 'Downloading...' : 'Download'}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50"
          >
            <div className="space-y-4">
              <div className="text-sm font-medium text-gray-900">Select Format</div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="format"
                    value="pdf"
                    checked={selectedFormat === 'pdf'}
                    onChange={(e) => setSelectedFormat(e.target.value as 'pdf' | 'docx')}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">PDF Format</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="format"
                    value="docx"
                    checked={selectedFormat === 'docx'}
                    onChange={(e) => setSelectedFormat(e.target.value as 'pdf' | 'docx')}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">Word Format</span>
                </label>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50"
              >
                {isDownloading ? 'Downloading...' : 'Download'}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}