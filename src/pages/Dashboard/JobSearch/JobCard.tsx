import { motion } from 'framer-motion';
import { MapPin, DollarSign, Clock, Building2 } from 'lucide-react';
import type { Job } from './data/mockJobs';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-200 hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <img
          src={job.company.logo}
          alt={`${job.company.name} logo`}
          className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {job.company.name}
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                job.type === 'Full-Time' 
                  ? 'bg-primary-light text-primary'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {job.type}
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <DollarSign className="w-4 h-4" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              <span>{job.company.size}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{job.postedAt}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
            {job.sponsorshipAvailable && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Visa Sponsorship
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}