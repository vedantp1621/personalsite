import React from "react";
import resume from "./Assets/Patel_Vedant_Resume.pdf";
import cskLogo from "./Assets/CSKLogo.jpeg";
import dssdLogo from "./Assets/DSSDLogo.png";
import isacaLogo from "./Assets/ISACALogo.jpeg";
import mathnasiumLogo from "./Assets/mathnasiumLogo.jpg";
import wiscoLogo from "./Assets/wisconsinLogo.jpg";
import cardinalLogo from "./Assets/CardinalLogo.avif"
import isaLogo from "./Assets/ISALogo.jpeg"


const workExperiences = [
  {
    date: "September 2025 - Present",
    location: "Madison, WI",
    title: "Machine Learning Researcher",
    company: "Soil Sensing & Monitoring Lab",
    logo: wiscoLogo,
    logoAlt: "UW-Madison Logo",
    logoSize: { width: 25, height: 25 },
  },
  {
    date: "June 2025 - August 2025",
    location: "Schaumburg, IL",
    title: "Software Engineer Intern",
    company: "ISACA",
    logo: isacaLogo,
    logoAlt: "Isaca Logo",
    logoSize: { width: 25, height: 25 },
  },
  {
    date: "January 2025 - May 2025",
    location: "Madison, WI",
    title: "Software Engineering Researcher",
    company: "The Computational Optics Group @ UW-Madison",
    logo: wiscoLogo,
    logoAlt: "UW-Madison Logo",
    logoSize: { width: 25, height: 25 },
  },
  {
    date: "August 2022 - May 2024",
    location: "Hoffman Estates, IL",
    title: "Web Developer, Board Member",
    company: "CompSci Kids",
    logo: cskLogo,
    logoAlt: "CSK Logo",
    logoSize: { width: 30, height: 30 },
  },
  {
    date: "March 2023 - March 2024",
    location: "Schaumburg, IL",
    title: "Lead Instructor",
    company: "Mathnasium",
    logo: mathnasiumLogo,
    logoAlt: "Mathnasium Logo",
    logoSize: { width: 25, height: 25 },
  },
];

const clubExperiences = [
  {
    date: "September 2025 - Present",
    location: "Madison, WI",
    title: "Software Engineer",
    company: "Cardinal Trading Group",
    logo: cardinalLogo,
    logoAlt: "Cardinal Logo",
    logoSize: { width: 45, height: 30 },
  },
  {
    date: "September 2024 - May 2025",
    location: "Madison, WI",
    title: "Software Engineer",
    company: "Data Science For Sustainable Development",
    logo: dssdLogo,
    logoAlt: "DSSD Logo",
    logoSize: { width: 30, height: 30 },
  },
  {
    date: "September 2024 - May 2025",
    location: "Madison, WI",
    title: "First Year Board Committee",
    company: "Indian Students Association",
    logo: isaLogo,
    logoAlt: "ISA Logo",
    logoSize: { width: 25, height: 25 },
  },
];

function Work() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
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

      {/* Experience Section */}
      <section className="bg-white px-4 py-12">
        <h1 className="underline decoration-red-300 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl mb-12">
          My Experience
        </h1>

        {/* Grid container for side-by-side timelines */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 gap-y-12">
          {/* Column 1: Work Experience */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Work Experience
            </h2>
            <ol className="relative border-s border-gray-300">
              {workExperiences.map((experience, index) => (
                <li key={`work-${index}`} className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-3 h-3 bg-yellow-400 rounded-full -start-1.5 ring-4 ring-white"></span>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                    {experience.date} | {experience.location}
                  </time>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {experience.title}
                  </h3>
                  <div className="flex flex-row items-center mt-1">
                    <p className="text-md mr-3 text-gray-800">
                      {experience.company}
                    </p>
                    <img
                      src={experience.logo}
                      className="rounded-full"
                      style={experience.logoSize}
                      alt={experience.logoAlt}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Column 2: Club Experience */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Club Experience
            </h2>
            <ol className="relative border-s border-gray-300">
              {clubExperiences.map((experience, index) => (
                <li key={`club-${index}`} className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-3 h-3 bg-yellow-400 rounded-full -start-1.5 ring-4 ring-white"></span>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                    {experience.date} | {experience.location}
                  </time>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {experience.title}
                  </h3>
                  <div className="flex flex-row items-center mt-1">
                    <p className="text-md mr-3 text-gray-800">
                      {experience.company}
                    </p>
                    <img
                      src={experience.logo}
                      className="rounded-full"
                      style={experience.logoSize}
                      alt={experience.logoAlt}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <a
          className="mt-12 flex justify-center text-lg font-bold text-gray-600 hover:underline hover:text-blue-500"
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