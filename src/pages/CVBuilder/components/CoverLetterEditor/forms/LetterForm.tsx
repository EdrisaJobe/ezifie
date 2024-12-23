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
    <FormSection
      title="Letter Content"
      description="Compose your cover letter."
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
      <div className="space-y-6">
        <FormInput
          label="Date"
          name="date"
          type="date"
          value={data.date}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Greeting"
          name="greeting"
          value={data.greeting}
          onChange={handleChange}
          placeholder="Dear Mr. Smith,"
          required
        />
        <FormTextArea
          label="Opening Paragraph"
          name="opening"
          value={data.opening}
          onChange={handleChange}
          placeholder="I am writing to express my strong interest in the [Position] role at [Company]..."
          required
          rows={3}
        />
        <FormTextArea
          label="Body"
          name="body"
          value={data.body}
          onChange={handleChange}
          placeholder="Throughout my career, I have developed strong skills in..."
          required
          rows={8}
        />
        <FormTextArea
          label="Closing Paragraph"
          name="closing"
          value={data.closing}
          onChange={handleChange}
          placeholder="Thank you for considering my application. I look forward to discussing how I can contribute to your team."
          required
          rows={3}
        />
        <FormInput
          label="Signature"
          name="signature"
          value={data.signature}
          onChange={handleChange}
          placeholder="Sincerely,"
          required
        />
      </div>
    </FormSection>
  );
}