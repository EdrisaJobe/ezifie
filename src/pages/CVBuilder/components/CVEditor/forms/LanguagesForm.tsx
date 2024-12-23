import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { Language } from '../../../types';
import FormSection from './shared/FormSection';
import FormInput from './shared/FormInput';

interface LanguagesFormProps {
  languages: Language[];
  onChange: (languages: Language[]) => void;
}

const proficiencyLevels = ['Basic', 'Intermediate', 'Advanced', 'Native'] as const;

export default function LanguagesForm({ languages, onChange }: LanguagesFormProps) {
  const [isAdding, setIsAdding] = useState(false);

  const addLanguage = (newLang: Language) => {
    onChange([...languages, { ...newLang, id: crypto.randomUUID() }]);
    setIsAdding(false);
  };

  const removeLanguage = (id: string) => {
    onChange(languages.filter(lang => lang.id !== id));
  };

  const updateLanguage = (id: string, updates: Partial<Language>) => {
    onChange(languages.map(lang => 
      lang.id === id ? { ...lang, ...updates } : lang
    ));
  };

  return (
    <FormSection
      title="Languages"
      description="Add languages you can communicate in and your proficiency level."
    >
      <div className="space-y-6">
        {languages.map((lang) => (
          <motion.div
            key={lang.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative p-4 border border-gray-200 rounded-lg"
          >
            <button
              onClick={() => removeLanguage(lang.id)}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="Language"
                name="name"
                value={lang.name}
                onChange={(e) => updateLanguage(lang.id, { name: e.target.value })}
                placeholder="Language Name"
              />
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Proficiency Level
                </label>
                <select
                  value={lang.proficiency}
                  onChange={(e) => updateLanguage(lang.id, { 
                    proficiency: e.target.value as Language['proficiency']
                  })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {proficiencyLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
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
              <LanguagesForm
                languages={[]}
                onChange={(newLangs) => {
                  if (newLangs.length > 0) {
                    addLanguage(newLangs[0]);
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
          Add Language
        </motion.button>
      </div>
    </FormSection>
  );
}