import { Reference } from '../../../types';
import PreviewSection from './shared/PreviewSection';

interface ReferencesSectionProps {
  references: Reference[];
}

export default function ReferencesSection({ references }: ReferencesSectionProps) {
  return (
    <PreviewSection title="References">
      <div className="grid md:grid-cols-2 gap-4">
        {references.map((ref) => (
          <div key={ref.id} className="space-y-1">
            <h3 className="font-medium text-gray-900">{ref.name}</h3>
            <p className="text-primary">{ref.title}</p>
            <p className="text-sm text-gray-600">{ref.company}</p>
            <p className="text-sm text-gray-600">{ref.email}</p>
            <p className="text-sm text-gray-600">{ref.phone}</p>
          </div>
        ))}
      </div>
    </PreviewSection>
  );
}