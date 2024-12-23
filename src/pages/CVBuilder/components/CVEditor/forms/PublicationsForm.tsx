import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { Publication } from '../../../types';
import FormSection from './shared/FormSection';
import FormInput from './shared/FormInput';

interface PublicationsFormProps {
  publications: Publication[];
  onChange: (publications: Publication[]) => void;
}

export default function PublicationsForm({ publications, onChange }: PublicationsFormProps) {
  const [isAdding, setIsAdding] = useState(false);

  const addPublication = (newPub: Publication) => {
    onChange([...publications, { ...newPub, id: crypto.randomUUID() }]);
    setIsAdding(false);
  };

  const removePublication = (id: string) => {
    onChange(publications.filter(pub => pub.id !== id));
  };

  const updatePublication = (id: string, updates: Partial<Publication>) => {
    onChange(publications.map(pub => 
      pub.id === id ? { ...pub, ...updates } : pub
    ));
  };

  const handleAuthorsChange = (id: string, value: string) => {
    const authors = value.split(',').map(author => author.trim()).filter(Boolean);
    updatePublication(id, { authors });
  };

  return (
    <FormSection
      title="Publications"
      description="Add your research papers, articles, and other publications."
    >
      <div className="space-y-6">
        {publications.map((pub) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative p-4 border border-gray-200 rounded-lg"
          >
            <button
              onClick={() => removePublication(pub.id)}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-4">
              <FormInput
                label="Title"
                name="title"
                value={pub.title}
                onChange={(e) => updatePublication(pub.id, { title: e.target.value })}
                placeholder="Publication Title"
              />
              <FormInput
                label="Authors"
                name="authors"
                value={pub.authors.join(', ')}
                onChange={(e) => handleAuthorsChange(pub.id, e.target.value)}
                placeholder="Author names (comma-separated)"
              />
              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  label="Journal/Conference"
                  name="journal"
                  value={pub.journal}
                  onChange={(e) => updatePublication(pub.id, { journal: e.target.value })}
                  placeholder="Journal or Conference Name"
                />
                <FormInput
                  label="Year"
                  name="year"
                  value={pub.year}
                  onChange={(e) => updatePublication(pub.id, { year: e.target.value })}
                  placeholder="Publication Year"
                />
              </div>
              <FormInput
                label="Link"
                name="link"
                value={pub.link}
                onChange={(e) => updatePublication(pub.id, { link: e.target.value })}
                placeholder="DOI or URL"
              />
            </div>
          </motion.div>
        ))}

        <AnimatePresence>
          {isAdding && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-4 border border-gray-200 rounded-lg"
            >
              <PublicationsForm
                publications={[]}
                onChange={(newPubs) => {
                  if (newPubs.length > 0) {
                    addPublication(newPubs[0]);
                  }
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsAdding(true)}
          className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Publication
        </motion.button>
      </div>
    </FormSection>
  );
}