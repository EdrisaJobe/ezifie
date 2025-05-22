import { motion } from 'framer-motion';

interface ResumePreviewProps {
  data: {
    personalInfo: {
      fullName: string;
      title: string;
      email: string;
      phone: string;
      location: string;
      summary: string;
    };
    experience: Array<{
      id: string;
      title: string;
      company: string;
      startDate: string;
      endDate: string;
      current: boolean;
      description: string;
    }>;
    education: Array<{
      id: string;
      institution: string;
      degree: string;
      startDate: string;
      endDate: string;
      current: boolean;
      gpa?: string;
    }>;
    skills: string[];
  };
}

export default function ResumePreview({ data }: ResumePreviewProps) {
  return (
    <div className="sticky top-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-sm p-8 min-h-[1056px] max-h-[1056px] overflow-y-auto"
      >
        {/* Personal Info */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{data.personalInfo.fullName}</h1>
          <p className="text-lg text-primary mt-1">{data.personalInfo.title}</p>
          <div className="flex justify-center gap-4 text-sm text-gray-600 mt-2">
            <span>{data.personalInfo.email}</span>
            <span>{data.personalInfo.phone}</span>
            <span>{data.personalInfo.location}</span>
          </div>
          <p className="text-gray-600 mt-4">{data.personalInfo.summary}</p>
        </div>

        {/* Experience */}
        {data.experience.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Experience</h2>
            <div className="space-y-4">
              {data.experience.map((exp) => (
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
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="font-medium text-gray-900">{edu.institution}</h3>
                  <p className="text-primary">{edu.degree}</p>
                  <p className="text-sm text-gray-600">
                    {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                  </p>
                  {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary-light text-primary rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}
      </motion.div>
    </div>
  );
}