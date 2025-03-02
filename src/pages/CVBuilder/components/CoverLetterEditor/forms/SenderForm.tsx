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
    <FormSection>
      <></>
    </FormSection>
  );
}