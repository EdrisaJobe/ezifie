import { motion } from 'framer-motion';

export default function ResumePreview() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">John Anderson</h3>
        <p className="text-gray-600">Senior Software Engineer</p>
        <div className="flex justify-center space-x-4 text-sm text-gray-500 mt-2">
          <span>john@example.com</span>
          <span>(555) 123-4567</span>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Experience</h4>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between">
              <span className="font-medium">Tech Solutions Inc.</span>
              <span className="text-gray-500">2020 - Present</span>
            </div>
            <p className="text-gray-600 text-sm">Lead Developer</p>
            <p className="text-gray-600 text-sm mt-1">
              Led development of scalable web applications serving 100K+ users
            </p>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="font-medium">Innovation Labs</span>
              <span className="text-gray-500">2018 - 2020</span>
            </div>
            <p className="text-gray-600 text-sm">Senior Developer</p>
            <p className="text-gray-600 text-sm mt-1">
              Built responsive React applications with modern architecture
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Skills</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary-light text-primary text-sm rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Education</h4>
        <div className="flex justify-between">
          <span className="font-medium">Computer Science, BSc</span>
          <span className="text-gray-500">2018</span>
        </div>
        <p className="text-gray-600 text-sm">University of Technology</p>
      </div>
    </motion.div>
  );
}