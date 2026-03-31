import ModernCard from "../components/ModernCard";
import pcbaDemo from "./Assets/PCBA_demo.mp4";
import fipetDemo from "./Assets/FiPet_Demo.MP4";
import appStoreBadge from "./Assets/App_Store_(iOS).svg.png";
import linkedinLogo from "./Assets/linkedin-logo-3.png";

const projectCards = [
  {
    tag: "Demo",
    tagColor: "bg-red-100 text-red-800",
    video: pcbaDemo,
    title: "Modern AOI System for Plexus",
    description:
      "Built during a UW-Madison College of Engineering hackathon, this Automatic Optical Inspection system uses Raspberry Pi image capture, OpenCV preprocessing, YOLO inference, and Gemini-powered analysis for reliable defect detection.",
    actions: [
      {
        label: "Live Deployment",
        href: "https://pi-board-defect-check.vercel.app/",
      },
      {
        label: "Presentation",
        href: "https://docs.google.com/presentation/d/18VKaJLHzY4rMYWQ_fbT5b8GAPxFkK4puDeHL9O0XUfw/edit?usp=sharing",
      },
    ],
  },
  {
    tag: "Demo",
    tagColor: "bg-teal-100 text-teal-800",
    title: "GazeSafe",
    description:
      "A computer vision system that detects distraction in webcam streams using YOLOv8 and ResNet50, real-time embeddings, and FAISS similarity search for accurate distraction assessment.",
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/vedantp1621/CV_productivity",
      },
    ],
  },
  {
    tag: "Image Demo",
    tagColor: "bg-pink-100 text-pink-800",
    title: "Raspberry Pi OCR Summarizer",
    description:
      "A portable image capture pipeline that extracts text from low-quality camera images and summarizes it through OCR and an NLP workflow.",
    actions: [
      {
        label: "Sample Images",
        href: "https://docs.google.com/presentation/d/1np0eR8Sxbrn7FDmA1tCazrk8-DZt7iyXT6X9HTkIgq8/edit?usp=sharing",
      },
    ],
  },
  {
    tag: "Demo",
    tagColor: "bg-orange-100 text-orange-800",
    title: "FiPet",
    description:
      "Scaling a cross-platform mobile app focused on gamified, AI-powered financial education for Gen Z. Before launch, we grew a 200+ user waitlist, and now have 70+ concurrent users. The app continues to grow, and our founding team has almost quadrupled in size to about 25 people, with marketing, graphic design, and software engineering teams working in the background.",
    actions: [
      { label: "fipet.dev", href: "https://www.fipet.dev/" },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/fipet/id6751675558",
        icon: appStoreBadge,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/fipet/",
        icon: linkedinLogo,
      },
    ],
    video: fipetDemo,
    layout: "side",
  },
  {
    tag: "Demo",
    tagColor: "bg-green-100 text-green-800",
    title: "Webscrapers",
    description:
      "A full-stack web development venture building custom websites for local businesses with React, Tailwind CSS, and Vite.",
    actions: [{ label: "webscrapers.org", href: "https://webscrapers.org/" }],
  },
  {
    tag: "Image Demo",
    tagColor: "bg-purple-100 text-purple-800",
    title: "Impulse Workout App",
    description:
      "A social fitness app that connects users, shares workouts, and filters exercise routines by muscle group, difficulty, and equipment.",
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/SahilKhunt08/Impulse-Workout-App",
      },
      {
        label: "Presentation",
        href: "https://docs.google.com/presentation/d/1C55xx0iuZxkgIDcGtdVzLzj6qlmxoCyT5WYhqj00Obw/edit?usp=sharing",
      },
    ],
  },
  {
    tag: "Video",
    tagColor: "bg-blue-100 text-blue-800",
    title: "Rube Goldberg Physics Simulation",
    description:
      "A playful physics simulation built with p5.js and Matter.js that animates a chain reaction of objects in a Rube Goldberg-style system.",
    actions: [{ label: "Watch Demo", href: "https://youtu.be/6peGWMOrVn0" }],
  },
];

function ProjectsModern() {
  return (
    <section className="relative min-h-screen py-16">
      <div className="relative z-10 mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-200">
            Highlighted work
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            A modern showcase of recent systems, AI demos, and full-stack
            engineering work.
          </p>
        </div>

        <div className="columns-1 lg:columns-2 gap-8">
          {projectCards.map((project, index) => (
            <ModernCard
              key={index}
              tag={project.tag}
              tagColor={project.tagColor}
              title={project.title}
              description={project.description}
              actions={project.actions}
              video={project.video}
              layout={project.layout}
              columnBreak={project.columnBreak}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsModern;
