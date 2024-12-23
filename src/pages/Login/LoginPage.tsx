import { motion } from 'framer-motion';
import LoginForm from './LoginForm';
import SocialAuth from './SocialAuth';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      {/* Enhanced colorful background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-blue-100/50 to-primary-light/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(27,172,255,0.3)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(96,165,250,0.2)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_80%_50%,#ffffff00,rgba(27,172,255,0.15),#ffffff00)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex min-h-screen items-center justify-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            {/* Logo and Title with enhanced animation */}
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/" className="inline-flex items-center space-x-2 group">
                <motion.img 
                  src="/logo.png" 
                  alt="Ezifie Logo" 
                  className="w-8 h-8"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                />
                <span className="text-2xl font-bold text-primary group-hover:text-primary-hover transition-colors">
                  Ezifie
                </span>
              </Link>
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                Welcome back
              </h2>
              <p className="mt-2 text-gray-600">
                Enter your details to access your account
              </p>
            </motion.div>

            {/* Main Content with glass effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-primary/10 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl" />
              
              <div className="relative">
                <LoginForm />
                
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white/70 text-gray-500 rounded-full border border-gray-200">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <SocialAuth />
                </div>

                <p className="mt-6 text-center text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link 
                    to="/register" 
                    className="font-semibold text-primary hover:text-primary-hover transition-colors"
                  >
                    Sign up for free
                  </Link>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}