import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar } from 'lucide-react';

export default function RecentApplications() {
  const applications = [
    {
      company: 'TechCorp',
      role: 'Senior Software Engineer',
      location: 'San Francisco, CA',
      status: 'Under Review',
      appliedDate: '2024-02-20',
      logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&q=80&w=50&h=50'
    },
    {
      company: 'DesignLabs',
      role: 'UX Designer',
      location: 'Remote',
      status: 'Interview Scheduled',
      appliedDate: '2024-02-18',
      logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=50&h=50'
    }
  ];

  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Recent Applications</h2>
        <button className="text-sm text-primary hover:text-primary-hover">View all</button>
      </div>
      <div className="space-y-4">
        {applications.map((app) => (
          <motion.div
            key={`${app.company}-${app.role}`}
            whileHover={{ scale: 1.01 }}
            className="p-4 rounded-lg border border-gray-100 hover:border-primary/20 transition-colors"
          >
            <div className="flex items-start gap-4">
              <img src={app.logo} alt={app.company} className="w-10 h-10 rounded-lg" />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{app.role}</h3>
                <div className="mt-1 flex flex-wrap gap-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" /> {app.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {app.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> Applied {app.appliedDate}
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-light text-primary">
                {app.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}