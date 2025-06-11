import { useState } from 'react';
import { Download } from 'lucide-react';
import { downloadAsPDF } from '../../../utils/download';

interface DownloadButtonProps {
  elementId?: string;
  filename?: string;
}

export default function DownloadButton({ 
  elementId = 'resume-preview',
  filename = 'resume'
}: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadAsPDF(elementId, filename);
    } catch (error) {
      console.error('Download failed:', error);
    }
    setIsDownloading(false);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors flex items-center gap-2 disabled:opacity-50"
    >
      <Download className="w-4 h-4" />
      {isDownloading ? 'Downloading...' : 'Download PDF'}
    </button>
  );
}