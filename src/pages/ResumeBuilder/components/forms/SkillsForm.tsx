import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import FormSection from './shared/FormSection';

interface SkillsFormProps {
  skills: string[];
  onChange: (skills: string[]) => void;
}

export default function SkillsForm({ skills, onChange }: SkillsFormProps) {
  const [newSkill, setNewSkill] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const trimmedSkill = newSkill.trim();
      if (trimmedSkill && !skills.includes(trimmedSkill)) {
        onChange([...skills, trimmedSkill]);
        setNewSkill('');
      }
    }
  };

  const removeSkill = (skillToRemove: string) => {
    onChange(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <FormSection
      title="Professional Skills"
      description="Add your key professional skills and competencies. Press Enter to add a skill."
    >
      <div className="space-y-4">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter a skill (e.g., Project Management) and press Enter"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <motion.span
              key={skill}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary-light text-primary rounded-full text-sm"
            >
              {skill}
              <button
                onClick={() => removeSkill(skill)}
                className="p-0.5 hover:bg-primary hover:text-white rounded-full transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </motion.span>
          ))}
        </div>
      </div>
    </FormSection>
  );
}