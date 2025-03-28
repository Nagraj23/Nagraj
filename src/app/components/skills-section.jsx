"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaReact, FaNodeJs, FaDatabase, FaMobile } from "react-icons/fa"

export default function SkillsSection() {
  const ref = useRef(null)
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const skills = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks.",
      icon: <FaReact size={40} className="text-blue-500" />,
      technologies: ["React JS", "Next.js", "HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs.",
      icon: <FaNodeJs size={40} className="text-green-500" />,
      technologies: ["Node.js", "Express", "Python", "Django", "Flask"],
    },
    {
      title: "Database Management",
      description: "Designing and optimizing database structures for efficient data storage.",
      icon: <FaDatabase size={40} className="text-yellow-500" />,
      technologies: ["MongoDB", "MySQL", "Firebase", "Redis", "Supabase"],
    },
    {
      title: "Mobile Development",
      description: "Building cross-platform mobile applications.",
      icon: <FaMobile size={40} className="text-purple-500" />,
      technologies: ["React Native", "Expo"],
    },
  ]

  return (
    <section id="skills" className="py-20 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-blue-500 text-lg font-semibold">My Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-white mb-12"
        >
          What I Can Do
        </motion.h2>

        {/* Centered Grid - Always 2 Columns */}
        <motion.div
          ref={inViewRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mx-auto max-w-4xl"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg hover:bg-slate-700/50 transition-colors group flex flex-col items-center text-center"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{skill.title}</h3>
              <p className="text-gray-300 mb-6">{skill.description}</p>

              <div className="flex flex-wrap justify-center gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
