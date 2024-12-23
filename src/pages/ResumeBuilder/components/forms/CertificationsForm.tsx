import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { Certification } from '../../types';
import FormSection from './shared/FormSection';
import FormInput from './shared/FormInput';

interface CertificationsFormProps {
  certifications: Certification[];
  onChange: (certifications: Certification[]) => void;
}

export default function CertificationsForm({ certifications, onChange }: CertificationsFormProps) {
  const [isAdding, setIsAdding] = useState(false);

  const addCertification = (newCert: Certification) => {
    onChange([...certifications, { ...newCert, id: crypto.randomUUID() }]);
    setIsAdding(false);
  };

  const removeCertification = (id: string) => {
    onChange(certifications.filter(cert => cert.id !== id));
  };

  const updateCertification = (id: string, updates: Partial<Certification>) => {
    onChange(certifications.map(cert => 
      cert.id === id ? { ...cert, ...updates } : cert
    ));
  };

  return (
    <FormSection
      title="Certifications"
      description="Add professional certifications and licenses you've earned."
    >
      <div className="space-y-6">
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative p-4 border border-gray-200 rounded-lg"
          >
            <button
              onClick={() => removeCertification(cert.id)}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="Certification Name"
                name="name"
                value={cert.name}
                onChange={(e) => updateCertification(cert.id, { name: e.target.value })}
                placeholder="AWS Certified Solutions Architect"
              />
              <FormInput
                label="Issuing Organization"
                name="issuer"
                value={cert.issuer}
                onChange={(e) => updateCertification(cert.id, { issuer: e.target.value })}
                placeholder="Amazon Web Services"
              />
              <FormInput
                label="Date Earned"
                name="date"
                type="date"
                value={cert.date}
                onChange={(e) => updateCertification(cert.id, { date: e.target.value })}
              />
              <FormInput
                label="Credential URL"
                name="link"
                value={cert.link}
                onChange={(e) => updateCertification(cert.id, { link: e.target.value })}
                placeholder="https://www.credential.net/..."
              />
            </div>
          </motion.div>
        ))}

        <AnimatePresence>
          {isAdding && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-4 border border-gray-200 rounded-lg"
            >
              <CertificationsForm
                certifications={[]}
                onChange={(newCerts) => {
                  if (newCerts.length > 0) {
                    addCertification(newCerts[0]);
                  }
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsAdding(true)}
          className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Certification
        </motion.button>
      </div>
    </FormSection>
  );
}