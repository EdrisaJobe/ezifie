import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback } from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from './testimonialData';

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
                {getVisibleTestimonials().map((testimonial, index) => (
                  <TestimonialCard
                    key={`${testimonial.name}-${index}`}
                    {...testimonial}
                    index={index}
                  />
                ))}
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