'use client';

import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';

export default function Home() {
  return (
    <main className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
      </motion.div>
    </main>
  );
}
