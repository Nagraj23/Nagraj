"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import InVision from "../assets/invision.jpg"
import Note from '../assets/notations.jpg'
import Port from '../assets/port.png'

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const categories = ["all", "web", "mobile"]

  const projects = [
    {
      title: "Invision",
      description: "InVision is an intelligent chat assistant that responds to user queries using the Google Gemini API.",
      image: InVision,
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Gemini API"],
      githubLink: "https://github.com/Nagraj23/InVision-Web",
      liveLink: "https://invision-lime.vercel.app/",
    },
    {
      title: "Notations ",
      description: "A simplified *MERN* Stack Notes App which is well Designed for the one to manage all our notes well. ",
      image: Note,
      category: "mobile",
      technologies: ["React Native", "Firebase", "Expo","Express"],
      githubLink: "https://github.com/Nagraj23/Notations-Web",
      liveLink: "https://notations-web.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website with animations and interactive elements.",
      image: Port,
      category: "web",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      githubLink: "#",
      liveLink: "#",
    },
   
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-slate-900/50 backdrop-blur-xs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-blue-500 text-lg">My Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-8"
          >
            Recent Projects
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center flex-wrap gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full capitalize transition-colors ${
                  activeCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden group"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.githubLink}
                    className="bg-slate-900 p-3 rounded-full hover:bg-slate-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-white" size={20} />
                  </a>
                  <a
                    href={project.liveLink}
                    className="bg-slate-900 p-3 rounded-full hover:bg-slate-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="text-white" size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

