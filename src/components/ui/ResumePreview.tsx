import { motion } from 'framer-motion';
import TypeWriter from './TypeWriter';

export default function ResumePreview() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center border-b border-gray-100 pb-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            <TypeWriter text="John Anderson" />
          </h1>
          <div className="text-gray-600">
            <TypeWriter text="Senior Software Engineer" delay={1} />
          </div>
          <div className="flex justify-center space-x-4 mt-2 text-sm text-gray-500">
            <TypeWriter text="john@example.com" delay={2} />
            <span>•</span>
            <TypeWriter text="(555) 123-4567" delay={2.5} />
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-primary">Experience</h2>
          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between">
                <TypeWriter text="Tech Solutions Inc." className="font-medium" delay={3} />
                <TypeWriter text="2020 - Present" className="text-gray-500" delay={3.2} />
              </div>
              <div className="text-primary-hover font-medium">
                <TypeWriter text="Lead Developer" delay={3.4} />
              </div>
              <div className="text-gray-600 text-sm">
                <TypeWriter 
                  text="Led development of cloud-native applications and mentored junior developers."
                  delay={3.6}
                />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <TypeWriter text="Innovation Labs" className="font-medium" delay={4} />
                <TypeWriter text="2018 - 2020" className="text-gray-500" delay={4.2} />
              </div>
              <div className="text-primary-hover font-medium">
                <TypeWriter text="Senior Developer" delay={4.4} />
              </div>
              <div className="text-gray-600 text-sm">
                <TypeWriter 
                  text="Developed scalable microservices architecture for enterprise clients."
                  delay={4.6}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-primary">Skills</h2>
          <div className="grid grid-cols-3 gap-2">
            {['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'GraphQL'].map((skill, index) => (
              <div key={skill} className="px-3 py-2 bg-primary-light rounded-lg text-primary text-sm font-medium text-center">
                <TypeWriter text={skill} delay={5 + index * 0.2} />
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-primary">Education</h2>
          <div className="space-y-1">
            <div className="flex justify-between">
              <TypeWriter text="Computer Science, BSc" className="font-medium" delay={6.5} />
              <TypeWriter text="2018" className="text-gray-500" delay={6.7} />
            </div>
            <div className="text-gray-600">
              <TypeWriter text="University of Technology" delay={6.9} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}