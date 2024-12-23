import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

export default function SocialAuth() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <img 
          src="https://www.google.com/favicon.ico" 
          alt="Google" 
          className="h-5 w-5"
        />
        Google
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#0A66C2] bg-[#0A66C2] px-4 py-2 text-sm font-medium text-white hover:bg-[#004182] focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:ring-offset-2"
      >
        <Linkedin className="h-5 w-5" />
        LinkedIn
      </motion.button>
    </div>
  );
}