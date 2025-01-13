'use client';

import React, { useEffect } from 'react';
import jsPDF from 'jspdf';

// Data CV
const cvData = {
  personalInfo: {
    name: 'Fariq Ikhsan Chaniago',
    title: 'Computer Instructor · Web Developer · Youtuber · Sound Engineer',
    email: 'fariqikhsanchaniago@gmail.com',
    phone: '+62 895-6184-40990',
    location: 'Kota Prabumulih, Sumatera Selatan, Indonesia',
    summary: 'Seorang profesional yang berpengalaman dalam pengembangan web dan instruktur komputer dengan lebih dari 4 tahun pengalaman mengajar dan 7 tahun sebagai freelancer. Memiliki keahlian dalam Laravel, Next.js, UI/UX Design, dan Digital Marketing.',
  },
  experiences: [
    {
      company: 'PalComTech',
      position: 'Computer Instructor',
      period: 'Des 2020 - Saat ini',
      type: 'Paruh Waktu',
      location: 'Kota Prabumulih, Sumatera Selatan, Indonesia',
      responsibilities: [
        'Mengajar mata kuliah pemrograman web dan desain grafis',
        'Mengembangkan kurikulum dan materi pembelajaran',
        'Membimbing mahasiswa dalam proyek akhir',
        'Mengevaluasi kinerja dan perkembangan mahasiswa'
      ]
    },
    {
      company: 'Freelancer',
      position: 'Web Developer & Designer',
      period: '2017 - Hingga Kini',
      type: 'Freelance',
      description: 'Specialized on Photo Editing, Graphic Designer, Web Developing, Video Editing',
      projects: [
        'Pengembangan website company profile untuk berbagai bisnis',
        'Desain dan implementasi sistem manajemen konten',
        'Optimasi SEO dan performa website',
        'Pembuatan konten digital dan branding'
      ]
    },
    {
      company: 'ABU Corp',
      position: 'Senior Web Developer',
      period: '2024 - Hingga Sekarang',
      type: 'Full Time',
      description: 'Membuat Website Company Profile',
      responsibilities: [
        'Memimpin pengembangan website perusahaan',
        'Mengimplementasi best practices dalam pengembangan web',
        'Mengoptimasi performa dan keamanan website',
        'Berkolaborasi dengan tim desain dan marketing'
      ]
    }
  ],
  organizations: [
    {
      company: 'Pagar Nusa Prabumulih',
      position: 'Sekretaris Pimpinan Cabang',
      period: '2019 - Hingga Kini',
      type: 'Organisasi',
      description: 'Pencak Silat',
      responsibilities: [
        'Mengelola administrasi organisasi',
        'Mengkoordinasi kegiatan dan event',
        'Menyusun laporan dan dokumentasi'
      ]
    },
    {
      company: 'IPSI Kota Prabumulih',
      position: 'Wakil Sekjen',
      period: '2024 - Hingga Kini',
      type: 'Organisasi',
      description: 'Periode 2024-2027',
      responsibilities: [
        'Membantu pelaksanaan tugas kesekretariatan',
        'Mengkoordinasi program dan kegiatan',
        'Menyusun laporan organisasi'
      ]
    },
    {
      company: 'Digital Dragon Society',
      position: 'ToT - Tutor of Tutor',
      period: '2023 - Hingga Kini',
      type: 'Organisasi',
      description: 'Ethical Hacking & Web Developer',
      responsibilities: [
        'Melatih dan membimbing tutor baru',
        'Mengembangkan materi pelatihan',
        'Mengkoordinasi program mentoring'
      ]
    }
  ],
  education: [
    {
      school: "PalComTech Prabumulih",
      degree: "Ilmu Komputer dan Informasi",
      period: "2019 - 2021",
      achievements: [
        "Lulus dengan predikat cumlaude",
        "Aktif dalam organisasi kampus",
        "Asisten laboratorium komputer"
      ]
    },
    {
      school: "SMK YPS Prabumulih",
      degree: "Administrasi dan Manajemen Bisnis",
      period: "2016 - 2019",
      achievements: [
        "Juara 1 Lomba Desain Grafis tingkat kota",
        "Ketua OSIS periode 2017-2018"
      ]
    }
  ],
  certifications: [
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
  ],
  skills: {
    development: [
      'Laravel (90%)', 'Next.js (85%)', 'TypeScript (80%)', 'MySQL (85%)',
      'PHP', 'HTML/CSS', 'JavaScript', 'Git', 'REST API'
    ],
    design: [
      'UI/UX Design (85%)', 'Adobe Photoshop (80%)', 'AutoCAD 2D (75%)',
      'Figma (85%)', 'Responsive Design'
    ],
    digitalMarketing: [
      'SEO (80%)', 'Content Marketing (85%)', 'Social Media (75%)',
      'Company Branding (85%)', 'Google Analytics'
    ],
    softSkills: [
      'Teaching (95%)', 'Public Speaking (90%)', 'Team Leadership (85%)',
      'Problem Solving (90%)', 'Communication'
    ]
  }
};

