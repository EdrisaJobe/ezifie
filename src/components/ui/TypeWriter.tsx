import { motion } from 'framer-motion';

interface TypeWriterProps {
  text: string;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export default function TypeWriter({ 
  text, 
  className = "", 
  delay = 0,
  as: Component = "span"
}: TypeWriterProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="inline-block"
    >
      <Component className={className}>{text}</Component>
    </motion.div>
  );
}