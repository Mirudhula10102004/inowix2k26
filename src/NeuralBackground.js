// src/NeuralBackground.js
import React, { useEffect, useRef } from "react";

const NeuralBackground = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const rafId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const nodes = [];
    const nodeCount = 70;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0ff8";
        ctx.shadowColor = "#0ff";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw connections
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            const alpha = 1 - dist / 150;
            // Dynamic color shift (clamped)
            const r = Math.min(255, Math.round(50 + alpha * 205));
            const color = `rgba(${r}, 255, 255, ${alpha})`;
            ctx.strokeStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 4;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      }

      // Move nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Mouse attraction
        if (mouse.current.x != null && mouse.current.y != null) {
          const dx = mouse.current.x - node.x;
          const dy = mouse.current.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            node.vx += dx * 0.0005;
            node.vy += dy * 0.0005;
          }
        }

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });

      rafId.current = requestAnimationFrame(draw);
    };

    // Start drawing
    rafId.current = requestAnimationFrame(draw);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="neural-canvas"
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}
    />
  );
};

export default NeuralBackground;
