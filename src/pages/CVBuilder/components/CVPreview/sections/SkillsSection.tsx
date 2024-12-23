import PreviewSection from './shared/PreviewSection';

interface SkillsSectionProps {
  skills: string[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <PreviewSection title="Skills">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-primary-light text-primary rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </PreviewSection>
  );
}