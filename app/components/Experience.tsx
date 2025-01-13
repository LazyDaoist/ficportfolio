'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';

interface Experience {
  company: string;
  position: string;
  period: string;
  type: string;
  location?: string;
  description?: string;
  icon: React.ReactNode;
}

const experiences: Experience[] = [
  {
    company: "PalComTech",
    position: "Computer Instructor",
    period: "Des 2020 - Saat ini",
    type: "Paruh Waktu",
    location: "Kota Prabumulih, Sumatera Selatan, Indonesia",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    company: "Freelancer",
    position: "Web Developer & Designer",
    period: "2017 - Hingga Kini",
    type: "Freelance",
    description: "Specialized on Photo Editing, Graphic Designer, Web Developing, Video Editing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    company: "ABU Corp",
    position: "Senior Web Developer",
    period: "2024 - Hingga Sekarang",
    type: "Full Time",
    description: "Membuat Website Company Profile",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }
];

const organizations: Experience[] = [
  {
    company: "Pagar Nusa Prabumulih",
    position: "Sekretaris Pimpinan Cabang",
    period: "2019 - Hingga Kini",
    type: "Organisasi",
    description: "Pencak Silat",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    )
  },
  {
    company: "IPSI Kota Prabumulih",
    position: "Wakil Sekjen",
    period: "2024 - Hingga Kini",
    type: "Organisasi",
    description: "Periode 2024-2027",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    company: "Digital Dragon Society",
    position: "ToT - Tutor of Tutor",
    period: "2023 - Hingga Kini",
    type: "Organisasi",
    description: "Ethical Hacking & Web Developer",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);

    // Update CSS variables for lighting effect
    cardRef.current.style.setProperty('--mouse-x', `${mouseX}px`);
    cardRef.current.style.setProperty('--mouse-y', `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="glass-card group cursor-pointer"
    >
      <div className="card-content">
        <div className="mb-6 transform transition-transform group-hover:scale-110 group-hover:translate-z-10">
          {experience.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 transform transition-transform group-hover:translate-z-8">
          {experience.position}
        </h3>
        <p className="text-white/80 mb-1 transform transition-transform group-hover:translate-z-6">
          {experience.company} · {experience.type}
        </p>
        <p className="text-white/60 text-sm mb-2 transform transition-transform group-hover:translate-z-4">
          {experience.period}
        </p>
        {experience.location && (
          <p className="text-white/60 text-sm transform transition-transform group-hover:translate-z-4">
            {experience.location}
          </p>
        )}
        {experience.description && (
          <p className="text-white/70 mt-4 text-sm leading-relaxed transform transition-transform group-hover:translate-z-4">
            {experience.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className={`section-padding section-bg-secondary section-transition ${isInView ? 'animate' : ''}`}
    >
      <div className="section-content">
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
            Pengalaman Kerja
          </motion.h2>

          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>

          <motion.h2 
            className="section-title mt-32"
            variants={itemVariants}
          >
            Organisasi
          </motion.h2>

          <div className="experience-grid">
            {organizations.map((org, index) => (
              <ExperienceCard key={index} experience={org} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 