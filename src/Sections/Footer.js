import React, { useState, useEffect } from "react";
import logo from "./Assets/logo2.jpeg";

function Footer() {
  // Initialize with the starting Red color
  const [bgColor, setBgColor] = useState("rgb(140, 62, 62)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // SYNC LOGIC: Must match AboutMe.js, Work.js, and Projects.js
      const fadeStart = 1200;
      const fadeEnd = 3200;

      let globalProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
      globalProgress = Math.min(Math.max(globalProgress, 0), 1);

      // Start: #8C3E3E (140, 62, 62)
      const startRed = 140;
      const startGreen = 62;
      const startBlue = 62;

      // End: #1C1C1C (28, 28, 28) - The color from your screenshot
      const endRed = 28;
      const endGreen = 28;
      const endBlue = 28;

      const red = Math.floor(startRed + (endRed - startRed) * globalProgress);
      const green = Math.floor(
        startGreen + (endGreen - startGreen) * globalProgress,
      );
      const blue = Math.floor(
        startBlue + (endBlue - startBlue) * globalProgress,
      );

      setBgColor(`rgb(${red}, ${green}, ${blue})`);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      // Apply dynamic background color
      style={{ backgroundColor: bgColor }}
      className="p-4 md:p-8 lg:p-10 transition-colors duration-75 ease-linear"
    >
      <div className="mx-auto max-w-screen-xl">
        <p className="flex justify-center items-center text-2xl font-semibold text-white">
          <img className="h-16 w-auto" src={logo} alt="Workflow" />
        </p>
        <p className="my-6 text-lg text-[#f6e8ea] text-center">
          Thank you for taking time to view my page. Here are my contacts!
        </p>
        <div className="flex flex-wrap justify-center items-center mb-6 text-white">
          <p>
            <a
              href="https://github.com/vedantp1621"
              className="mr-4 hover:underline md:mr-6 "
            >
              Github
            </a>
          </p>

          <a
            href="https://www.linkedin.com/in/vedant-p-patel/"
            className="mr-4 hover:underline md:mr-6"
          >
            LinkedIn
          </a>

          <p className="mr-4 md:mr-6 ">vppatel3@wisc.edu</p>
          <p className="mr-4 md:mr-6 ">(815)-416-5778</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