export default function CV() {
  useEffect(() => {
    generatePDF();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    let yPos = 20;
    const lineHeight = 7;
    const margin = 20;
    const pageWidth = doc.internal.pageSize.width;

    // Fungsi helper untuk menambah halaman baru
    const addNewPage = () => {
      doc.addPage();
      yPos = 20;
    };

    // Fungsi helper untuk mengecek ruang yang tersedia
    const checkSpace = (needed: number) => {
      if (yPos + needed > 280) {
        addNewPage();
        return true;
      }
      return false;
    };

    // Header
    doc.setFontSize(24);
    doc.text(cvData.personalInfo.name, margin, yPos);
    yPos += lineHeight * 2;

    doc.setFontSize(12);
    doc.text(cvData.personalInfo.title, margin, yPos);
    yPos += lineHeight;

    doc.setFontSize(10);
    doc.text(cvData.personalInfo.email, margin, yPos);
    yPos += lineHeight;
    doc.text(cvData.personalInfo.phone, margin, yPos);
    yPos += lineHeight;
    doc.text(cvData.personalInfo.location, margin, yPos);
    yPos += lineHeight * 2;

    // Summary
    doc.setFontSize(10);
    const summaryLines = doc.splitTextToSize(cvData.personalInfo.summary, pageWidth - 40);
    doc.text(summaryLines, margin, yPos);
    yPos += lineHeight * (summaryLines.length + 2);

    // Experience Section
    checkSpace(40);
    doc.setFontSize(16);
    doc.text('Pengalaman Kerja', margin, yPos);
    yPos += lineHeight * 1.5;

    doc.setFontSize(10);
    cvData.experiences.forEach(exp => {
      checkSpace(30);
      doc.setFont('', 'bold');
      doc.text(exp.company, margin, yPos);
      yPos += lineHeight;

      doc.setFont('', 'normal');
      doc.text(`${exp.position} · ${exp.type}`, margin, yPos);
      yPos += lineHeight;
      doc.text(exp.period, margin, yPos);
      yPos += lineHeight;

      if (exp.responsibilities) {
        exp.responsibilities.forEach(resp => {
          doc.text(`• ${resp}`, margin + 5, yPos);
          yPos += lineHeight;
        });
      }

      yPos += lineHeight;
    });

    // Education Section
    checkSpace(40);
    doc.setFontSize(16);
    doc.text('Pendidikan', margin, yPos);
    yPos += lineHeight * 1.5;

    doc.setFontSize(10);
    cvData.education.forEach(edu => {
      checkSpace(30);
      doc.setFont('', 'bold');
      doc.text(edu.school, margin, yPos);
      yPos += lineHeight;

      doc.setFont('', 'normal');
      doc.text(edu.degree, margin, yPos);
      yPos += lineHeight;
      doc.text(edu.period, margin, yPos);
      yPos += lineHeight;

      if (edu.achievements) {
        edu.achievements.forEach(achievement => {
          doc.text(`• ${achievement}`, margin + 5, yPos);
          yPos += lineHeight;
        });
      }

      yPos += lineHeight;
    });

    // Organizations Section
    checkSpace(40);
    doc.setFontSize(16);
    doc.text('Organisasi', margin, yPos);
    yPos += lineHeight * 1.5;

    doc.setFontSize(10);
    cvData.organizations.forEach(org => {
      checkSpace(30);
      doc.setFont('', 'bold');
      doc.text(org.company, margin, yPos);
      yPos += lineHeight;

      doc.setFont('', 'normal');
      doc.text(`${org.position} · ${org.period}`, margin, yPos);
      yPos += lineHeight;

      if (org.responsibilities) {
        org.responsibilities.forEach(resp => {
          doc.text(`• ${resp}`, margin + 5, yPos);
          yPos += lineHeight;
        });
      }

      yPos += lineHeight;
    });

    // Certifications Section
    checkSpace(40);
    doc.setFontSize(16);
    doc.text('Sertifikasi', margin, yPos);
    yPos += lineHeight * 1.5;

    doc.setFontSize(10);
    cvData.certifications.forEach(cert => {
      checkSpace(25);
      doc.setFont('', 'bold');
      doc.text(cert.title, margin, yPos);
      yPos += lineHeight;

      doc.setFont('', 'normal');
      doc.text(cert.issuer, margin, yPos);
      yPos += lineHeight;
      doc.text(`${cert.date} · ID: ${cert.credentialId}`, margin, yPos);
      yPos += lineHeight * 1.5;
    });

    // Skills Section
    checkSpace(40);
    doc.setFontSize(16);
    doc.text('Keahlian', margin, yPos);
    yPos += lineHeight * 1.5;

    doc.setFontSize(10);
    Object.entries(cvData.skills).forEach(([category, skills]) => {
      checkSpace(25);
      doc.setFont('', 'bold');
      doc.text(category.charAt(0).toUpperCase() + category.slice(1), margin, yPos);
      yPos += lineHeight;

      doc.setFont('', 'normal');
      const skillsText = skills.join(' · ');
      const skillsLines = doc.splitTextToSize(skillsText, pageWidth - 40);
      doc.text(skillsLines, margin, yPos);
      yPos += lineHeight * (skillsLines.length + 1);
    });

    // Save the PDF
    doc.save('CV_Fariq_Ikhsan_Chaniago.pdf');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-white">CV Berhasil Di-generate!</h1>
        <p className="text-gray-400 mb-8">CV Anda telah berhasil diunduh dalam format PDF.</p>
        <button
          onClick={generatePDF}
          className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
        >
          Download Ulang CV
        </button>
      </div>
    </div>
  );
} 