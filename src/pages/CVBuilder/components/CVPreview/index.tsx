import { motion } from 'framer-motion';
import { CVData } from '../../types';
import PersonalSection from './sections/PersonalSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import SkillsSection from './sections/SkillsSection';
import PublicationsSection from './sections/PublicationsSection';
import AwardsSection from './sections/AwardsSection';
import LanguagesSection from './sections/LanguagesSection';
import ReferencesSection from './sections/ReferencesSection';

interface CVPreviewProps {
  data: CVData;
}

export default function CVPreview({ data }: CVPreviewProps) {
  return (
    <div className="sticky top-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-sm p-8 min-h-[1056px] max-h-[1056px] overflow-y-auto"
      >
        <PersonalSection data={data.personalInfo} />
        
        {data.experience.length > 0 && (
          <ExperienceSection experience={data.experience} />
        )}
        
        {data.education.length > 0 && (
          <EducationSection education={data.education} />
        )}
        
        {data.skills.length > 0 && (
          <SkillsSection skills={data.skills} />
        )}
        
        {data.publications.length > 0 && (
          <PublicationsSection publications={data.publications} />
        )}
        
        {data.awards.length > 0 && (
          <AwardsSection awards={data.awards} />
        )}
        
        {data.languages.length > 0 && (
          <LanguagesSection languages={data.languages} />
        )}
        
        {data.references.length > 0 && (
          <ReferencesSection references={data.references} />
        )}
      </motion.div>
    </div>
  );
}