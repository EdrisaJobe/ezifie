import { motion } from 'framer-motion';
import { FileCheck, Briefcase, Award } from 'lucide-react';
import AnimatedCounter from './ui/AnimatedCounter';

export default function Banner() {
  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      
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
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-16">
            Join thousands of job seekers who have successfully landed their dream jobs using our professional resume builder.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">
                <AnimatedCounter end={50} suffix="K+" />
              </div>
              <p className="text-white/80">Resumes Created</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">
                <AnimatedCounter end={85} suffix="%" />
              </div>
              <p className="text-white/80">Success Rate</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">
                <AnimatedCounter end={25} suffix="+" />
              </div>
              <p className="text-white/80">Industry Templates</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}