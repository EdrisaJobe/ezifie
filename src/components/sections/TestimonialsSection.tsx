import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback } from 'react';

interface Testimonial {
  image: string;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  quote: string;
}

const testimonials: Testimonial[] = [
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

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const getVisibleTestimonials = useCallback(() => {
    const wrappedTestimonials = [...testimonials, ...testimonials.slice(0, itemsPerPage)];
    return wrappedTestimonials.slice(currentIndex, currentIndex + itemsPerPage);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // TestimonialCard Component
  const renderTestimonialCard = (testimonial: Testimonial, index: number) => (
    <motion.div
      key={`${testimonial.name}-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-4 h-full flex flex-col"
    >
      <div className="flex items-start gap-3 mb-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h3>
          <p className="text-xs text-gray-600">{testimonial.role}</p>
        </div>
      </div>
      
      <blockquote className="text-gray-700 text-sm mb-4 flex-grow">
        "{testimonial.quote}"
      </blockquote>
      
      <div className="flex items-center justify-between mt-auto">
        <p className="text-xs text-gray-500">Joined {testimonial.company}</p>
        <img
          src={testimonial.companyLogo}
          alt={testimonial.company}
          className="h-5 object-contain"
        />
      </div>
    </motion.div>
  );

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Enhanced colorful background with minimal fading */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-primary-light/30 to-blue-100/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(27,172,255,0.2)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(96,165,250,0.2)_0%,transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join over <span className="text-primary">500,000</span> Professionals
          </h2>
          <p className="text-xl text-gray-600">
            Who found their dream jobs using Ezifie's professional tools
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-5 gap-4"
              >
                {getVisibleTestimonials().map((testimonial, index) => 
                  renderTestimonialCard(testimonial, index)
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation with enhanced styling */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-primary hover:bg-primary-light hover:text-primary-hover transition-all duration-300 border border-primary/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <div className="flex gap-3">
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerPage) === index
                      ? 'bg-primary shadow-md shadow-primary/30'
                      : 'bg-gray-300 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-primary hover:bg-primary-light hover:text-primary-hover transition-all duration-300 border border-primary/10"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}