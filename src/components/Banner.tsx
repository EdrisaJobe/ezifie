import { motion } from 'framer-motion';
import { FileCheck, Briefcase, Award } from 'lucide-react';
import AnimatedCounter from './ui/AnimatedCounter';

export default function Banner() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Reduced fading with enhanced colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary to-primary-hover" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.25)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_80%_50%,#ffffff00,rgba(255,255,255,0.25),#ffffff00)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Professionals Worldwide
          </h2>
          <p className="text-white/95 text-lg max-w-2xl mx-auto mb-16">
            Join thousands of job seekers who have successfully landed their dream jobs using our professional resume builder.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { Icon: FileCheck, count: 50, suffix: 'K+', text: 'Resumes Created' },
              { Icon: Briefcase, count: 85, suffix: '%', text: 'Success Rate' },
              { Icon: Award, count: 25, suffix: '+', text: 'Industry Templates' }
            ].map(({ Icon, count, suffix, text }, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white/15 rounded-2xl transform transition-transform group-hover:scale-105" />
                <div className="relative p-6">
                  <div className="w-12 h-12 bg-white/25 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/35 transition-colors">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                    <AnimatedCounter end={count} suffix={suffix} />
                  </div>
                  <p className="text-white/95">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}