'use client';

import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: "ISO/IEC 27001 Information Security Associate",
    issuer: "SkillFront",
    date: "Oktober 2021",
    credentialId: "95122845312419"
  },
  {
    title: "Digitalent - Interpersonal Skill",
    issuer: "Ministry of Communication and Information Technology of the Republic of Indonesia",
    date: "September 2021",
    credentialId: "02112308081-1/PASCA.DTS/BLSDM.KOMINFO/2021"
  },
  {
    title: "Scrum Foundations Professional Certificate (SFPC)",
    issuer: "Certiprof",
    date: "Desember 2020",
    credentialId: "53246049"
  },
  {
    title: "cPanel Professional Certification (CPP)",
    issuer: "cPanel",
    date: "Desember 2020",
    credentialId: "37c5-2c3e-2a22-0982"
  },
  {
    title: "Fundamentals of digital marketing",
    issuer: "Google Digital Garage",
    date: "November 2020",
    credentialId: "JUA 49D UKL"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding section-bg-primary">
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
          Sertifikasi
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-lg font-bold text-white">{cert.title}</h3>
              <p className="text-gray-400 mt-2">{cert.issuer}</p>
              <p className="text-gray-500 text-sm mt-1">{cert.date}</p>
              <p className="text-gray-500 text-sm mt-1">
                Credential ID: {cert.credentialId}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 