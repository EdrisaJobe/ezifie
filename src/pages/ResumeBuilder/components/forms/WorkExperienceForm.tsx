import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { WorkExperience } from '../../types';
import FormSection from './shared/FormSection';
import FormInput from './shared/FormInput';
import EnhanceButton from '../EnhanceButton';

interface WorkExperienceFormProps {
  experience: WorkExperience[];
  onChange: (experience: WorkExperience[]) => void;
}

const experienceTemplates = [
  "• Collaborated with cross-functional teams to deliver high-quality solutions\n• Implemented best practices and improved system efficiency\n• Contributed to project planning and execution",
  "• Developed and maintained key features for the platform\n• Worked closely with stakeholders to gather requirements\n• Participated in code reviews and knowledge sharing sessions",
  "• Led initiatives to improve team productivity and code quality\n• Mentored junior team members and provided technical guidance\n• Contributed to architectural decisions and system design",
  "• Analyzed requirements and delivered solutions on time\n• Participated in agile development processes and sprint planning\n• Maintained and improved existing systems and features",
  "• Collaborated with design and product teams to implement new features\n• Optimized performance and resolved technical issues\n• Documented processes and contributed to team knowledge base"
];

export default function WorkExperienceForm({ experience, onChange }: WorkExperienceFormProps) {
  const [isAdding, setIsAdding] = useState(false);

  const addExperience = () => {
    const newExperience: WorkExperience = {
      id: crypto.randomUUID(),
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    onChange([...experience, newExperience]);
    setIsAdding(false);
  };

  const removeExperience = (id: string) => {
    onChange(experience.filter(exp => exp.id !== id));
  };

  const updateExperience = (id: string, updates: Partial<WorkExperience>) => {
    onChange(experience.map(exp => 
      exp.id === id ? { ...exp, ...updates } : exp
    ));
  };

  const handleEnhance = (id: string, title: string) => {
    const randomIndex = Math.floor(Math.random() * experienceTemplates.length);
    const description = experienceTemplates[randomIndex];
    updateExperience(id, { description });
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
            className="relative p-6 border border-gray-200 rounded-lg bg-white/50"
          >
            <button
              onClick={() => removeExperience(exp.id)}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Company"
                name="company"
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                placeholder="e.g. Acme Corp"
                required
              />
              <FormInput
                label="Job Title"
                name="title"
                value={exp.title}
                onChange={(e) => updateExperience(exp.id, { title: e.target.value })}
                placeholder="e.g. Senior Software Engineer"
                required
              />
              <FormInput
                label="Location"
                name="location"
                value={exp.location}
                onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
                placeholder="e.g. San Francisco, CA"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  label="Start Date"
                  name="startDate"
                  type="date"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                  required
                />
                {!exp.current && (
                  <FormInput
                    label="End Date"
                    name="endDate"
                    type="date"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                    required
                  />
                )}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <input
                type="checkbox"
                id={`current-${exp.id}`}
                checked={exp.current}
                onChange={(e) => updateExperience(exp.id, { 
                  current: e.target.checked,
                  endDate: e.target.checked ? '' : exp.endDate
                })}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor={`current-${exp.id}`} className="text-sm text-gray-700">
                I currently work here
              </label>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between mb-1">
                <label htmlFor={`description-${exp.id}`} className="block text-sm font-medium text-gray-700">
                  Description
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <EnhanceButton 
                  onClick={() => handleEnhance(exp.id, exp.title)} 
                />
              </div>
              <textarea
                id={`description-${exp.id}`}
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
                placeholder="Describe your key responsibilities and achievements..."
                required
                rows={4}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
              />
            </div>
          </motion.div>
        ))}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={addExperience}
          className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Work Experience
        </motion.button>
      </div>
    </FormSection>
  );
}