import { ChangeEvent } from 'react';

interface FormTextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  hint?: string;
}

export default function FormTextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 4,
  hint,
}: FormTextAreaProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
      />
      {hint && <p className="mt-1 text-sm text-gray-500">{hint}</p>}
    </div>
  );
}