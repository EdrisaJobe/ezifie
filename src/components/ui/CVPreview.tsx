import { motion } from 'framer-motion';
import TypeWriter from './TypeWriter';

export default function CVPreview() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10">
      {/* Header with photo */}
      <div className="flex items-start space-x-4 mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 border-2 border-primary/20"
        >
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            <TypeWriter text="Sarah Johnson" />
          </h1>
          <div className="text-lg text-primary mb-2">
            <TypeWriter text="Marketing Director" delay={1} />
          </div>
          <div className="text-sm text-gray-600">
            <TypeWriter text="sarah@example.com" delay={1.5} />
            <br />
            <TypeWriter text="+1 (555) 234-5678" delay={2} />
          </div>
        </div>
      </div>

      {/* Profile Summary */}
      <div className="mb-6">
        <h2 className="text-base font-semibold text-primary mb-2">Professional Summary</h2>
        <div className="text-sm text-gray-600">
          <TypeWriter
            text="Marketing Director with 10+ years of experience in digital transformation and brand development. Proven track record of executing successful marketing strategies with measurable results."
            delay={2.5}
          />
        </div>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-base font-semibold text-primary mb-2">Key Experience</h2>
        <div className="space-y-3">
          <div>
            <TypeWriter 
              text="Global Marketing Director | TechCorp"
              className="text-sm font-medium text-gray-800"
              delay={3}
            />
            <div className="text-sm text-gray-600 mt-1">
              <TypeWriter
                text="Led digital initiatives resulting in 40% increase in engagement and 25% market share growth."
                delay={3.5}
              />
            </div>
          </div>
          <div>
            <TypeWriter 
              text="Senior Brand Manager | Innovation Labs"
              className="text-sm font-medium text-gray-800"
              delay={4}
            />
            <div className="text-sm text-gray-600 mt-1">
              <TypeWriter
                text="Spearheaded rebranding campaign with 85% positive feedback and $1.2M value increase."
                delay={4.5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}