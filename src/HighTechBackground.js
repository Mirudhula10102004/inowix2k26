// src/HighTechBackground.js
import React from "react";
import "./index.css";

export default function HighTechBackground() {
  return (
    <>
      <div className="ai-background"></div>
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="dot"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </>
  );
}
