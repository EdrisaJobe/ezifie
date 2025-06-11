import { motion } from 'framer-motion';
import { FileText, Layout, Settings, User, Briefcase, Award } from 'lucide-react';

export default function AnimatedUI() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-full min-h-[500px]"
    >
      {/* Main UI Frame */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Top Bar */}
        <div className="h-12 bg-primary-light rounded-t-xl flex items-center px-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Profile Section */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 bg-primary-light p-4 rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                <div className="h-3 w-24 bg-gray-200 rounded" />
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between mb-4">
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-primary rounded w-4/5" />
                <div className="h-2 bg-primary rounded w-3/5" />
                <div className="h-2 bg-primary rounded w-3/4" />
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Briefcase className="w-5 h-5 text-primary" />
                <div className="h-4 w-24 bg-gray-200 rounded" />
              </div>
              <div className="space-y-3">
                <div className="h-3 bg-gray-200 rounded" />
                <div className="h-3 bg-gray-200 rounded" />
              </div>
            </div>
          </div>

          {/* Bottom Icons */}
          <div className="flex justify-around mt-8">
            {[FileText, Layout, Settings].map((Icon, index) => (
              <div
                key={index}
                className="p-3 bg-primary-light rounded-lg hover:scale-105 transition-transform cursor-pointer"
              >
                <Icon className="w-6 h-6 text-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}