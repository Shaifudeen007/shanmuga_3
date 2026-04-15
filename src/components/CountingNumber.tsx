import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

interface CountingNumberProps {
  value: number;
  duration?: number;
}

const CountingNumber: React.FC<CountingNumberProps> = ({ value, duration = 2 }) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { margin: "-50px", once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (countRef.current) countRef.current.textContent = Math.round(latest).toLocaleString();
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={countRef}>0</span>;
};

export default CountingNumber;
