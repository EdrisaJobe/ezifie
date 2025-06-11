import { CheckCircle, FileText, Zap, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: FileText,
      title: 'Professional Templates',
      description: 'Clean, ATS-friendly resume templates that get you noticed.'
    },
    {
      icon: Zap,
      title: 'Quick & Easy',
      description: 'Build your resume in minutes, not hours. Simple and fast.'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data stays secure. We respect your privacy.'
    },
    {
      icon: CheckCircle,
      title: 'Job Ready',
      description: 'Resumes optimized for modern job applications.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Ezifie?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, effective resume builder designed for job seekers who want results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Simple. Effective. Professional.
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of job seekers who've found success with our straightforward approach to resume building. No complicated features, just what you need to land your next job.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <span>✓ No hidden fees</span>
              <span>✓ Mobile friendly</span>
              <span>✓ Instant download</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 