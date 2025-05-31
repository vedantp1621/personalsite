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

          <div className="flex flex-col lg:flex-row lg:w-[1300px] max-w-screen">
            <div className="mt-10 md:w-[650px] w-[300px]">
              <p className="mb-3 text-gray-400 first-letter:text-9xl text-xl first-letter:font-bold first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
                Ever since I stepped foot in my first high school computer
                science className, I have been hooked. Since then, my passion for
                the field has been fueled by its endless possibilities. Now, as
                a student at the University of Wisconsin-Madison, I am taking
                steps everyday to turn my passion into purpose.
              </p>

              <p className="mb-3 text-gray-400 text-xl">
                Currently, I am interested in expanding my knowledge in machine
                learning. I believe that this side of computing is a glimpse
                into the future, one where many of our everyday devices will
                utilize models. During the remainder of my academic year, I am
                pushing to find a role in research or in the industry as an
                intern. In the meantime, I'm looking forward to building more
                projects!
              </p>
              <p className="text-gray-400">
                This website is dedicated to documenting my projects in CS along
                with the things that make me who I am.
              </p>
            </div>

            <div className="hidden lg:flex card lg:ml-[150px] md:ml-[100px] sm:ml-[50px] w-[500px] h-[280px] bg-base-100 shadow-xl">
              <div className="carousel rounded-box w-[500px] shadow-sm shadow-[#d4af37]">
                <div id="item1" className="carousel-item">
                  <div className="card-body w-[500px]">
                    <h2 className="text-3xl card-title">Soccer</h2>
                    <p className="">
                      I've played soccer for{" "}
                      <span className="font-bold text-green-500">12</span> years
                      of my life, including my time in high school. I love to
                      spend my weekends keeping up with the
                      <span className="font-bold text-green-500">
                        {" "}
                        Premier League
                      </span>
                      . I don't plan on hanging up the boots anytime soon!
                    </p>
                    <div className="card-actions justify-end">
                      <span className="inline-flex items-center justify-center px-4 py-2 ml-2 mt-15 text-s font-extrabold leading-none text-red-100 bg-green-500 rounded-full">
                        Hobbies
                      </span>
                    </div>
                  </div>
                </div>

                <div id="item2" className="carousel-item">
                  <div className="card-body w-[500px]">
                    <h2 className="text-3xl card-title">Motorsport</h2>
                    <p className="">
                      I love watching the{" "}
                      <span className="font-bold text-sky-600"> WEC</span>,
                      especially the{" "}
                      <span className="font-bold text-sky-600"> LMGT3</span>{" "}
                      className. Seeing my dream cars race around a track for hours
                      - what more can I ask for! When the{" "}
                      <span className="font-bold text-sky-600"> WEC</span> isn't
                      racing, I spend my weekends watching{" "}
                      <span className="font-bold text-sky-600"> F1</span>.
                    </p>
                    <div className="card-actions justify-end">
                      <span className="inline-flex items-center justify-center px-4 py-2 ml-2 mt-2 text-s font-extrabold leading-none text-red-100 bg-sky-600 rounded-full">
                        Hobbies
                      </span>
                    </div>
                  </div>
                </div>

                <div id="item3" className="carousel-item">
                  <div className="card-body w-[500px]">
                    <h2 className="text-3xl card-title"> Tutoring</h2>
                    <p className="">
                      I love spreading knowledge. I have experience in teaching
                      math subjects ranging from{" "}
                      <span className="font-bold text-rose-600 ">algebra </span>
                      to{" "}
                      <span className="font-bold text-rose-600 ">calculus</span>
                      , and CS topics like{" "}
                      <span className="font-bold text-rose-600 ">OOP</span> and{" "}
                      <span className="font-bold text-rose-600 ">
                        data structures
                      </span>
                      .
                    </p>
                    <div className="card-actions justify-end">
                      <span className="inline-flex items-center justify-center px-4 py-2 ml-2 mt-8 text-s font-extrabold leading-none text-red-100 bg-rose-600 rounded-full">
                        Work
                      </span>
                    </div>
                  </div>
                </div>

                <div id="item4" className="carousel-item">
                  <div className="card-body w-[500px]">
                    <h2 className="text-3xl card-title">Cultural Involvement</h2>
                    <p className="">
                      I am a
                      <span className="font-bold text-indigo-500">
                        {" "}
                        first-year board member{" "}
                      </span>
                      for UW-Madison's Indian Student Association, where I help
                      plan university-wide events. These events help build a
                      strong community supported by a common passion for{" "}
                      <span className="font-bold text-indigo-500">
                        {" "}
                        Indian Culture{" "}
                      </span>
                    </p>
                    <div className="card-actions justify-end">
                      <span className="inline-flex items-center justify-center px-4 py-2 ml-2 mt-2 text-s font-extrabold leading-none text-red-100 bg-indigo-500 rounded-full">
                        Clubs
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">
                  1
                </a>
                <a href="#item2" className="btn btn-xs">
                  2
                </a>
                <a href="#item3" className="btn btn-xs">
                  3
                </a>
                <a href="#item4" className="btn btn-xs">
                  4
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
