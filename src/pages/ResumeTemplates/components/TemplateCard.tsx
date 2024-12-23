import { motion } from 'framer-motion';
import { FileEdit } from 'lucide-react';
import type { ResumeTemplate } from '../types';

interface TemplateCardProps {
  template: ResumeTemplate;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group relative bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={template.image}
          alt={template.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-semibold">{template.name}</h3>
          <p className="text-sm text-white/80">{template.description}</p>
          
          <div className="mt-4 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white rounded-lg px-6 py-2 transition-colors"
            >
              <FileEdit className="w-4 h-4" />
              Use Template
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}