import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { Education } from '../../types';
import FormSection from './shared/FormSection';
import FormInput from './shared/FormInput';

interface EducationFormProps {
  education: Education[];
  onChange: (education: Education[]) => void;
}

export default function EducationForm({ education, onChange }: EducationFormProps) {
  const [isAdding, setIsAdding] = useState(false);

  const addEducation = () => {
    const newEducation: Education = {
      id: crypto.randomUUID(),
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
      current: false
    };
    onChange([...education, newEducation]);
    setIsAdding(false);
  };

  const removeEducation = (id: string) => {
    onChange(education.filter(edu => edu.id !== id));
  };

  const updateEducation = (id: string, updates: Partial<Education>) => {
    onChange(education.map(edu => 
      edu.id === id ? { ...edu, ...updates } : edu
    ));
  };

  return (
    <FormSection
      title="Education"
      description="Add your educational background, starting with the most recent."
    >
      <div className="space-y-6">
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative p-6 border border-gray-200 rounded-lg bg-white/50"
          >
            <button
              onClick={() => removeEducation(edu.id)}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Institution"
                name="institution"
                value={edu.institution}
                onChange={(e) => updateEducation(edu.id, { institution: e.target.value })}
                placeholder="e.g. Stanford University"
                required
              />
              <FormInput
                label="Degree"
                name="degree"
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                placeholder="e.g. Bachelor of Science"
                required
              />
              <FormInput
                label="GPA"
                name="gpa"
                value={edu.gpa || ''}
                onChange={(e) => updateEducation(edu.id, { gpa: e.target.value })}
                placeholder="e.g. 3.8"
              />
              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  label="Start Date"
                  name="startDate"
                  type="date"
                  value={edu.startDate}
                  onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })}
                  required
                />
                {!edu.current && (
                  <FormInput
                    label="End Date"
                    name="endDate"
                    type="date"
                    value={edu.endDate}
                    onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })}
                    required
                  />
                )}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <input
                type="checkbox"
                id={`current-${edu.id}`}
                checked={edu.current}
                onChange={(e) => updateEducation(edu.id, { 
                  current: e.target.checked,
                  endDate: e.target.checked ? '' : edu.endDate
                })}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor={`current-${edu.id}`} className="text-sm text-gray-700">
                I am currently studying here
              </label>
            </div>
          </motion.div>
        ))}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={addEducation}
          className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Education
        </motion.button>
      </div>
    </FormSection>
  );
}