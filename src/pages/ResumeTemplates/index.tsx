import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../components/Navbar';
import TemplateFilter from './components/TemplateFilter';
import TemplateCard from './components/TemplateCard';
import { templates } from './data/templates';
import type { TemplateStyle } from './types';

export default function ResumeTemplates() {
  const [selectedStyle, setSelectedStyle] = useState<TemplateStyle | 'All'>('All');

  const filteredTemplates = templates.filter(
    template => selectedStyle === 'All' || template.style === selectedStyle
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Resume Templates</h1>
            <p className="mt-2 text-gray-600">
              Choose from our collection of professionally designed templates
            </p>
          </div>

          <TemplateFilter
            selectedStyle={selectedStyle}
            onStyleChange={setSelectedStyle}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStyle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}