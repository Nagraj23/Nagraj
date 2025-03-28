"use client"

import { useState, useEffect } from "react"
import Navbar from "../app/components/navbar"
import ParticlesBackground from "../app/components/particles-background"
import IntroSection from "../app/components/intro-section"
import AboutSection from "../app/components/about-section"
import SkillsSection from "../app/components/skills-section"
import ProjectsSection from "../app/components/projects-section"
import ContactSection from "../app/components/contact-section"
import Footer from "../app/components/footer"
import LoadingScreen from "../app/components/loading-screen"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <main className="relative min-h-screen">
      <ParticlesBackground />
      <Navbar />
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

