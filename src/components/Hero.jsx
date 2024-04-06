import React from 'react';
import profilepic from '../assets/protpic-removebg-preview.png';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div>
            <div className='my-7 sm-my-0 max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center items-center' id='home'>
                <div className='flex flex-col my-auto mx-auto md:mx-0'>
                    <div className='text-6xl text-gray-400'>
                        hey i am vatan malik
                    </div>
                    <p className='md:text-6xl sm:text-5xl text-2xl font-bold text-gray-200'></p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                        <TypeAnimation
                            sequence={[
                                "Full-stack Dev",
                                1000,
                                "Webdesigner",
                                1000,
                                "Creator",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <div className='flex justify-center items-center'>
                        <p className='md:text-6xl sm:text-5xl text-xl font-bold text-gray-500'>as a first year undergrad</p>
                    </div>
                    <div className='text-5xl flex justify-start gap-16 my-7 text-purple-600'>
                        <a href="https://www.linkedin.com/in/vatan-malik-08b607283/" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin />
                        </a>
                        <a href="https://github.com/vatan45" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub />
                        </a>
                        <a href="https://www.instagram.com/_vatanmalik_/" target="_blank" rel="noopener noreferrer">
                            <AiFillInstagram />
                        </a>
                    </div>
                    <div className='relative inline-flex group my-3'>

                        <a href="/" title="Download CV" role="button"
                            className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg
                            font-bold text-white transition-all duration-200 bg-primary-color rounded-xl border border-primary-color
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 "
                            tabIndex="0">Download CV </a>
                    </div>

                </div>

                <div className='my-auto ml-5'>
                    <img className='w-[800] h-[800] sm:w-[1200] sm:h-[1200] ms-auto rounded-full' src={profilepic} alt="profile pic" />
                </div>

            </div>
        </div>
    );
};

export default Hero;
