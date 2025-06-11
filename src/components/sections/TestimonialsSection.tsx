import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Miller",
    role: "Marketing Manager",
    company: "Adobe",
    content: "Simple and effective. Got my resume done in 10 minutes and landed 3 interviews.",
    rating: 5
  },
  {
    name: "Michael Roberts", 
    role: "Software Engineer",
    company: "Microsoft",
    content: "Clean templates that actually work with applicant tracking systems.",
    rating: 5
  },
  {
    name: "Emily Johnson",
    role: "Product Manager", 
    company: "Amazon",
    content: "No frills, just works. Exactly what I needed for my job search.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600">
            Real feedback from people who landed jobs using Ezifie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-primary-light rounded-lg px-6 py-3">
            <Star className="w-5 h-5 text-primary fill-current" />
            <span className="text-primary font-semibold">4.9/5 stars from 1,000+ users</span>
          </div>
        </div>
      </div>
    </section>
  );
}