'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  logo: string;
};

const experiences: Experience[] = [
  {
    role: "Backend Engineer Intern",
    company: "GeoRankers",
    location: "Remote",
    period: "Jul 2026 – Present",
    logo: "/georankers.png",
    points: [
      "Built the GeoRankers MCP server end-to-end in Golang, enabling ChatGPT and Claude to securely interact with GeoRankers capabilities through standardized MCP tools, with authentication (PAT) and API integration.",
      "Integrated Perplexity AI into the company’s AI search-visibility platform in Golang, expanding multi-LLM analysis from 2 to 3 AI models and increasing AI search-result coverage by ∼45% for a standard 5-keyword analysis.",
      "Integrated external keyword volume APIs and engineered a categorized persistence layer for keyword metrics, reducing repeated API calls by ∼80% while improving lookup performance.",
      "Developed backend modules for LLM-based source extraction, ranking, and comparative AI search analysis, and implemented secure payment gateway integration with robust payment security and validation mechanisms."
    ]
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Avijo",
    location: "Remote",
    period: "Jul 2025 – Sept 2025",
    logo: "/avijo.png",
    points: [
      "Built and maintained scalable MERN-based applications, designing and optimizing RESTful APIs for core backend features including service edit/delete workflows, appointments, reviews, and profile management.",
      "Led backend fixes and enhancements for critical production systems such as Google Authentication, HPR/HFR routing, and user registration flows.",
      "Implemented end-to-end doctor and facility booking systems, covering search, booking, confirmation, rescheduling, and online consultation workflows.",
      "Improved application stability and user experience by debugging production issues, fixing image upload bugs, and resolving navigation and UI inconsistencies."
    ]
  },
  {
    role: "Tech Team Member",
    company: "IIIT SriCity",
    location: "Sri City, India",
    period: "2025 – 2026",
    logo: "/iiits.png",
    points: [
      "Collaborated with a team of developers to design, develop, and maintain the institute's official event websites, ensuring responsive design and smooth user experience.",
      "Contributed to the development of the Utkrishta and Abhisarga (Annual Fest) website, implementing key features and improving overall functionality through effective teamwork and version control practices."
    ]
  }
];

export const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and technical responsibilities
          </p>
        </motion.div>

        <div ref={cardsRef} className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.015 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-colors duration-300 relative overflow-hidden group"
            >
              {/* Shine overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

              <div className="flex flex-col md:flex-row gap-8">
                {/* Logo & Company Info */}
                <div className="md:w-1/4 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-20 h-20 mb-4 rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-2"
                  >
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      className="object-contain p-1 rounded-2xl"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{exp.company}</h3>
                  <div className="flex flex-col gap-2 text-sm text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-white/60" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-white/60" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/4">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    {exp.role}
                  </h4>

                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + i * 0.08 }}
                        className="flex gap-3"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0" />
                        <p className="text-gray-300 leading-relaxed">
                          {point}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
