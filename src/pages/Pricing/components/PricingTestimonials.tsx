import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Ezifie transformed my job search completely. The AI-powered suggestions helped me highlight achievements I would have otherwise overlooked. My new resume stands out beautifully!",
    author: "Michael Chen",
    role: "Software Engineer",
    rating: 5
  },
  {
    id: 2,
    text: "The templates are not just beautiful, they're ATS-friendly too. I received more interview calls in one month than I did in six months with my old resume. Thank you Ezifie!",
    author: "Sarah Williams",
    role: "Marketing Director",
    rating: 5
  },
  {
    id: 3,
    text: "As a recent graduate, I was struggling to present my skills effectively. Ezifie's guidance and professional templates made all the difference. Landed my dream job within weeks!",
    author: "James Rodriguez",
    role: "Data Analyst",
    rating: 5
  }
];

export default function PricingTestimonials() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Join Thousands of Successful Professionals
        </h2>
        <div className="flex items-center justify-center gap-2">
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white bg-primary-light flex items-center justify-center"
              >
                <span className="text-primary text-xs font-semibold">
                  {String.fromCharCode(65 + i)}
                </span>
              </div>
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            Join over <span className="font-semibold">50,000+</span> satisfied users
          </span>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: testimonial.id * 0.1 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center text-white font-semibold text-lg">
                {testimonial.author[0]}
              </div>
              <div>
                <span className="font-medium text-gray-900 block">
                  {testimonial.author}
                </span>
                <span className="text-sm text-gray-500">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}