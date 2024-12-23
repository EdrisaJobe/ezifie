import { useState } from 'react';
import SearchBar from './SearchBar';
import FilterSection from './FilterSection';
import JobList from './JobList';
import { JobFilters } from './types';

export default function JobSearch() {
  const [filters, setFilters] = useState<JobFilters>({
    experienceLevel: '',
    category: '',
    education: '',
    salary: '',
    location: '',
    sponsorshipRequired: false
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Search All Jobs</h2>
        <SearchBar />
        <FilterSection filters={filters} setFilters={setFilters} />
      </div>
      <JobList filters={filters} />
    </div>
  );
}