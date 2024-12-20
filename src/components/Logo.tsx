import { FC } from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg 
    viewBox="0 0 500 500" 
    className={className}
    fill="currentColor"
  >
    <path d="M100 100h300v100h-200v100h200v100h-300z" />
  </svg>
);