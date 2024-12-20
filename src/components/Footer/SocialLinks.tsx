import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function SocialLinks() {
  const socialLinks = [
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-gray-400 hover:text-primary transition-colors"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}