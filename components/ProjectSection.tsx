'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectCard } from './ProjectCard';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
  liveUrl?: string;
  githubUrl?: string;
};

type Props = {
  projects: Project[];
};

export const ProjectsSection = ({ projects }: Props) => {
  const projectsRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={projectsRef} id="projects" className="py-20 bg-black relative overflow-hidden">

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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative solutions and creative implementations
          </p>
        </motion.div>

        <div ref={projectsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};