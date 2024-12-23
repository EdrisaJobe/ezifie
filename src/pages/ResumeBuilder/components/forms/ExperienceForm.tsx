import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { Experience } from '../../types';
import FormSection from './shared/FormSection';
import FormInput from './shared/FormInput';
import FormTextArea from './shared/FormTextArea';

interface ExperienceFormProps {
  experience: Experience[];
  onChange: (experience: Experience[]) => void;
}

export default function ExperienceForm({ experience, onChange }: ExperienceFormProps) {
  const [isAdding, setIsAdding] = useState(false);

  const addExperience = (newExp: Experience) => {
    onChange([...experience, { ...newExp, id: crypto.randomUUID() }]);
    setIsAdding(false);
  };

  const removeExperience = (id: string) => {
    onChange(experience.filter(exp => exp.id !== id));
  };

  const updateExperience = (id: string, updates: Partial<Experience>) => {
    onChange(experience.map(exp => 
      exp.id === id ? { ...exp, ...updates } : exp
    ));
  };

  return (
    <FormSection
      title="Work Experience"
      description="Add your relevant work experience, starting with the most recent."
    >
      <div className="space-y-6">
        {experience.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative p-4 border border-gray-200 rounded-lg"
          >
            <button
              onClick={() => removeExperience(exp.id)}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="Company"
                name="company"
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
              />
              <FormInput
                label="Job Title"
                name="title"
                value={exp.title}
                onChange={(e) => updateExperience(exp.id, { title: e.target.value })}
              />
              <FormInput
                label="Location"
                name="location"
                value={exp.location}
                onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
              />
              <div className="flex gap-4">
                <FormInput
                  label="Start Date"
                  name="startDate"
                  type="date"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                />
                {!exp.current && (
                  <FormInput
                    label="End Date"
                    name="endDate"
                    type="date"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                  />
                )}
              </div>
              <div className="md:col-span-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`current-${exp.id}`}
                  checked={exp.current}
                  onChange={(e) => updateExperience(exp.id, { current: e.target.checked })}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor={`current-${exp.id}`} className="text-sm text-gray-700">
                  I currently work here
                </label>
              </div>
            </div>
            <div className="mt-4">
              <FormTextArea
                label="Description"
                name="description"
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
                placeholder="Describe your key responsibilities and achievements..."
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
              <ExperienceForm
                experience={[]}
                onChange={(newExp) => {
                  if (newExp.length > 0) {
                    addExperience(newExp[0]);
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
          Add Experience
        </motion.button>
      </div>
    </FormSection>
  );
}