import React from "react";
import Typer from "./Typer.js";

import profileImg from "./Assets/me.jpg";


function Header() {
  return (
    <section class="bg-[#36454F] ">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-15 xl:gap-0 lg:py-20 lg:grid-cols-12">
        <div class="p-5 mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Hi. I'm <span class="text-[#80a4c0]">Vedant Patel</span>
            <span class="inline-flex items-center justify-center px-2 py-1 ml-2 text-xs font-extrabold leading-none text-red-100 bg-[#d4af37] rounded-full">
              STUDENT
            </span>
          </h1>
          <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            A{" "}
            <span className="font-bold text-red-400">
              {" "}
              University of Wisconsin-Madison{" "}
            </span>
            student interested in{" "}
            <span class="underline underline-offset-2 decoration-4 decoration-80a4c0 dark:80a4c0">
              <Typer
                className="inline-block"
                dataText={[
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
                  "Machine Learning"
                ]}
              />{" "}
            </span>
          </p>
         
         
        </div>

        <img
          class="hidden lg:flex h-auto max-w-sm ms-auto shadow-xl rounded-full"
          src={profileImg}
        ></img>
      </div>

      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-15 xl:gap-0 lg:py-20 lg:grid-cols-12"></div>
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-15 xl:gap-0 lg:py-20 lg:grid-cols-12"></div>
    </section>
  );
}

export default Header;
