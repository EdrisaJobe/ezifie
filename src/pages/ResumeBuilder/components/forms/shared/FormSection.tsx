import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FormSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  action?: ReactNode;
}

export default function FormSection({ title, description, children, action }: FormSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-8"
    >
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            {description && (
              <p className="text-sm text-gray-600">{description}</p>
            )}
          </div>
          {action && <div className="flex-shrink-0">{action}</div>}
        </div>
        <div className="pt-4">{children}</div>
      </div>
    </motion.div>
  );
}