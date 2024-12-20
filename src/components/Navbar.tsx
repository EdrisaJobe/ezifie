import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', href: '#' },
    { label: 'Resume Builder', href: '#' },
    { label: 'CV Builder', href: '#' },
    { label: 'Pricing', href: '#' },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
              <img src="/logo.png" alt="Ezifie Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold text-primary">Ezifie</span>
            </a>
            <a href="/" className="text-sm font-bold text-gray-500 ml-3 self-center hover:text-primary transition-colors">
              Making it Easy
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-primary relative group"
              >
                {item.label}
                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gray-200 group-hover:bg-primary transition-colors" />
              </a>
            ))}
            <button className="px-4 py-2 text-primary border-2 border-primary rounded-full hover:bg-primary-light transition-colors">
              Login
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-primary relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gray-200 group-hover:bg-primary transition-colors" />
                </a>
              ))}
              <div className="px-3 py-2 space-y-2">
                <button className="w-full px-4 py-2 text-primary border-2 border-primary rounded-full hover:bg-primary-light transition-colors">
                  Login
                </button>
                <button className="w-full px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}