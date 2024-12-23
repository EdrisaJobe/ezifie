import { ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';
import { Recipient } from '../../../types';
import FormSection from './shared/FormSection';
import FormInput from './shared/FormInput';

interface RecipientFormProps {
  data: Recipient;
  onChange: (data: Recipient) => void;
}

export default function RecipientForm({ data, onChange }: RecipientFormProps) {
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
      title="Recipient Information"
      description="Add the recipient's contact details."
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
          placeholder="John Smith"
          required
        />
        <FormInput
          label="Title"
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder="Hiring Manager"
          required
        />
        <FormInput
          label="Company"
          name="company"
          value={data.company}
          onChange={handleChange}
          placeholder="Company Name"
          required
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          placeholder="john.smith@company.com"
        />
        <FormInput
          label="Address"
          name="address"
          value={data.address}
          onChange={handleChange}
          placeholder="123 Business Street"
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