import { motion } from 'framer-motion';
import { Download, Share2, Eye, Upload } from 'lucide-react';

export default function CoverLetterHeader() {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle file upload logic here
      console.log('File uploaded:', file);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Cover Letter Builder</h1>
            <p className="text-sm text-gray-600">Create a compelling cover letter</p>
          </div>
         
         </div>
      </div>
    </header>
  );
}