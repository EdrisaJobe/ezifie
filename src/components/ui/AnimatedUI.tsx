import { motion } from 'framer-motion';
import { FileText, Layout, Settings, User, Briefcase, Award } from 'lucide-react';

export default function AnimatedUI() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full min-h-[500px]"
    >
      {/* Simple Browser Window */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
        {/* Top Bar */}
        <div className="h-8 bg-gray-100 flex items-center px-3">
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Profile Section */}
          <div className="flex items-center space-x-3 mb-4 p-3 bg-gray-50 rounded">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="h-3 w-24 bg-gray-300 rounded mb-1"></div>
              <div className="h-2 w-16 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-4 p-3 bg-gray-50 rounded">
            <div className="flex justify-between mb-2">
              <div className="h-3 w-12 bg-gray-300 rounded"></div>
              <Award className="w-4 h-4 text-primary" />
            </div>
            <div className="space-y-1">
              <div className="h-1.5 bg-primary rounded w-4/5"></div>
              <div className="h-1.5 bg-primary rounded w-3/5"></div>
              <div className="h-1.5 bg-primary rounded w-3/4"></div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-4 p-3 bg-gray-50 rounded">
            <div className="flex items-center space-x-2 mb-2">
              <Briefcase className="w-4 h-4 text-primary" />
              <div className="h-3 w-16 bg-gray-300 rounded"></div>
            </div>
            <div className="space-y-1">
              <div className="h-2 bg-gray-200 rounded"></div>
              <div className="h-2 bg-gray-200 rounded w-4/5"></div>
            </div>
          </div>

          {/* Bottom Icons */}
          <div className="flex justify-center space-x-4">
            {[FileText, Layout, Settings].map((Icon, index) => (
              <div
                key={index}
                className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
              >
                <Icon className="w-4 h-4 text-gray-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}