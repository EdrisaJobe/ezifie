import { Publication } from '../../../types';
import PreviewSection from './shared/PreviewSection';

interface PublicationsSectionProps {
  publications: Publication[];
}

export default function PublicationsSection({ publications }: PublicationsSectionProps) {
  return (
    <PreviewSection title="Publications">
      <div className="space-y-4">
        {publications.map((pub) => (
          <div key={pub.id}>
            <h3 className="font-medium text-gray-900">{pub.title}</h3>
            <p className="text-sm text-gray-600">
              {pub.authors.join(', ')}
            </p>
            <p className="text-primary text-sm">
              {pub.journal} ({pub.year})
            </p>
            {pub.link && (
              <a 
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary-hover"
              >
                View Publication
              </a>
            )}
          </div>
        ))}
      </div>
    </PreviewSection>
  );
}