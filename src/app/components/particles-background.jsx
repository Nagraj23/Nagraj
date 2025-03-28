"use client";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#000000ff" },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "slow", // Slow down particles on hover
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            slow: {
              factor: 0.5,
              radius: 200, // Larger area of effect for hover
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: { value: "#3b82f6" },
          links: {
            color: "#3b82f6",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5, // Slower movement for a calmer effect
            direction: "none",
            outModes: { default: "out" },
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80, // Balanced particle count
          },
          opacity: {
            value: 0.8, // More visible dots
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 6 }, // Bigger dots for visibility
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
