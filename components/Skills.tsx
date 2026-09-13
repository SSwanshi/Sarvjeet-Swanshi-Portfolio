import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";
import Image from "next/image";

export type Skill = {
  name: string;
  level: number;
  color: string;
  logo?: ReactNode | string; 
};

type SkillsSectionProps = {
  title?: string;
  description?: string;
  skills: Skill[];
};

export const SkillsSection = ({
  title = "Skills & Expertise",
  description = "Crafting digital experiences with cutting-edge technologies",
  skills,
}: SkillsSectionProps) => {
  const skillsRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const skillsGridRef = useRef<HTMLDivElement>(null);

  const renderLogo = (logo: ReactNode | string | undefined, skillName: string) => {
    if (!logo) return null;
    
    if (typeof logo === "string") {
      // If logo is a string, treat it as an image URL
      return (
        <Image 
          src={logo} 
          alt={`${skillName} logo`}
          width={32}
          height={32}
          className={`object-contain ${skillName.toLowerCase().includes('github') ? 'invert' : ''}`}
          priority={false}
          loading="lazy"
          unoptimized
        />
      );
    }
    
    // If logo is a React component/icon
    return <div className="w-8 h-8 flex items-center justify-center">{logo}</div>;
  };

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="py-20 bg-black relative overflow-hidden"
    >

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
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <div ref={skillsGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-colors duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  {skill.logo && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {renderLogo(skill.logo, skill.name)}
                    </motion.div>
                  )}
                  <span className="text-white font-semibold text-lg">{skill.name}</span>
                </div>
                <span className="text-white font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 + 0.15, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};