import { ReactNode } from 'react';

interface PreviewSectionProps {
  title: string;
  children: ReactNode;
}

export default function PreviewSection({ title, children }: PreviewSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      {children}
    </section>
  );
}