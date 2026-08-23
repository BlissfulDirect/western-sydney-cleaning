"use client";

import { useEffect, useState } from "react";

const words = ["Weekly", "After hours", "Dubai"];

export function RotatingWords() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="relative inline-grid font-heading text-4xl font-extrabold tracking-tight text-[#0f6b4c] sm:text-5xl md:text-6xl">
      {words.map((word, wordIndex) => (
        <span
          key={word}
          className="col-start-1 row-start-1 transition-all duration-500"
          style={{
            opacity: wordIndex === index ? 1 : 0,
            transform:
              wordIndex === index ? "translateY(0)" : "translateY(12px)",
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
