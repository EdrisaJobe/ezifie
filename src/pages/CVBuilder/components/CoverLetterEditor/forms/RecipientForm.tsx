import { ChangeEvent } from 'react';
import { Recipient } from '../../../types';


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
    <></>
  );
}