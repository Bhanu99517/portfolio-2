import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import AnimatedBackground from '@/components/AnimatedBackground';
import IntroAnimation from '@/components/IntroAnimation';
import Navbar from '@/components/Navbar';
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import OpenSource from "./pages/OpenSource";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/opensource" element={<OpenSource />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppContent = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check if intro has been shown in this session
    const introShown = sessionStorage.getItem('introShown');
    if (introShown) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('introShown', 'true');
  };

  return (
    <>
      {showIntro && (
        <IntroAnimation onComplete={handleIntroComplete} name="John Doe" />
      )}
      <AnimatedBackground />
      <Navbar />
      <AnimatedRoutes />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
