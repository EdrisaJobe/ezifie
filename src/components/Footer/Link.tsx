import { FC, ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const Link: FC<LinkProps> = ({ href, children, className = '' }) => (
  <a
    href={href}
    className={`text-white/80 hover:text-white transition-colors ${className}`}
  >
    {children}
  </a>
);