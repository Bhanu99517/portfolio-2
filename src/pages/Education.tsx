import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, Play } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import SectionTitle from '@/components/SectionTitle';

const educationData = [
  {
    degree: "Diploma in Electronics and Communication Engineering",
    school: "Government polytechnic",
    location: "Ismailkhanpet, Sangareddy, India",
    period: "2023 - 2026",
    gpa: "9.0/10.0",
    highlights: [
      "First Class with Distinction",
      "Led the college coding club",
      "Winner - National Hackathon 2025",
      "Undergraduate Research Assistant"
    ],
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

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {/* Degree Title */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                {edu.degree}
              </h3>

              {/* School Name */}
              <p className="text-primary font-medium text-lg mb-4">
                {edu.school}
              </p>

              {/* Details Row */}
              <div className="space-y-2 mb-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-muted-foreground" />
                  <span>GPA: {edu.gpa}</span>
                </div>
              </div>

              {/* Highlights Section */}
              <div>
                <h4 className="text-muted-foreground font-mono text-sm mb-4">
                  Highlights:
                </h4>
                <ul className="space-y-3">
                  {edu.highlights.map((highlight, idx) => (
                    <motion.li
                      key={highlight}
                      className="flex items-center gap-3 text-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + idx * 0.1 }}
                    >
                      <Play className="w-3 h-3 text-primary fill-primary flex-shrink-0" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Education;
