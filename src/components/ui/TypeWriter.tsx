import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

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
  const controls = useAnimationControls();
  
  useEffect(() => {
    const animate = async () => {
      await controls.start({
        width: "100%",
        transition: {
          duration: text.length * 0.05,
          delay,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 5
        }
      });
    };
    
    animate();
  }, [controls, text, delay]);

  return (
    <Component className="relative inline-block">
      <span className={`${className} opacity-30`}>{text}</span>
      <motion.span
        initial={{ width: 0 }}
        animate={controls}
        className="absolute inset-0 overflow-hidden whitespace-nowrap"
      >
        <span className={className}>{text}</span>
      </motion.span>
    </Component>
  );
}