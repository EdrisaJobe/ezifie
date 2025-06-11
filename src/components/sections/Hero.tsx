import { motion } from 'framer-motion';
import { FileText, Briefcase, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedUI from '../ui/AnimatedUI';

export default function Hero() {
  const navigate = useNavigate();
  // TODO: Replace with actual auth state
  const isAuthenticated = false;

  const handleResumeClick = () => {
    if (isAuthenticated) {
      navigate('/resume-builder');
    } else {
      navigate('/login', { state: { from: '/resume-builder' } });
    }
  };

  return (
    <div className="relative overflow-hidden pb-12 pt-28">
      {/* Background gradients remain the same */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-blue-50/80 to-white/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(27,172,255,0.3)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(96,165,250,0.2)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_80%_50%,#ffffff00,rgba(27,172,255,0.15),#ffffff00)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative inline-block"
            >
              <span className="text-6xl font-bold bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-gradient-x">
                Ezifie
              </span>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-primary/10 rounded-full blur-xl"
              />
            </motion.h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 mt-6">
              Build Your Career
              <span className="text-primary"> With Confidence</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover the tools and features that make our platform the perfect choice for your career growth journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-10">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleResumeClick}
                className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-hover transition-all duration-300 shadow-lg shadow-primary/20"
              >
                Make a Resume
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/pricing')}
                className="px-8 py-4 bg-white text-primary rounded-full font-semibold border-2 border-primary hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/10"
              >
                See Pricing
              </motion.button>
            </div>

            {/* Features section remains the same */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: FileText, text: 'Easy to Use' },
                { icon: Briefcase, text: 'Professional' },
                { icon: Rocket, text: 'Career Growth' }
              ].map(({ icon: Icon, text }) => (
                <motion.div 
                  key={text} 
                  className="text-center group"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-primary transition-colors">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Animated UI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[480px]"
          >
            <AnimatedUI />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200/50 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}