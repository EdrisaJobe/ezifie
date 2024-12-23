import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, DollarSign, MapPin } from 'lucide-react';
import FilterButton from './FilterButton';
import { JobFilters } from './types';
import { FILTER_OPTIONS } from './constants';

interface FilterSectionProps {
  filters: JobFilters;
  setFilters: (filters: JobFilters) => void;
}

export default function FilterSection({ filters, setFilters }: FilterSectionProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <FilterButton
        icon={Briefcase}
        label="Experience Level"
        value={filters.experienceLevel}
        onChange={(value) => setFilters({ ...filters, experienceLevel: value })}
        options={FILTER_OPTIONS.experienceLevel}
      />
      <FilterButton
        icon={Briefcase}
        label="Category"
        value={filters.category}
        onChange={(value) => setFilters({ ...filters, category: value })}
        options={FILTER_OPTIONS.category}
      />
      <FilterButton
        icon={GraduationCap}
        label="Education"
        value={filters.education}
        onChange={(value) => setFilters({ ...filters, education: value })}
        options={FILTER_OPTIONS.education}
      />
      <FilterButton
        icon={DollarSign}
        label="Salary"
        value={filters.salary}
        onChange={(value) => setFilters({ ...filters, salary: value })}
        options={FILTER_OPTIONS.salary}
      />
      <FilterButton
        icon={MapPin}
        label="Location"
        value={filters.location}
        onChange={(value) => setFilters({ ...filters, location: value })}
        options={FILTER_OPTIONS.location}
      />
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="sponsorship"
          checked={filters.sponsorshipRequired}
          onChange={(e) => setFilters({ ...filters, sponsorshipRequired: e.target.checked })}
          className="rounded border-gray-300 text-primary focus:ring-primary"
        />
        <label htmlFor="sponsorship" className="text-sm text-gray-600">
          Sponsors H1B
        </label>
      </div>
    </div>
  );
}