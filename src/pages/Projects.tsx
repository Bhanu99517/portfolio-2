import { motion } from 'framer-motion';
import { FolderKanban, ExternalLink, Github, Star, GitFork } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import SectionTitle from '@/components/SectionTitle';

const projectsData = [
  {
    title: "CloudSync Pro",
    description: "A real-time cloud synchronization platform that enables seamless file sharing and collaboration across teams. Built with modern web technologies and scalable architecture.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop",
    technologies: ["React", "Node.js", "WebSocket", "AWS S3", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 1250,
    forks: 234,
  },
  {
    title: "AI Code Assistant",
    description: "An intelligent code completion and review tool powered by machine learning. Helps developers write better code faster with real-time suggestions.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 890,
    forks: 156,
  },
  {
    title: "DevOps Dashboard",
    description: "Comprehensive monitoring and analytics dashboard for DevOps teams. Track deployments, server health, and application metrics in real-time.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    technologies: ["Vue.js", "Go", "Prometheus", "Grafana", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 567,
    forks: 89,
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce solution with inventory management, payment processing, and analytics. Handles thousands of transactions daily.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    technologies: ["Next.js", "Stripe", "MongoDB", "Redis", "Elasticsearch"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 432,
    forks: 67,
  },
  {
    title: "Social Media API",
    description: "RESTful API service for social media applications. Features authentication, real-time notifications, and content moderation.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop",
    technologies: ["Node.js", "GraphQL", "MongoDB", "Socket.io", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 321,
    forks: 45,
  },
  {
    title: "Portfolio Generator",
    description: "Dynamic portfolio website generator for developers. Create stunning portfolios with customizable themes and easy content management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "MDX", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 278,
    forks: 34,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projectsData[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-muted/80 text-xs font-medium text-muted-foreground border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer: Stars, Forks, Links */}
        <div className="pt-3 border-t border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Stars */}
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Star className="w-4 h-4" />
              <span className="text-sm">{project.stars}</span>
            </div>
            {/* Forks */}
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <GitFork className="w-4 h-4" />
              <span className="text-sm">{project.forks}</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="View Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12">
        <SectionTitle
          icon={FolderKanban}
          title="Projects"
          subtitle="A showcase of my best work and side projects"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;
