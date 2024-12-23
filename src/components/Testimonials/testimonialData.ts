export interface Testimonial {
  image: string;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
    name: "David Chen",
    role: "Business Analyst",
    company: "Deloitte",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/200px-Deloitte.svg.png",
    quote: "I've saved hours of time that I would've spent re-typing my resume on job applications."
  },
  {
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Sarah Miller",
    role: "Marketing Manager",
    company: "Adobe",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/200px-Adobe_Corporate_Logo.png",
    quote: "The AI-powered resume builder helped me highlight my achievements perfectly."
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Michael Roberts",
    role: "Software Engineer",
    company: "Microsoft",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png",
    quote: "Ezifie was crucial in helping me keep track of my applications while interviewing."
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Emily Johnson",
    role: "Product Manager",
    company: "Amazon",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png",
    quote: "The templates are professional and helped me land interviews at top companies."
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    name: "James Wilson",
    role: "Data Scientist",
    company: "Google",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png",
    quote: "The AI suggestions helped me quantify my achievements effectively."
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Sophie Chen",
    role: "UX Designer",
    company: "Apple",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png",
    quote: "The platform's design tools helped me create a visually stunning portfolio."
  }
];