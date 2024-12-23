import { ChangeEvent } from 'react';
import { PersonalInfo } from '../../../types';
import FormSection from './shared/FormSection';
import FormInput from './shared/FormInput';
import FormTextArea from './shared/FormTextArea';

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

export default function PersonalInfoForm({ data, onChange }: PersonalInfoFormProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <FormSection
      title="Personal Information"
      description="Add your personal and contact details."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Full Name"
          name="fullName"
          value={data.fullName}
          onChange={handleChange}
          placeholder="Dr. Jane Smith"
          required
        />
        <FormInput
          label="Professional Title"
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder="Associate Professor of Computer Science"
          required
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          placeholder="jane.smith@university.edu"
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
          label="Location"
          name="location"
          value={data.location}
          onChange={handleChange}
          placeholder="Department of Computer Science, University of Example"
          required
        />
      </div>
      <FormTextArea
        label="Professional Summary"
        name="summary"
        value={data.summary}
        onChange={handleChange}
        placeholder="Briefly describe your research interests, academic background, and key achievements..."
        required
      />
    </FormSection>
  );
}