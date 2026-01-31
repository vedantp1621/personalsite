import React from "react";
import Typer from "./Typer.js";
import profileImg from "./Assets/me.jpg";
import resume from "./Assets/Patel_Vedant_Resume.pdf";


function Header() {
  return (
    <section className="bg-[#8C3E3E]">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-15 xl:gap-0 lg:py-20 lg:grid-cols-12">
        <div className="p-5 mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Hi. I'm <span className="text-[#f6e8ea]">Vedant Patel</span>
            <span className="inline-flex items-center justify-center px-2 py-1 ml-2 text-xs font-extrabold leading-none text-red-100 bg-[#d4af37] rounded-full">
              STUDENT
            </span>
          </h1>
          <h1 className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-200">
            A{" "}
            <span className="font-bold text-red-400">
              {" "}
              University of Wisconsin-Madison{" "}
            </span>
            student interested in{" "}
            <span className="underline underline-offset-2 decoration-4 text-gray-200 decoration-gray-200">
              <Typer
                className="inline-block"
                dataText={[
                  "Computer Vision.",
                  "Java.",
                  "Python.",
                  "Robotics.",
                  "Data Science.",
                  "Javascript.",
                  "Swift.",
                  "React.",
                  "Mobile App Development",
                  "Software",
                  "Machine Learning",
                ]}
              />{" "}
            </span>
          </h1>

          {/* --- ICON BUTTONS SECTION --- */}
          <div className="flex items-center gap-4 mt-8">
            {/* Resume Button */}
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 border-2 border-[#f6e8ea] rounded-full transition-all duration-300 hover:bg-[#f6e8ea] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(128,164,192,0.5)]"
              aria-label="Resume"
            >
              {/* Document/Resume Icon */}
              <svg
                className="w-5 h-5 text-[#f6e8ea] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/vedant-p-patel/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 border-2 border-[#f6e8ea] rounded-full transition-all duration-300 hover:bg-[#f6e8ea] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(128,164,192,0.5)]"
              aria-label="GitHub"
            >
              {/* LinkedIn Icon */}
              <svg
                className="w-5 h-5 text-[#f6e8ea] group-hover:text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/vedantp1621"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 border-2 border-[#f6e8ea] rounded-full transition-all duration-300 hover:bg-[#f6e8ea] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(128,164,192,0.5)]"
              aria-label="GitHub"
            >
              {/* GitHub Icon */}
              <svg
                className="w-5 h-5 text-[#f6e8ea] group-hover:text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          {/* --- END ICON BUTTONS SECTION --- */}
        </div>

        <img
          className="hidden lg:flex h-auto max-w-sm ms-auto shadow-xl rounded-full"
          src={profileImg}
          alt="Profile"
        ></img>
      </div>

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-15 xl:gap-0 lg:py-20 lg:grid-cols-12"></div>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-15 xl:gap-0 lg:py-20 lg:grid-cols-12"></div>
    </section>
  );
}

export default Header;
