import { motion } from 'framer-motion';
import { Calendar, Clock, Video, Building2 } from 'lucide-react';

export default function UpcomingInterviews() {
  const interviews = [
    {
      company: 'TechCorp',
      role: 'Senior Software Engineer',
      date: '2024-02-22',
      time: '10:00 AM PST',
      type: 'Technical Interview',
      platform: 'Zoom',
      interviewer: 'Sarah Johnson'
    }
  ];

  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Interviews</h2>
      <div className="space-y-4">
        {interviews.map((interview) => (
          <motion.div
            key={`${interview.company}-${interview.date}-${interview.time}`}
            whileHover={{ scale: 1.01 }}
            className="p-4 rounded-lg border border-gray-100 hover:border-primary/20 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{interview.role}</h3>
                <div className="mt-1 space-y-1">
                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <Building2 className="w-4 h-4" />
                    {interview.company} - {interview.type}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    {interview.date}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    {interview.time}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <Video className="w-4 h-4" />
                    {interview.platform} with {interview.interviewer}
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">
                Join Call
              </button>
            </div>
          </motion.div>
        ))}
        {interviews.length === 0 && (
          <p className="text-center text-gray-600 py-4">No upcoming interviews scheduled</p>
        )}
      </div>
    </section>
  );
}