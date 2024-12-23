import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { Reference } from '../../../types';
import FormSection from './shared/FormSection';
import FormInput from './shared/FormInput';

interface ReferencesFormProps {
  references: Reference[];
  onChange: (references: Reference[]) => void;
}

export default function ReferencesForm({ references, onChange }: ReferencesFormProps) {
  const [isAdding, setIsAdding] = useState(false);

  const addReference = (newRef: Reference) => {
    onChange([...references, { ...newRef, id: crypto.randomUUID() }]);
    setIsAdding(false);
  };

  const removeReference = (id: string) => {
    onChange(references.filter(ref => ref.id !== id));
  };

  const updateReference = (id: string, updates: Partial<Reference>) => {
    onChange(references.map(ref => 
      ref.id === id ? { ...ref, ...updates } : ref
    ));
  };

  return (
    <FormSection
      title="References"
      description="Add academic or professional references."
    >
      <div className="space-y-6">
        {references.map((ref) => (
          <motion.div
            key={ref.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative p-4 border border-gray-200 rounded-lg"
          >
            <button
              onClick={() => removeReference(ref.id)}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="Full Name"
                name="name"
                value={ref.name}
                onChange={(e) => updateReference(ref.id, { name: e.target.value })}
                placeholder="Dr. John Smith"
              />
              <FormInput
                label="Title"
                name="title"
                value={ref.title}
                onChange={(e) => updateReference(ref.id, { title: e.target.value })}
                placeholder="Professor of Computer Science"
              />
              <FormInput
                label="Institution/Company"
                name="company"
                value={ref.company}
                onChange={(e) => updateReference(ref.id, { company: e.target.value })}
                placeholder="University Name"
              />
              <FormInput
                label="Email"
                name="email"
                type="email"
                value={ref.email}
                onChange={(e) => updateReference(ref.id, { email: e.target.value })}
                placeholder="john.smith@university.edu"
              />
              <FormInput
                label="Phone"
                name="phone"
                type="tel"
                value={ref.phone}
                onChange={(e) => updateReference(ref.id, { phone: e.target.value })}
                placeholder="+1 (555) 123-4567"
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
              <ReferencesForm
                references={[]}
                onChange={(newRefs) => {
                  if (newRefs.length > 0) {
                    addReference(newRefs[0]);
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
          Add Reference
        </motion.button>
      </div>
    </FormSection>
  );
}