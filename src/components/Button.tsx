import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const variants: Record<string, string> = {
    primary: 'bg-primary text-on-primary shadow-lg shadow-primary/20 hover:shadow-primary/40',
    secondary: 'bg-secondary text-on-secondary shadow-lg shadow-secondary/20 hover:shadow-secondary/40',
    outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary/10',
    ghost: 'text-primary bg-transparent hover:bg-primary/5',
  };

  const sizes: Record<string, string> = {
    sm: 'px-6 py-2.5 text-xs font-bold tracking-widest min-h-[44px]',
    md: 'px-8 py-3 text-sm font-bold tracking-widest min-h-[48px]',
    lg: 'px-10 py-4 text-base font-bold tracking-widest min-h-[56px]',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${variants[variant]} ${sizes[size]} rounded-full uppercase transition-all flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
