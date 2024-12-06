function Projects() {
    return (
      <section class="bg-[#36454F] dark:bg-gray-900">
        <h1 class="underline pt-9 decoration-orange-300 flex justify-center text-4xl pt-5 font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl text-black">
          Projects
        </h1>

        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <p1 class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
              <svg
                class="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Image Demo
            </p1>
            <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
              Raspberry Pi OCR Summarizer
            </h1>
            <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
              Used a micro computer with a camera module to take low quality
              images of text. Using image data from the camera, I was able to
              extract characters, and feed them into a text summary pipeline.
              This project called upon a variety of libraries, using
              technologies in computer vision, machine learning, and natural
              language processing.
            </p>
            <a
              href="https://docs.google.com/presentation/d/1np0eR8Sxbrn7FDmA1tCazrk8-DZt7iyXT6X9HTkIgq8/edit?usp=sharing"
              class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              rel="noopener"
            >
              Sample Images
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </a>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <p1 class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                <svg
                  class="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                  />
                </svg>
                Demo
              </p1>
              <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Webscrapers
              </h2>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Web developmemt business created by myself and two other
                friends. We utilized our skills in full-stack software
                development to create websites for local businesses. This is a
                venture that is ongoing, so we are continuing to look for
                clients.
              </p>
              <a
                href="https://webscrapers.org/"
                class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                rel="noopener"
              >
                webscrapers.org
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </a>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <a
                href="https://docs.google.com/presentation/d/1C55xx0iuZxkgIDcGtdVzLzj6qlmxoCyT5WYhqj00Obw/edit#slide=id.p"
                class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
                rel="noopener"
              >
                <svg
                  class="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                  />
                </svg>
                Image Demo
              </a>
              <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Impulse Workout App
              </h2>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Social fitness app designed to help users organize their
                workouts. Users are able to add each other, which grants them
                access to each other's published workouts. Utilized an API to
                fetch thousands of excerices filtered by muscle group,
                difficulty level, equipment, etc.
              </p>
              <a
                href="https://github.com/SahilKhunt08/Impulse-Workout-App"
                class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                rel="noopener"
              >
                Github
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </a>

              <a
                href="https://docs.google.com/presentation/d/1C55xx0iuZxkgIDcGtdVzLzj6qlmxoCyT5WYhqj00Obw/edit?usp=sharing"
                class="ml-3 text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                rel="noopener"
              >
                Sample Images
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </a>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
              <p1 class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                <svg
                  class="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                  />
                </svg>
                Video
              </p1>
              <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Rube Goldberg Physics Simulation
              </h2>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                Designed a fun Rube Goldberg style program that features a
                multitude of moving entities following the physics of the
                JavaScript libraries p5.js and Matter.js.
              </p>
              <a
                href="https://youtu.be/6peGWMOrVn0"
                class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                rel="noopener"
              >
                Watch Demo
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Projects