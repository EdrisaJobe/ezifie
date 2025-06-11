import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import SocialAuth from './SocialAuth';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

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
                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-white/50 backdrop-blur-sm transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="relative mt-1">
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-white/50 backdrop-blur-sm transition-all duration-300"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <motion.input
                        whileHover={{ scale: 1.1 }}
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary transition-colors"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="#"
                      className="text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                    >
                      Forgot password?
                    </motion.a>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 shadow-lg shadow-primary/20"
                  >
                    Sign in
                  </motion.button>
                </form>
                
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