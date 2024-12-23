import { Language } from '../../../types';
import PreviewSection from './shared/PreviewSection';

interface LanguagesSectionProps {
  languages: Language[];
}

export default function LanguagesSection({ languages }: LanguagesSectionProps) {
  return (
    <PreviewSection title="Languages">
      <div className="grid grid-cols-2 gap-4">
        {languages.map((lang) => (
          <div key={lang.id} className="flex justify-between items-center">
            <span className="text-gray-900">{lang.name}</span>
            <span className="text-primary text-sm">{lang.proficiency}</span>
          </div>
        ))}
      </div>
    </PreviewSection>
  );
}