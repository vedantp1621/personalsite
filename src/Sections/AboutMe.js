import React from "react";

function AboutMe() {
  return (
    <section className="bg-[#000000]">
      <div className="max-w-screen lg:h-[600px] md:h-[800px] sm:h-[1100px] -translate-y-20 skew-y-3 bg-[#000000] grid w-screen-xl px-4 py-20 mx-auto lg:gap-15 xl:gap-0 lg:py-20 lg:grid-cols-12">
        <div className="col-span-12 lg:col-span-6 -skew-y-3 translate-x-5">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">
            About{" "}
            <span className="underline underline-offset-3 decoration-[#d4af37]">
              Me
            </span>
          </h1>

          <div className="flex flex-col lg:flex-row lg:w-[1600px] max-w-screen">
            <div className="mt-10 md:w-[750px] w-[300px]">
              <p className="mb-3 text-gray-400 first-letter:text-9xl text-xl first-letter:font-bold first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
                Technology is something I knew I would love the day I stepped into my first 
                high school computer science class. In the early days, my passion for
                the field was fueled by its endless possibilities. Now, as
                a student at the University of Wisconsin-Madison, I am growing everyday,
                turning those dreams into reality.
              </p>

              <p className="mb-3 text-gray-400 text-xl">
                Currently, I am interested in building my experience as a Software
                Engineer. I see myself as a curious, driven team player who is not
                afraid to jump into the deep end. Software Engineering is at the forefront
                of our world's innovation, which is exactly where I want to be. During the 
                2025-26 academic year. I am pushing to find a role in research or in the industry
                as an intern. But in the meantime, I'm looking forward to developing more projects!
              </p>
              <p className="text-gray-400">
                This website is dedicated to documenting my internships and projects in CS, along
                with the things that make me who I am.
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
