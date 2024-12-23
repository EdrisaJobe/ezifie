import { PersonalInfo } from '../../../types';

interface PersonalSectionProps {
  data: PersonalInfo;
}

export default function PersonalSection({ data }: PersonalSectionProps) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900">{data.fullName}</h1>
      <p className="text-lg text-primary mt-1">{data.title}</p>
      <div className="flex justify-center gap-4 text-sm text-gray-600 mt-2">
        <span>{data.email}</span>
        <span>{data.phone}</span>
        <span>{data.location}</span>
      </div>
      <p className="text-gray-600 mt-4">{data.summary}</p>
    </div>
  );
}