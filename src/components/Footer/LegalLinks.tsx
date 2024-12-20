import { Link } from './Link';

export default function LegalLinks() {
  const links = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Accessibility', href: '#' },
  ];

  return (
    <div className="flex flex-wrap gap-4 text-sm">
      {links.map((link) => (
        <Link key={link.label} href={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}