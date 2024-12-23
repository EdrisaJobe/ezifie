import { Experience } from '../../../types';
import PreviewSection from './shared/PreviewSection';

interface ExperienceSectionProps {
  experience: Experience[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <PreviewSection title="Professional Experience">
      <div className="space-y-4">
        {experience.map((exp) => (
          <div key={exp.id}>
            <h3 className="font-medium text-gray-900">{exp.title}</h3>
            <p className="text-primary">{exp.company}</p>
            <p className="text-sm text-gray-600">
              {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
            </p>
            <p className="text-sm text-gray-600 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </PreviewSection>
  );
}