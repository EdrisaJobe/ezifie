import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Resume Builder', href: '/resume-builder' },
    { label: 'Pricing', href: '/pricing' },
  ];

  // NavLinks Component
  const renderNavLinks = (mobile = false) => (
    <>
      {menuItems.map((item) => (
        <Link
          key={item.label}
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
      ))}
    </>
  );

  // AuthButtons Component
  const renderAuthButtons = (mobile = false) => {
    const baseLoginClass = "relative overflow-hidden text-primary border-2 border-primary rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary-hover hover:text-primary-hover";
    const baseSignupClass = "relative overflow-hidden bg-primary text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:bg-primary-hover";
    
    const buttonContent = (text: string, isPrimary: boolean = false) => (
      <>
        <span className="relative z-10">{text}</span>
        <div className={`absolute inset-0 ${isPrimary ? 'bg-primary-hover' : 'bg-primary-light'} transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100`} />
      </>
    );

    if (mobile) {
      return (
        <>
          <button 
            onClick={() => navigate('/login')}
            className={`w-full px-4 py-3 group ${baseLoginClass}`}
          >
            {buttonContent('Login')}
          </button>
          <button 
            onClick={() => navigate('/register')}
            className={`w-full px-4 py-3 group ${baseSignupClass}`}
          >
            {buttonContent('Sign Up', true)}
          </button>
        </>
      );
    }

    return (
      <>
        <motion.button 
          onClick={() => navigate('/login')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`px-6 py-2.5 group font-medium ${baseLoginClass}`}
        >
          {buttonContent('Login')}
        </motion.button>
        <motion.button 
          onClick={() => navigate('/register')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`px-6 py-2.5 group font-medium ${baseSignupClass}`}
        >
          {buttonContent('Sign Up', true)}
        </motion.button>
      </>
    );
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
              <img src="/logo.png" alt="Ezifie Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold text-primary">Ezifie</span>
            </Link>
            <Link to="/" className="text-sm font-bold text-gray-600 ml-3 self-center hover:text-primary transition-colors">
              Demo purposed site made by Edrisa Jobe
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {renderNavLinks()}
            {renderAuthButtons()}
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
              {renderNavLinks(true)}
              <div className="px-3 py-2 space-y-2">
                {renderAuthButtons(true)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}