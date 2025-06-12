import React from "react";
import resume from "./Assets/Patel_Vedant_Resume.pdf";
import cskLogo from './Assets/CSKLogo.jpeg';
import dssdLogo from "./Assets/DSSDLogo.png";
import isacaLogo from "./Assets/ISACALogo.jpeg";
import mathnasiumLogo from "./Assets/mathnasiumLogo.jpg";
import wiscoLogo from "./Assets/wisconsinLogo.jpg";



function Work() {
  return (
    <div>
      <section className="bg-gray-800 hover:bg-red-600">
        <div className="hero min-h-2xl">
          <div className="hero-content py-12 text-neutral-content text-center">
            <div className="max-w-4xl">
              <h1 className="mb-5 text-5xl text-white font-bold">
                A Student at the University of Wisconsin-Madison
              </h1>
              <p className="mb-5 text-white text-xl">
                Double majoring in{" "}
                <span className="font-bold text-2xl decoration-[#d4af37]">
                  Computer Science
                </span>{" "}
                and{" "}
                <span className="font-bold text-2xl decoration-[#d4af37]">
                  Data Science
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <h1 className="underline pt-9 decoration-red-300 flex justify-center text-4xl pt-5 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-black">
          Work Experience
        </h1>
        <div className="grid w-screen px-4 py-8 mx-auto lg:gap-15 xl:gap-0 lg:py-20 lg:grid-cols-12">
          <div className="ml-8 w-[250px] lg:w-[700px] h-[screen]">
            <ol className="relative border-s border-gray-400 dark:border-gray-700">
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-[#d4af37] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  June 2025 - August 2025 | Schaumburg, IL
                </time>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Software Engineer Intern
                </h1>
                <div className="flex flex-row">
                  <p className="text-md mr-3 text-gray-900 dark:text-white">
                    ISACA
                  </p>
                  <img
                    src={isacaLogo}
                    style={{ width: 25, height: 25 }}
                    alt="ISACA Logo"
                  />
                </div>
              </li>

              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-[#d4af37] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  January 2025 - May 2025 | Madison, WI
                </time>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Undergraduate Researcher
                </h1>
                <div className="flex flex-row">
                  <p className="text-md mr-3 text-gray-900 dark:text-white">
                    The Computational Optics Group @ UW-Madison
                  </p>
                  <img
                    src={wiscoLogo}
                    style={{ width: 25, height: 25 }}
                    alt="UW-Madison Logo"
                  />
                </div>
              </li>

              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-[#d4af37] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  September 2024 - May 2025 | Madison, WI
                </time>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Software Developer
                </h1>
                <div className="flex flex-row">
                  <p className="text-md mr-3 text-gray-900 dark:text-white">
                    Data Science For Sustainable Development
                  </p>
                  <img
                    src={dssdLogo}
                    style={{ width: 30, height: 30 }}
                    alt="DSSD Logo"
                  />
                </div>
              </li>

              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-[#d4af37] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  August 2022 - May 2024 | Hoffman Estates, IL
                </time>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Web developer, Board Member
                </h1>
                <div className="flex flex-row">
                  <p className="text-md mr-3 text-gray-900 dark:text-white">
                    CompSci Kids
                  </p>
                  <img
                    src={cskLogo}
                    style={{ width: 30, height: 30 }}
                    alt="CSK Logo"
                  />
                </div>
              </li>

              <li className="ms-4">
                <div className="absolute w-3 h-3 bg-[#d4af37] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  March 2023 - March 2024 | Schaumburg, IL
                </time>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Lead Instructor
                </h1>
                <div className="flex flex-row">
                  <p className="text-md mr-3 text-gray-900 dark:text-white">
                    Mathnasium
                  </p>
                  <img
                    src={mathnasiumLogo}
                    style={{ width: 25, height: 25 }}
                    alt="Mathnaisum Logo"
                  />
                </div>
              </li>
            </ol>
          </div>
        </div>

        <a
          className="pb-8 flex justify-center text-sm font-extrabold leading-none tracking-tight md:text-5xl lg:text-xl text-grey hover:underline hover:text-blue-400"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Resume
        </a>
      </section>
    </div>
  );
}

export default Work;
