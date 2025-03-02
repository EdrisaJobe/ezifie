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
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            {description && (
              <p className="mt-1 text-sm text-gray-600">{description}</p>
            )}
          </div>
          {action && <div>{action}</div>}
        </div>
        {children}
      </div>
    </motion.div>
  );
}