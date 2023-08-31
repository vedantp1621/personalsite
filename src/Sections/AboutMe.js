//Soccer
//CS
//Highschool
//State
//

import React from "react";

function AboutMe() {
    return (
        <section class="bg-[#000000]">
            <div class="max-w-screen lg:h-[600px] md:h-[600px] sm:h-[1000px] -translate-y-20 skew-y-3 bg-[#000000] grid w-screen-xl px-4 py-20 mx-auto lg:gap-15 xl:gap-0 lg:py-20 lg:grid-cols-12">
                <div class="-skew-y-3 translate-x-10">
                    <h1 class="mb-4 w-[1000px] text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">About <span class="underline underline-offset-3 decoration-8 decoration-[#d4af37]">Me</span></h1>
                    <div class="flex flex-row w-[1300px]">
                        <div class="mt-10 lg:w-[650px] md:w-[400px] sm:w-[200px]">
                            <p class="mb-3 text-gray-400 first-letter:text-9xl text-xl first-letter:font-bold first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">Ever since I stepped foot in my first high school computer science class, I have been hooked on the subject. Since then, my passion for the field has been fueled by its endless possibilities.</p>
                            <p class="text-gray-400">This website is dedicated to documenting my projects in CS along with the things that make me who I am.</p> 
                        </div>
                        
                        <div class="lg:ml-[150px] md:ml-[100px] sm:ml-[50px] card w-[500px] h-[250px] bg-base-100 shadow-xl">
                            
                            <div class="carousel rounded-box w-[500px] shadow-sm shadow-[#d4af37]" >
                            
                            <div class="carousel-item">
                                <div class="card-body">
                                    <h2 class="text-3xl card-title">Student-Athlete</h2>
                                        <p class="w-[300px]">I have played soccer throughout my life, including my time in highschool. I'm a massive soccer geek!</p>
                                    <div class="card-actions justify-end">
                                        <span class="inline-flex items-center justify-center px-4 py-2 ml-2 mt-15 text-s font-extrabold leading-none text-red-100 bg-[#02CE00] rounded-full">Soccer</span>
                                    </div>

                                </div>
                            </div> 

                            <div class="carousel-item">
                                <div class="card-body">
                                    <h2 class="text-3xl card-title">Video Game Fanatic</h2>
                                    <p class="w-[300px]">I love playing games like Rocket League and Battlefield with my friends.</p>
                                    <div class="card-actions justify-end">
                                        <span class="inline-flex items-center justify-center px-4 py-2 ml-2 mt-15.5 text-s font-extrabold leading-none text-red-100 bg-[#CE1000] rounded-full">Video Games</span>
                                    </div>
                                </div>
                            </div> 

                            <div class="carousel-item">
                                <div class="card-body">
                                    <h2 class="text-3xl card-title"> Math Tutoring</h2>
                                    <p class="w-[300px]">I am currently working as a math tutor at Mathnaisum. I have experience teaching kids with ages ranging from 6-13.</p>
                                    <div class="card-actions justify-end">
                                    <span class="inline-flex items-center justify-center px-4 py-2 ml-2 mt-8 text-s font-extrabold leading-none text-red-100 bg-[#00CEA5] rounded-full">Work</span>
                                    </div>
                                </div>
                            </div> 
                            <div class="carousel-item">
                                <div class="card-body">
                                    <h2 class="text-3xl card-title">CS Tutoring</h2>
                                    <p class="w-[300px]">I am working with a good friend to provide opportunities for anyone to learn React through our free tutoring service.</p>
                                    <div class="card-actions justify-end">
                                    <span class="inline-flex items-center justify-center px-4 py-2 ml-2 mt-2 text-s font-extrabold leading-none text-red-100 bg-[#FFA600] rounded-full">Tutoring</span>
                                    </div>
                                </div>
                            </div> 
                            <div class="carousel-item">
                                <div class="card-body">
                                    <h2 class="text-3xl card-title">Involvement</h2>
                                    <p class="w-[300px]">I am a member of a multitude of clubs at my school. Ranging from CS tutoring to community support, I try to be active within my school community.</p>
                                    <div class="card-actions justify-end">
                                    <span class="inline-flex items-center justify-center px-4 py-2 ml-2 mt-2 text-s font-extrabold leading-none text-red-100 bg-[#CE006D] rounded-full">Clubs</span>
                                    </div>
                                </div>
                            </div> 

                            <div class="carousel-item">
                                <div class="card-body">
                                    <h2 class="text-3xl card-title">Webscrapers</h2>
                                    <p class="w-[300px]">I am working with a group of like minded developers to create websites for local businesses.</p>
                                    <div class="card-actions justify-end">
                                    <span class="inline-flex items-center justify-center px-4 py-2 ml-2 mt-2 text-s font-extrabold leading-none text-red-100 bg-[#7C00FF] rounded-full">Web Developement</span>
                                    </div>
                                </div>
                            </div> 

                           
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default AboutMe;