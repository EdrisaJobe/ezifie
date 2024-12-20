import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({ end, prefix = '', suffix = '' }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const count = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2
  });

  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      count.set(end);
    }
  }, [count, end, isInView]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}