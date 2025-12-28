import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';

const Home = () => {
  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'];

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-primary">Welcome to my portfolio</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm{' '}
                <span className="gradient-text font-signature text-6xl md:text-8xl">
                  Bhanu Prakash
                </span>
              </motion.h1>

              <motion.div
                className="flex items-center gap-2 text-xl md:text-2xl text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-primary">&lt;</span>
                <span className="font-code">Full Stack Developer</span>
                <span className="text-primary">/&gt;</span>
              </motion.div>

              <motion.p
                className="text-lg text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Passionate about creating elegant solutions to complex problems. 
                I build beautiful, performant, and accessible web applications 
                with modern technologies.
              </motion.p>
            </div>

            {/* Skills */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground border border-border hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button asChild size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted">
                <Link to="/contact">
                  <Download className="mr-2 w-4 h-4" />
                  Download CV
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-xl bg-muted hover:bg-primary/10 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Animated Avatar/Code Block */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              {/* Floating code blocks */}
              <motion.div
                className="absolute -top-12 -left-8 p-4 rounded-xl bg-card border border-border font-code text-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-glow-magenta">const</span>{' '}
                <span className="text-glow-cyan">developer</span>{' '}
                <span className="text-muted-foreground">=</span>{' '}
                <span className="text-glow-gold">"creative"</span>;
              </motion.div>

              <motion.div
                className="absolute -bottom-10 -right-4 p-4 rounded-xl bg-card border border-border font-code text-sm"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="text-glow-magenta">function</span>{' '}
                <span className="text-glow-cyan">buildAmazing</span>
                <span className="text-muted-foreground">()</span>{' '}
                <span className="text-glow-gold">{'{}'}</span>
              </motion.div>

              {/* Main visual */}
              <motion.div
                className="gradient-border p-8 rounded-2xl"
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="bg-card rounded-xl p-8 space-y-4">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 pb-4 border-b border-border">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-glow-gold" />
                    <div className="w-3 h-3 rounded-full bg-glow-cyan" />
                    <span className="ml-4 text-sm text-muted-foreground font-code">~/portfolio</span>
                  </div>

                  {/* Code content */}
                  <div className="font-code text-sm space-y-2">
                    <div>
                      <span className="text-muted-foreground">$</span>{' '}
                      <span className="text-foreground">whoami</span>
                    </div>
                    <motion.div
                      className="text-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      → Full Stack Developer & Open Source Enthusiast
                    </motion.div>
                    <div className="pt-4">
                      <span className="text-muted-foreground">$</span>{' '}
                      <span className="text-foreground">skills --list</span>
                    </div>
                    <motion.div
                      className="flex flex-wrap gap-2 pt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                    >
                      {['⚛️ React', '📘 TypeScript', '🚀 Node.js'].map((skill, i) => (
                        <span
                          key={skill}
                          className="px-2 py-1 rounded bg-muted text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
