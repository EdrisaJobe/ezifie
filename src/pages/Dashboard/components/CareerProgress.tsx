import { motion } from 'framer-motion';
import { Target, TrendingUp, Award } from 'lucide-react';

export default function CareerProgress() {
  const stats = [
    { label: 'Applications Submitted', value: 12, icon: Target, trend: '+3 this week' },
    { label: 'Interview Success Rate', value: '75%', icon: TrendingUp, trend: '+5% vs last month' },
    { label: 'Skills Endorsed', value: 8, icon: Award, trend: '2 new endorsements' }
  ];

  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Career Progress</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map(({ label, value, icon: Icon, trend }) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg bg-primary-light/20"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600">{label}</p>
                <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
                <p className="text-xs text-primary mt-1">{trend}</p>
              </div>
              <Icon className="w-5 h-5 text-primary" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}