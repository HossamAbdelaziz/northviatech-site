import { motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import IndustriesSection from './components/IndustriesSection';
import WhyChooseUs from './components/WhyChooseUs';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import HowWeHelpSection from './components/HowWeHelpSection';
import SuccessSnapshotsSection from './components/SuccessSnapshotsSection';
import IndustriesBar from './components/IndustriesBar';

import Projects from './pages/Projects';
import ServiceDetail from './pages/ServiceDetail';

function Home() {
  return (
    <div className="relative bg-[var(--color-primary)] text-[var(--color-text)] overflow-hidden">
      <Navbar />

      {/* 🔵 Background Glow Effects */}
      <motion.div
        className="fixed top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[var(--color-accent)] opacity-20 rounded-full blur-[150px] z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="fixed bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[var(--color-accent)] opacity-20 rounded-full blur-[150px] z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* 📄 Home Page Sections */}
      <HeroSection />
      <ServicesOverview />
      <HowWeHelpSection />
      <SuccessSnapshotsSection />
      <IndustriesBar />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
    </Routes>
  );
}

export default App;
