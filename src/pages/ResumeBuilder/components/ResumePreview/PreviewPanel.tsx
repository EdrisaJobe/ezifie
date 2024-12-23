import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ResumeData } from '../../types';
import PreviewContent from './PreviewContent';
import PreviewPagination from './PreviewPagination';
import FontSelector from '../FontSelector/FontSelector';
import ColorSelector from '../ColorSelector/ColorSelector';
import { resumeColors } from '../../utils/colors';

interface PreviewPanelProps {
  data: ResumeData;
  onFontChange: (font: ResumeData['font']) => void;
  onColorChange: (color: ResumeData['color']) => void;
}

export default function PreviewPanel({ data, onFontChange, onColorChange }: PreviewPanelProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Calculate total pages based on content height
  useEffect(() => {
    const content = document.getElementById('resume-content');
    if (content) {
      const contentHeight = content.scrollHeight;
      const pageHeight = 940; // 1056px - 96px (padding) - 20px (bottom padding)
      const pages = Math.ceil(contentHeight / pageHeight);
      setTotalPages(pages);
      if (currentPage > pages) {
        setCurrentPage(1);
      }
    }
  }, [data, currentPage]);

  return (
    <div className="hidden xl:block w-[816px] relative">
      <div className="sticky top-24 space-y-4">
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
          <ColorSelector
            colors={resumeColors}
            value={data.color}
            onChange={onColorChange}
          />
          <span className="text-xl font-bold text-primary">
            Preview
          </span>
          <FontSelector value={data.font} onChange={onFontChange} />
        </div>

        {totalPages > 1 && (
          <PreviewPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-white rounded-lg shadow-lg"
          style={{
            width: '816px',
            height: '1056px',
            padding: '48px 48px 68px', // Added 20px to bottom padding
            overflow: 'hidden'
          }}
        >
          <div 
            id="resume-preview"
            style={{
              fontFamily: data.font.family,
              '--color-primary': data.color.primary,
              '--color-primary-light': data.color.light,
              '--color-primary-hover': data.color.hover,
              transform: `translateY(-${(currentPage - 1) * 940}px)`, // Adjusted for new padding
              transition: 'transform 0.3s ease-in-out'
            } as React.CSSProperties}
          >
            <div id="resume-content">
              <PreviewContent data={data} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}