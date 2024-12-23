import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function PreviewBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-2 left-0 right-0 flex justify-center z-10"
          data-preview-banner
        >
          <div className="bg-primary text-white px-6 py-1.5 rounded-full text-sm font-medium shadow-lg">
            Preview
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}