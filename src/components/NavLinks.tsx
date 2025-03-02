import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLinksProps {
  mobile?: boolean;
}

export default function NavLinks({ mobile = false }: NavLinksProps) {
  const location = useLocation();
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  
  const menuItems = [
    { label: 'Dashboard', href: '/dashboard' },
    {
      label: 'Resume',
      children: [
        { label: 'Resume Builder', href: '/resume-builder' },
      ]
    },
    { label: 'Cover Letter', href: '/cv-builder' },
    { label: 'Pricing', href: '/pricing' },
  ];

  const renderDropdown = (item: typeof menuItems[0], isMobile: boolean) => {
    if ('children' in item) {
      return (
        <div className="relative group">
          <button
            onClick={() => setIsResumeOpen(!isResumeOpen)}
            className={`flex items-center gap-1 text-gray-600 hover:text-primary relative group ${
              isMobile ? 'w-full px-3 py-2 text-left' : ''
            }`}
          >
            {item.label}
            <ChevronDown className="w-4 h-4" />
          </button>
          
          <AnimatePresence>
            {isResumeOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={`${
                  isMobile 
                    ? 'relative w-full pl-6 space-y-2 mt-2' 
                    : 'absolute left-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200'
                }`}
              >
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    to={child.href}
                    className={`block text-gray-600 hover:text-primary hover:bg-primary-light/20 transition-colors ${
                      isMobile ? 'py-1' : 'px-4 py-2'
                    }`}
                    onClick={() => setIsResumeOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <Link
        to={item.href}
        className={`text-gray-600 hover:text-primary relative group ${
          mobile ? 'block px-3 py-2' : ''
        } ${location.pathname === item.href ? 'text-primary' : ''}`}
      >
        {item.label}
        <span className={`absolute h-[2px] bg-gray-200 group-hover:bg-primary transition-colors ${
          mobile ? 'bottom-0 left-3 right-3' : 'bottom-[-4px] left-0 w-full'
        } ${location.pathname === item.href ? 'bg-primary' : ''}`} />
      </Link>
    );
  };

  return (
    <>
      {menuItems.map((item) => (
        <div key={item.label}>
          {renderDropdown(item, mobile)}
        </div>
      ))}
    </>
  );
}