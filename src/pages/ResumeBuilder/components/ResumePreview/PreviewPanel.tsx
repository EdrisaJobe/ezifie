import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ResumeData } from '../../types';
import FontSelector from '../FontSelector/FontSelector';
import ColorSelector from '../ColorSelector/ColorSelector';
import { resumeColors } from '../../utils/colors';

interface PreviewPanelProps {
  data: ResumeData;
  onFontChange: (font: ResumeData['font']) => void;
  onColorChange: (color: ResumeData['color']) => void;
}

export default function PreviewPanel({ data, onFontChange, onColorChange }: PreviewPanelProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Calculate total pages based on content height
  useEffect(() => {
    const content = document.getElementById('resume-content');
    if (content) {
      const contentHeight = content.scrollHeight;
      const pageHeight = 940; // 1056px - 96px (padding) - 20px (bottom padding)
      const pages = Math.ceil(contentHeight / pageHeight);
      setTotalPages(pages);
      if (currentPage > pages) {
        setCurrentPage(1);
      }
    }
  }, [data, currentPage]);

  const formatDate = (date: string) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
  };

  // Pagination Component
  const renderPagination = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-primary disabled:opacity-50 disabled:hover:text-gray-600"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </motion.button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentPage === index + 1
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-primary-light hover:text-primary'
              }`}
            >
              {index + 1}
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-primary disabled:opacity-50 disabled:hover:text-gray-600"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    );
  };

  // Resume Content Component
  const renderResumeContent = () => (
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

  return (
    <div className="hidden xl:block w-[816px] relative">
      <div className="sticky top-24 space-y-4">
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
          <ColorSelector
            colors={resumeColors}
            value={data.color}
            onChange={onColorChange}
          />
          <span className="text-xl font-bold text-primary">
            Preview
          </span>
          <FontSelector value={data.font} onChange={onFontChange} />
        </div>

        {renderPagination()}
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-white rounded-lg shadow-lg"
          style={{
            width: '816px',
            height: '1056px',
            padding: '48px 48px 68px',
            overflow: 'hidden'
          }}
        >
          <div 
            id="resume-preview"
            style={{
              fontFamily: data.font.family,
              '--color-primary': data.color.primary,
              '--color-primary-light': data.color.light,
              '--color-primary-hover': data.color.hover,
              transform: `translateY(-${(currentPage - 1) * 940}px)`,
              transition: 'transform 0.3s ease-in-out'
            } as React.CSSProperties}
          >
            <div id="resume-content">
              {renderResumeContent()}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}