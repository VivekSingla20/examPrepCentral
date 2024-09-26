import React, { useState, useEffect } from "react";
import gsap from "gsap";

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const dots = document.querySelectorAll(".dot");
  if (dots.length) {
    gsap.to(".dot", {
      left: `${cursorPos.x}px`,
      top: `${cursorPos.y}px`,
      transform: "translate(-50%, -50%)",
      transition: "all 0.1s ease-out",
      ease: "elastic.out",
      duration: "1",
    });
  }
  return (
    <>
      <div className=" dot fixed w-4 h-4 bg-[#0cdefa] rounded-full pointer-events-none z-50 " />
      <div
        className="fixed w-64 h-64 bg-[#1db8cd58] rounded-full pointer-events-none z-40 blur-2xl"
        style={{
          left: `${cursorPos.x - 32}px`, // Adjusted value
          top: `${cursorPos.y - 32}px`, // Adjusted value
          transform: "translate(-50%, -50%)",
          transition: "all 0.2s ease-out", // Added transition effect
        }}
      />
    </>
  );
};

export default Cursor;
