import cskLogo from "../assets/logos/compsci-kids.jpeg";
import dssdLogo from "../assets/logos/dssd.png";
import isacaLogo from "../assets/logos/isaca.jpeg";
import usbankLogo from "../assets/logos/us-bank.png";
import mathnasiumLogo from "../assets/logos/mathnasium.jpg";
import wiscoLogo from "../assets/logos/wisconsin.jpg";
import cardinalLogo from "../assets/logos/cardinal-trading-group.avif";
import isaLogo from "../assets/logos/indian-students-association.jpeg";
import fipetLogo from "../assets/logos/fipet.png";
import quotveroLogo from "../assets/logos/quotvero.svg";
import codeForGoodLogo from "../assets/logos/code-for-good.jpeg";

import pcbaDemo from "../assets/videos/pcba-demo.mp4";
import fipetDemo from "../assets/videos/fipet-demo.mp4";
import focusAIDemo from "../assets/videos/focus-ai-demo.mp4";
import appStoreBadge from "../assets/icons/app-store-badge.png";
import linkedinLogo from "../assets/icons/linkedin.png";

export const workExperiences = [
  {
    date: "Jun. 2026 - Aug. 2026",
    location: "Minneapolis, MN",
    title: "Software Engineering Intern",
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

export const clubExperiences = [
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
    title: "Leadership Board",
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

export const campusClubs = [
  {
    company: "Code for Good",
    title: "Vice President",
    logo: codeForGoodLogo,
    logoAlt: "Code for Good Logo",
  },
  clubExperiences.find((club) => club.company === "Cardinal Trading Group"),
  clubExperiences.find((club) => club.company === "Indian Students Association"),
];

export const projectCards = [
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
    video: focusAIDemo,
    title: "FocusAI",
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

// Website destinations for the featured work entries. Keep the experience
// records above as the source of truth for roles, dates, locations, and logos.
export const experienceWebsites = {
  "U.S. Bank": "https://www.usbank.com/",
  "Soil Sensing & Monitoring Lab":
    "https://soilsensingmonitoring.soilenvsci.wisc.edu/",
  ISACA: "https://www.isaca.org/",
  "Computational Optics Group": "https://www.compoptics.wisc.edu/",
};

export const technicalSkills = [
  { title: "Languages", items: ["Python", "Java", "JavaScript", "Swift"] },
  {
    title: "Web & hardware",
    items: ["React", "Tailwind CSS", "Vite", "Raspberry Pi"],
  },
  {
    title: "Computer vision",
    items: ["OpenCV", "YOLOv8", "ResNet50", "FAISS"],
  },
  { title: "Applied AI", items: ["Machine learning", "OCR", "NLP", "Gemini"] },
];

export const quotveroProject = {
  title: "Quotvero",
  description: "Better prices on\nsupplies you reorder.",
  actions: [{ label: "Visit website", href: "https://quotvero.com/" }],
};

// Two editable spotlight slots; AOI and every original project remain in the archive.
export const featuredProjects = [
  {
    project: quotveroProject,
    logo: quotveroLogo,
    category: "B2B / Agentic service",
    summary: quotveroProject.description,
  },
  {
    project: projectCards[3],
    logo: fipetLogo,
    category: "Mobile / Financial education",
    summary: "Finance. Made Easy.",
  },
];

export const interests = [
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
];
