import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/yourprofile',
    color: 'hover:text-[#0A66C2]',
    bgColor: 'hover:bg-[#0A66C2]/20',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/yourprofile',
    color: 'hover:text-[#E4405F]',
    bgColor: 'hover:bg-[#E4405F]/20',
  },
  {
    name: 'X',
    icon: Twitter,
    url: 'https://x.com/yourprofile',
    color: 'hover:text-foreground',
    bgColor: 'hover:bg-foreground/20',
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/yourprofile',
    color: 'hover:text-[#6e5494]',
    bgColor: 'hover:bg-[#6e5494]/20',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="relative z-10 border-t border-border/30 bg-background/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border border-border/50 text-muted-foreground transition-all duration-300 ${social.color} ${social.bgColor}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-muted-foreground">
              © {currentYear}{' '}
              <span className="font-signature text-lg gradient-text">John Doe</span>
              . All rights reserved.
            </p>
            <motion.p
              className="text-xs text-muted-foreground/60 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Built with ❤️ and creativity
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Gradient line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)), transparent)',
        }}
      />
    </motion.footer>
  );
};

export default Footer;
