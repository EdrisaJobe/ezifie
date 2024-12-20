import { motion } from 'framer-motion';
import { FileText, Layout, Settings, User, Briefcase, Award } from 'lucide-react';
import { FloatingElement } from './ui/FloatingElement';
import { PulsingCircle } from './ui/PulsingCircle';

export default function AnimatedUI() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-full min-h-[500px]"
    >
      {/* Main UI Frame */}
      <motion.div
        className="absolute inset-0 bg-white rounded-xl shadow-lg overflow-hidden"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Top Bar */}
        <div className="h-12 bg-primary-light rounded-t-xl flex items-center px-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative">
          {/* Profile Section */}
          <div className="mb-8">
            <FloatingElement delay={0.2}>
              <div className="flex items-center space-x-4 bg-primary-light p-4 rounded-lg">
                <div className="relative">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <PulsingCircle />
                </div>
                <div className="flex-1">
                  <motion.div
                    className="h-4 w-32 bg-gray-200 rounded mb-2"
                    initial={{ width: 0 }}
                    animate={{ width: 128 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.div
                    className="h-3 w-24 bg-gray-200 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: 96 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </div>
              </div>
            </FloatingElement>
          </div>

          {/* Skills Section */}
          <div className="mb-8">
            <FloatingElement delay={0.4}>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-4">
                  <motion.div
                    className="h-4 w-20 bg-gray-200 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ duration: 1, delay: 0.9 }}
                  />
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-2">
                  {[80, 60, 70].map((width, index) => (
                    <motion.div
                      key={index}
                      className="h-2 bg-primary rounded"
                      initial={{ width: 0 }}
                      animate={{ width: `${width}%` }}
                      transition={{ duration: 1, delay: 1 + index * 0.2 }}
                    />
                  ))}
                </div>
              </div>
            </FloatingElement>
          </div>

          {/* Experience Section */}
          <div className="mb-8">
            <FloatingElement delay={0.6}>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <motion.div
                    className="h-4 w-24 bg-gray-200 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: 96 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </div>
                <div className="space-y-3">
                  {[...Array(2)].map((_, index) => (
                    <motion.div
                      key={index}
                      className="h-3 bg-gray-200 rounded"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 1.4 + index * 0.2 }}
                    />
                  ))}
                </div>
              </div>
            </FloatingElement>
          </div>

          {/* Bottom Icons */}
          <div className="flex justify-around mt-8">
            {[FileText, Layout, Settings].map((Icon, index) => (
              <FloatingElement key={index} delay={0.8 + index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-primary-light rounded-lg cursor-pointer"
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
              </FloatingElement>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}