import { motion } from 'framer-motion';
import { Share2, Upload } from 'lucide-react';
import DownloadButton from '../../../components/shared/DownloadButton';

export default function CVHeader() {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle file upload logic here
      console.log('File uploaded:', file);
    }
  };

  const handleDownload = (format: 'pdf' | 'docx') => {
    // Handle download logic here
    console.log(`Downloading in ${format} format`);
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Cover Letter Builder</h1>
            <p className="text-sm text-gray-600">Create your cover letter</p>
          </div>
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </motion.button>
            <motion.label
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-primary-light text-primary rounded-lg hover:bg-primary-light/80 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Upload className="w-4 h-4" />
              <span>Upload Cover Letter</span>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
              />
            </motion.label>
            <DownloadButton onDownload={handleDownload} />
          </div>
        </div>
      </div>
    </header>
  );
}