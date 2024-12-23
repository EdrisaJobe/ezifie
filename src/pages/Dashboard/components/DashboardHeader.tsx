import { motion } from 'framer-motion';
import { Bell, User } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Career Dashboard</h1>
            <p className="text-sm text-gray-600">Track your career progress and opportunities</p>
          </div>
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-400 hover:text-primary transition-colors"
            >
              <Bell className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-400 hover:text-primary transition-colors"
            >
              <User className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}