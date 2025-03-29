"use client";

import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim"; // Lightweight version
import {Particles} from "react-tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Load slim version for better performance
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000000ff", // Dark slate background
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60, // Moderate particle count
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" }, // White particles
          shape: { type: "circle" },
          opacity: {
            value: 0.7,
            random: false,
            anim: { enable: false },
          },
          size: {
            value: { min: 1, max: 4 }, // Varying particle sizes
            random: true,
          },
          move: {
            enable: true,
            speed: 0.6, // Slow floating motion
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.3,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}

