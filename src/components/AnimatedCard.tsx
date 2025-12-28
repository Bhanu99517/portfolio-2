import { motion } from 'framer-motion';
import { ReactNode } from 'react';


interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glowColor?: 'cyan' | 'magenta' | 'gold' | 'purple';
}

const AnimatedCard = ({ children, className = '', delay = 0, glowColor = 'cyan' }: AnimatedCardProps) => {
  const glowClasses = {
    cyan: 'hover:shadow-[0_0_30px_hsl(180,100%,50%,0.3)]',
    magenta: 'hover:shadow-[0_0_30px_hsl(300,100%,60%,0.3)]',
    gold: 'hover:shadow-[0_0_30px_hsl(45,100%,60%,0.3)]',
    purple: 'hover:shadow-[0_0_30px_hsl(270,100%,65%,0.3)]',
  };

  return (
    <motion.div
      className={`gradient-border p-6 card-hover ${glowClasses[glowColor]} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
