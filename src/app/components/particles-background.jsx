"use client";

import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="fixed inset-0 -z-10"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#000000" }, // ✅ Dark background
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "slow", // ✅ Slow down effect on hover
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            slow: {
              factor: 0.1, // ✅ Stronger slow-down effect
              radius: 400, // ✅ Larger hover area
            },
            push: {
              quantity: 6,
            },
          },
        },
        particles: {
          color: { value: "#ffffff" }, // ✅ Bright white particles
          links: {
            color: "#4f46e5", // ✅ Soft blue links
            distance: 150,
            enable: true,
            opacity: 0.7, // ✅ More visible link opacity
            width: 2, // ✅ Thicker links for visibility
          },
          move: {
            enable: true,
            speed: 1, // ✅ Slightly faster movement
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
          },
          number: {
            density: { enable: true, area: 800 },
            value: 150, // ✅ More particles for visibility
          },
          opacity: {
            value: 1, // ✅ Fully visible particles
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 3, max: 6 }, // ✅ Larger particles for better visibility
          },
        },
        detectRetina: true,
      }}
    />
  );
}
