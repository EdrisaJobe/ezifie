import { motion } from 'framer-motion';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: "How does Ezifie's resume builder work?",
    answer: "Our intuitive resume builder guides you through the process step by step. Simply choose a template, fill in your information, and our smart formatting tools will create a professional resume instantly. You can easily customize colors, fonts, and layouts to match your style."
  },
  {
    question: "Can I create multiple versions of my resume?",
    answer: "Yes! With Ezifie, you can create unlimited resume versions to target different jobs or industries. Our platform saves all your information securely, allowing you to quickly generate tailored resumes for each application."
  },
  {
    question: "Are the resume templates ATS-friendly?",
    answer: "Absolutely! All our templates are designed to be ATS (Applicant Tracking System) compliant. They maintain a clean, professional structure that ensures your resume can be properly parsed by recruitment software while still looking great to human readers."
  },
  {
    question: "What makes Ezifie different from other resume builders?",
    answer: "Ezifie combines professional design with intelligent features that understand modern hiring practices. Our platform offers industry-specific content suggestions, real-time feedback, and expert tips to help your resume stand out. Plus, our commitment to affordability means you get premium features without the premium price."
  }
];

export default function FAQSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Enhanced colorful background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-primary-light/30 to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(27,172,255,0.2)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(96,165,250,0.15)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_80%_50%,#ffffff00,rgba(27,172,255,0.1),#ffffff00)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold text-primary uppercase tracking-wide">FAQ</h2>
          <h3 className="mt-2 text-4xl font-bold text-gray-900">
            Common Asked Questions
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to frequently asked questions about our resume builder and how it can help advance your career.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/10"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                delay={0.2 + index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}