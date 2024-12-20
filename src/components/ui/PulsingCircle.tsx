import { motion } from 'framer-motion';

interface PulsingCircleProps {
  size?: number;
  color?: string;
  delay?: number;
}

export const PulsingCircle = ({ size = 8, color = "rgb(27,172,255)", delay = 0 }: PulsingCircleProps) => {
  return (
    <motion.div
      className="absolute"
      initial={{ scale: 0.5, opacity: 0.2 }}
      animate={{ scale: 1.5, opacity: 0 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay,
        ease: "easeOut"
      }}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color
      }}
    />
  );
};