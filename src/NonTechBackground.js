// src/NonTechBackground.js
import React, { useEffect, useRef } from "react";

const NonTechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const circles = [];
    const numCircles = 50;

    for (let i = 0; i < numCircles; i++) {
      circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 20 + 5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: `hsl(${Math.random() * 360}, 70%, 50%)`
      });
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, width, height);

      circles.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();

        c.x += c.vx;
        c.y += c.vy;

        if (c.x < 0 || c.x > width) c.vx *= -1;
        if (c.y < 0 || c.y > height) c.vy *= -1;
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default NonTechBackground;
