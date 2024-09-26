import React, { useEffect } from "react";
import { gsap } from "gsap";
import { languages } from "../constants";

const PreLoader = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    languages.forEach((language, index) => {
      timeline
        .to(".preloader-text", {
          opacity: 1,
          duration: 0.1, // Speed up the appearance
          ease: "none",
          onComplete: () => {
            document.querySelector(
              ".preloader-text"
            ).textContent = `${language}`;
          },
        })
        .to(".preloader-text", {
          opacity: 0,
          duration: 0.11, // Speed up the disappearance
          ease: "none",
          delay: 0.1, // Slight delay between languages
        });
    });

    // Show final welcome message after all languages
    timeline.to(".preloader-text", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      onComplete: () => {
        document.querySelector(".preloader-text").textContent =
          "Welcome to ExamPrep Central";
      },
    });
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-[#1db8cd]">
      <div className="preloader-text text-7xl font-nunito ">
        {languages[0]} to ExamPrep Central
      </div>
    </div>
  );
};

export default PreLoader;
