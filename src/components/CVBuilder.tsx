import { motion } from 'framer-motion';
import { FileText, Sparkles, Target } from 'lucide-react';
import CVPreview from './ui/CVPreview';

export default function CVBuilder() {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Enhanced gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-primary-light/20 to-white/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(27,172,255,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(27,172,255,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Rest of the component remains the same */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <CVPreview />
            <div className="absolute top-8 left-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute bottom-8 right-8 w-32 h-32 bg-blue-100 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">AI-Powered CV Builder</span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900">
              Tell Your Professional <br />
              <span className="text-primary">Success Story</span>
            </h2>
            
            <p className="text-lg text-gray-600">
              Create a compelling CV that showcases your career journey and achievements. Our AI helps you craft a narrative that resonates with employers.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <span className="text-gray-900">Smart Formatting</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <span className="text-gray-900">ATS Optimized</span>
              </div>
            </div>

            <button className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-hover transition-colors inline-flex items-center space-x-2">
              <span>Create Your CV</span>
              <Sparkles className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}