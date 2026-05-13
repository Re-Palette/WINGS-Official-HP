/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { motion, useScroll, useSpring } from 'motion/react';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Router>
      <ScrollToTop />
      <main className="relative min-h-screen bg-navy-dark selection:bg-gold selection:text-navy-dark overflow-x-hidden">
        {/* Smooth Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gold origin-left z-[100]"
          style={{ scaleX }}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
