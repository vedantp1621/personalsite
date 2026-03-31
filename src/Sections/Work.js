import { useState, useEffect } from "react";
import cskLogo from "./Assets/CSKLogo.jpeg";
import dssdLogo from "./Assets/DSSDLogo.png";
import isacaLogo from "./Assets/ISACALogo.jpeg";
import usbankLogo from "./Assets/usbank.png";
import mathnasiumLogo from "./Assets/mathnasiumLogo.jpg";
import wiscoLogo from "./Assets/wisconsinLogo.jpg";
import cardinalLogo from "./Assets/CardinalLogo.avif";
import isaLogo from "./Assets/ISALogo.jpeg";
import fipetLogo from "./Assets/FiPet.png";

function useImageEdgeColor(src, fallback = "rgb(15,23,42)") {
  const [color, setColor] = useState(fallback);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        const { width, height } = canvas;
        const step = 4;
        const samples = [];

        for (let x = 0; x < width; x += step) {
          samples.push(ctx.getImageData(x, 0, 1, 1).data);
          samples.push(ctx.getImageData(x, height - 1, 1, 1).data);
        }
        for (let y = 0; y < height; y += step) {
          samples.push(ctx.getImageData(0, y, 1, 1).data);
          samples.push(ctx.getImageData(width - 1, y, 1, 1).data);
        }

        let r = 0, g = 0, b = 0;
        samples.forEach((d) => { r += d[0]; g += d[1]; b += d[2]; });
        r = Math.floor(r / samples.length);
        g = Math.floor(g / samples.length);
        b = Math.floor(b / samples.length);

        setColor(`rgb(${r},${g},${b})`);
      } catch (_) {
        // canvas tainted or other error — keep fallback
      }
    };
  }, [src]);

  return color;
}

const ExperienceCard = ({ role, company, date, location, logo, logoAlt, logoColor }) => {
  const edgeColor = useImageEdgeColor(logo);
  const bgColor = logoColor ?? edgeColor;

  return (
  <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
    <div className="flex items-start gap-4">
      <div
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl border border-white/10 p-3"
        style={{ backgroundColor: bgColor }}
      >
        <img
          src={logo}
          alt={logoAlt}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="min-w-0">
        <h3 className="text-lg font-semibold text-white">{role}</h3>
        <p className="mt-1 text-sm text-slate-400">{company}</p>
      </div>
    </div>
    <div className="mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
      <span className="rounded-full bg-white/10 px-3 py-1">{date}</span>
      <span className="rounded-full bg-white/10 px-3 py-1">{location}</span>
    </div>
  </div>
  );
};

const workExperiences = [
  {
    date: "June 2026 - Aug. 2026",
    location: "Minneapolis, MN",
    title: "Software Engineering Intern (Summer 2026)",
    company: "U.S. Bank",
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
    logoAlt: "FiPet Logo",
    logoColor: "#e8956d",
  },
  {
    date: "Sep. 2024 - May 2025",
    location: "Madison, WI",
    title: "Software Engineer",
    company: "Data Science For Sustainable Development",
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
  return (
    <div className="min-h-screen">
      <section className="relative px-4 py-20">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#f6e8ea] md:text-5xl lg:text-6xl mb-4">
              My{" "}
              <span className="text-transparent bg-clip-text bg-red-300">
                Journey
              </span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              A timeline of my professional work and extracurricular involvement.
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
                    role={exp.title}
                    company={exp.company}
                    date={exp.date}
                    location={exp.location}
                    logo={exp.logo}
                    logoAlt={exp.logoAlt}
                    logoColor={exp.logoColor}
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
                    key={`club-${index}`}
                    role={exp.title}
                    company={exp.company}
                    date={exp.date}
                    location={exp.location}
                    logo={exp.logo}
                    logoAlt={exp.logoAlt}
                    logoColor={exp.logoColor}
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
