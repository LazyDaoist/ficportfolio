'use client';

import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    school: "PalComTech Prabumulih",
    degree: "Ilmu Komputer dan Informasi",
    period: "2019 - 2021"
  },
  {
    school: "SMK YPS Prabumulih",
    degree: "Administrasi dan Manajemen Bisnis",
    period: "2016 - 2019"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Education() {
  return (
    <section id="education" className="section-padding section-bg-secondary">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="section-container"
      >
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          Pendidikan
        </motion.h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card"
            >
              <h3 className="text-xl font-bold text-white">{edu.school}</h3>
              <p className="text-gray-400 mt-2">{edu.degree}</p>
              <p className="text-gray-500 text-sm mt-1">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 