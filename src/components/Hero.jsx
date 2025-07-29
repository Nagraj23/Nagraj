"use client"

import { useScrollAnimation } from "../hooks/useScrollAnimation"
import Photo from "../assets/photo.png"
import Resume from "../assets/nagraj.pdf"
import { useEffect } from "react"
import RotatingText from "./RotateText"
import TargetCursor from "./Cursor"

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
      @keyframes float-delayed { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
      @keyframes float-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      @keyframes shimmer { 0% { background-position: -500%; } 100% { background-position: 500%; } }
      @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
      @keyframes fadeInRight { 0% { opacity: 0; transform: translateX(40px); } 100% { opacity: 1; transform: translateX(0); } }

      .animate-float { animation: float 6s ease-in-out infinite; }
      .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
      .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
      .animate-shimmer { background-size: 200% auto; animation: shimmer 3s linear infinite; }
      .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
      .animate-fade-in-right { animation: fadeInRight 0.8s ease-out forwards; }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen w-full flex items-center pt-20 px-4 sm:px-8 relative overflow-hidden transition-colors duration-700 
        bg-white text-gray-900 dark:bg-[#041b20] dark:text-[#E4E4E7]"
    >
      {/* 🎨 Blobs (optional: fade based on theme) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-[#0065F8]/20 dark:bg-[#0065F8]/10 blur-2xl rounded-full animate-float" />
        <div className="absolute bottom-1/3 right-1/5 w-20 h-20 sm:w-24 sm:h-24 bg-[#8DD8FF]/20 dark:bg-[#8DD8FF]/10 blur-2xl rounded-full animate-float-delayed" />
        <div className="absolute top-2/3 left-1/5 w-24 h-24 sm:w-28 sm:h-28 bg-[#B4B8C7]/20 dark:bg-[#B4B8C7]/10 blur-2xl rounded-full animate-float-slow" />
      </div>

      {/* 🚀 Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* ✏️ Text Section */}
        <div
          className={`space-y-6 sm:space-y-8 text-center md:text-right w-full transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h1 className="text-2xl relative sm:text-4xl lg:text-5xl font-black leading-tight flex flex-col sm:flex-row sm:justify-end items-center gap-2 sm:gap-4">
            <span className="inline-block bg-gradient-to-r from-[#0065F8] to-[#8DD8FF] bg-clip-text text-transparent">
              Think {"</>"}
            </span>

            <RotatingText
              texts={["Build", "Break", "Innovate", "Repeat"]}
              mainClassName="px-3 py-2 bg-white dark:bg-[#041b20] text-black dark:text-white rounded-lg overflow-hidden"
              staggerFrom={"last"}
              initial = {{ y: "100%", opacity: 0 }}
animate = {{ y: "0%", opacity: 1 }}
exit = { {y: "-120%", opacity: 0 }}
              staggerDuration={0.05}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 35, stiffness: 300 }}
              rotationInterval={2500}
            />
          </h1>

          <h2 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-[#687FE5] dark:text-[#8DD8FF]">
            Nagraj Nandal
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-[#B4B8C7] max-w-md mx-auto md:ml-auto md:mr-0">
            Don’t just chase dreams — build them, brick by brick 🧱… then dominate 💥👑
          </p>

          <div className="w-full flex justify-center md:justify-end">
            <a
              href={Resume}
              download="Nagraj_Resume.pdf"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#687FE5] text-[#687FE5] dark:text-[#8DD8FF] font-semibold rounded-full 
              hover:bg-[#8DD8FF] hover:text-black dark:hover:text-black
              transition-all duration-300 hover:-translate-y-1 text-center
              shadow-md dark:shadow-[0_0_25px_#8DD8FF] hover:shadow-[0_0_25px_#0065F8]"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* 🖼️ Profile Pic */}
        <div
          className={`w-full flex justify-center transition-all duration-700 ${
            isVisible ? "animate-fade-in-right" : "opacity-0"
          }`}
        >
          <div className="relative group w-[290px] sm:w-[350px] md:w-[380px] lg:w-[430px] aspect-square">
            <div className="absolute inset-0 rounded-full border-4 border-[#8DD8FF] opacity-0 group-hover:opacity-100 blur-xl transition duration-500 z-0 animate-pulse shadow-[0_0_60px_#8DD8FF]" />
            <img
              src={Photo}
              alt="Nagraj Nandal"
              className="relative w-full h-full rounded-full object-cover border-4 border-[#0065F8] shadow-2xl z-10 transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
