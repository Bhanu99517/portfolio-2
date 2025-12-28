import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import AnimatedCard from '@/components/AnimatedCard';


const experienceData = [
  {
    role: "Senior Full Stack Developer",
    company: "Google",
    location: "Mountain View, CA",
    period: "2022 - Present",
    type: "Full-time",
    description: "Leading development of cloud-based applications serving millions of users. Architecting scalable solutions using React, Node.js, and Google Cloud Platform.",
    technologies: ["React", "TypeScript", "Node.js", "GCP", "Kubernetes"],
    highlights: [
      "Led a team of 8 developers on a flagship product",
      "Reduced application load time by 40%",
      "Implemented CI/CD pipelines improving deployment frequency by 3x",
    ],
    color: 'cyan' as const,
  },
  {
    role: "Full Stack Developer",
    company: "Microsoft",
    location: "Seattle, WA",
    period: "2020 - 2022",
    type: "Full-time",
    description: "Developed enterprise-grade applications for Azure services. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["React", "C#", ".NET", "Azure", "SQL Server"],
    highlights: [
      "Built microservices architecture serving 10M+ requests daily",
      "Mentored 5 junior developers",
      "Won internal hackathon for innovative project",
    ],
    color: 'magenta' as const,
  },
  {
    role: "Software Engineer Intern",
    company: "Amazon",
    location: "Seattle, WA",
    period: "Summer 2019",
    type: "Internship",
    description: "Worked on AWS Lambda functions and serverless architecture. Contributed to internal tools that improved developer productivity.",
    technologies: ["Python", "AWS Lambda", "DynamoDB", "React"],
    highlights: [
      "Developed automation tools saving 20+ hours weekly",
      "Received return offer for full-time position",
      "Presented project to VP of Engineering",
    ],
    color: 'gold' as const,
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    location: "Remote",
    period: "2018 - 2020",
    type: "Freelance",
    description: "Designed and developed custom websites and web applications for various clients ranging from startups to established businesses.",
    technologies: ["JavaScript", "React", "WordPress", "PHP", "MySQL"],
    highlights: [
      "Completed 25+ projects for clients worldwide",
      "Maintained 100% client satisfaction rate",
      "Built e-commerce platform generating $500K+ in sales",
    ],
    color: 'purple' as const,
  },
];

const Experience = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12">
        <SectionTitle
          icon={Briefcase}
          title="Experience"
          subtitle="My professional journey and the amazing companies I've worked with"
        />

        <div className="max-w-5xl mx-auto space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <AnimatedCard glowColor={exp.color}>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                        <span className="px-2 py-0.5 rounded text-xs bg-primary/20 text-primary font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 text-lg text-primary font-medium hover:underline group"
                      >
                        {exp.company}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-muted text-sm font-medium text-foreground border border-border"
                        whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <ul className="space-y-2 pt-2">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Experience;
