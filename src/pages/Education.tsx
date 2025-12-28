import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, Play } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import SectionTitle from '@/components/SectionTitle';

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    school: "Indian Institute of Technology (IIT)",
    location: "Hyderabad, Telangana, India",
    period: "2028 - 2030",
    gpa: "9.2/10.0",
    highlights: [
      "Specialized in Artificial Intelligence & ML",
      "Published research paper on Deep Learning",
      "Graduate Teaching Assistant",
      "Innovation Award Winner"
    ],
    color: 'magenta',
    borderGradient: 'from-pink-500 via-purple-500 to-violet-500',
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Jawaharlal Nehru Technological University",
    location: "Hyderabad, Telangana, India",
    period: "2026 - 2028",
    gpa: "9.2/10.0",
    highlights: [
      "First Class with Distinction",
      "Computer Science Society President",
      "Smart India Hackathon Finalist",
      "Best Project Award - Final Year"
    ],
    color: 'cyan',
    borderGradient: 'from-cyan-500 via-teal-500 to-emerald-500',
  },
  {
    degree: "Diploma in Electronics and Communication Engineering",
    school: "Government Polytechnic",
    location: "Ismailkhanpet, Sangareddy, India",
    period: "2023 - 2026",
    gpa: "9.0/10.0",
    highlights: [
      "First Class with Distinction",
      "Led the college coding club",
      "Winner - National Hackathon 2025",
      "Undergraduate Research Assistant"
    ],
    color: 'gold',
    borderGradient: 'from-yellow-500 via-orange-500 to-red-500',
  },
  {
    degree: "AWS Certified Solutions Architect",
    school: "Amazon Web Services",
    location: "Online Certification",
    period: "2025",
    gpa: "Professional",
    highlights: [
      "Cloud Architecture Design",
      "AWS Services & Best Practices",
      "Security & Compliance",
      "Cost Optimization Strategies"
    ],
    color: 'cyan',
    borderGradient: 'from-blue-500 via-indigo-500 to-purple-500',
  },
  {
    degree: "Google Professional Cloud Developer",
    school: "Google Cloud",
    location: "Online Certification",
    period: "2024",
    gpa: "Professional",
    highlights: [
      "Cloud-native application development",
      "Kubernetes & containerization",
      "CI/CD pipeline implementation",
      "Microservices architecture"
    ],
    color: 'magenta',
    borderGradient: 'from-green-500 via-emerald-500 to-teal-500',
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

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              {/* Animated gradient border */}
              <motion.div
                className={`absolute -inset-0.5 bg-gradient-to-r ${edu.borderGradient} rounded-xl opacity-50 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500`}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />
              
              {/* Card content */}
              <motion.div
                className="relative bg-background/95 backdrop-blur-sm border border-border/30 rounded-xl p-6 md:p-8 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Decorative corner accents */}
                <div className={`absolute top-0 left-0 w-16 h-16 bg-gradient-to-br ${edu.borderGradient} opacity-20 blur-2xl`} />
                <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${edu.borderGradient} opacity-20 blur-2xl`} />

                {/* Degree Title */}
                <motion.h3 
                  className="text-xl md:text-2xl font-bold text-foreground mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.1 }}
                >
                  {edu.degree}
                </motion.h3>

                {/* School Name */}
                <motion.p 
                  className="text-primary font-medium text-lg mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.15 }}
                >
                  {edu.school}
                </motion.p>

                {/* Details Row */}
                <motion.div 
                  className="flex flex-wrap gap-4 md:gap-6 mb-6 text-muted-foreground text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </motion.div>

                {/* Highlights Section */}
                <div>
                  <h4 className="text-muted-foreground font-mono text-sm mb-4">
                    Highlights:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {edu.highlights.map((highlight, idx) => (
                      <motion.li
                        key={highlight}
                        className="flex items-center gap-3 text-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.25 + idx * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <Play className="w-3 h-3 text-primary fill-primary flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Animated line at bottom */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${edu.borderGradient}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.4, duration: 0.8, ease: 'easeOut' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Education;
