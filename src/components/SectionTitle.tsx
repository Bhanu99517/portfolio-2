import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';


interface SectionTitleProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ icon: Icon, title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {Icon && (
        <motion.div
          className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <Icon className="w-8 h-8 text-primary" />
        </motion.div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
      <motion.div
        className="h-1 w-24 mx-auto mt-6 rounded-full"
        style={{
          background: 'linear-gradient(90deg, hsl(180, 100%, 50%), hsl(300, 100%, 60%), hsl(45, 100%, 60%))',
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
};

export default SectionTitle;
