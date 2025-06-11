import { motion } from 'framer-motion';
import { Bell, User, Building2, MapPin, Calendar, Clock, Video, Phone, Users } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';

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
  },
  {
    company: 'StartupCo',
    role: 'Frontend Developer',
    location: 'New York, NY',
    status: 'Application Sent',
    appliedDate: '2024-02-17',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=50&h=50'
  },
  {
    company: 'DataFlow',
    role: 'Data Analyst',
    location: 'Austin, TX',
    status: 'Phone Screening',
    appliedDate: '2024-02-15',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=50&h=50'
  },
  {
    company: 'CloudTech',
    role: 'DevOps Engineer',
    location: 'Seattle, WA',
    status: 'Rejected',
    appliedDate: '2024-02-14',
    logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=50&h=50'
  },
  {
    company: 'InnovateAI',
    role: 'Machine Learning Engineer',
    location: 'Remote',
    status: 'Under Review',
    appliedDate: '2024-02-12',
    logo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=50&h=50'
  }
];

const interviews = [
  {
    company: 'TechCorp',
    role: 'Senior Software Engineer',
    date: '2024-02-22',
    time: '10:00 AM PST',
    type: 'Technical Interview',
    platform: 'Zoom',
    interviewer: 'Sarah Johnson'
  },
  {
    company: 'DesignLabs',
    role: 'UX Designer',
    date: '2024-02-24',
    time: '2:30 PM PST',
    type: 'Portfolio Review',
    platform: 'Google Meet',
    interviewer: 'Mike Chen'
  },
  {
    company: 'StartupCo',
    role: 'Frontend Developer',
    date: '2024-02-26',
    time: '11:00 AM PST',
    type: 'Behavioral Interview',
    platform: 'Phone Call',
    interviewer: 'Alex Rivera'
  }
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        {/* Dashboard Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-gray-400 hover:text-primary transition-colors"
                >
                  <Bell className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-gray-400 hover:text-primary transition-colors"
                >
                  <User className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Applications */}
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
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          app.status === 'Interview Scheduled' || app.status === 'Phone Screening' 
                            ? 'bg-green-100 text-green-800'
                            : app.status === 'Rejected'
                            ? 'bg-red-100 text-red-800'
                            : app.status === 'Under Review'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-primary-light text-primary'
                        }`}>
                          {app.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>
            
            <div className="space-y-8">
              {/* Upcoming Interviews */}
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
                              {interview.platform === 'Phone Call' ? (
                                <Phone className="w-4 h-4" />
                              ) : interview.type === 'Panel Interview' ? (
                                <Users className="w-4 h-4" />
                              ) : (
                                <Video className="w-4 h-4" />
                              )}
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
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}