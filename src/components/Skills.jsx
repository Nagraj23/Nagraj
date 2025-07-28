"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiSpring,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiVercel,
  SiGooglecloud,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

const categorizedSkills = {
  Frontend: [
    { id: "js", name: "JavaScript", icon: <SiJavascript size={20} color="#f7df1e" /> },
    { id: "react", name: "React.js", icon: <SiReact size={20} color="#61dafb" /> },
    { id: "next", name: "Next.js", icon: <SiNextdotjs size={20} /> },
    { id: "tailwind", name: "TailwindCSS", icon: <SiTailwindcss size={20} color="#38bdf8" /> },
  ],
  Backend: [
    { id: "node", name: "Node.js", icon: <SiNodedotjs size={20} color="#68a063" /> },
    { id: "python", name: "Python", icon: <SiPython size={20} color="#3776ab" /> },
    { id: "spring", name: "Spring", icon: <SiSpring size={20} color="#6db33f" /> },
    { id: "java", name: "Java", icon: <FaJava size={20} color="#f89820" /> },
  ],
  Database: [
    { id: "mongo", name: "MongoDB", icon: <SiMongodb size={20} color="#47a248" /> },
    { id: "mysql", name: "MySQL", icon: <SiMysql size={20} color="#00758f" /> },
    { id: "firebase", name: "Firebase", icon: <IoLogoFirebase size={20} color="#ffca28" /> },
  ],
  Tools: [
    { id: "git", name: "Git", icon: <SiGit size={20} color="#f05032" /> },
    { id: "vercel", name: "Vercel", icon: <SiVercel size={20} /> },
    { id: "gcloud", name: "Google Cloud", icon: <SiGooglecloud size={20} color="#4285f4" /> },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-white dark:bg-[#041b20] text-gray-800 dark:text-[#E0F2FE] transition-colors duration-700 relative overflow-hidden"
    >
      {/* Floating Nebulae */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 dark:bg-[#3B82F6]/20 blur-2xl rounded-full animate-float" />
        <div className="absolute bottom-1/3 right-1/5 w-24 h-24 bg-blue-800/30 dark:bg-[#1E3A8A]/30 blur-2xl rounded-full animate-float-delayed" />
        <div className="absolute top-2/3 left-1/5 w-28 h-28 bg-blue-200/15 dark:bg-[#93C5FD]/15 blur-2xl rounded-full animate-float-slow" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2
          className={`text-4xl sm:text-5xl font-extrabold text-center mb-10 tracking-tight bg-gradient-to-r from-blue-700 to-sky-400 bg-clip-text text-transparent ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Tech - Stack
        </h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {Object.entries(categorizedSkills).map(([category, skills], idx) => (
            <motion.div
              key={idx}
              className="rounded-xl p-5 bg-gray-100 dark:bg-[#1a1a1a] shadow-md border border-gray-200 dark:border-[#1E3A8A] hover:border-blue-400 dark:hover:border-[#3B82F6] transition duration-300 relative group"
              variants={itemVariants}
            >
              <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-blue-300 dark:group-hover:border-[#93C5FD] transition-all duration-300 pointer-events-none"></div>

              <h3 className="text-lg font-bold text-blue-700 dark:text-[#3B82F6] mb-3 pb-2 border-b border-gray-300 dark:border-[#1E3A8A]">
                {category}
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center justify-center gap-2 p-2 rounded-lg bg-blue-100/30 dark:bg-[#1e293b]/30 hover:bg-blue-200/50 dark:hover:bg-[#1e3a8a]/30 transition-colors duration-300"

                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-[#E0F2FE]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
