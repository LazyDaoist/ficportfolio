'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Development',
    items: [
      { name: 'Laravel', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'MySQL', level: 85 }
    ]
  },
  {
    category: 'Design',
    items: [
      { name: 'UI/UX Design', level: 85 },
      { name: 'Adobe Photoshop', level: 80 },
      { name: 'AutoCAD 2D', level: 75 },
      { name: 'Figma', level: 85 }
    ]
  },
  {
    category: 'Digital Marketing',
    items: [
      { name: 'SEO', level: 80 },
      { name: 'Content Marketing', level: 85 },
      { name: 'Social Media', level: 75 },
      { name: 'Company Branding', level: 85 }
    ]
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Teaching', level: 95 },
      { name: 'Public Speaking', level: 90 },
      { name: 'Team Leadership', level: 85 },
      { name: 'Problem Solving', level: 90 }
    ]
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

export default function Skills() {
  return (
    <section id="skills" className="section-padding section-bg-primary">
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
          Keahlian
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {skills.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              variants={itemVariants}
              className="card"
            >
              <h3 className="text-xl font-bold mb-8 text-white">{category.category}</h3>
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <div className="skill-label">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-value">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 