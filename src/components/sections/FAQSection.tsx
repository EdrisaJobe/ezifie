import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

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
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // FAQItem Component
  const renderFAQItem = (faq: { question: string; answer: string }, index: number) => {
    const isOpen = openItems.includes(index);
    
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
        className="border-b border-primary/10 last:border-0"
      >
        <motion.button
          onClick={() => toggleItem(index)}
          className="w-full py-6 flex justify-between items-center text-left group"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <span className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
            {faq.question}
          </span>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary group-hover:bg-primary/20'
          }`}>
            {isOpen ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>
        </motion.button>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? "auto" : 0, 
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-gray-600 bg-gradient-to-r from-primary/5 to-transparent px-4 py-2 rounded-lg">
            {faq.answer}
          </p>
        </motion.div>
      </motion.div>
    );
  };

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
            {faqs.map((faq, index) => renderFAQItem(faq, index))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}