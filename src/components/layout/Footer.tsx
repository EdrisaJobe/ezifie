import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

// Simple Link component
const Link: FC<{ href: string; children: ReactNode; className?: string }> = ({ 
  href, 
  children, 
  className = '' 
}) => (
  <a
    href={href}
    className={`text-white/80 hover:text-white transition-colors ${className}`}
  >
    {children}
  </a>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: [
      { label: 'Resume Builder', href: '#' },
      { label: 'Templates', href: '#' },
      { label: 'Pricing', href: '#' },
    ],
    Resources: [
      { label: 'Blog', href: '#' },
      { label: 'Career Tips', href: '#' },
      { label: 'Examples', href: '#' },
      { label: 'Help Center', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Press Kit', href: '#' },
    ]
  };

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Accessibility', href: '#' },
  ];

  // FooterNav Component
  const renderFooterNav = () => (
    <nav className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {Object.entries(footerLinks).map(([category, items]) => (
        <div key={category}>
          <h3 className="font-semibold text-white mb-3">{category}</h3>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );

  // LegalLinks Component
  const renderLegalLinks = () => (
    <div className="flex flex-wrap gap-4 text-sm">
      {legalLinks.map((link) => (
        <Link key={link.label} href={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  );

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="p-2 border-2 border-white/20 rounded-lg">
                <img src="/logo.png" alt="Ezifie Logo" className="w-8 h-8" />
              </div>
              <span className="text-2xl font-bold">Ezifie</span>
            </div>
            <p className="text-white/80 max-w-md">
              Empowering job seekers worldwide with professional resume building tools and career resources.
            </p>
          </div>

          {/* Right column */}
          {renderFooterNav()}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © {currentYear} Ezifie. All rights reserved.
            </div>
            {renderLegalLinks()}
          </div>
        </div>
      </div>
    </footer>
  );
}