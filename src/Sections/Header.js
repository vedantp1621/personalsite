import React from "react";

function Header() {
  return (
    <section class="bg-[#36454F] ">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-15 xl:gap-0 lg:py-20 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Hi. Im <span class="text-[#80a4c0]">Vedant Patel</span><span class="inline-flex items-center justify-center px-2 py-1 ml-2 text-xs font-extrabold leading-none text-red-100 bg-[#d4af37] rounded-full">STUDENT</span></h1>
            <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">A high school developer interested in all things <span class="underline underline-offset-2 decoration-4 decoration-80a4c0 dark:80a4c0">CS</span></p>
            <a class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7 ml-1 -mr-1 feather feather-chevrons-down"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg hover:bg-[#80a4c0] focus:ring-4 text-white border-white focus:ring-gray-800">
                Contact Me
            </a> 
        </div>
               
    </div>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-15 xl:gap-0 lg:py-20 lg:grid-cols-12">
    </div>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-15 xl:gap-0 lg:py-20 lg:grid-cols-12">
    </div>


</section>
  );
}

export default Header;
