import { ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';
import { Letter } from '../../../types';
import FormSection from './shared/FormSection';
import FormInput from './shared/FormInput';
import FormTextArea from './shared/FormTextArea';

interface LetterFormProps {
  data: Letter;
  onChange: (data: Letter) => void;
}

export default function LetterForm({ data, onChange }: LetterFormProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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