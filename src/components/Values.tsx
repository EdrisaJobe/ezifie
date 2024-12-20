import { motion } from 'framer-motion';
import { DollarSign, Award, Clock, Shield } from 'lucide-react';

export default function Values() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold text-primary uppercase tracking-wide">Our Values</h2>
          <h3 className="mt-2 text-4xl font-bold text-gray-900">
            We're Committed to Your{' '}
            <span className="text-primary">Success</span>
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Your career journey deserves the best tools and support. We've built Ezifie with a commitment to excellence, ensuring every feature serves your professional growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                  alt="Professional working environment"
                  className="w-full h-[600px] object-cover"
                />
              </motion.div>
              
              {/* Overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
              
              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Professional Growth</p>
                    <p className="text-xs text-gray-600">Trusted by industry leaders</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-100 rounded-full blur-3xl" />
          </motion.div>

          {/* Right side - Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8 order-1 md:order-2"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Affordable Excellence</h4>
                <p className="mt-2 text-gray-600">
                  Premium resume building tools at competitive prices, because your career growth shouldn't break the bank.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Professional Templates</h4>
                <p className="mt-2 text-gray-600">
                  Expertly designed templates that stand out, crafted by industry professionals to highlight your best qualities.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Time-Saving Tools</h4>
                <p className="mt-2 text-gray-600">
                  Intuitive features that streamline your resume creation process, letting you focus on what matters most.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Secure & Private</h4>
                <p className="mt-2 text-gray-600">
                  Your data is protected with enterprise-grade security, ensuring your professional information stays private.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}