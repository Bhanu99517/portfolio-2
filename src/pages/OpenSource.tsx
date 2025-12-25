import { motion } from 'framer-motion';
import { GitBranch, Star, GitFork, ExternalLink, Github, Users, Code2 } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import AnimatedCard from '@/components/AnimatedCard';
import { Button } from '@/components/ui/button';

const contributions = [
  {
    repo: "facebook/react",
    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    contributions: 12,
    stars: "218k",
    forks: "46k",
    type: "Bug Fix & Feature",
    color: 'cyan' as const,
  },
  {
    repo: "vercel/next.js",
    description: "The React Framework for the Web. Used by some of the world's largest companies.",
    contributions: 8,
    stars: "119k",
    forks: "25k",
    type: "Documentation",
    color: 'magenta' as const,
  },
  {
    repo: "microsoft/TypeScript",
    description: "TypeScript is a superset of JavaScript that compiles to clean JavaScript output.",
    contributions: 5,
    stars: "96k",
    forks: "12k",
    type: "Bug Fix",
    color: 'gold' as const,
  },
  {
    repo: "tailwindlabs/tailwindcss",
    description: "A utility-first CSS framework for rapid UI development.",
    contributions: 6,
    stars: "78k",
    forks: "4k",
    type: "Feature",
    color: 'purple' as const,
  },
];

const ownProjects = [
  {
    name: "react-animation-kit",
    description: "A collection of beautiful, customizable React animation components",
    stars: 1234,
    forks: 156,
    language: "TypeScript",
  },
  {
    name: "node-api-boilerplate",
    description: "Production-ready Node.js API boilerplate with best practices",
    stars: 892,
    forks: 234,
    language: "JavaScript",
  },
  {
    name: "css-gradient-generator",
    description: "Interactive tool to create beautiful CSS gradients",
    stars: 567,
    forks: 89,
    language: "TypeScript",
  },
];

const stats = [
  { icon: Code2, value: "150+", label: "Pull Requests" },
  { icon: Star, value: "5,000+", label: "Stars Earned" },
  { icon: GitFork, value: "800+", label: "Forks" },
  { icon: Users, value: "50+", label: "Contributors" },
];

const OpenSource = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12">
        <SectionTitle
          icon={GitBranch}
          title="Open Source"
          subtitle="Contributing to the developer community and building tools for everyone"
        />

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="gradient-border p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Major Contributions */}
        <motion.h3
          className="text-2xl font-bold mb-8 flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Github className="w-6 h-6 text-primary" />
          Major Contributions
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contributions.map((contrib, index) => (
            <motion.div
              key={contrib.repo}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AnimatedCard glowColor={contrib.color} className="h-full">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <a
                        href={`https://github.com/${contrib.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                      >
                        {contrib.repo}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded text-xs bg-secondary text-secondary-foreground">
                        {contrib.type}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {contrib.contributions} PRs
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">{contrib.description}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-glow-gold" />
                      {contrib.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {contrib.forks}
                    </span>
                  </div>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>

        {/* Own Open Source Projects */}
        <motion.h3
          className="text-2xl font-bold mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          My Open Source Projects
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ownProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AnimatedCard className="h-full">
                <div className="space-y-3">
                  <h4 className="font-bold text-foreground flex items-center gap-2">
                    <Github className="w-4 h-4 text-primary" />
                    {project.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-glow-gold">
                      <Star className="w-4 h-4 fill-current" />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <GitFork className="w-4 h-4" />
                      {project.forks}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-muted text-xs text-foreground">
                      {project.language}
                    </span>
                  </div>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View GitHub Profile
            </a>
          </Button>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default OpenSource;
