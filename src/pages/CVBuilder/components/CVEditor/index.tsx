import { CVData } from '../../types';
import PersonalInfoForm from './forms/PersonalInfoForm';
import ExperienceForm from './forms/ExperienceForm';
import EducationForm from './forms/EducationForm';
import SkillsForm from './forms/SkillsForm';
import PublicationsForm from './forms/PublicationsForm';
import AwardsForm from './forms/AwardsForm';
import LanguagesForm from './forms/LanguagesForm';
import ReferencesForm from './forms/ReferencesForm';

interface CVEditorProps {
  data: CVData;
  onChange: (data: CVData) => void;
}

export default function CVEditor({ data, onChange }: CVEditorProps) {
  return (
    <div className="space-y-6">
      <PersonalInfoForm
        data={data.personalInfo}
        onChange={(personalInfo) => onChange({ ...data, personalInfo })}
      />
      <ExperienceForm
        experience={data.experience}
        onChange={(experience) => onChange({ ...data, experience })}
      />
      <EducationForm
        education={data.education}
        onChange={(education) => onChange({ ...data, education })}
      />
      <SkillsForm
        skills={data.skills}
        onChange={(skills) => onChange({ ...data, skills })}
      />
      <PublicationsForm
        publications={data.publications}
        onChange={(publications) => onChange({ ...data, publications })}
      />
      <AwardsForm
        awards={data.awards}
        onChange={(awards) => onChange({ ...data, awards })}
      />
      <LanguagesForm
        languages={data.languages}
        onChange={(languages) => onChange({ ...data, languages })}
      />
      <ReferencesForm
        references={data.references}
        onChange={(references) => onChange({ ...data, references })}
      />
    </div>
  );
}