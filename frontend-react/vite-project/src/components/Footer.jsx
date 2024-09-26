//TODO:Fix pointer location and remove other mouse effect.

import React, { useEffect, useRef } from "react";
import contactUsImg from "../assets/images/footerImg.svg";
import { gsap } from "gsap";

const Footer = () => {
  return (
    <div
      className="bg-black flex justify-center items-center text-white w-screen h-screen px-5 box-border relative overflow-hidden "
    >
      <div className="flex flex-1 justify-center items-center ">
        <img
          src={contactUsImg}
          className="w-full max-w-[750px]"
          alt="Contact Us"
        />
      </div>
      <div className="flex flex-1 justify-center flex-col items-start">
        <h1 className="text-4xl pb-10">Contact Us</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#1db8cd] text-3xl overflow-hidden">Email</h3>
            <a href="mailto:examprepcentral@gmail.com" className="text-2xl">
              examprepcentral@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[#1db8cd] text-3xl overflow-hidden">Social</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/viveksingla20/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-singla-b73439293/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/VivekSingla20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
