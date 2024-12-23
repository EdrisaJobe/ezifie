export interface Job {
  id: string;
  title: string;
  company: {
    name: string;
    logo: string;
    size: string;
  };
  salary: string;
  location: string;
  type: 'Full-Time' | 'Part-Time' | 'Contract';
  tags: string[];
  postedAt: string;
  sponsorshipAvailable: boolean;
}

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: {
      name: 'TechCorp',
      logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&q=80&w=50&h=50',
      size: '1,000-5,000 employees'
    },
    salary: '$120k - $180k',
    location: 'San Francisco, CA',
    type: 'Full-Time',
    tags: ['React', 'Node.js', 'TypeScript'],
    postedAt: '2 hours ago',
    sponsorshipAvailable: true
  },
  {
    id: '2',
    title: 'Product Designer',
    company: {
      name: 'DesignLabs',
      logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=50&h=50',
      size: '50-200 employees'
    },
    salary: '$90k - $130k',
    location: 'Remote',
    type: 'Full-Time',
    tags: ['Figma', 'UI/UX', 'Design Systems'],
    postedAt: '5 hours ago',
    sponsorshipAvailable: false
  }
];