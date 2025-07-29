"use client"

import { useState, useEffect } from "react"
import { useTheme } from "./contexts/ThemeContext"
import { Sun, Moon } from "lucide-react" // optional icons

const Navigation = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["", "about", "skills", "projects", "education", "contact"]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] px-5 transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-white dark:bg-slate-900 backdrop-blur-xl border-b border-gray-200 dark:border-slate-700"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20">
        <div className="text-2xl font-black bg-gradient-to-r bg-[#687FE5] bg-clip-text text-transparent">
          NN
        </div>

        <div className="hidden md:flex items-center gap-3">
          {navItems.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`px-5 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeSection === section
                  ? "text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400"
                  : isScrolled
                    ? "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    : "text-white hover:text-blue-200"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}

          {/* 🌗 Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-800 dark:text-white" />}
          </button>
        </div>

        {/* ☰ Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800 dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* 📱 Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 p-5 animate-slide-down z-[999]">
          <div className="flex flex-col gap-3">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => {
                  scrollToSection(section)
                  setIsMenuOpen(false)
                }}
                className="text-left p-3 text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}

            {/* 🌙 Theme toggle in mobile menu */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-left p-3 text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
              Toggle Theme
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
