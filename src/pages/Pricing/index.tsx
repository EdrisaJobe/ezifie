import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const plans = [
  {
    name: 'FREE',
    price: '0.00',
    description: 'For Individuals',
    features: [
      'Access to our award-winning resume builder',
      '15+ templates to create a professional resume',
      'Get a matching cover letter in seconds',
      'Basic Assistance'
    ]
  },
  {
    name: 'PERSONAL',
    price: '49.99',
    description: 'For Small Businesses',
    features: [
      'Everything in Free Personal, plus:',
      'Unlimited downloads and edits',
      'AI-powered content suggestions',
      'Priority support'
    ],
    popular: true
  },
  {
    name: 'ANNUAL',
    price: '288.00',
    originalPrice: '600.00',
    discount: 48,
    description: 'For Large Companies',
    features: [
      'Everything in Free Business, plus:',
      'Advanced AI features',
      'Team collaboration tools',
      'Dedicated account manager'
    ],
    billingPeriod: 'year'
  }
];

const testimonials = [
  {
    text: "Ezifie transformed my job search completely. The AI-powered suggestions helped me highlight achievements I would have otherwise overlooked.",
    author: "Michael Chen",
    role: "Software Engineer"
  },
  {
    text: "The templates are not just beautiful, they're ATS-friendly too. I received more interview calls in one month than I did in six months.",
    author: "Sarah Williams",
    role: "Marketing Director"
  },
  {
    text: "As a recent graduate, I was struggling to present my skills effectively. Ezifie made all the difference. Landed my dream job within weeks!",
    author: "James Rodriguez",
    role: "Data Analyst"
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-semibold mb-4"
            >
              PRICING
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Reasonable & Flexible{' '}
              <span className="text-primary">Plans.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Choose the perfect plan for your needs. Whether you're an individual job seeker
              or a large company, we have you covered with our flexible pricing options.
            </motion.p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className={`relative rounded-2xl bg-white p-8 shadow-lg ${
                  plan.popular ? 'border-2 border-primary' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline justify-center">
                    {plan.originalPrice && (
                      <span className="line-through text-2xl text-gray-400 mr-2">
                        ${plan.originalPrice}
                      </span>
                    )}
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="ml-1 text-xl font-semibold text-gray-500">
                      /{plan.billingPeriod || 'month'}
                    </span>
                  </div>
                  {plan.discount && (
                    <div className="mt-2">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full">
                        Save {plan.discount}%
                      </span>
                    </div>
                  )}
                  <p className="mt-2 text-gray-500">{plan.description}</p>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-8 w-full rounded-lg bg-primary hover:bg-primary-hover px-4 py-3 text-white shadow-lg transition-all duration-200">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <section className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Join Thousands of Successful Professionals
              </h2>
              <p className="text-gray-600">
                Over <span className="font-semibold">50,000+</span> satisfied users
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
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
        </main>
      </div>
      <Footer />
    </div>
  );
}