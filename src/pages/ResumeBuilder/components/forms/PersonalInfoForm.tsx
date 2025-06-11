import { ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Linkedin } from 'lucide-react';
import { PersonalInfo } from '../../types';
import FormSection from './shared/FormSection';
import FormInput from './shared/FormInput';
import { generateProfessionalSummary } from '../../../../utils/summaryGenerator';

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

export default function PersonalInfoForm({ data, onChange }: PersonalInfoFormProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  const handleAIEnhance = () => {
    const generatedSummary = generateProfessionalSummary();
    onChange({ ...data, summary: generatedSummary });
  };

  return (
    <FormSection
      title="Personal Information"
      description="Add your personal details to help employers contact you."
    >
      <div className="space-y-6">
        {/* Other form fields remain the same */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="Full Name"
            name="fullName"
            value={data.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
          <FormInput
            label="Professional Title"
            name="title"
            value={data.title}
            onChange={handleChange}
            placeholder="Senior Software Engineer"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            placeholder="john@example.com"
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="Location"
            name="location"
            value={data.location}
            onChange={handleChange}
            placeholder="San Francisco, CA"
            required
          />
          <div className="relative">
            <FormInput
              label="LinkedIn Profile"
              name="linkedin"
              value={data.linkedin}
              onChange={handleChange}
              placeholder="linkedin.com/in/johndoe"
            />
            <Linkedin className="absolute right-3 top-9 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
              Professional Summary
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="group relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAIEnhance}
                type="button"
                className="p-1.5 bg-primary text-white rounded-md hover:bg-primary-hover transition-colors"
                aria-label="Use AI to enhance"
              >
                <Wand2 className="w-4 h-4" />
              </motion.button>
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Use AI to enhance
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>
          <textarea
            id="summary"
            name="summary"
            value={data.summary}
            onChange={handleChange}
            placeholder="Write a brief summary highlighting your key qualifications and career objectives..."
            required
            rows={6}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
          />
          <p className="mt-1 text-sm text-gray-500">
            Aim for 1-3 sentences that highlight your most relevant skills and experiences.
          </p>
        </div>
      </div>
    </FormSection>
  );
}