import { Education } from '../../../types';
import PreviewSection from './shared/PreviewSection';

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <PreviewSection title="Education">
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.id}>
            <h3 className="font-medium text-gray-900">{edu.institution}</h3>
            <p className="text-primary">{edu.degree} in {edu.field}</p>
            <p className="text-sm text-gray-600">
              {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
            </p>
            <p className="text-sm text-gray-600 mt-2">{edu.description}</p>
          </div>
        ))}
      </div>
    </PreviewSection>
  );
}