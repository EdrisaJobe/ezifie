import { ResumeData } from '../types';

const randomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
};

export function generateTestData(): Partial<ResumeData> {
  const today = new Date();
  const fiveYearsAgo = new Date(today.getFullYear() - 5, today.getMonth(), today.getDate());

  return {
    personalInfo: {
      fullName: 'John Developer',
      email: 'john.dev@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      title: 'Senior Software Engineer',
      linkedin: 'linkedin.com/in/johndev',
      summary: 'Experienced software engineer with expertise in full-stack development, cloud architecture, and team leadership. Passionate about creating scalable solutions and mentoring junior developers.'
    },
    experience: [
      {
        id: '1',
        company: 'Tech Solutions Inc.',
        title: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: randomDate(fiveYearsAgo, today),
        endDate: '',
        current: true,
        description: 'Led development of cloud-native applications\nMentored junior developers\nImplemented CI/CD pipelines\nReduced deployment time by 40%'
      },
      {
        id: '2',
        company: 'Innovation Labs',
        title: 'Software Engineer',
        location: 'Remote',
        startDate: randomDate(fiveYearsAgo, new Date(today.getFullYear() - 2, today.getMonth(), today.getDate())),
        endDate: randomDate(new Date(today.getFullYear() - 2, today.getMonth(), today.getDate()), today),
        current: false,
        description: 'Developed scalable microservices\nOptimized database performance\nImplemented real-time analytics\nReduced server costs by 25%'
      }
    ],
    education: [
      {
        id: '1',
        institution: 'University of Technology',
        degree: 'Master of Computer Science',
        startDate: '2015-09-01',
        endDate: '2017-06-30',
        current: false,
        gpa: '3.8'
      },
      {
        id: '2',
        institution: 'Tech Institute',
        degree: 'Bachelor of Science in Software Engineering',
        startDate: '2011-09-01',
        endDate: '2015-05-30',
        current: false,
        gpa: '3.9'
      }
    ],
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Python',
      'AWS',
      'Docker',
      'Kubernetes',
      'GraphQL',
      'MongoDB'
    ],
    languages: [
      { name: 'English', proficiency: 'Native' },
      { name: 'Spanish', proficiency: 'Advanced' },
      { name: 'French', proficiency: 'Intermediate' }
    ]
  };
}