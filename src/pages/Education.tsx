import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import AnimatedCard from '@/components/AnimatedCard';

const educationData = [
  {
    degree: "Master of Computer Science",
    school: "Stanford University",
    location: "California, USA",
    period: "2020 - 2022",
    gpa: "3.9/4.0",
    description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on 'Deep Learning Applications in Web Development'.",
    achievements: ["Dean's List", "Research Assistant", "Published 2 Papers"],
    color: 'cyan' as const,
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "MIT",
    location: "Massachusetts, USA", 
    period: "2016 - 2020",
    gpa: "3.8/4.0",
    description: "Focused on Software Engineering and Web Technologies. Active member of the Computer Science Society.",
    achievements: ["Summa Cum Laude", "Hackathon Winner", "Teaching Assistant"],
    color: 'magenta' as const,
  },
  {
    degree: "High School Diploma",
    school: "Tech Valley High School",
    location: "San Francisco, USA",
    period: "2012 - 2016",
    gpa: "4.0/4.0",
    description: "Valedictorian with focus on STEM subjects. Founded the school's first coding club.",
    achievements: ["Valedictorian", "National Merit Scholar", "Science Fair Winner"],
    color: 'gold' as const,
  },
];

const Education = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12">
        <SectionTitle
          icon={GraduationCap}
          title="Education"
          subtitle="My academic journey and qualifications that shaped my career"
        />

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5"
              style={{
                background: 'linear-gradient(180deg, hsl(180, 100%, 50%), hsl(300, 100%, 60%), hsl(45, 100%, 60%))',
              }}
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />

            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="relative pl-20 pb-12 last:pb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 w-5 h-5 rounded-full bg-background border-2 border-primary"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                />

                <AnimatedCard glowColor={edu.color} delay={index * 0.1}>
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                        <p className="text-lg text-primary font-medium">{edu.school}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground">{edu.description}</p>

                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-glow-gold font-semibold">GPA: {edu.gpa}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {edu.achievements.map((achievement) => (
                        <motion.span
                          key={achievement}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Award className="w-3 h-3" />
                          {achievement}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Education;
