import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [nav,setNav]=useState(false)
    const handleMenu=()=>{
        setNav(!nav)
    }
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <h1 className='text-4xl italic font-bold'>HR</h1>
            </div>

            {/* Menu */}

            <div >
                <ul className='hidden md:flex '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Humburger */}

            <div onClick={handleMenu} className='md:hidden z-10'>
                {
                    !nav?<FaBars></FaBars>:<FaTimes></FaTimes>
                }
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden':' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* Social Link */}

          


        </div>
    );
};

export default Navbar;