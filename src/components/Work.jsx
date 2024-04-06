import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'
import proj5 from '../assets/proj5.png'
import proj6 from '../assets/proj6.png'

const Work = () => {
    return (
        <div class="py-6 max-w-[1200px] mx-auto" id='work'>
            <div class="mx-auto px-4 md:px-8">
                <div class="mb-4 flex items-center justify-between gap-8">
                    <div class="flex flex-col gap-4">
                        <h2 class="text-2xl lg:text-3xl text-white">
                            My <span>Projects</span>
                        </h2>
                        <p class="text-gray-500">
                            These are my latest Projects
                        </p>
                    </div>

                </div>
                <div class="grid  gap-4 grid-cols-2 sm:grid-cols-3 md:gap-3 xl:gap-8">
                    <a href='/' class="group h-48 overflow-hidden rounded-lg shadow-lg  md:h-80">
                        <img src={proj1} loading="lazy" alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    </a>
                    <a href='/' class="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
                        <img src={proj4} loading="lazy" alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    </a>

                    <a href='/' class="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
                        <img src={proj3} loading="lazy" alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    </a>

                    <a href='/' class="group h-48 overflow-hidden rounded-lg shadow-lg  md:h-80">
                        <img src={proj2} loading="lazy" alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    </a>
                    <a href='/' class="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
                        <img src={proj5} loading="lazy" alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    </a>
                    <a href='/' class="group h-48 overflow-hidden rounded-lg shadow-lg  md:h-80">
                        <img src={proj6} loading="lazy" alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    </a>


                </div>
            </div>

        </div>
    )
}

export default Work
