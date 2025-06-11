import { motion } from 'framer-motion';
import { Wand2, Target, Zap } from 'lucide-react';
import ResumePreview from '../ui/ResumePreview';

export default function Features() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-light/20 to-blue-50/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(27,172,255,0.1)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
              <Wand2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">AI-Powered Resume Builder</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900">
              Create the Perfect Resume <br />
              <span className="text-primary">in Minutes</span>
            </h2>
            
            <p className="text-xl text-gray-600">
              Let our AI technology analyze job descriptions and optimize your resume for ATS systems, ensuring you stand out to both algorithms and hiring managers.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <span className="text-gray-700">Smart keyword optimization for higher match rates</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="text-gray-700">Instant formatting and professional styling</span>
              </div>
            </div>

            <button className="mt-8 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-hover transition-colors inline-flex items-center space-x-2">
              <span>Try AI Resume Builder</span>
              <Wand2 className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Right side - Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <ResumePreview />
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute bottom-8 left-8 w-32 h-32 bg-blue-100 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}