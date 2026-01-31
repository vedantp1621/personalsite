import React, { useState, useEffect, useRef } from "react";
import resume from "./Assets/Patel_Vedant_Resume.pdf";
import cskLogo from "./Assets/CSKLogo.jpeg";
import dssdLogo from "./Assets/DSSDLogo.png";
import isacaLogo from "./Assets/ISACALogo.jpeg";
import usbankLogo from "./Assets/usbank.png";
import mathnasiumLogo from "./Assets/mathnasiumLogo.jpg";
import wiscoLogo from "./Assets/wisconsinLogo.jpg";
import cardinalLogo from "./Assets/CardinalLogo.avif";
import isaLogo from "./Assets/ISALogo.jpeg";
import fipetLogo from "./Assets/FiPet.png";

const ExperienceCard = ({ role, company, date, location, logo, logoAlt }) => (
  <div className="group relative flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-md">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 p-1 overflow-hidden">
      <img
        src={logo}
        alt={logoAlt}
        className="h-full w-full object-contain mix-blend-multiply"
      />
    </div>
    <div className="flex flex-col flex-grow">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {role}
        </h3>
        <span className="mt-1 sm:mt-0 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
          {date}
        </span>
      </div>
      <p className="text-base font-medium text-gray-700 mb-2">{company}</p>
      <div className="flex items-center gap-1 text-sm text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4 text-gray-400"
        >
          <path
            fillRule="evenodd"
            d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.006.003.002.001.003.001a.79.79 0 00.01.003zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        {location}
      </div>
    </div>
  </div>
);

const workExperiences = [
  {
    date: "June 2026 - Aug. 2026",
    location: "Minneapolis, MN",
    title: "Software Engineering Intern (Summer 2026)",
    company: "US Bank",
    logo: usbankLogo,
    logoAlt: "US Bank Logo",
  },
  {
    date: "Sep. 2025 - Dec. 2025",
    location: "Madison, WI",
    title: "Machine Learning Researcher",
    company: "Soil Sensing & Monitoring Lab",
    logo: wiscoLogo,
    logoAlt: "UW-Madison Logo",
  },
  {
    date: "Jun. 2025 - Aug. 2025",
    location: "Schaumburg, IL",
    title: "Software Engineering Intern",
    company: "ISACA",
    logo: isacaLogo,
    logoAlt: "Isaca Logo",
  },
  {
    date: "Jan. 2025 - May 2025",
    location: "Madison, WI",
    title: "Software Engineering Researcher",
    company: "Computational Optics Group",
    logo: wiscoLogo,
    logoAlt: "UW-Madison Logo",
  },
  {
    date: "Mar. 2023 - Mar. 2024",
    location: "Schaumburg, IL",
    title: "Lead Instructor",
    company: "Mathnasium",
    logo: mathnasiumLogo,
    logoAlt: "Mathnasium Logo",
  },
];

const clubExperiences = [
  {
    date: "Sep. 2025 - Present",
    location: "Madison, WI",
    title: "Software Engineer",
    company: "Cardinal Trading Group",
    logo: cardinalLogo,
    logoAlt: "Cardinal Logo",
  },
  {
    date: "Jun. 2025 - Present",
    location: "San Francisco, CA",
    title: "Head of Application Development",
    company: "FiPet",
    logo: fipetLogo,
    logoAlt: "Cardinal Logo",
  },
  {
    date: "Sep. 2024 - May 2025",
    location: "Madison, WI",
    title: "Software Engineer",
    company: "Data Science For Sustainable Dev",
    logo: dssdLogo,
    logoAlt: "DSSD Logo",
  },
  {
    date: "Sep. 2024 - May 2025",
    location: "Madison, WI",
    title: "First Year Board Committee",
    company: "Indian Students Association",
    logo: isaLogo,
    logoAlt: "ISA Logo",
  },
  {
    date: "Aug. 2022 - May 2024",
    location: "Hoffman Estates, IL",
    title: "Web Developer, Board Member",
    company: "CompSci Kids",
    logo: cskLogo,
    logoAlt: "CSK Logo",
  },
];

function Work() {
  const [bgColor, setBgColor] = useState("rgb(140, 62, 62)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // UPDATED: Syncs with AboutMe.js
      const fadeStart = 1200;
      const fadeEnd = 3200;

      let globalProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
      globalProgress = Math.min(Math.max(globalProgress, 0), 1);

      // Start: #8C3E3E (140, 62, 62)
      const startRed = 140;
      const startGreen = 62;
      const startBlue = 62;

      // UPDATED End: Dark Gray (35, 35, 35)
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
    <div
      style={{ backgroundColor: bgColor }}
      className="min-h-screen transition-colors duration-75 ease-linear"
    >
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#f6e8ea] md:text-5xl lg:text-6xl mb-4">
              My{" "}
              <span className="text-transparent bg-clip-text bg-red-300">
                Journey
              </span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              A timeline of my professional work and extracurricular leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6 px-2">
                <div className="p-2 bg-red-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Work Experience
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                {workExperiences.map((exp, index) => (
                  <ExperienceCard
                    key={`work-${index}`}
                    role={exp.title} // Map 'title' from your data to 'role' prop
                    company={exp.company}
                    date={exp.date}
                    location={exp.location}
                    logo={exp.logo}
                    logoAlt={exp.logoAlt}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6 px-2">
                <div className="p-2 bg-red-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Leadership & Clubs
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                {clubExperiences.map((exp, index) => (
                  <ExperienceCard
                    key={`work-${index}`}
                    role={exp.title} // Map 'title' from your data to 'role' prop
                    company={exp.company}
                    date={exp.date}
                    location={exp.location}
                    logo={exp.logo}
                    logoAlt={exp.logoAlt}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
