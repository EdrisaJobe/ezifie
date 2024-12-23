import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { Award } from '../../../types';
import FormSection from './shared/FormSection';
import FormInput from './shared/FormInput';
import FormTextArea from './shared/FormTextArea';

interface AwardsFormProps {
  awards: Award[];
  onChange: (awards: Award[]) => void;
}

export default function AwardsForm({ awards, onChange }: AwardsFormProps) {
  const [isAdding, setIsAdding] = useState(false);

  const addAward = (newAward: Award) => {
    onChange([...awards, { ...newAward, id: crypto.randomUUID() }]);
    setIsAdding(false);
  };

  const removeAward = (id: string) => {
    onChange(awards.filter(award => award.id !== id));
  };

  const updateAward = (id: string, updates: Partial<Award>) => {
    onChange(awards.map(award => 
      award.id === id ? { ...award, ...updates } : award
    ));
  };

  return (
    <FormSection
      title="Awards & Honors"
      description="Add your academic awards, grants, and other recognitions."
    >
      <div className="space-y-6">
        {awards.map((award) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative p-4 border border-gray-200 rounded-lg"
          >
            <button
              onClick={() => removeAward(award.id)}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-4">
              <FormInput
                label="Award Title"
                name="title"
                value={award.title}
                onChange={(e) => updateAward(award.id, { title: e.target.value })}
                placeholder="Award or Grant Name"
              />
              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  label="Issuing Organization"
                  name="issuer"
                  value={award.issuer}
                  onChange={(e) => updateAward(award.id, { issuer: e.target.value })}
                  placeholder="Organization Name"
                />
                <FormInput
                  label="Date"
                  name="date"
                  type="date"
                  value={award.date}
                  onChange={(e) => updateAward(award.id, { date: e.target.value })}
                />
              </div>
              <FormTextArea
                label="Description"
                name="description"
                value={award.description}
                onChange={(e) => updateAward(award.id, { description: e.target.value })}
                placeholder="Describe the significance of this award..."
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
              <AwardsForm
                awards={[]}
                onChange={(newAwards) => {
                  if (newAwards.length > 0) {
                    addAward(newAwards[0]);
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
          Add Award
        </motion.button>
      </div>
    </FormSection>
  );
}