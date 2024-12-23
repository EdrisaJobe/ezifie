import { motion } from 'framer-motion';
import JobCard from './JobCard';
import { mockJobs } from './data/mockJobs';
import type { JobFilters } from './types';

interface JobListProps {
  filters: JobFilters;
}

export default function JobList({ filters }: JobListProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">
          Showing {mockJobs.length} of {mockJobs.length} jobs
        </p>
        <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-primary focus:border-primary">
          <option>Most recent</option>
          <option>Most relevant</option>
          <option>Highest salary</option>
        </select>
      </div>

      <div className="space-y-4">
        {mockJobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <JobCard job={job} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}