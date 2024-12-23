import { ResumeData } from '../../types';

interface PreviewContentProps {
  data: ResumeData;
}

export default function PreviewContent({ data }: PreviewContentProps) {
  const formatDate = (date: string) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-4">
      {/* Personal Info */}
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900">{data.personalInfo.fullName}</h1>
        <p className="text-lg text-resume-primary mt-1">{data.personalInfo.title}</p>
        <div className="flex justify-center gap-4 text-sm text-gray-600 mt-2">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200">
            Professional Summary
          </h2>
          <div className="mt-2">
            <p className="text-gray-600 text-sm">{data.personalInfo.summary}</p>
          </div>
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200">
            Education
          </h2>
          <div className="mt-2 space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{edu.institution}</h3>
                  <p className="text-resume-primary text-sm">{edu.degree}</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <div>{formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}</div>
                  {edu.gpa && <div>GPA: {edu.gpa}</div>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {data.languages.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200">
            Languages
          </h2>
          <div className="mt-2 flex flex-wrap gap-4">
            {data.languages.map((lang) => (
              <div key={lang.name} className="text-sm">
                <span className="text-gray-900">{lang.name}</span>
                <span className="text-resume-primary ml-1">({lang.proficiency})</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.experience.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200">
            Work Experience
          </h2>
          <div className="mt-2 space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{exp.title}</h3>
                    <p className="text-resume-primary text-sm">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <div>{formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                {exp.description && (
                  <div className="text-sm text-gray-600 mt-2">
                    {exp.description.split('\n').map((line, i) => (
                      <p key={i} className="ml-4 relative before:content-['•'] before:absolute before:left-[-1em]">
                        {line}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200">
            Skills
          </h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-primary-light text-primary rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}