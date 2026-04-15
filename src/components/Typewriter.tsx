import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface TypewriterProps {
  text: string;
  delay?: number;
  className?: string;
  infinite?: boolean;
  waitBeforeStart?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  delay = 30, 
  className = '', 
  infinite = false,
  waitBeforeStart = 0
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  
  // Removed margin to ensure it triggers more reliably on mobile scroll
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView && !isStarted) {
      const startTimeout = setTimeout(() => {
        setIsStarted(true);
      }, waitBeforeStart);
      return () => clearTimeout(startTimeout);
    }
  }, [isInView, waitBeforeStart, isStarted]);

  useEffect(() => {
    if (!isStarted) return;

    let timeout: any;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentIndex(0);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text, isStarted]);

  return (
    <span ref={containerRef} className={`${className} inline-flex items-center min-h-[1.2em]`}>
      {currentText}
      <span className="w-1 h-[0.8em] bg-current opacity-60 ml-1 animate-pulse" />
    </span>
  );
};

export default Typewriter;
