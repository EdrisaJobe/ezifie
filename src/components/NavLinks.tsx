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
    { label: 'Resume Builder', href: '/resume-builder' },
    { label: 'Pricing', href: '/pricing' },
  ];

  return (
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
}