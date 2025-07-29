"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiFramer,
  SiOpenai,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import InVision from "../assets/invision.jpg";
import Note from "../assets/image.png";
import Port from "../assets/port.png";
import Shieldx from "../assets/shieldx.png"

const categories = ["all", "web", "mobile"];

const projects = [
  {
    title: "Invision",
    description:
      "InVision is an intelligent chat assistant that responds to user queries using the Google Gemini API. Built with modern web technologies, it offers a seamless conversational experience.",
    image: InVision,
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Gemini API"],
    githubLink: "https://github.com/Nagraj23/InVision-Web",
    liveLink: "https://invision-lime.vercel.app/",
  },
  {
    title: "Notations",
    description:
      "A simplified MERN Stack Notes App designed for efficiently managing your notes. It features a clean UI and robust backend integration for a smooth user experience.",
    image: Note,
    category: "web",
    technologies: ["React", "Express.js", "MongoDB", "Node.js"],
    githubLink: "https://github.com/Nagraj23/Notations-Web",
    liveLink: "https://notations-web.vercel.app/",
  },
  {
  title: "SHIELDX",
  description:
    "A smart personal safety app for solo travelers, built with React and Java Spring. Features real-time alerts, location sharing, and emergency tools.",
  image: Shieldx,
  category: "web",
  technologies: ["React", "Java", "Spring Boot", "Twilio API", "Postman"],
  githubLink: "https://github.com/Yogesh-Mane-07/shieldxWeb",
  liveLink: "", // Add deployed link if available later
},
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website, showcasing my projects, skills, and experience. Built with a focus on responsive design, animations, and interactive elements.",
    image: Port,
    category: "web",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React"],
    githubLink: "https://github.com/Nagraj23/your-portfolio-repo",
    liveLink: "https://your-portfolio-live-link.vercel.app/",
  },
];

const techIcons = {
  React: <SiReact color="#61DAFB" size={18} />,
  "Node.js": <SiNodedotjs color="#68A063" size={18} />,
  MongoDB: <SiMongodb color="#4DB33D" size={18} />,
  "Express.js": <SiExpress color="#000000" size={18} />,
  "Tailwind CSS": <SiTailwindcss color="#38BDF8" size={18} />,
  "Next.js": <SiNextdotjs color="#000000" size={18} />,
  "Framer Motion": <SiFramer color="#E10098" size={18} />,
  "Gemini API": <SiOpenai color="#10A37F" size={18} />,
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    exit: { y: -50, opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-[#f8fafc] dark:bg-[#0b1120] text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-700"
      ref={sectionRef}
    >
      {/* floating gradient blobs */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-[#AD49E1]/15 blur-2xl rounded-full animate-float" />
        <div className="absolute bottom-1/3 right-1/5 w-20 h-20 sm:w-24 sm:h-24 bg-[#7A1CAC]/20 blur-2xl rounded-full animate-float-delayed" />
        <div className="absolute top-2/3 left-1/5 w-24 h-24 sm:w-28 sm:h-28 bg-[#EBD3F8]/20 blur-2xl rounded-full animate-float-slow" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 text-lg font-semibold tracking-wide">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-fade-up">
            Recent Projects
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 text-sm font-medium rounded-full border transition-all duration-300 transform active:scale-95
                  ${
                    activeCategory === cat
                      ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/40 hover:bg-blue-700 dark:bg-blue-500 dark:border-blue-500 dark:hover:bg-blue-600 dark:shadow-blue-400/30"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-700 dark:hover:border-slate-500"
                  }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="hidden"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                layout
                className="relative group rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-200/50 dark:hover:shadow-blue-500/40 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="h-60 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-5">
                    {project.liveLink && project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                        className="bg-blue-600/80 p-3.5 rounded-full text-white hover:bg-blue-700 transition-colors duration-200"
                      >
                        <FaExternalLinkAlt size={22} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xl font-medium flex items-center gap-1 dark:bg-blue-600/20 dark:text-blue-300"
                      >
                        {techIcons[tech] || null}
                        
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
