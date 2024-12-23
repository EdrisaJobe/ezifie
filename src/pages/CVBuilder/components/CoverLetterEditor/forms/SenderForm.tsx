import { ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';
import { Sender } from '../../../types';
import FormSection from './shared/FormSection';
import FormInput from './shared/FormInput';

interface SenderFormProps {
  data: Sender;
  onChange: (data: Sender) => void;
}

export default function SenderForm({ data, onChange }: SenderFormProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  const handleAIAssist = () => {
    // TODO: Implement AI assistance
    console.log('AI assistance requested');
  };

  return (
    <FormSection
      title="Your Information"
      description="Add your contact information."
      action={
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAIAssist}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-teal-600 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
        >
          <Wand2 className="w-4 h-4" />
          <span>AI Assist</span>
        </motion.button>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Full Name"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <FormInput
          label="Professional Title"
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder="Software Engineer"
          required
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
        />
        <FormInput
          label="Phone"
          name="phone"
          type="tel"
          value={data.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
          required
        />
        <FormInput
          label="Address"
          name="address"
          value={data.address}
          onChange={handleChange}
          placeholder="456 Residential Ave"
          required
        />
        <FormInput
          label="City, State ZIP"
          name="city"
          value={data.city}
          onChange={handleChange}
          placeholder="San Francisco, CA 94105"
          required
        />
      </div>
    </FormSection>
  );
}