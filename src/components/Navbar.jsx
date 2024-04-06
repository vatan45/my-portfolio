import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-1 relative z-10'> {/* Added relative and z-10 */}
            <h1 className='text-3xl font-bold primary-color ml-4'>Vatan Malik</h1>
            <div className='hidden md:flex '>
                <ul className="flex">
                    <li className='p-5'><a href='#home'>Home</a></li>
                    <li className='p-5'><a href='#about'>About</a></li>
                    <li className='p-5'><a href='#work'>Work</a></li>
                    <li className='p-5'><a href='#experience'>Experience</a></li>
                    <li className='p-5'><a href='#contact'>Contact</a></li>
                </ul>
            </div>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={`fixed left-0 top-0 h-full bg-gray-900 ${nav ? 'w-60' : 'w-0'} transition-all duration-500 overflow-hidden z-20`}> {/* Added z-20 */}
                <h1 className='text-3xl font-bold primary-color ml-4'>Vatan Malik</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2'><a href='#home'>Home</a></li>
                    <li className='p-2'><a href='#about'>About</a></li>
                    <li className='p-2'><a href='#work'>Work</a></li>
                    <li className='p-2'><a href='#experience'>Experience</a></li>
                    <li className='p-2'><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
