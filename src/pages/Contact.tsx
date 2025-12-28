import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import AnimatedCard from '@/components/AnimatedCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bhanu99517@gmail.com",
    href: "mailto:bhanu99517@gmail.com",
    color: 'cyan' as const,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: 'magenta' as const,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
    color: 'gold' as const,
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com", username: "@johndoe" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", username: "in/johndoe" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com", username: "@johndoe" },
];

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'transmitting' | 'success';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateField = (name: keyof FormData, value: string): string | undefined => {
  const trimmedValue = value.trim();
  
  switch (name) {
    case 'name':
      if (!trimmedValue) return 'Name is required';
      if (trimmedValue.length < 3) return 'Name must be at least 3 characters';
      if (trimmedValue.length > 100) return 'Name must be less than 100 characters';
      return undefined;
    case 'email':
      if (!trimmedValue) return 'Email is required';
      if (!emailRegex.test(trimmedValue)) return 'Invalid email format';
      if (trimmedValue.length > 255) return 'Email must be less than 255 characters';
      return undefined;
    case 'subject':
      if (!trimmedValue) return 'Subject is required';
      if (trimmedValue.length < 4) return 'Subject must be at least 4 characters';
      if (trimmedValue.length > 200) return 'Subject must be less than 200 characters';
      return undefined;
    case 'message':
      if (!trimmedValue) return 'Message is required';
      if (trimmedValue.length < 10) return 'Message must be at least 10 characters';
      if (trimmedValue.length > 1000) return 'Message must be less than 1000 characters';
      return undefined;
    default:
      return undefined;
  }
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({ name: true, email: true, subject: true, message: true });
    
    if (!validateForm()) return;

    setStatus('transmitting');

    // Simulate transmission delay for UX
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Build mailto link with encoded parameters
    const mailtoSubject = encodeURIComponent(formData.subject.trim());
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );
    const mailtoLink = `mailto:bhanu99517@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Trigger mailto
    window.location.href = mailtoLink;

    setStatus('success');

    // Reset form after success display
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({ name: false, email: false, subject: false, message: false });
      setErrors({});
      setStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Real-time validation for touched fields
    if (touched[name as keyof FormData]) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const getInputClassName = (fieldName: keyof FormData) => {
    const hasError = touched[fieldName] && errors[fieldName];
    return `bg-background font-mono transition-all duration-300 ${
      hasError 
        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.3)]' 
        : 'border-border focus:border-primary focus:ring-primary/20 focus:shadow-[0_0_15px_rgba(34,197,94,0.3)]'
    }`;
  };

  const renderError = (fieldName: keyof FormData) => {
    const error = touched[fieldName] && errors[fieldName];
    return (
      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -5, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -5, height: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5 mt-1.5"
          >
            <AlertCircle className="w-3.5 h-3.5 text-red-500" />
            <span className="text-xs font-mono text-red-500">{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12">
        <SectionTitle
          icon={MessageSquare}
          title="Contact Me"
          subtitle="Have a question or want to work together? I'd love to hear from you!"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AnimatedCard glowColor={info.color} className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </AnimatedCard>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-4 rounded-xl bg-card border border-border hover:border-primary transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors mb-2" />
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {social.username}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              className="gradient-border p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="font-medium text-foreground">Available for opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground">
                I'm currently open to freelance projects and full-time opportunities. 
                Let's discuss how I can help with your project!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="gradient-border p-8 bg-card rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground font-mono">
                {'>'} Send_Message
              </h3>
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-16 space-y-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    >
                      <CheckCircle className="w-16 h-16 text-green-500" />
                    </motion.div>
                    <h4 className="text-xl font-mono font-bold text-green-500">
                      MESSAGE ENCRYPTED & SENT
                    </h4>
                    <p className="text-muted-foreground text-center font-mono text-sm">
                      Transmission complete. Your email client should open shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-mono font-medium text-foreground">
                          name<span className="text-primary">:</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Your name"
                          disabled={status === 'transmitting'}
                          className={getInputClassName('name')}
                        />
                        {renderError('name')}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-mono font-medium text-foreground">
                          email<span className="text-primary">:</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="text"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="your@email.com"
                          disabled={status === 'transmitting'}
                          className={getInputClassName('email')}
                        />
                        {renderError('email')}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-mono font-medium text-foreground">
                        subject<span className="text-primary">:</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Project Inquiry"
                        disabled={status === 'transmitting'}
                        className={getInputClassName('subject')}
                      />
                      {renderError('subject')}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-mono font-medium text-foreground">
                        message<span className="text-primary">:</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tell me about your project..."
                        rows={5}
                        disabled={status === 'transmitting'}
                        className={`${getInputClassName('message')} resize-none`}
                      />
                      {renderError('message')}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider transition-all duration-300"
                      disabled={status === 'transmitting'}
                    >
                      {status === 'transmitting' ? (
                        <motion.div 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>TRANSMITTING...</span>
                        </motion.div>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
