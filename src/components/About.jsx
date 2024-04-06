import React from 'react';
import aboutImg from "../assets/about4.jpeg";

const About = () => {
    return (
        <div className='py-10 text-white bg-[#232325] h-auto' id='about'>
            <div className='flex flex-col sm:flex-row items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
                <div className='w-full sm:w-1/2 flex justify-center'>
                    <div className='mx-auto w-[600px]'>
                        <img
                            src={aboutImg}
                            alt=""
                            className='object-cover bg-gray-700 rounded-xl h-[300px] filter grayscale brightness-50'
                        />
                    </div>
                </div>
                <div className='w-full sm:w-1/2'>
                    <div className='text-gray-300'>
                        <h3 className='text-4xl font-semibold mb-5'>About <span className="primary-text">Me</span></h3>
                        <p className='text-justify leading-7'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque est incidunt aperiam mollitia fugiat ab ducimus dolor! Repellendus libero, eius commodi quasi cupiditate corrupti optio odit, quae tenetur delectus eum!
                        </p>
                    </div>
                    <div className='flex mt-10 items-center gap-7'>
                        <div className='bg-[#333333]/40 p-5 rounded-lg'>
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>5
                                <span className='primary-text'>+</span>
                            </h3>
                            <p><span className='md:text-base text-xs'>Projects</span></p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default About;
