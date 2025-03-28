"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Self from '../assets/pic.jpg'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-20 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
              <Image src={Self} alt="Profile" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500 rounded-lg -z-10"></div>
          </motion.div>

          <div>
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-blue-500 text-lg">About Me</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-6">
              A passionate developer creating amazing digital experiences
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
            I'm a frontend developer passionate about building responsive, high-performance, and visually appealing web experiences. With expertise in React, Next.js, and Tailwind CSS, I create sleek UIs with smooth animations using Framer Motion. I focus on clean code, accessibility, and user-centric design to deliver engaging digital experiences. Let’s build something awesome together! 🚀


            </motion.p>

           

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-white font-bold mb-2">Name:</h3>
                <p className="text-gray-300">Nagraj Nandal</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-2">Email:</h3>
                <p className="text-gray-300">nagrajnandal43@gmail.com</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-2">Location:</h3>
                <p className="text-gray-300">Maharashtra , India</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-2">Availability:</h3>
                <p className="text-gray-300">Freelance / Full-time</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

