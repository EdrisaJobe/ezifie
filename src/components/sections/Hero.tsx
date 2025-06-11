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
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-blue-50 to-white" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-6xl font-bold text-primary mb-4">
              Ezifie
            </h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Build Your Career
              <span className="text-primary"> With Confidence</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover the tools and features that make our platform the perfect choice for your career growth journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-10">
              <button 
                onClick={handleResumeClick}
                className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-hover transition-colors"
              >
                Make a Resume
              </button>
              <button 
                onClick={() => navigate('/pricing')}
                className="px-8 py-4 bg-white text-primary rounded-full font-semibold border-2 border-primary hover:bg-primary-light transition-colors"
              >
                See Pricing
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: FileText, text: 'Easy to Use' },
                { icon: Briefcase, text: 'Professional' },
                { icon: Rocket, text: 'Career Growth' }
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="text-center group">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Animated UI */}
          <div className="relative h-[480px]">
            <AnimatedUI />
          </div>
        </div>
      </div>
    </div>
  );
}