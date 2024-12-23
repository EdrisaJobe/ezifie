import { motion } from 'framer-motion';
import { BookOpen, Video, Users, Award } from 'lucide-react';

export default function CareerResources() {
  const resources = [
    {
      title: 'Interview Preparation Guide',
      description: 'Master common interview questions and techniques',
      icon: BookOpen,
      link: '#'
    },
    {
      title: 'Resume Writing Workshop',
      description: 'Learn how to craft an effective resume',
      icon: Video,
      link: '#'
    },
    {
      title: 'Networking Strategies',
      description: 'Build and leverage your professional network',
      icon: Users,
      link: '#'
    },
    {
      title: 'Skill Certifications',
      description: 'Enhance your credentials with certifications',
      icon: Award,
      link: '#'
    }
  ];

  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Career Resources</h2>
      <div className="space-y-4">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <motion.a
              key={resource.title}
              href={resource.link}
              whileHover={{ scale: 1.02 }}
              className="block p-4 rounded-lg border border-gray-100 hover:border-primary/20 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary-light rounded-lg">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{resource.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}