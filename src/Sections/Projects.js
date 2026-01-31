import React, { useState, useEffect } from "react";

function Projects() {
  // Initialize with the starting color of the gradient
  const [bgColor, setBgColor] = useState("rgb(140, 62, 62)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // SYNC LOGIC: Must match AboutMe.js and Work.js exactly
      const fadeStart = 1200;
      const fadeEnd = 3200;

      let globalProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
      globalProgress = Math.min(Math.max(globalProgress, 0), 1);

      // Interpolate from #8C3E3E (140, 62, 62) -> Dark Gray (35, 35, 35)
      const startRed = 140;
      const startGreen = 62;
      const startBlue = 62;

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
    <section
      // Apply the dynamic background color here
      style={{ backgroundColor: bgColor }}
      // Added transition classes for smooth syncing
      className="min-h-screen transition-colors duration-75 ease-linear"
    >
      <h1 className="underline pt-9 decoration-red-300 flex justify-center text-4xl pt-5 font-extrabold leading-none tracking-tight text-[#f6e8ea] md:text-5xl lg:text-6xl">
        Projects
      </h1>

      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        {/* Card 1: Orange */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 mb-8 transform transition-all duration-300 ease-in-out hover:scale-104 hover:shadow-xl hover:ring-2 hover:ring-red-400">
          <p className="bg-red-100 text-red-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">
            <svg
              className="w-2.5 h-2.5 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
              />
            </svg>
            Demo
          </p>
          <h1 className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-2">
            Modern AOI System for
            <a
              href="https://www.plexus.com//"
              className="text-[#d01f2d] ml-2 hover:underline inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" Plexus"}
            </a>
          </h1>
          <p className="text-lg font-normal text-gray-500 mb-6">
            Engineered during a UW-Madison College of Engineering hackathon,
            this project presents a modern Automatic Optical Inspection (AOI)
            system designed to identify faults in PCBA boards for Plexus. The
            full-stack solution begins with a Raspberry Pi and camera module
            that securely streams board images to a React frontend. A Flask
            backend then preprocesses these images with OpenCV and feeds them
            into a custom-trained YOLOv11 model for component segmentation. Each
            component snippet is base64 encoded and analyzed by Google's Gemini
            model for precise visual fault detection. To ensure reliable and
            consistent results, LangChain was implemented to manage the vision
            model's outputs, with all findings displayed on a dynamic frontend
            dashboard for a complete, end-to-end quality assurance pipeline.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            {/* Primary Button: Live Demo */}
            <a
              href="https://pi-board-defect-check.vercel.app/"
              className="text-blue-600 hover:underline font-medium text-lg inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>

            {/* Secondary Button: Slides */}
            <a
              href="https://docs.google.com/presentation/d/18VKaJLHzY4rMYWQ_fbT5b8GAPxFkK4puDeHL9O0XUfw/edit?usp=sharing"
              className="text-blue-600 hover:underline font-medium text-lg inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Presentation Slides
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 2: Teal */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 transform transition-all duration-300 ease-in-out hover:scale-104 hover:shadow-xl hover:ring-2 hover:ring-teal-400">
            <p className="bg-teal-100 text-teal-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Demo
            </p>
            <h2 className="text-gray-900 text-3xl font-extrabold mb-2">
              GazeSafe
            </h2>
            <p className="text-lg font-normal text-gray-500 mb-4">
              Leveraging a powerful computer vision stack including Python,
              PyTorch, and OpenCV, I engineered GazeSafe, an AI system that
              classifies human distraction from real-time webcam streams. The
              project features a multithreaded pipeline that intelligently
              combines a YOLOv8 model for object detection with a ResNet50-based
              CNN to analyze a user's state. This approach generates vector
              embeddings that are indexed using FAISS, enabling real-time
              similarity searches to accurately assess distraction levels from
              video inputs.
            </p>
            <a
              href="https://github.com/vedantp1621/CV_productivity"
              className="text-blue-600 hover:underline font-medium text-lg inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          {/* Card 3: Yellow */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 transform transition-all duration-300 ease-in-out hover:scale-104 hover:shadow-xl hover:ring-2 hover:ring-yellow-400">
            <p className="bg-yellow-100 text-yellow-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Image Demo
            </p>
            <h2 className="text-gray-900 text-3xl font-extrabold mb-2">
              Amazon.com Product Analyzer
            </h2>
            <p className="text-lg font-normal text-gray-500 mb-4">
              Using Python, MySQL, and Natural Language Processing (NLP)
              techniques, I developed a product analyzer that provided
              data-driven insights into sentiments toward Amazon products. By
              leveraging SQL, I processed over 250 million Amazon product
              reviews across multiple datasets. I utilized Scikit-learn and
              Pandas to clean and prepare data, training a sentiment analysis
              model to accurately classify reviews as positive, negative, or
              neutral, optimizing its performance with the Natural Language
              Toolkit (NLTK).
            </p>
            <a
              href="https://vedantp1621.github.io/personalsite/"
              className="text-blue-600 hover:underline font-medium text-lg inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo Coming Soon
            </a>
          </div>

          {/* Card 4: Pink */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 transform transition-all duration-300 ease-in-out hover:scale-104 hover:shadow-xl hover:ring-2 hover:ring-pink-400">
            <p className="bg-pink-100 text-pink-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Image Demo
            </p>
            <h2 className="text-gray-900 text-3xl font-extrabold mb-2">
              Raspberry Pi OCR Summarizer
            </h2>
            <p className="text-lg font-normal text-gray-500 mb-4">
              Used a micro computer with a camera module to take low quality
              images of text. Using image data from the camera, I was able to
              extract characters, and feed them into a text summary pipeline.
              This project called upon a variety of libraries, using
              technologies in computer vision, machine learning, and natural
              language processing.
            </p>
            <a
              href="https://docs.google.com/presentation/d/1np0eR8Sxbrn7FDmA1tCazrk8-DZt7iyXT6X9HTkIgq8/edit?usp=sharing"
              className="text-blue-600 hover:underline font-medium text-lg inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sample Images
            </a>
          </div>

          {/* Card 5: Green */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 transform transition-all duration-300 ease-in-out hover:scale-104 hover:shadow-xl hover:ring-2 hover:ring-green-400">
            <p className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Demo
            </p>
            <h2 className="text-gray-900 text-3xl font-extrabold mb-2">
              Webscrapers
            </h2>
            <p className="text-lg font-normal text-gray-500 mb-4">
              Web developmemt business created by myself and two other friends.
              We utilized our skills in full-stack software development to
              create websites for local businesses. This is a venture that is
              ongoing, so we are continuing to look for clients. We create our
              dynamic solutions leveraging React.js, Tailwind CSS, and Vite.
            </p>
            <a
              href="https://webscrapers.org/"
              className="text-blue-600 hover:underline font-medium text-lg inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              webscrapers.org
            </a>
          </div>

          {/* Card 6: Purple */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 transform transition-all duration-300 ease-in-out hover:scale-104 hover:shadow-xl hover:ring-2 hover:ring-purple-400">
            <a
              href="https://docs.google.com/presentation/d/1C55xx0iuZxkgIDcGtdVzLzj6qlmxoCyT5WYhqj00Obw/edit#slide=id.p"
              className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Image Demo
            </a>
            <h2 className="text-gray-900 text-3xl font-extrabold mb-2">
              Impulse Workout App
            </h2>
            <p className="text-lg font-normal text-gray-500 mb-4">
              Social fitness app designed to help users organize their workouts.
              Users are able to add each other, which grants them access to each
              other's published workouts. Utilized an API to fetch thousands of
              excerices filtered by muscle group, difficulty level, equipment,
              etc.
            </p>
            <a
              href="https://github.com/SahilKhunt08/Impulse-Workout-App"
              className="text-blue-600 hover:underline font-medium text-lg inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>

            <a
              href="https://docs.google.com/presentation/d/1C55xx0iuZxkgIDcGtdVzLzj6qlmxoCyT5WYhqj00Obw/edit?usp=sharing"
              className="ml-3 text-blue-600 hover:underline font-medium text-lg inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sample Images
            </a>
          </div>

          {/* Card 7: Blue */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 mb-8 transform transition-all duration-300 ease-in-out hover:scale-104 hover:shadow-xl hover:ring-2 hover:ring-blue-400">
            <p className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Video
            </p>
            <h2 className="text-gray-900 text-3xl font-extrabold mb-2">
              Rube Goldberg Physics Simulation
            </h2>
            <p className="text-lg font-normal text-gray-500 mb-6">
              Designed a fun Rube Goldberg style program that features a
              multitude of moving entities following the physics of the
              JavaScript libraries p5.js and Matter.js.
            </p>
            <a
              href="https://youtu.be/6peGWMOrVn0"
              className="text-blue-600 hover:underline font-medium text-lg inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
