import { Award } from '../../../types';
import PreviewSection from './shared/PreviewSection';

interface AwardsSectionProps {
  awards: Award[];
}

export default function AwardsSection({ awards }: AwardsSectionProps) {
  return (
    <PreviewSection title="Awards & Honors">
      <div className="space-y-4">
        {awards.map((award) => (
          <div key={award.id}>
            <h3 className="font-medium text-gray-900">{award.title}</h3>
            <p className="text-primary">{award.issuer}</p>
            <p className="text-sm text-gray-600">{award.date}</p>
            <p className="text-sm text-gray-600 mt-2">{award.description}</p>
          </div>
        ))}
      </div>
    </PreviewSection>
  );
}