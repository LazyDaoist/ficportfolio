'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-white text-2xl font-bold font-monument">
            FARIQ.
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="nav-link">
              HOME
            </Link>
            <Link href="#experience" className="nav-link">
              EXPERIENCE
            </Link>
            <Link href="#skills" className="nav-link">
              SKILLS
            </Link>
            <Link href="#education" className="nav-link">
              EDUCATION
            </Link>
            <Link href="#certifications" className="nav-link">
              CERTIFICATIONS
            </Link>
            <Link href="/cv" className="nav-link">
              CV
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <a href="#contact" className="primary-button text-sm">
              CONTACT ME
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 