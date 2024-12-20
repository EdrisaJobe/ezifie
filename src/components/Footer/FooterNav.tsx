import { Link } from './Link';

export default function FooterNav() {
  const links = {
    Products: [
      { label: 'Resume Builder', href: '#' },
      { label: 'CV Builder', href: '#' },
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

  return (
    <nav className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {Object.entries(links).map(([category, items]) => (
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
}