import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { Education } from '../../../types';
import FormSection from './shared/FormSection';
import FormInput from './shared/FormInput';
import FormTextArea from './shared/FormTextArea';

interface EducationFormProps {
  education: Education[];
  onChange: (education: Education[]) => void;
}

export default function EducationForm({ education, onChange }: EducationFormProps) {
  const [isAdding, setIsAdding] = useState(false);

  const addEducation = (newEdu: Education) => {
    onChange([...education, { ...newEdu, id: crypto.randomUUID() }]);
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
      description="Add your academic qualifications and degrees."
    >
      <div className="space-y-6">
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative p-4 border border-gray-200 rounded-lg"
          >
            <button
              onClick={() => removeEducation(edu.id)}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="Institution"
                name="institution"
                value={edu.institution}
                onChange={(e) => updateEducation(edu.id, { institution: e.target.value })}
                placeholder="University Name"
              />
              <FormInput
                label="Degree"
                name="degree"
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                placeholder="Ph.D., Master's, etc."
              />
              <FormInput
                label="Field of Study"
                name="field"
                value={edu.field}
                onChange={(e) => updateEducation(edu.id, { field: e.target.value })}
                placeholder="Computer Science"
              />
              <div className="flex gap-4">
                <FormInput
                  label="Start Date"
                  name="startDate"
                  type="date"
                  value={edu.startDate}
                  onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })}
                />
                {!edu.current && (
                  <FormInput
                    label="End Date"
                    name="endDate"
                    type="date"
                    value={edu.endDate}
                    onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })}
                  />
                )}
              </div>
              <div className="md:col-span-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`current-${edu.id}`}
                  checked={edu.current}
                  onChange={(e) => updateEducation(edu.id, { current: e.target.checked })}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor={`current-${edu.id}`} className="text-sm text-gray-700">
                  I am currently studying here
                </label>
              </div>
            </div>
            <div className="mt-4">
              <FormTextArea
                label="Description"
                name="description"
                value={edu.description}
                onChange={(e) => updateEducation(edu.id, { description: e.target.value })}
                placeholder="Describe your research focus, thesis, or notable achievements..."
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
              <EducationForm
                education={[]}
                onChange={(newEdu) => {
                  if (newEdu.length > 0) {
                    addEducation(newEdu[0]);
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
          Add Education
        </motion.button>
      </div>
    </FormSection>
  );
}