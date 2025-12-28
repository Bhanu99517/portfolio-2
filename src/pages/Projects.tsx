import { motion } from 'framer-motion';
import { FolderKanban, ExternalLink, Github, Star, GitFork } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import SectionTitle from '@/components/SectionTitle';

const projectsData = [
  {
    title: "MiraAttendance",
    description: "MIRA ATTENDANCE is a web-based facial recognition attendance platform designed for diploma / polytechnic institutes.Students can check their attendance, exam results, and application status, while admins manage everything through a role-based dashboard.",
    image: "https://image2url.com/files/1765813123543-ff761359-f8eb-4893-b5c0-53c9daa76af8.png",
    technologies: ["TypeScript", "Javascript", "React", "HTML"],
    liveUrl: "https://miraattendance.vercel.app",
    githubUrl: "https://github.com/Bhanu99517/MIRA_FACIAL_ATTENDANCE",
    stars: 19,
    forks: 0,
  },
  {
    title: "Consultancy",
    description: "A clean, modern landing page template for consultancy and business services built with HTML, CSS, and JavaScript.",
    image: "https://image2url.com/files/1765855293210-d5b89443-0da0-4ed5-a824-5147d37e77fd.png",
    technologies: ["HTML", "CSS", "JavaSCRIPT"],
    liveUrl: "https://globalnorthoverseas.vercel.app",
    githubUrl: "https://github.com/BhanuTechLab/Consultancy",
    stars: 2,
    forks: 0,
  },
  {
    title: "Game",
    description: "Tech-Game-2 is a simple and interactive browser-based game developed using **HTML, CSS, and JavaScript**. This project focuses on improving front-end development skills while creating an engaging user experience.",
    image: "https://image2url.com/files/1765856095508-5a564d07-54cf-4f25-862a-e25823030daf.png",
    technologies: ["HTML", "CSS", "JavaSCRIPT"],
    liveUrl: "https://tech-game-2.vercel.app",
    githubUrl: "https://github.com/BhanuTechLab/Tech-Game-2",
    stars: 3,
    forks: 0,
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
