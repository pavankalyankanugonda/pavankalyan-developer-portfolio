import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Canvas3D from './components/Canvas3D';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isWelcomeComplete, setIsWelcomeComplete] = useState(false);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {!isWelcomeComplete && (
          <Welcome onComplete={() => setIsWelcomeComplete(true)} />
        )}
      </AnimatePresence>
      {/* 3D Background */}
      <Canvas3D />

      {/* Main Content */}
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
