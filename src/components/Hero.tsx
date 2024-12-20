import { motion } from 'framer-motion';
import { FileText, Briefcase, Rocket } from 'lucide-react';
import AnimatedUI from './AnimatedUI';

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light via-blue-50/80 to-white relative overflow-hidden pb-8">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(27,172,255,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(27,172,255,0.1)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative">
        {/* Rest of the Hero content remains the same */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-6xl font-bold text-gray-900 mb-4">
              Ezifie
            </h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Build Your Career
              <span className="text-primary"> With Confidence</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover the tools and features that make our platform the perfect choice for your career growth journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-hover transition-colors">
                Create Your Resume Now
              </button>
              <button className="px-8 py-4 bg-white text-primary rounded-full font-semibold border-2 border-primary hover:bg-primary-light transition-colors">
                Explore Templates
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-2">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-gray-600">Easy to Use</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-2">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-gray-600">Professional</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-2">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-gray-600">Career Growth</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Animated UI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px]"
          >
            <AnimatedUI />
          </motion.div>
        </div>
      </div>
    </div>
  );
}