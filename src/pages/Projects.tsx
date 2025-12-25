import { motion } from 'framer-motion';
import { FolderKanban, ExternalLink, Github, Star } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import AnimatedCard from '@/components/AnimatedCard';
import { Button } from '@/components/ui/button';

const projectsData = [
  {
    title: "CloudSync Pro",
    description: "A real-time cloud synchronization platform that enables seamless file sharing and collaboration across teams. Built with modern web technologies and scalable architecture.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "WebSocket", "AWS S3", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 1250,
    featured: true,
    color: 'cyan' as const,
  },
  {
    title: "AI Code Assistant",
    description: "An intelligent code completion and review tool powered by machine learning. Helps developers write better code faster with real-time suggestions.",
    image: "/placeholder.svg",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 890,
    featured: true,
    color: 'magenta' as const,
  },
  {
    title: "DevOps Dashboard",
    description: "Comprehensive monitoring and analytics dashboard for DevOps teams. Track deployments, server health, and application metrics in real-time.",
    image: "/placeholder.svg",
    technologies: ["Vue.js", "Go", "Prometheus", "Grafana", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 567,
    featured: false,
    color: 'gold' as const,
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce solution with inventory management, payment processing, and analytics. Handles thousands of transactions daily.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "Stripe", "MongoDB", "Redis", "Elasticsearch"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 432,
    featured: false,
    color: 'purple' as const,
  },
  {
    title: "Social Media API",
    description: "RESTful API service for social media applications. Features authentication, real-time notifications, and content moderation.",
    image: "/placeholder.svg",
    technologies: ["Node.js", "GraphQL", "MongoDB", "Socket.io", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 321,
    featured: false,
    color: 'cyan' as const,
  },
  {
    title: "Portfolio Generator",
    description: "Dynamic portfolio website generator for developers. Create stunning portfolios with customizable themes and easy content management.",
    image: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "MDX", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 278,
    featured: false,
    color: 'magenta' as const,
  },
];

const Projects = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12">
        <SectionTitle
          icon={FolderKanban}
          title="Projects"
          subtitle="A showcase of my best work and side projects"
        />

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold mb-8 flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Star className="w-6 h-6 text-glow-gold fill-glow-gold" />
            Featured Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {projectsData
              .filter((p) => p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <AnimatedCard glowColor={project.color} className="h-full">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                        <div className="flex items-center gap-1 text-sm text-glow-gold">
                          <Star className="w-4 h-4 fill-current" />
                          {project.stars}
                        </div>
                      </div>

                      <p className="text-muted-foreground">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded bg-muted text-xs font-medium text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="border-border hover:bg-muted">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Source
                          </a>
                        </Button>
                      </div>
                    </div>
                  </AnimatedCard>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <motion.h3
          className="text-2xl font-bold mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Other Projects
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AnimatedCard glowColor={project.color} className="h-full">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h4 className="text-lg font-bold text-foreground">{project.title}</h4>
                      <div className="flex items-center gap-1 text-xs text-glow-gold">
                        <Star className="w-3 h-3 fill-current" />
                        {project.stars}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-muted text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-muted-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <a
                        href={project.liveUrl}
                        className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;
