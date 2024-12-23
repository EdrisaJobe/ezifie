import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PreviewPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PreviewPagination({ currentPage, totalPages, onPageChange }: PreviewPaginationProps) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-primary disabled:opacity-50 disabled:hover:text-gray-600"
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </motion.button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onPageChange(index + 1)}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentPage === index + 1
                ? 'bg-primary text-white'
                : 'text-gray-600 hover:bg-primary-light hover:text-primary'
            }`}
          >
            {index + 1}
          </motion.button>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-primary disabled:opacity-50 disabled:hover:text-gray-600"
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </motion.button>
    </div>
  );
}