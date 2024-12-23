import { motion } from 'framer-motion';
import { ResumeData } from '../types';
import PersonalInfoForm from './forms/PersonalInfoForm';
import EducationForm from './forms/EducationForm';
import LanguagesForm from './forms/LanguagesForm';
import WorkExperienceForm from './forms/WorkExperienceForm';
import SkillsForm from './forms/SkillsForm';

interface ResumeEditorProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export default function ResumeEditor({ data, onChange }: ResumeEditorProps) {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <PersonalInfoForm
          data={data.personalInfo}
          onChange={(personalInfo) => onChange({ ...data, personalInfo })}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <EducationForm
          education={data.education}
          onChange={(education) => onChange({ ...data, education })}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <LanguagesForm
          languages={data.languages}
          onChange={(languages) => onChange({ ...data, languages })}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <WorkExperienceForm
          experience={data.experience}
          onChange={(experience) => onChange({ ...data, experience })}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <SkillsForm
          skills={data.skills}
          onChange={(skills) => onChange({ ...data, skills })}
        />
      </motion.div>
    </div>
  );
}