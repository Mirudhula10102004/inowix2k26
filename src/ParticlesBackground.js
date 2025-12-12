// src/ParticlesBackground.js
import React from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#3b82f6" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: { min: 1, max: 3 }, random: true },
          links: {
            enable: true,
            distance: 120,
            color: "#3b82f6",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out",
            attract: { enable: false },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.5 } },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
        background: { color: "#1f2937" }, // gray-900
      }}
    />
  );
};

export default ParticlesBackground;
