import React, { useState, useEffect, useRef } from "react";

function AboutMe() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [bgColor, setBgColor] = useState("rgb(140, 62, 62)");

  useEffect(() => {
    const handleScroll = () => {
      // --- 1. Arrow Progress (Local) ---
      if (sectionRef.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        let localProgress = 1 - (top + height) / (windowHeight + height);
        localProgress = Math.min(Math.max(localProgress, 0), 1);
        setScrollProgress(localProgress * 100);
      }

      // --- 2. Global Color Sync ---
      const scrollY = window.scrollY;

      // UPDATED: "A lot slower"
      // Range is now 2000px (1200 to 3200), making the transition very gradual
      const fadeStart = 1200;
      const fadeEnd = 3200;

      let globalProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
      globalProgress = Math.min(Math.max(globalProgress, 0), 1);

      // Start: #8C3E3E (140, 62, 62)
      const startRed = 140;
      const startGreen = 62;
      const startBlue = 62;

      // UPDATED End: Dark Gray (35, 35, 35) instead of pure black
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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: bgColor }}
      className="relative transition-colors duration-75 ease-linear"
    >
      <div
        style={{ backgroundColor: bgColor }}
        className="max-w-screen lg:h-[500px] md:h-[800px] sm:h-[1100px] -translate-y-20 skew-y-3 grid w-screen-xl px-4 py-20 mx-auto lg:gap-15 xl:gap-0 lg:py-20 lg:grid-cols-12 transition-colors duration-75 ease-linear"
      >
        <div className="col-span-12 lg:col-span-6 -skew-y-3 translate-x-5">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-[#f6e8ea]">
            About{" "}
            <span className="underline underline-offset-3 decoration-red-300">
              Me
            </span>
          </h1>

          <div className="flex flex-col lg:flex-row lg:w-[1000px] max-w-screen">
            <div className="mt-10 md:w-[950px] w-[300px]">
              <p className="mb-3 text-gray-200 first-letter:text-9xl text-xl first-letter:font-bold first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
                I knew I loved technology the day I stepped into my first high
                school computer science class. Immediately hooked by the endless
                possibilities, I knew that I wanted to become a Software
                Engineer. Now, at the University of Wisconsin-Madison, I am
                growing everyday, quickly turning those dreams into reality.
              </p>

              <p className="mb-3 text-gray-200 text-xl">
                I see myself as a curious, driven team player who is not afraid
                to jump into the deep end. I love a challenge, and am always
                looking for opportunities. Outside of class, I love soccer and
                music, and am always looking to enjoy the beautiful city of
                Madison.
              </p>
              <p className="text-gray-100 font-bold">
                This website is dedicated to documenting my internships and
                projects in CS, along with the things that make me who I am.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
