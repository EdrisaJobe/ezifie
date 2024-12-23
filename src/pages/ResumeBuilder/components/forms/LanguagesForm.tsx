import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Language } from '../../types';
import FormSection from './shared/FormSection';

interface LanguagesFormProps {
  languages: Language[];
  onChange: (languages: Language[]) => void;
}

const proficiencyLevels: Language['proficiency'][] = ['Basic', 'Intermediate', 'Advanced', 'Native'];

export default function LanguagesForm({ languages, onChange }: LanguagesFormProps) {
  const [newLanguage, setNewLanguage] = useState('');
  const [selectedProficiency, setSelectedProficiency] = useState<Language['proficiency']>('Intermediate');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const trimmedLanguage = newLanguage.trim();
      if (trimmedLanguage && !languages.some(lang => lang.name.toLowerCase() === trimmedLanguage.toLowerCase())) {
        onChange([...languages, { name: trimmedLanguage, proficiency: selectedProficiency }]);
        setNewLanguage('');
      }
    }
  };

  const removeLanguage = (languageToRemove: string) => {
    onChange(languages.filter(lang => lang.name !== languageToRemove));
  };

  const updateProficiency = (languageName: string, proficiency: Language['proficiency']) => {
    onChange(languages.map(lang => 
      lang.name === languageName ? { ...lang, proficiency } : lang
    ));
  };

  return (
    <FormSection
      title="Languages"
      description="Add languages you can communicate in and your proficiency level. Press Enter to add a language."
    >
      <div className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter a language (e.g., English, Spanish)"
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <select
            value={selectedProficiency}
            onChange={(e) => setSelectedProficiency(e.target.value as Language['proficiency'])}
            className="rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-white"
          >
            {proficiencyLevels.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap gap-2">
          {languages.map((language) => (
            <motion.div
              key={language.name}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="group flex items-center gap-2 px-3 py-1.5 bg-primary-light rounded-full"
            >
              <span className="text-sm text-primary">{language.name}</span>
              <select
                value={language.proficiency}
                onChange={(e) => updateProficiency(language.name, e.target.value as Language['proficiency'])}
                className="text-xs bg-transparent border-none text-primary focus:ring-0 p-0 pr-4"
              >
                {proficiencyLevels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              <button
                onClick={() => removeLanguage(language.name)}
                className="p-0.5 hover:bg-primary hover:text-white rounded-full transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </FormSection>
  );
}